import Link from 'next/link'
import {
  FORM_SOURCE_LABELS,
  STATUS_LABELS,
  type FormSource,
  type LeadStatus,
} from '@/lib/leads/constants'
import { formatDateTime, formatMoney } from '@/lib/leads/format'

type Row = {
  id: string
  createdAt: Date
  name: string
  email: string
  formSource: string
  inquiryType: string
  status: string
  bookingValue: string | null
  notifiedAt: Date | null
  source: string
  medium: string
  campaign: string
}

const head = 'px-4 py-3 text-left text-xs font-medium text-white/50'
const cell = 'px-4 py-3 text-sm align-top'

export default function LeadTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded border border-[#222]">
      <table className="w-full min-w-[48rem] border-collapse">
        <thead className="border-b border-[#222] bg-[#141414]">
          <tr>
            <th className={head}>Received</th>
            <th className={head}>Contact</th>
            <th className={head}>Inquiry</th>
            <th className={head}>Traffic</th>
            <th className={head}>Status</th>
            <th className={`${head} text-right`}>Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center text-sm text-white/40">
                No leads match these filters.
              </td>
            </tr>
          )}
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-[#1a1a1a] last:border-0">
              <td className={`${cell} whitespace-nowrap text-white/60`}>{formatDateTime(row.createdAt)}</td>
              <td className={cell}>
                <Link href={`/admin/leads/${row.id}`} className="font-medium text-[#7ab2ff] hover:underline">
                  {row.name}
                </Link>
                <div className="text-xs text-white/40">{row.email}</div>
              </td>
              <td className={cell}>
                {row.inquiryType}
                <div className="text-xs text-white/40">
                  {FORM_SOURCE_LABELS[row.formSource as FormSource] ?? row.formSource}
                </div>
              </td>
              <td className={cell}>
                {row.source}
                {row.medium !== '(none)' && <span className="text-white/40"> / {row.medium}</span>}
                <div className="text-xs text-white/40">{row.campaign}</div>
              </td>
              <td className={cell}>
                {STATUS_LABELS[row.status as LeadStatus] ?? row.status}
                {!row.notifiedAt && (
                  <div className="text-xs text-amber-400">Email not sent</div>
                )}
              </td>
              <td className={`${cell} text-right`}>{formatMoney(row.bookingValue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
