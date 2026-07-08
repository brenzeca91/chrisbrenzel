'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const consultingLinks = [
  { label: 'Professional', href: '/consulting' },
  { label: 'Experience', href: '/consulting/experience' },
  { label: 'About', href: '/consulting/about' },
  { label: 'Contact', href: '/consulting/contact' },
]

const photographyLinks = [
  { label: 'Photography', href: '/photography' },
  { label: 'Gallery', href: '/photography/gallery' },
  { label: 'Field Notes', href: '/photography/field-notes' },
  { label: 'Camera Bag', href: '/photography/camera-bag' },
  { label: 'Prints', href: '/photography/prints' },
  { label: 'Contact', href: '/photography/contact' },
]

type NavMode = 'consulting' | 'photography'

export default function SiteNav({ mode }: { mode: NavMode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const links = mode === 'consulting' ? consultingLinks : photographyLinks

  const isConsulting = mode === 'consulting'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isConsulting
          ? 'bg-[#0a0f1e]/90 border-b border-[#1e2d4a]'
          : 'bg-[#0c0c0c]/90 border-b border-[#222]'
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / name */}
        <Link
          href="/"
          className={`font-sans text-sm font-medium tracking-wide ${
            isConsulting ? 'text-white hover:text-blue-400' : 'text-[#f5f0eb] hover:text-white'
          } transition-colors`}
        >
          Christopher Brenzel
        </Link>

        {/* Section indicator */}
        <span
          className={`hidden md:inline text-[10px] font-medium tracking-[0.2em] uppercase font-sans ${
            isConsulting ? 'text-blue-400' : 'text-white/40'
          }`}
        >
          {mode === 'consulting' ? 'professional' : mode}
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${
                    isConsulting ? 'consulting-nav-link' : 'photo-nav-link'
                  } font-sans text-sm font-medium transition-colors ${
                    active
                      ? isConsulting
                        ? 'text-blue-400'
                        : 'text-white'
                      : isConsulting
                      ? 'text-[#8fa3bb] hover:text-white'
                      : 'text-white/50 hover:text-[#f5f0eb]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${isConsulting ? 'text-white' : 'text-[#f5f0eb]'}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden px-6 pb-6 pt-2 border-t ${
            isConsulting ? 'border-[#1e2d4a] bg-[#0a0f1e]' : 'border-[#222] bg-[#0c0c0c]'
          }`}
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-sans text-base font-medium ${
                    isConsulting
                      ? 'text-[#8fa3bb] hover:text-white'
                      : 'text-white/60 hover:text-[#f5f0eb]'
                  } transition-colors`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
