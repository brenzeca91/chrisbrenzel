'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

const inputClass =
  'rounded px-4 py-3 text-sm outline-none bg-[#141414] border border-[#222] text-[#f5f0eb] focus:border-[#444]'

export default function AdminLoginForm({ mode }: { mode: 'sign-in' | 'setup' }) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setPending(true)
    setError('')

    const result =
      mode === 'setup'
        ? await authClient.signUp.email({ email, password, name: 'Admin' })
        : await authClient.signIn.email({ email, password })

    if (result.error) {
      setError(
        mode === 'setup'
          ? 'Setup is not available for that email address.'
          : 'Those details did not match. Try again.',
      )
      setPending(false)
      return
    }
    router.push('/admin/leads')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="admin-email" className="text-xs font-medium tracking-wide text-white/50">
          Email
        </label>
        <input
          id="admin-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="admin-password" className="text-xs font-medium tracking-wide text-white/50">
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          required
          minLength={8}
          autoComplete={mode === 'setup' ? 'new-password' : 'current-password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
        {mode === 'setup' && (
          <p className="text-xs text-white/40">Use at least 8 characters.</p>
        )}
      </div>
      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded bg-[#5b9bff] px-6 py-3 text-sm font-medium text-[#050d1f] transition-colors hover:bg-[#7ab2ff] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? 'Working…' : mode === 'setup' ? 'Create admin account' : 'Sign in'}
      </button>
    </form>
  )
}
