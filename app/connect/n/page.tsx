import type { Metadata } from 'next'
import { ConnectProfile } from '../connect-profile'
import { formatPhoneNumber, phoneHref } from '../contact-utils'

export const metadata: Metadata = {
  title: 'Nature Photography Contact | Christopher Brenzel',
  description:
    'Photography contact information and nature portfolio for Lexington, Kentucky photographer Christopher Brenzel.',
  alternates: { canonical: 'https://www.chrisbrenzel.com/connect/n' },
  robots: { index: false, follow: true },
}

export const dynamic = 'force-dynamic'

export default function NatureConnectPage() {
  const contactPhone = process.env.CONTACT_PHONE?.trim()
  const quickLinks = [
    ...(contactPhone
      ? [
          {
            label: 'Phone',
            detail: formatPhoneNumber(contactPhone),
            href: phoneHref(contactPhone),
            icon: 'phone' as const,
          },
        ]
      : []),
    {
      label: 'Email',
      detail: 'chris@chrisbrenzel.com',
      href: 'mailto:chris@chrisbrenzel.com?subject=Photography%20inquiry',
      icon: 'mail' as const,
    },
    {
      label: 'Instagram',
      detail: '@lexingtonkyphotos',
      href: 'https://www.instagram.com/lexingtonkyphotos/',
      icon: 'instagram' as const,
      external: true,
    },
  ]

  return (
    <ConnectProfile
      variant="nature"
      eyebrow="Nature photography"
      subtitle="Wildlife, Macro & Landscapes"
      description="Photographing Kentucky’s wildlife, quiet landscapes, close-up details, and the places worth noticing."
      vcardHref="/christopher-brenzel-photography.vcf"
      quickLinks={quickLinks}
      exploreLinks={[
        {
          eyebrow: 'Portfolio',
          label: 'Nature photography',
          detail: 'Selected work, collections, field notes, and recent projects.',
          href: '/photography',
          icon: 'camera',
        },
        {
          eyebrow: 'Browse',
          label: 'Photography gallery',
          detail: 'Wildlife, macro, travel, landscapes, eclipses, and more.',
          href: '/photography/gallery',
          icon: 'gallery',
        },
        {
          eyebrow: 'Fine art',
          label: 'Prints',
          detail: 'Explore photographs available for your home or workspace.',
          href: '/photography/prints',
          icon: 'prints',
        },
      ]}
    />
  )
}
