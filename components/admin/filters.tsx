import Link from 'next/link'
import {
  FORM_SOURCES,
  FORM_SOURCE_LABELS,
  LEAD_STATUSES,
  STATUS_LABELS,
} from '@/lib/leads/constants'
import type { LeadFilters } from '@/lib/leads/queries'

const selectClass =
  'w-full rounded border border-[#222] bg-[#141414] px-3 py-2 text-sm text-[#f5f0eb] outline-none focus:border-[#444]'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex min-w-[10rem] flex-1 flex-col gap-1.5 text-xs text-white/50">
      {label}
      {children}
    </label>
  )
}

export default function Filters({
  filters,
  campaigns,
}: {
  filters: LeadFilters
  campaigns: string[]
}) {
  return (
    <form method="get" className="flex flex-wrap items-end gap-4">
      <Field label="Date range">
        <select name="range" defaultValue={filters.range} className={selectClass}>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="all">All time</option>
        </select>
      </Field>
      <Field label="Campaign">
        <select name="campaign" defaultValue={filters.campaign} className={selectClass}>
          <option value="">All campaigns</option>
          {campaigns.map((campaign) => (
            <option key={campaign} value={campaign}>
              {campaign}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Form">
        <select name="form" defaultValue={filters.form} className={selectClass}>
          <option value="all">All forms</option>
          {FORM_SOURCES.map((source) => (
            <option key={source} value={source}>
              {FORM_SOURCE_LABELS[source]}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Status (list only)">
        <select name="status" defaultValue={filters.status} className={selectClass}>
          <option value="all">All except spam / test</option>
          {LEAD_STATUSES.map((status) => (
            <option key={status} value={status}>
              {STATUS_LABELS[status]}
            </option>
          ))}
        </select>
      </Field>
      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded bg-[#5b9bff] px-5 py-2 text-sm font-medium text-[#050d1f] transition-colors hover:bg-[#7ab2ff]"
        >
          Apply
        </button>
        <Link
          href="/admin/leads"
          className="rounded border border-[#222] px-4 py-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          Reset
        </Link>
      </div>
    </form>
  )
}
