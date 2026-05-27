import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

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
