'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Instagram } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function PhotographyContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    inquiryType: 'Print inquiry',
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
        body: JSON.stringify({ ...form, source: 'photography' }),
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
    <div className="min-h-screen flex flex-col bg-[#0c0c0c]">
      <SiteNav mode="photography" />
      <main className="flex-1 pt-14">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <p className="text-white/40 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
            Photography Contact
          </p>
          <h1 className="text-[#f5f0eb] font-serif text-4xl md:text-5xl leading-tight mb-4 text-balance">
            Get in touch.
          </h1>
          <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
            For print inquiries, licensing, commissions, exhibitions, or just to talk
            about the work and the places behind it — send a note.
          </p>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-[#222]" />
        </div>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
            {/* Left: direct contact */}
            <div>
              <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
                Direct
              </p>
              <a
                href="mailto:chris@chrisbrenzel.com?subject=Photography inquiry"
                className="flex items-center gap-3 text-white/50 hover:text-[#f5f0eb] font-sans text-sm transition-colors mb-4"
              >
                <Mail className="w-4 h-4 text-white/40" />
                chris@chrisbrenzel.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-[#f5f0eb] font-sans text-sm transition-colors"
              >
                <Instagram className="w-4 h-4 text-white/40" />
                Instagram
              </a>
              <p className="text-white/30 font-sans text-xs leading-relaxed mt-6">
                Based in Lexington, Kentucky.
                <br />
                Prints shipped worldwide.
              </p>
            </div>

            {/* Right: form */}
            <div>
              <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
                Inquiry form
              </p>
              {submitted ? (
                <div className="max-w-lg py-10">
                  <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
                    Message sent
                  </p>
                  <h2 className="font-serif text-2xl mb-4 text-[#f5f0eb]">
                    Thank you for reaching out.
                  </h2>
                  <p className="font-sans text-base leading-relaxed mb-10 text-white/50">
                    I&apos;ll be in touch at the email you provided. Typical response
                    time is within a few days.
                  </p>
                  <Link
                    href="/photography"
                    className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/40 hover:text-white/70 transition-colors"
                  >
                    Back to photography
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
                      Inquiry type
                    </label>
                    <select
                      id="inquiryType"
                      value={form.inquiryType}
                      onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                      className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#141414] border border-[#222] text-[#f5f0eb] focus:border-[#444]"
                    >
                      <option>Print inquiry</option>
                      <option>Licensing</option>
                      <option>Commission</option>
                      <option>Exhibition</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-sans text-xs font-medium tracking-wide text-white/35">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors resize-none bg-[#141414] border border-[#222] text-[#f5f0eb] placeholder:text-[#333] focus:border-[#444]"
                      placeholder="Which image, what size, or what you have in mind."
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 font-sans text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 font-sans font-medium text-sm px-6 py-3 rounded transition-colors self-start bg-white/10 hover:bg-white/15 text-[#f5f0eb] border border-[#333] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending…' : 'Send message'}
                    {!sending && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter mode="photography" />
    </div>
  )
}
