const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
})

export function formatMoney(value: number | string | null | undefined) {
  if (value === null || value === undefined || value === '') return '—'
  const number = Number(value)
  return Number.isFinite(number) ? currency.format(number) : '—'
}

export function formatDateTime(value: Date | null | undefined) {
  if (!value) return '—'
  return value.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/New_York',
  })
}

export function formatPercent(part: number, total: number) {
  if (total === 0) return '—'
  return `${Math.round((part / total) * 100)}%`
}
