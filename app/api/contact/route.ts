import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message, inquiryType, organization, source } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const isPhotography = source === 'photography'

    const subjectLine = isPhotography
      ? `Photography inquiry — ${inquiryType} from ${name}`
      : `Professional inquiry — ${inquiryType} from ${name}${organization ? ` (${organization})` : ''}`

    const htmlBody = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
        <h2 style="border-bottom:1px solid #eee;padding-bottom:12px;margin-bottom:20px">
          ${isPhotography ? 'Photography' : 'Professional'} inquiry — ${inquiryType}
        </h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:6px 0;color:#666;width:120px">Name</td><td style="padding:6px 0"><strong>${name}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 0;color:#666">Inquiry type</td><td style="padding:6px 0">${inquiryType}</td></tr>
          ${organization ? `<tr><td style="padding:6px 0;color:#666">Organization</td><td style="padding:6px 0">${organization}</td></tr>` : ''}
        </table>
        <div style="margin-top:24px;padding:16px;background:#f9f9f9;border-radius:6px;white-space:pre-wrap;line-height:1.6">
          ${message.replace(/\n/g, '<br/>')}
        </div>
        <p style="margin-top:24px;font-size:12px;color:#999">
          Sent via chrisbrenzel.com ${isPhotography ? 'photography' : 'professional'} contact form
        </p>
      </div>
    `

    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'chris@chrisbrenzel.com',
      replyTo: email,
      subject: subjectLine,
      html: htmlBody,
    })

    if (error) {
      console.error('[v0] Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[v0] Contact route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
