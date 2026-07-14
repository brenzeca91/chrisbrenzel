import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography Gallery | Christopher Brenzel',
  description: 'Kentucky wildlife, bird photography, macro, landscape, astrophotography, and eclipse photographs by Christopher Brenzel. Available as fine art prints.',
  alternates: { canonical: 'https://www.chrisbrenzel.com/photography/gallery' },
  openGraph: {
    title: 'Photography Gallery | Christopher Brenzel',
    description: 'Wildlife, macro, landscape, and astrophotography from Kentucky and beyond. Fine art prints available.',
    url: 'https://www.chrisbrenzel.com/photography/gallery',
    siteName: 'ChrisBrenzel.com',
    type: 'website',
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
