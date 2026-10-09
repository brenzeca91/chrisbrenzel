import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type LeadEmailInput = {
  source: string
  name: string
  email: string
  organization?: string | null
  inquiryType: string
  preferredDate?: string | null
  location?: string | null
  guestCount?: string | null
  message: string
  trafficSource?: string | null
  trafficMedium?: string | null
  trafficCampaign?: string | null
  landingPath?: string | null
  savedToDashboard: boolean
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, ' ')
}

function row(label: string, value: string | null | undefined, html?: string) {
  if (!value) return ''
  return `<tr><td style="padding:6px 0;color:#666;width:140px">${label}</td><td style="padding:6px 0">${html ?? escapeHtml(value)}</td></tr>`
}

export async function sendLeadEmail(
  input: LeadEmailInput,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const isSession = input.source === 'photography-session'
  const isPhotography = input.source === 'photography' || isSession
  const name = singleLine(input.name)
  const inquiryType = singleLine(input.inquiryType)

  const subject = isSession
    ? `Session inquiry — ${inquiryType} from ${name}`
    : isPhotography
      ? `Photography inquiry — ${inquiryType} from ${name}`
      : `Professional inquiry — ${inquiryType} from ${name}${input.organization ? ` (${singleLine(input.organization)})` : ''}`

  const heading = isSession
    ? 'Session inquiry'
    : isPhotography
      ? 'Photography inquiry'
      : 'Professional inquiry'

  const trafficLabel =
    [input.trafficSource, input.trafficMedium].filter(Boolean).join(' / ') ||
    'Direct or untagged'

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
      <h2 style="border-bottom:1px solid #eee;padding-bottom:12px;margin-bottom:20px">
        ${heading} — ${escapeHtml(inquiryType)}
      </h2>
      <table style="width:100%;border-collapse:collapse">
        ${row('Name', input.name, `<strong>${escapeHtml(input.name)}</strong>`)}
        ${row('Email', input.email, `<a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a>`)}
        ${row('Inquiry type', input.inquiryType)}
        ${row('Preferred date', input.preferredDate)}
        ${row('Location', input.location)}
        ${row('Number of people', input.guestCount)}
        ${row('Organization', input.organization)}
        ${row('Traffic source', trafficLabel)}
        ${row('Campaign', input.trafficCampaign)}
        ${row('Landing page', input.landingPath)}
      </table>
      <div style="margin-top:24px;padding:16px;background:#f9f9f9;border-radius:6px;white-space:pre-wrap;line-height:1.6">
        ${escapeHtml(input.message).replace(/\n/g, '<br/>')}
      </div>
      <p style="margin-top:24px;font-size:12px;color:#999">
        Sent via chrisbrenzel.com ${isSession ? 'photography session booking' : isPhotography ? 'photography' : 'professional'} contact form${input.savedToDashboard ? '' : ' — NOT saved to the lead dashboard (database unavailable)'}
      </p>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: 'Contact Form <noreply@chrisbrenzel.com>',
      to: 'chris@chrisbrenzel.com',
      replyTo: input.email,
      subject,
      html,
    })
    if (error) return { ok: false, error: error.message ?? 'Resend error' }
    return { ok: true }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Email send failed' }
  }
}
