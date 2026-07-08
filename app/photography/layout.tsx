import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  other: {
    'impact-site-verification': '8f3e30af-413b-4104-8ea9-99c5c5b26d0e',
  },
}

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0c]">
      <SiteNav mode="photography" />
      <div className="flex-1">{children}</div>
      <SiteFooter mode="photography" />
    </div>
  )
}
