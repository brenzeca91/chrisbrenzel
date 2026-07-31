import type { Metadata } from 'next'
import { ConnectProfile } from '../connect-profile'
import { formatPhoneNumber, phoneHref } from '../contact-utils'

export const metadata: Metadata = {
  title: 'Professional Contact | Christopher Brenzel',
  description:
    'Professional contact information for Christopher Brenzel, a biotech business development and preclinical research professional.',
  alternates: { canonical: 'https://www.chrisbrenzel.com/connect/p' },
  robots: { index: false, follow: true },
}

export const dynamic = 'force-dynamic'

export default function ProfessionalConnectPage() {
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
      href: 'mailto:chris@chrisbrenzel.com?subject=Great%20connecting%20with%20you',
      icon: 'mail' as const,
    },
    {
      label: 'LinkedIn',
      detail: 'Connect professionally',
      href: 'https://www.linkedin.com/in/christopherbrenzel',
      icon: 'linkedin' as const,
      external: true,
    },
  ]

  return (
    <ConnectProfile
      variant="professional"
      eyebrow="Professional contact"
      subtitle="Preclinical & Translational Drug Development"
      description="Scientific communication, business development, research partnerships, and cross-functional strategy."
      vcardHref="/christopher-brenzel-professional.vcf"
      quickLinks={quickLinks}
      exploreLinks={[
        {
          eyebrow: 'Professional',
          label: 'View professional profile',
          detail: 'Experience, focus areas, and where I add value.',
          href: '/consulting',
          icon: 'briefcase',
        },
        {
          eyebrow: 'Experience',
          label: 'Selected experience',
          detail: 'Roles, scientific platforms, partnerships, and achievements.',
          href: '/consulting/experience',
          icon: 'file',
        },
      ]}
    />
  )
}
