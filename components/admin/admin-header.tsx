import Link from 'next/link'
import SignOutButton from '@/components/admin/sign-out-button'

export default function AdminHeader({ email }: { email: string }) {
  return (
    <header className="border-b border-[#222]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/admin/leads" className="font-serif text-lg">
          Lead dashboard
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden text-xs text-white/40 sm:inline">{email}</span>
          <SignOutButton />
        </div>
      </div>
    </header>
  )
}
