export const LEAD_STATUSES = [
  'new',
  'contacted',
  'booked',
  'completed',
  'lost',
  'spam_test',
] as const

export type LeadStatus = (typeof LEAD_STATUSES)[number]

export const STATUS_LABELS: Record<LeadStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  booked: 'Booked',
  completed: 'Completed',
  lost: 'Lost',
  spam_test: 'Spam / test',
}

// A lead counts as a confirmed booking once it reaches either of these.
export const BOOKED_STATUSES: LeadStatus[] = ['booked', 'completed']

export const FORM_SOURCES = ['photography', 'photography-session', 'consulting'] as const

export type FormSource = (typeof FORM_SOURCES)[number]

export const FORM_SOURCE_LABELS: Record<FormSource, string> = {
  photography: 'Photography contact',
  'photography-session': 'Session inquiry',
  consulting: 'Consulting contact',
}
