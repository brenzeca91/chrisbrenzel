'use client'

import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export default function SignOutButton() {
  const router = useRouter()

  async function handleSignOut() {
    await authClient.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="rounded border border-[#222] px-4 py-2 text-xs text-white/60 transition-colors hover:border-[#444] hover:text-white"
    >
      Sign out
    </button>
  )
}
