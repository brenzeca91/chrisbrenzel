import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Christopher Brenzel — Biotech Consulting & Nature Photography',
  description:
    'Christopher Brenzel offers biotech business development consulting, preclinical strategy, and scientific partnership support. Also a self-taught nature photographer based in Lexington, Kentucky.',
  keywords: [
    'biotech consulting',
    'business development',
    'preclinical CRO',
    'nature photography',
    'Lexington Kentucky',
    'Sony camera quiz',
    'wildlife photography',
  ],
  authors: [{ name: 'Christopher Brenzel' }],
  alternates: { canonical: 'https://www.chrisbrenzel.com' },
  openGraph: {
    title: 'Christopher Brenzel — Biotech Consulting & Nature Photography',
    description:
      'Biotech business development consulting and self-taught nature photography from Lexington, Kentucky.',
    url: 'https://www.chrisbrenzel.com',
    siteName: 'ChrisBrenzel.com',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.chrisbrenzel.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Christopher Brenzel — Biotech Consulting & Nature Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christopher Brenzel — Biotech Consulting & Nature Photography',
    description:
      'Biotech business development consulting and nature photography from Lexington, Kentucky.',
    images: ['https://www.chrisbrenzel.com/og-image.png'],
  },
}

export const viewport = {
  themeColor: '#0a0f1e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} bg-[#0a0f1e]`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.chrisbrenzel.com/#website',
                  url: 'https://www.chrisbrenzel.com',
                  name: 'ChrisBrenzel.com',
                  description: 'Biotech Consulting & Nature Photography',
                  author: { '@id': 'https://www.chrisbrenzel.com/#person' },
                },
                {
                  '@type': 'Person',
                  '@id': 'https://www.chrisbrenzel.com/#person',
                  name: 'Christopher Brenzel',
                  url: 'https://www.chrisbrenzel.com',
                  jobTitle: 'Biotech Business Development Consultant',
                  description:
                    'Biotech business development professional and self-taught nature photographer based in Lexington, Kentucky.',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Lexington',
                    addressRegion: 'KY',
                    addressCountry: 'US',
                  },
                  sameAs: [
                    'https://www.linkedin.com/in/christopherbrenzel',
                  ],
                },
              ],
            }),
          }}
        />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F1NKLJG1LY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F1NKLJG1LY');
          `}
        </Script>
      </body>
    </html>
  )
}
