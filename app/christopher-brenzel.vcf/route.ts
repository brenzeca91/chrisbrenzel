// Contact details are supplied through the production environment.
export const dynamic = 'force-dynamic'

function escapeVCardValue(value: string) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
}

export async function GET() {
  const contactPhone = process.env.CONTACT_PHONE?.trim()
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Brenzel;Christopher;;;',
    'FN:Christopher Brenzel',
    'ORG:ChrisBrenzel.com',
    'TITLE:Biotech Business Development and Nature Photographer',
  ]

  if (contactPhone) {
    lines.push(`TEL;TYPE=CELL:${escapeVCardValue(contactPhone)}`)
  }

  lines.push(
    'EMAIL;TYPE=INTERNET,WORK:chris@chrisbrenzel.com',
    'URL;TYPE=WORK:https://www.chrisbrenzel.com',
    'URL;TYPE=LinkedIn:https://www.linkedin.com/in/christopherbrenzel',
    'X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/lexingtonkyphotos/',
    'ADR;TYPE=WORK:;;;Lexington;KY;;;United States',
    'NOTE:Biotech business development\\, preclinical strategy\\, scientific partnerships\\, and nature photography.',
    'REV:20260730T000000Z',
    'END:VCARD',
  )

  return new Response(`${lines.join('\r\n')}\r\n`, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition':
        'attachment; filename="Christopher-Brenzel.vcf"',
      'Cache-Control': 'private, max-age=0, must-revalidate',
    },
  })
}
