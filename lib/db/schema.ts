import {
  boolean,
  date,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

// Better Auth table. Created through the Neon MCP; only referenced here to
// check whether an admin account already exists.
export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const leads = pgTable('leads', {
  id: uuid('id').primaryKey().defaultRandom(),
  submissionId: uuid('submission_id').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),

  formSource: text('form_source').notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  organization: text('organization'),
  inquiryType: text('inquiry_type').notNull(),
  preferredDate: text('preferred_date'),
  location: text('location'),
  guestCount: text('guest_count'),
  message: text('message').notNull(),

  firstSource: text('first_source'),
  firstMedium: text('first_medium'),
  firstCampaign: text('first_campaign'),
  firstContent: text('first_content'),
  firstTerm: text('first_term'),
  firstTouchAt: timestamp('first_touch_at', { withTimezone: true }),
  firstLandingPath: text('first_landing_path'),

  lastSource: text('last_source'),
  lastMedium: text('last_medium'),
  lastCampaign: text('last_campaign'),
  lastContent: text('last_content'),
  lastTerm: text('last_term'),
  lastTouchAt: timestamp('last_touch_at', { withTimezone: true }),
  lastLandingPath: text('last_landing_path'),

  status: text('status').notNull().default('new'),
  bookingDate: date('booking_date'),
  bookingValue: numeric('booking_value'),
  revenueReceived: numeric('revenue_received'),
  notes: text('notes'),

  notifiedAt: timestamp('notified_at', { withTimezone: true }),
  notificationError: text('notification_error'),
})

export type Lead = typeof leads.$inferSelect
