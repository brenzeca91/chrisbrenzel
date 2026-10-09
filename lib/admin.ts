import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { getAdminEmails } from '@/lib/admin-emails'

// Returns the session only when the signed-in user is on the admin allowlist.
// Every admin page and mutation calls this on the server.
export async function getAdminSession() {
  const session = await auth.api.getSession({ headers: await headers() })
  const email = session?.user?.email?.toLowerCase()
  if (!session || !email || !getAdminEmails().includes(email)) return null
  return session
}
