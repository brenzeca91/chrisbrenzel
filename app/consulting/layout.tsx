import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1e]">
      <SiteNav mode="consulting" />
      <div className="flex-1">{children}</div>
      <SiteFooter mode="consulting" />
    </div>
  )
}
