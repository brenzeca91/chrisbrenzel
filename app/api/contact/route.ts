import { NextRequest, NextResponse } from 'next/server'
import { and, eq, gte } from 'drizzle-orm'
import { db } from '@/lib/db'
import { leads, type Lead } from '@/lib/db/schema'
import { sendLeadEmail, type LeadEmailInput } from '@/lib/leads/email'
import { contactSchema, normalizeTouch, type ContactInput } from '@/lib/leads/validation'

export const runtime = 'nodejs'

const DUPLICATE_WINDOW_MS = 10 * 60 * 1000

async function saveLead(data: ContactInput): Promise<{ lead: Lead; duplicate: boolean }> {
  // Same person re-sending the same message (page reload, double submit from a
  // second tab) is treated as the same inquiry.
  const [recent] = await db
    .select()
    .from(leads)
    .where(
      and(
        eq(leads.email, data.email),
        eq(leads.message, data.message),
        gte(leads.createdAt, new Date(Date.now() - DUPLICATE_WINDOW_MS)),
      ),
    )
    .limit(1)
  if (recent) return { lead: recent, duplicate: true }

  const first = normalizeTouch(data.attribution?.first)
  const last = normalizeTouch(data.attribution?.last)

  const [inserted] = await db
    .insert(leads)
    .values({
      submissionId: data.submissionId,
      formSource: data.source,
      name: data.name,
      email: data.email,
      organization: data.organization,
      inquiryType: data.inquiryType,
      preferredDate: data.date,
      location: data.location,
      guestCount: data.guestCount,
      message: data.message,
      firstSource: first.source,
      firstMedium: first.medium,
      firstCampaign: first.campaign,
      firstContent: first.content,
      firstTerm: first.term,
      firstTouchAt: first.touchAt,
      firstLandingPath: first.landingPath,
      lastSource: last.source,
      lastMedium: last.medium,
      lastCampaign: last.campaign,
      lastContent: last.content,
      lastTerm: last.term,
      lastTouchAt: last.touchAt,
      lastLandingPath: last.landingPath,
    })
    .onConflictDoNothing({ target: leads.submissionId })
    .returning()
  if (inserted) return { lead: inserted, duplicate: false }

  const [existing] = await db
    .select()
    .from(leads)
    .where(eq(leads.submissionId, data.submissionId))
    .limit(1)
  if (!existing) throw new Error('Lead not found after submission conflict')
  return { lead: existing, duplicate: true }
}

function emailInputFromLead(lead: Lead): LeadEmailInput {
  return {
    source: lead.formSource,
    name: lead.name,
    email: lead.email,
    organization: lead.organization,
    inquiryType: lead.inquiryType,
    preferredDate: lead.preferredDate,
    location: lead.location,
    guestCount: lead.guestCount,
    message: lead.message,
    trafficSource: lead.lastSource ?? lead.firstSource,
    trafficMedium: lead.lastMedium ?? lead.firstMedium,
    trafficCampaign: lead.lastCampaign ?? lead.firstCampaign,
    landingPath: lead.lastLandingPath ?? lead.firstLandingPath,
    savedToDashboard: true,
  }
}

function emailInputFromData(data: ContactInput): LeadEmailInput {
  const touch = normalizeTouch(data.attribution?.last ?? data.attribution?.first)
  return {
    source: data.source,
    name: data.name,
    email: data.email,
    organization: data.organization,
    inquiryType: data.inquiryType,
    preferredDate: data.date,
    location: data.location,
    guestCount: data.guestCount,
    message: data.message,
    trafficSource: touch.source,
    trafficMedium: touch.medium,
    trafficCampaign: touch.campaign,
    landingPath: touch.landingPath,
    savedToDashboard: false,
  }
}

export async function POST(req: NextRequest) {
  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 })
  }
  const data = parsed.data

  // Real visitors never see or fill the hidden field. Answer like a success so
  // bots get no signal, but store nothing and report no lead.
  if (data.website) {
    return NextResponse.json({ success: true, leadId: null })
  }

  let saved: { lead: Lead; duplicate: boolean }
  try {
    saved = await saveLead(data)
  } catch (err) {
    console.error('[contact] Failed to save lead:', err)
    // Keep the original behaviour as a fallback: if the database is down the
    // inquiry must still reach the inbox.
    const sent = await sendLeadEmail(emailInputFromData(data))
    if (!sent.ok) {
      console.error('[contact] Fallback email failed:', sent.error)
      return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
    return NextResponse.json({ success: true, leadId: null })
  }

  const { lead, duplicate } = saved

  // A duplicate only re-sends when the first attempt never reached the inbox.
  if (!lead.notifiedAt) {
    const sent = await sendLeadEmail(emailInputFromLead(lead))
    try {
      await db
        .update(leads)
        .set(
          sent.ok
            ? { notifiedAt: new Date(), notificationError: null }
            : { notificationError: sent.error.slice(0, 500) },
        )
        .where(eq(leads.id, lead.id))
    } catch (err) {
      console.error('[contact] Failed to record notification result:', err)
    }
    if (!sent.ok) {
      console.error('[contact] Notification email failed:', sent.error)
    }
  }

  return NextResponse.json({ success: true, leadId: lead.id, duplicate })
}
