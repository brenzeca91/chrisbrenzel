import { and, desc, eq, gte, ne, sql, type AnyColumn, type SQL } from 'drizzle-orm'
import { db } from '@/lib/db'
import { leads } from '@/lib/db/schema'
import { FORM_SOURCES, LEAD_STATUSES } from '@/lib/leads/constants'

export type LeadFilters = {
  status: string
  form: string
  range: string
  campaign: string
}

const RANGES = ['7', '30', '90', 'all']

const first = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value

export function parseFilters(
  params: Record<string, string | string[] | undefined>,
): LeadFilters {
  const status = first(params.status)
  const form = first(params.form)
  const range = first(params.range)
  const campaign = first(params.campaign)
  return {
    status: LEAD_STATUSES.includes(status as never) ? (status as string) : 'all',
    form: FORM_SOURCES.includes(form as never) ? (form as string) : 'all',
    range: range && RANGES.includes(range) ? range : '30',
    campaign: (campaign ?? '').slice(0, 200),
  }
}

// Attribution is credited to the most recent tagged visit; the first visit
// only fills in when no later one exists.
function attributed(last: AnyColumn, firstTouch: AnyColumn, fallback: string) {
  return sql<string>`coalesce(nullif(case when ${leads.lastTouchAt} is not null then ${last} else ${firstTouch} end, ''), ${sql.raw(`'${fallback}'`)})`
}

export const sourceExpr = attributed(leads.lastSource, leads.firstSource, '(direct / none)')
export const mediumExpr = attributed(leads.lastMedium, leads.firstMedium, '(none)')
export const campaignExpr = attributed(leads.lastCampaign, leads.firstCampaign, '(none)')

function conditions(filters: LeadFilters, includeStatus: boolean): SQL[] {
  const conds: SQL[] = []
  if (includeStatus && filters.status !== 'all') {
    conds.push(eq(leads.status, filters.status))
  } else {
    conds.push(ne(leads.status, 'spam_test'))
  }
  if (filters.range !== 'all') {
    conds.push(gte(leads.createdAt, new Date(Date.now() - Number(filters.range) * 86_400_000)))
  }
  if (filters.form !== 'all') conds.push(eq(leads.formSource, filters.form))
  if (filters.campaign) conds.push(sql`${campaignExpr} = ${filters.campaign}`)
  return conds
}

const bookedFilter = sql`${leads.status} in ('booked', 'completed')`

export async function getSummary(filters: LeadFilters) {
  const [row] = await db
    .select({
      inquiries: sql<number>`count(*)::int`,
      bookings: sql<number>`(count(*) filter (where ${bookedFilter}))::int`,
      bookingValue: sql<string>`coalesce(sum(${leads.bookingValue}) filter (where ${bookedFilter}), 0)`,
      revenue: sql<string>`coalesce(sum(${leads.revenueReceived}), 0)`,
    })
    .from(leads)
    .where(and(...conditions(filters, false)))
  return {
    inquiries: row.inquiries,
    bookings: row.bookings,
    bookingValue: Number(row.bookingValue),
    revenue: Number(row.revenue),
  }
}

export async function getCampaignBreakdown(filters: LeadFilters) {
  const rows = await db
    .select({
      source: sourceExpr,
      medium: mediumExpr,
      campaign: campaignExpr,
      inquiries: sql<number>`count(*)::int`,
      bookings: sql<number>`(count(*) filter (where ${bookedFilter}))::int`,
      bookingValue: sql<string>`coalesce(sum(${leads.bookingValue}) filter (where ${bookedFilter}), 0)`,
      revenue: sql<string>`coalesce(sum(${leads.revenueReceived}), 0)`,
    })
    .from(leads)
    .where(and(...conditions(filters, false)))
    .groupBy(sourceExpr, mediumExpr, campaignExpr)
    .orderBy(desc(sql`count(*)`))
  return rows.map((row) => ({
    ...row,
    bookingValue: Number(row.bookingValue),
    revenue: Number(row.revenue),
  }))
}

export async function getCampaignOptions() {
  const rows = await db
    .selectDistinct({ campaign: campaignExpr })
    .from(leads)
    .where(ne(leads.status, 'spam_test'))
    .orderBy(campaignExpr)
  return rows.map((row) => row.campaign)
}

export async function getLeadList(filters: LeadFilters, limit = 200) {
  return db
    .select({
      id: leads.id,
      createdAt: leads.createdAt,
      name: leads.name,
      email: leads.email,
      formSource: leads.formSource,
      inquiryType: leads.inquiryType,
      status: leads.status,
      bookingValue: leads.bookingValue,
      notifiedAt: leads.notifiedAt,
      source: sourceExpr,
      medium: mediumExpr,
      campaign: campaignExpr,
    })
    .from(leads)
    .where(and(...conditions(filters, true)))
    .orderBy(desc(leads.createdAt))
    .limit(limit)
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export async function getLead(id: string) {
  if (!UUID.test(id)) return null
  const [lead] = await db.select().from(leads).where(eq(leads.id, id)).limit(1)
  return lead ?? null
}
