'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Linkedin } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function ConsultingContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Consulting',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1e]">
      <SiteNav mode="consulting" />
      <main className="flex-1 pt-14">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <p className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
            Consulting Contact
          </p>
          <h1 className="text-white font-sans font-semibold text-4xl md:text-5xl leading-tight mb-4 text-balance">
            Let&apos;s talk strategy.
          </h1>
          <p className="text-[#8fa3bb] font-sans text-base md:text-lg leading-relaxed max-w-2xl">
            For biotech consulting, advisory work, fractional business development,
            partnership strategy, or commercial collaboration, reach out directly.
          </p>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-[#1e2d4a]" />
        </div>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
            {/* Left: direct contact */}
            <div>
              <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
                Direct
              </p>
              <a
                href="mailto:chris@chrisbrenzel.com?subject=Consulting inquiry"
                className="flex items-center gap-3 text-[#8fa3bb] hover:text-white font-sans text-sm transition-colors mb-4"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                chris@chrisbrenzel.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#8fa3bb] hover:text-white font-sans text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                LinkedIn
              </a>
              <p className="text-[#4a6380] font-sans text-xs leading-relaxed mt-6">
                Lexington, Kentucky
                <br />
                Available for remote and project-based work.
              </p>
            </div>

            {/* Right: form */}
            <div>
              <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
                Inquiry form
              </p>
              {submitted ? (
                <div className="max-w-lg py-10">
                  <p className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
                    Message sent
                  </p>
                  <h2 className="font-sans font-semibold text-2xl mb-4 text-white">
                    Thank you for reaching out.
                  </h2>
                  <p className="font-sans text-base leading-relaxed mb-10 text-[#8fa3bb]">
                    I&apos;ll be in touch at the email you provided. Typical response
                    time is within a few business days.
                  </p>
                  <Link
                    href="/consulting"
                    className="inline-flex items-center gap-2 font-sans text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Back to consulting
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-sans text-xs font-medium tracking-wide text-[#6b8aaa]">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#0d1530] border border-[#1e2d4a] text-white placeholder:text-[#3a5070] focus:border-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-sans text-xs font-medium tracking-wide text-[#6b8aaa]">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#0d1530] border border-[#1e2d4a] text-white placeholder:text-[#3a5070] focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="organization" className="font-sans text-xs font-medium tracking-wide text-[#6b8aaa]">
                      Organization <span className="text-[#3a5070]">(optional)</span>
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#0d1530] border border-[#1e2d4a] text-white placeholder:text-[#3a5070] focus:border-blue-500"
                      placeholder="Company or institution"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="inquiryType" className="font-sans text-xs font-medium tracking-wide text-[#6b8aaa]">
                      Inquiry type
                    </label>
                    <select
                      id="inquiryType"
                      value={form.inquiryType}
                      onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                      className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors bg-[#0d1530] border border-[#1e2d4a] text-white focus:border-blue-500"
                    >
                      <option>Consulting</option>
                      <option>Advisory / fractional BD</option>
                      <option>Partnership strategy</option>
                      <option>Speaking / other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-sans text-xs font-medium tracking-wide text-[#6b8aaa]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="rounded px-4 py-3 font-sans text-sm outline-none transition-colors resize-none bg-[#0d1530] border border-[#1e2d4a] text-white placeholder:text-[#3a5070] focus:border-blue-500"
                      placeholder="What are you working on or thinking about?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 font-sans font-medium text-sm px-6 py-3 rounded transition-colors self-start bg-blue-600 hover:bg-blue-500 text-white"
                  >
                    Send message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter mode="consulting" />
    </div>
  )
}
