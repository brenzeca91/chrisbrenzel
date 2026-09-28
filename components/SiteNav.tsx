'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect, Fragment } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { consultingServices } from '@/lib/consulting-services'

const consultingLinks = [
  { label: 'Consulting', href: '/consulting' },
  { label: 'Experience', href: '/consulting/experience' },
  { label: 'About', href: '/consulting/about' },
]

const photographyLinks = [
  { label: 'Photography', href: '/photography' },
  { label: 'Nature Photography', href: '/nature-photography' },
]

const photographyMoreLinks = [
  { label: 'Gallery', href: '/photography/gallery' },
  { label: 'Prints', href: '/photography/prints' },
  { label: 'Field Notes', href: '/photography/field-notes' },
]

type NavMode = 'consulting' | 'photography'

export default function SiteNav({ mode }: { mode: NavMode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false)
  const servicesRef = useRef<HTMLLIElement>(null)
  const moreRef = useRef<HTMLLIElement>(null)
  const links = mode === 'consulting' ? consultingLinks : photographyLinks

  const isConsulting = mode === 'consulting'
  const moreLinksActive = photographyMoreLinks.some((l) => pathname.startsWith(l.href))

  useEffect(() => {
    if (!servicesOpen && !moreOpen) return
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [servicesOpen, moreOpen])

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
          {mode === 'consulting' ? 'consulting' : mode}
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => {
            const active = pathname === link.href
            const linkEl = (
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
            )
            // Insert the Services dropdown right after the first consulting link
            if (isConsulting && i === 0) {
              return (
                <>
                  <li key={link.href}>{linkEl}</li>
                  <li key="services" ref={servicesRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                      className={`nav-link consulting-nav-link flex items-center gap-1 font-sans text-sm font-medium transition-colors ${
                        pathname.startsWith('/consulting/') &&
                        consultingServices.some((s) => pathname === `/consulting/${s.slug}`)
                          ? 'text-blue-400'
                          : 'text-[#8fa3bb] hover:text-white'
                      }`}
                    >
                      Services
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {servicesOpen && (
                      <ul
                        role="menu"
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 bg-[#0d1530] border border-[#1e2d4a] rounded-lg shadow-xl py-2 z-50"
                      >
                        {consultingServices.map((service) => (
                          <li key={service.slug} role="none">
                            <Link
                              role="menuitem"
                              href={`/consulting/${service.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-2.5 font-sans text-sm text-[#8fa3bb] hover:text-white hover:bg-[#111a33] transition-colors"
                            >
                              {service.navLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </>
              )
            }
            // Insert the More dropdown right after the last photography link
            if (!isConsulting && i === links.length - 1) {
              return (
                <>
                  <li key={link.href}>{linkEl}</li>
                  <li key="more" ref={moreRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setMoreOpen((v) => !v)}
                      aria-haspopup="menu"
                      aria-expanded={moreOpen}
                      className={`nav-link photo-nav-link flex items-center gap-1 font-sans text-sm font-medium transition-colors ${
                        moreLinksActive ? 'text-white' : 'text-white/50 hover:text-[#f5f0eb]'
                      }`}
                    >
                      More
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${moreOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {moreOpen && (
                      <ul
                        role="menu"
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-[#0c0c0c] border border-[#222] rounded-lg shadow-xl py-2 z-50"
                      >
                        {photographyMoreLinks.map((moreLink) => (
                          <li key={moreLink.href} role="none">
                            <Link
                              role="menuitem"
                              href={moreLink.href}
                              onClick={() => setMoreOpen(false)}
                              className="block px-4 py-2.5 font-sans text-sm text-white/50 hover:text-[#f5f0eb] hover:bg-[#161616] transition-colors"
                            >
                              {moreLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </>
              )
            }
            return <li key={link.href}>{linkEl}</li>
          })}
          {isConsulting ? (
            <li>
              <Link
                href="/consulting/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-sans text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                Discuss a Project
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href="/photography/contact/session"
                className="bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f] font-sans text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                Book a Session
              </Link>
            </li>
          )}
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
            {links.map((link, i) => (
              <Fragment key={link.href}>
                <li>
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
                {isConsulting && i === 0 && (
                  <li key="mobile-services">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      className="flex items-center gap-1.5 font-sans text-base font-medium text-[#8fa3bb] hover:text-white transition-colors"
                    >
                      Services
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <ul className="flex flex-col gap-3 mt-3 pl-4 border-l border-[#1e2d4a]">
                        {consultingServices.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/consulting/${service.slug}`}
                              onClick={() => setOpen(false)}
                              className="font-sans text-sm text-[#6b8aaa] hover:text-white transition-colors"
                            >
                              {service.navLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
                {!isConsulting && i === links.length - 1 && (
                  <li key="mobile-more">
                    <button
                      type="button"
                      onClick={() => setMobileMoreOpen((v) => !v)}
                      aria-expanded={mobileMoreOpen}
                      className="flex items-center gap-1.5 font-sans text-base font-medium text-white/60 hover:text-[#f5f0eb] transition-colors"
                    >
                      More
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileMoreOpen && (
                      <ul className="flex flex-col gap-3 mt-3 pl-4 border-l border-[#222]">
                        {photographyMoreLinks.map((moreLink) => (
                          <li key={moreLink.href}>
                            <Link
                              href={moreLink.href}
                              onClick={() => setOpen(false)}
                              className="font-sans text-sm text-white/40 hover:text-[#f5f0eb] transition-colors"
                            >
                              {moreLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
              </Fragment>
            ))}
            <li>
              {isConsulting ? (
                <Link
                  href="/consulting/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex bg-blue-600 hover:bg-blue-500 text-white font-sans text-sm font-semibold px-4 py-2 rounded transition-colors mt-1"
                >
                  Discuss a Project
                </Link>
              ) : (
                <Link
                  href="/photography/contact/session"
                  onClick={() => setOpen(false)}
                  className="inline-flex bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f] font-sans text-sm font-semibold px-4 py-2 rounded transition-colors mt-1"
                >
                  Book a Session
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
