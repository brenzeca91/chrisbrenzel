import { redirect } from 'next/navigation'
import { sql } from 'drizzle-orm'
import { db } from '@/lib/db'
import { user } from '@/lib/db/schema'
import { getAdminSession } from '@/lib/admin'
import AdminLoginForm from '@/components/admin/login-form'

export const dynamic = 'force-dynamic'

export default async function AdminLoginPage() {
  if (await getAdminSession()) redirect('/admin/leads')

  const [{ count }] = await db.select({ count: sql<number>`count(*)::int` }).from(user)
  const mode = count === 0 ? 'setup' : 'sign-in'

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
        Private
      </p>
      <h1 className="mb-3 font-serif text-3xl text-balance">
        {mode === 'setup' ? 'Create the admin account' : 'Lead dashboard'}
      </h1>
      <p className="mb-8 text-sm leading-relaxed text-white/50">
        {mode === 'setup'
          ? 'No admin account exists yet. Only the address set in ADMIN_EMAILS can register, and registration closes as soon as the account is created.'
          : 'Sign in to review inquiries and bookings.'}
      </p>
      <AdminLoginForm mode={mode} />
    </main>
  )
}
