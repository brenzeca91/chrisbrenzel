import { formatMoney, formatPercent } from '@/lib/leads/format'

type Summary = {
  inquiries: number
  bookings: number
  bookingValue: number
  revenue: number
}

export default function SummaryCards({ summary }: { summary: Summary }) {
  const cards = [
    { label: 'Submitted inquiries', value: String(summary.inquiries), hint: 'Every form submission' },
    {
      label: 'Confirmed bookings',
      value: String(summary.bookings),
      hint: `${formatPercent(summary.bookings, summary.inquiries)} of inquiries`,
    },
    { label: 'Booking value', value: formatMoney(summary.bookingValue), hint: 'Booked and completed' },
    { label: 'Revenue received', value: formatMoney(summary.revenue), hint: 'Recorded payments' },
  ]

  return (
    <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded border border-[#222] bg-[#141414] p-5">
          <dt className="text-xs text-white/50">{card.label}</dt>
          <dd className="mt-2 font-serif text-3xl">{card.value}</dd>
          <p className="mt-1 text-xs text-white/40">{card.hint}</p>
        </div>
      ))}
    </dl>
  )
}
