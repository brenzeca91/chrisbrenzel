import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/admin'
import { getLead } from '@/lib/leads/queries'
import { FORM_SOURCE_LABELS, type FormSource } from '@/lib/leads/constants'
import { formatDateTime } from '@/lib/leads/format'
import AdminHeader from '@/components/admin/admin-header'
import LeadEditForm from '@/components/admin/lead-edit-form'

export const dynamic = 'force-dynamic'

function Detail({ label, value }: { label: string; value: string | null | undefined }) {
  if (!value) return null
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs text-white/40">{label}</dt>
      <dd className="text-sm">{value}</dd>
    </div>
  )
}

type Touch = {
  source: string | null
  medium: string | null
  campaign: string | null
  content: string | null
  term: string | null
  at: Date | null
  landing: string | null
}

function TouchBlock({ title, touch }: { title: string; touch: Touch }) {
  const tagged = touch.source || touch.medium || touch.campaign || touch.content || touch.term
  return (
    <div className="rounded border border-[#222] bg-[#141414] p-5">
      <h3 className="mb-4 text-sm font-medium">{title}</h3>
      {tagged ? (
        <dl className="grid grid-cols-2 gap-4">
          <Detail label="Source" value={touch.source} />
          <Detail label="Medium" value={touch.medium} />
          <Detail label="Campaign" value={touch.campaign} />
          <Detail label="Content" value={touch.content} />
          <Detail label="Term" value={touch.term} />
          <Detail label="Landing page" value={touch.landing} />
          <Detail label="Visited" value={touch.at ? formatDateTime(touch.at) : null} />
        </dl>
      ) : (
        <p className="text-sm text-white/40">No tagged visit recorded (direct or untagged).</p>
      )}
    </div>
  )
}

export default async function AdminLeadPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const session = await getAdminSession()
  if (!session) redirect('/admin/login')

  const { id } = await params
  const lead = await getLead(id)
  if (!lead) notFound()

  const query = await searchParams
  const saved = query.saved === '1'
  const invalid = query.error === 'invalid'

  return (
    <>
      <AdminHeader email={session.user.email} />
      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-10">
        <div>
          <Link href="/admin/leads" className="text-xs text-white/50 hover:text-white">
            ← All leads
          </Link>
          <h1 className="mt-3 font-serif text-3xl text-balance">{lead.name}</h1>
          <p className="mt-1 text-sm text-white/50">
            <a href={`mailto:${lead.email}`} className="text-[#7ab2ff] hover:underline">
              {lead.email}
            </a>
            {' · '}
            {FORM_SOURCE_LABELS[lead.formSource as FormSource] ?? lead.formSource}
            {' · '}
            {formatDateTime(lead.createdAt)}
          </p>
        </div>

        {saved && (
          <p role="status" className="rounded border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            Changes saved.
          </p>
        )}
        {invalid && (
          <p role="alert" className="rounded border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            Check the booking date and amounts. Amounts must be positive numbers.
          </p>
        )}

        <section aria-labelledby="inquiry-heading" className="flex flex-col gap-4">
          <h2 id="inquiry-heading" className="font-serif text-xl">
            Inquiry
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            <Detail label="Inquiry type" value={lead.inquiryType} />
            <Detail label="Organization" value={lead.organization} />
            <Detail label="Preferred date" value={lead.preferredDate} />
            <Detail label="Location" value={lead.location} />
            <Detail label="Number of people" value={lead.guestCount} />
          </dl>
          <p className="whitespace-pre-wrap rounded border border-[#222] bg-[#141414] p-5 text-sm leading-relaxed">
            {lead.message}
          </p>
          <p className="text-xs text-white/40">
            {lead.notifiedAt
              ? `Notification email sent ${formatDateTime(lead.notifiedAt)}.`
              : `Notification email not sent${lead.notificationError ? `: ${lead.notificationError}` : '.'}`}
          </p>
        </section>

        <section aria-labelledby="attribution-heading" className="flex flex-col gap-4">
          <h2 id="attribution-heading" className="font-serif text-xl">
            Attribution
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <TouchBlock
              title="First tagged visit"
              touch={{
                source: lead.firstSource,
                medium: lead.firstMedium,
                campaign: lead.firstCampaign,
                content: lead.firstContent,
                term: lead.firstTerm,
                at: lead.firstTouchAt,
                landing: lead.firstLandingPath,
              }}
            />
            <TouchBlock
              title="Most recent tagged visit"
              touch={{
                source: lead.lastSource,
                medium: lead.lastMedium,
                campaign: lead.lastCampaign,
                content: lead.lastContent,
                term: lead.lastTerm,
                at: lead.lastTouchAt,
                landing: lead.lastLandingPath,
              }}
            />
          </div>
        </section>

        <section aria-labelledby="booking-heading" className="flex flex-col gap-4">
          <h2 id="booking-heading" className="font-serif text-xl">
            Status and booking
          </h2>
          <LeadEditForm lead={lead} />
        </section>
      </main>
    </>
  )
}
