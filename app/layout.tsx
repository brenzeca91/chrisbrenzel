import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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
  ],
  authors: [{ name: 'Christopher Brenzel' }],
  openGraph: {
    title: 'Christopher Brenzel',
    description: 'Biotech Consulting & Nature Photography',
    url: 'https://chrisbrenzel.com',
    siteName: 'Christopher Brenzel',
    locale: 'en_US',
    type: 'website',
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
