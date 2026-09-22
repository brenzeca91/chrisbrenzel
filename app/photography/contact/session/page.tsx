'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

const sessionTypes = [
  'Engagement or couples session',
  'Family session',
  'Newborn or birth announcement',
  'Proposal',
  'Small event or elopement',
  'Other',
]

export default function SessionBookingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    inquiryType: sessionTypes[0],
    date: '',
    location: '',
    guestCount: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'photography-session' }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError('Something went wrong — please email chris@chrisbrenzel.com directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
          Photography Sessions &middot; Lexington, Kentucky
        </p>
        <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl leading-tight mb-4 text-balance">
          Let&apos;s plan your session
        </h1>
        <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
          Tell me what you are celebrating, where you are located, and what you
          want your photographs to feel like. I will review the details and reply
          with availability, recommendations, and next steps.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          {/* Left: direct contact */}
          <div>
            <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
              Start an inquiry
            </p>
            <p className="text-white/40 font-sans text-sm leading-relaxed mb-6">
              I typically reply within a few days. If you already have a date,
              location, or budget in mind, include those details so I can give you
              the most useful answer.
            </p>
            <a
              href="mailto:chris@chrisbrenzel.com?subject=Photography session inquiry"
              className="flex items-center gap-3 text-white/50 hover:text-[#f5f0eb] font-sans text-sm transition-colors mb-4"
            >
              <Mail className="w-4 h-4 text-white/40" />
              chris@chrisbrenzel.com
            </a>
            <p className="text-white/30 font-sans text-xs leading-relaxed mt-6">
              Prefer email? Contact me directly at{' '}
              <a
                href="mailto:chris@chrisbrenzel.com"
                className="text-white/40 hover:text-[#f5f0eb] underline underline-offset-2 transition-colors"
              >
                chris@chrisbrenzel.com
              </a>
              .
            </p>
          </div>

          {/* Right: form */}
          <div>
            <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
              Session inquiry form
            </p>
            {submitted ? (
              <div className="max-w-lg py-10">
                <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
                  Inquiry sent
                </p>
                <h2 className="font-serif text-2xl mb-4 text-[#f5f0eb]">
                  Thank you for reaching out.
                </h2>
                <p className="font-sans text-base leading-relaxed mb-10 text-white/50">
                  I&apos;ll review your details and reply at the email you
                  provided, usually within a few days, with availability and next
                  steps.
                </p>
                <Link
                  href="/photography/engagement-family-photographer-lexington-ky"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/40 hover:text-white/70 transition-colors"
                >
                  Back to sessions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-sans text-xs font-medium tracking-wide text-white/35">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#141414] border border-[#222] text-[#f5f0eb] placeholder:text-[#333] focus:border-[#444]"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-sans text-xs font-medium tracking-wide text-white/35">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#141414] border border-[#222] text-[#f5f0eb] placeholder:text-[#333] focus:border-[#444]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="inquiryType" className="font-sans text-xs font-medium tracking-wide text-white/35">
                    Session type
                  </label>
                  <select
                    id="inquiryType"
                    value={form.inquiryType}
                    onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                    className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#141414] border border-[#222] text-[#f5f0eb] focus:border-[#444]"
                  >
                    {sessionTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="font-sans text-xs font-medium tracking-wide text-white/35">
                      Preferred date or date range
                    </label>
                    <input
                      id="date"
                      type="text"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#141414] border border-[#222] text-[#f5f0eb] placeholder:text-[#333] focus:border-[#444]"
                      placeholder="e.g. mid-October, or flexible"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="location" className="font-sans text-xs font-medium tracking-wide text-white/35">
                      Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#141414] border border-[#222] text-[#f5f0eb] placeholder:text-[#333] focus:border-[#444]"
                      placeholder="Lexington, KY or elsewhere"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="guestCount" className="font-sans text-xs font-medium tracking-wide text-white/35">
                    Number of people
                  </label>
                  <input
                    id="guestCount"
                    type="text"
                    value={form.guestCount}
                    onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
                    className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#141414] border border-[#222] text-[#f5f0eb] placeholder:text-[#333] focus:border-[#444]"
                    placeholder="e.g. 2, or 5 including kids"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-xs font-medium tracking-wide text-white/35">
                    What are you planning?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors resize-none bg-[#141414] border border-[#222] text-[#f5f0eb] placeholder:text-[#333] focus:border-[#444]"
                    placeholder="Tell me what you are planning, what photographs you have in mind, and any questions you have about location, timing, or pricing."
                  />
                </div>

                {error && <p className="text-red-400 font-sans text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 font-sans font-medium text-sm px-6 py-3 rounded transition-colors self-start bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending…' : 'Send Session Inquiry'}
                  {!sending && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
