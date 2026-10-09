import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/admin'
import {
  getCampaignBreakdown,
  getCampaignOptions,
  getLeadList,
  getSummary,
  parseFilters,
} from '@/lib/leads/queries'
import AdminHeader from '@/components/admin/admin-header'
import Filters from '@/components/admin/filters'
import SummaryCards from '@/components/admin/summary-cards'
import CampaignTable from '@/components/admin/campaign-table'
import LeadTable from '@/components/admin/lead-table'

export const dynamic = 'force-dynamic'

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const session = await getAdminSession()
  if (!session) redirect('/admin/login')

  const filters = parseFilters(await searchParams)
  const [summary, breakdown, campaigns, leads] = await Promise.all([
    getSummary(filters),
    getCampaignBreakdown(filters),
    getCampaignOptions(),
    getLeadList(filters),
  ])

  return (
    <>
      <AdminHeader email={session.user.email} />
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10">
        <Filters filters={filters} campaigns={campaigns} />

        <section aria-labelledby="summary-heading" className="flex flex-col gap-4">
          <h2 id="summary-heading" className="sr-only">
            Summary
          </h2>
          <SummaryCards summary={summary} />
        </section>

        <section aria-labelledby="campaign-heading" className="flex flex-col gap-4">
          <div>
            <h2 id="campaign-heading" className="font-serif text-xl">
              Results by campaign
            </h2>
            <p className="mt-1 text-xs text-white/40">
              Credited to the most recent tagged visit. Spam and test leads are excluded.
            </p>
          </div>
          <CampaignTable rows={breakdown} />
        </section>

        <section aria-labelledby="leads-heading" className="flex flex-col gap-4">
          <div>
            <h2 id="leads-heading" className="font-serif text-xl">
              Leads
            </h2>
            <p className="mt-1 text-xs text-white/40">
              Showing up to {leads.length >= 200 ? '200 of the latest' : leads.length} matching leads.
            </p>
          </div>
          <LeadTable rows={leads} />
        </section>
      </main>
    </>
  )
}
