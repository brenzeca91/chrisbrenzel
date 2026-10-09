'use server'

import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { db } from '@/lib/db'
import { leads } from '@/lib/db/schema'
import { getAdminSession } from '@/lib/admin'
import { LEAD_STATUSES } from '@/lib/leads/constants'

const MAX_AMOUNT = 10_000_000

function parseMoney(value: string | undefined): string | null | 'invalid' {
  const trimmed = (value ?? '').replace(/[$,\s]/g, '')
  if (!trimmed) return null
  const number = Number(trimmed)
  if (!Number.isFinite(number) || number < 0 || number > MAX_AMOUNT) return 'invalid'
  return number.toFixed(2)
}

function parseDate(value: string | undefined): string | null | 'invalid' {
  const trimmed = (value ?? '').trim()
  if (!trimmed) return null
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return 'invalid'
  return Number.isNaN(Date.parse(trimmed)) ? 'invalid' : trimmed
}

const schema = z.object({
  id: z.uuid(),
  status: z.enum(LEAD_STATUSES),
  bookingDate: z.string().optional(),
  bookingValue: z.string().max(40).optional(),
  revenueReceived: z.string().max(40).optional(),
  notes: z.string().max(5000).optional(),
})

export async function updateLead(formData: FormData) {
  const session = await getAdminSession()
  if (!session) redirect('/admin/login')

  const parsed = schema.safeParse({
    id: formData.get('id'),
    status: formData.get('status'),
    bookingDate: formData.get('bookingDate') ?? undefined,
    bookingValue: formData.get('bookingValue') ?? undefined,
    revenueReceived: formData.get('revenueReceived') ?? undefined,
    notes: formData.get('notes') ?? undefined,
  })
  if (!parsed.success) redirect('/admin/leads')

  const { id, status, notes } = parsed.data
  const bookingDate = parseDate(parsed.data.bookingDate)
  const bookingValue = parseMoney(parsed.data.bookingValue)
  const revenueReceived = parseMoney(parsed.data.revenueReceived)

  if (bookingDate === 'invalid' || bookingValue === 'invalid' || revenueReceived === 'invalid') {
    redirect(`/admin/leads/${id}?error=invalid`)
  }

  await db
    .update(leads)
    .set({
      status,
      bookingDate,
      bookingValue,
      revenueReceived,
      notes: notes?.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim() || null,
      updatedAt: new Date(),
    })
    .where(eq(leads.id, id))

  revalidatePath('/admin/leads')
  redirect(`/admin/leads/${id}?saved=1`)
}
