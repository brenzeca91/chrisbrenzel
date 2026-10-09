import { updateLead } from '@/app/admin/leads/actions'
import { LEAD_STATUSES, STATUS_LABELS } from '@/lib/leads/constants'
import type { Lead } from '@/lib/db/schema'

const inputClass =
  'w-full rounded border border-[#222] bg-[#141414] px-3 py-2 text-sm text-[#f5f0eb] outline-none focus:border-[#444]'

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-xs text-white/50">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function LeadEditForm({ lead }: { lead: Lead }) {
  return (
    <form action={updateLead} className="flex flex-col gap-5">
      <input type="hidden" name="id" value={lead.id} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Status" htmlFor="status">
          <select id="status" name="status" defaultValue={lead.status} className={inputClass}>
            {LEAD_STATUSES.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Booking date" htmlFor="bookingDate">
          <input id="bookingDate" name="bookingDate" type="date" defaultValue={lead.bookingDate ?? ''} className={inputClass} />
        </Field>
        <Field label="Booking value (USD)" htmlFor="bookingValue">
          <input
            id="bookingValue"
            name="bookingValue"
            inputMode="decimal"
            placeholder="150.00"
            defaultValue={lead.bookingValue ?? ''}
            className={inputClass}
          />
        </Field>
        <Field label="Revenue received (USD)" htmlFor="revenueReceived">
          <input
            id="revenueReceived"
            name="revenueReceived"
            inputMode="decimal"
            placeholder="0.00"
            defaultValue={lead.revenueReceived ?? ''}
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Notes" htmlFor="notes">
        <textarea
          id="notes"
          name="notes"
          rows={4}
          maxLength={5000}
          defaultValue={lead.notes ?? ''}
          className={`${inputClass} resize-y`}
        />
      </Field>
      <button
        type="submit"
        className="self-start rounded bg-[#5b9bff] px-6 py-3 text-sm font-medium text-[#050d1f] transition-colors hover:bg-[#7ab2ff]"
      >
        Save changes
      </button>
    </form>
  )
}
