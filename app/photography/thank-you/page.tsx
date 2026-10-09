import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You | Chris Brenzel Photography',
  description: 'Your session inquiry has been received.',
  robots: { index: false, follow: true },
}

export default function ThankYouPage() {
  return (
    <main className="pt-14">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-24 md:pt-32 md:pb-32">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
          Inquiry received
        </p>
        <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl leading-tight mb-6 text-balance">
          Thank you for reaching out.
        </h1>
        <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-4">
          I&apos;ve got your session details and will reply to the email you
          provided, usually within a few days, with availability and next steps.
        </p>
        <p className="text-white/30 font-sans text-sm leading-relaxed max-w-2xl mb-12">
          Need to add something or haven&apos;t heard back? Email{' '}
          <a
            href="mailto:chris@chrisbrenzel.com"
            className="text-white/40 hover:text-[#f5f0eb] underline underline-offset-2 transition-colors"
          >
            chris@chrisbrenzel.com
          </a>
          .
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/photography/gallery"
            className="inline-flex items-center gap-2 font-sans font-medium text-sm px-6 py-3 rounded transition-colors bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f]"
          >
            Browse the gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/photography"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/40 hover:text-white/70 transition-colors"
          >
            Back to photography
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
