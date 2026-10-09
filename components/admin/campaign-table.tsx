import { formatMoney, formatPercent } from '@/lib/leads/format'

type Row = {
  source: string
  medium: string
  campaign: string
  inquiries: number
  bookings: number
  bookingValue: number
  revenue: number
}

const head = 'px-4 py-3 text-left text-xs font-medium text-white/50'
const cell = 'px-4 py-3 text-sm'

export default function CampaignTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded border border-[#222]">
      <table className="w-full min-w-[40rem] border-collapse">
        <thead className="border-b border-[#222] bg-[#141414]">
          <tr>
            <th className={head}>Source / medium</th>
            <th className={head}>Campaign</th>
            <th className={`${head} text-right`}>Inquiries</th>
            <th className={`${head} text-right`}>Bookings</th>
            <th className={`${head} text-right`}>Rate</th>
            <th className={`${head} text-right`}>Booking value</th>
            <th className={`${head} text-right`}>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-sm text-white/40">
                No inquiries in this range yet.
              </td>
            </tr>
          )}
          {rows.map((row) => (
            <tr key={`${row.source}|${row.medium}|${row.campaign}`} className="border-b border-[#1a1a1a] last:border-0">
              <td className={cell}>
                {row.source}
                {row.medium !== '(none)' && <span className="text-white/40"> / {row.medium}</span>}
              </td>
              <td className={cell}>{row.campaign}</td>
              <td className={`${cell} text-right`}>{row.inquiries}</td>
              <td className={`${cell} text-right`}>{row.bookings}</td>
              <td className={`${cell} text-right text-white/60`}>{formatPercent(row.bookings, row.inquiries)}</td>
              <td className={`${cell} text-right`}>{formatMoney(row.bookingValue)}</td>
              <td className={`${cell} text-right`}>{formatMoney(row.revenue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
