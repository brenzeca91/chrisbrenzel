import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Photography Session in Lexington, KY | Chris Brenzel',
  description:
    'Inquire about engagement, couples, family, newborn, milestone, and small-event photography sessions in Lexington and Central Kentucky.',
  alternates: { canonical: 'https://www.chrisbrenzel.com/photography/contact/session' },
  openGraph: {
    title: 'Book a Photography Session in Lexington, KY | Chris Brenzel',
    description:
      'Inquire about engagement, couples, family, newborn, milestone, and small-event photography sessions in Lexington and Central Kentucky.',
    url: 'https://www.chrisbrenzel.com/photography/contact/session',
    siteName: 'ChrisBrenzel.com',
    type: 'website',
    images: [{ url: 'https://www.chrisbrenzel.com/og-image.png', width: 1200, height: 630, alt: 'Christopher Brenzel Photography' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Photography Session in Lexington, KY | Chris Brenzel',
    images: ['https://www.chrisbrenzel.com/og-image.png'],
  },
}

export default function SessionLayout({ children }: { children: React.ReactNode }) {
  return children
}
