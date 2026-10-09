import { z } from 'zod'
import { FORM_SOURCES } from '@/lib/leads/constants'

// Postgres rejects NUL bytes in text columns, so strip control characters
// (keeping tab, newline and carriage return) before anything reaches the DB.
const CONTROL_CHARS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g

const text = (max: number) =>
  z
    .string()
    .transform((value) => value.replace(CONTROL_CHARS, ''))
    .pipe(z.string().trim().max(max))

const optionalText = (max: number) =>
  text(max)
    .optional()
    .transform((value) => (value ? value : undefined))

const touchSchema = z
  .object({
    source: optionalText(200),
    medium: optionalText(200),
    campaign: optionalText(200),
    content: optionalText(200),
    term: optionalText(200),
    ts: z.string().max(40).optional(),
    landing: z.string().max(300).optional(),
  })
  .optional()

export const contactSchema = z.object({
  submissionId: z.uuid(),
  source: z.enum(FORM_SOURCES),
  name: text(200).pipe(z.string().min(1)),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email().max(254)),
  organization: optionalText(200),
  inquiryType: text(200).pipe(z.string().min(1)),
  date: optionalText(200),
  location: optionalText(200),
  guestCount: optionalText(100),
  message: text(5000).pipe(z.string().min(1)),
  website: z.string().max(500).optional(),
  attribution: z
    .object({ first: touchSchema, last: touchSchema })
    .optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

type RawTouch = NonNullable<z.infer<typeof touchSchema>>

export type NormalizedTouch = {
  source: string | null
  medium: string | null
  campaign: string | null
  content: string | null
  term: string | null
  touchAt: Date | null
  landingPath: string | null
}

const THIRTY_ONE_DAYS_MS = 31 * 24 * 60 * 60 * 1000

export function normalizeTouch(touch: RawTouch | undefined): NormalizedTouch {
  const empty: NormalizedTouch = {
    source: null,
    medium: null,
    campaign: null,
    content: null,
    term: null,
    touchAt: null,
    landingPath: null,
  }
  if (!touch) return empty

  const hasTag =
    touch.source || touch.medium || touch.campaign || touch.content || touch.term
  if (!hasTag) return empty

  const now = Date.now()
  const parsed = touch.ts ? Date.parse(touch.ts) : Number.NaN
  const plausible =
    Number.isFinite(parsed) &&
    parsed <= now + 24 * 60 * 60 * 1000 &&
    parsed >= now - THIRTY_ONE_DAYS_MS

  const landing =
    touch.landing && touch.landing.startsWith('/')
      ? touch.landing.replace(CONTROL_CHARS, '')
      : null

  return {
    source: touch.source ?? null,
    medium: touch.medium ?? null,
    campaign: touch.campaign ?? null,
    content: touch.content ?? null,
    term: touch.term ?? null,
    // A tagged visit always gets a timestamp; fall back to receipt time.
    touchAt: new Date(plausible ? parsed : now),
    landingPath: landing,
  }
}
