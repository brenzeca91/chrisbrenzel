import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Christopher Brenzel',
  description: 'Christopher Brenzel is a Lexington, Kentucky-based biotech business development professional with experience in preclinical CRO growth, gene editing commercialization, and scientific partnerships.',
  alternates: { canonical: 'https://www.chrisbrenzel.com/consulting/about' },
  openGraph: {
    title: 'About Christopher Brenzel',
    description: 'Biotech business development professional based in Lexington, KY. Preclinical CRO strategy, gene editing commercialization, technology licensing, and scientific sales.',
    url: 'https://www.chrisbrenzel.com/consulting/about',
    siteName: 'ChrisBrenzel.com',
    type: 'profile',
  },
}

export default function AboutPage() {
  return (
    <main className="pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
          About
        </p>
        <h1 className="text-white font-sans font-semibold text-4xl md:text-5xl leading-tight mb-4 text-balance">
          Christopher Brenzel
        </h1>
        <p className="text-[#8fa3bb] font-sans text-lg leading-relaxed max-w-xl">
          Biotech consulting and nature photography, based in Lexington, Kentucky.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* About content */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 max-w-5xl">
          {/* Left column label */}
          <div>
            <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
              Background
            </p>
            <div className="flex flex-col gap-3">
              <span className="inline-block border border-[#1e2d4a] text-[#8fa3bb] font-sans text-xs px-3 py-1.5 rounded w-fit">
                Biotech BD
              </span>
              <span className="inline-block border border-[#1e2d4a] text-[#8fa3bb] font-sans text-xs px-3 py-1.5 rounded w-fit">
                Preclinical CRO
              </span>
              <span className="inline-block border border-[#1e2d4a] text-[#8fa3bb] font-sans text-xs px-3 py-1.5 rounded w-fit">
                Nature Photography
              </span>
              <span className="inline-block border border-[#1e2d4a] text-[#8fa3bb] font-sans text-xs px-3 py-1.5 rounded w-fit">
                Lexington, KY
              </span>
            </div>
          </div>

          {/* Right column copy */}
          <div className="flex flex-col gap-6">
            <p className="text-[#b8c7d9] font-sans text-base md:text-lg leading-relaxed">
              Christopher Brenzel works at the intersection of biotech business
              development, preclinical research strategy, and scientific
              communication. His professional background includes preclinical CRO
              services, gene editing, oncology models, strategic partnerships, key
              account development, technology licensing, and client-facing
              scientific communication.
            </p>
            <p className="text-[#8fa3bb] font-sans text-base leading-relaxed">
              Over the course of his career, he has helped life science
              organizations clarify their market position, communicate complex
              scientific capabilities, build strategic partnerships, and grow
              preclinical research opportunities across biotech, pharma, CRO, and
              academic settings.
            </p>
            <p className="text-[#8fa3bb] font-sans text-base leading-relaxed">
              Outside of work, Christopher is a self-taught nature photographer
              based in Lexington, Kentucky. His photography focuses on slowing
              down, observing carefully, and documenting the natural world through
              wildlife, macro subjects, landscapes, weather, eclipses, and
              travel-based field observations.
            </p>

            <div className="relative rounded-lg overflow-hidden border border-[#1e2d4a] mt-4">
              <img
                src="/images/consulting-flask.jpg"
                alt="Christopher working at a biosafety cabinet, drawing solution into a serological pipette"
                className="w-full object-cover aspect-[3/2]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Cross-links */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/consulting/experience"
            className="group border border-[#1e2d4a] hover:border-[#2a4060] rounded p-8
                       hover:bg-[#0d1530] transition-all flex justify-between items-end"
          >
            <div>
              <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
                Professional
              </p>
              <h3 className="text-white font-sans font-semibold text-lg">
                View full experience
              </h3>
            </div>
            <ArrowRight
              className="w-5 h-5 text-[#4a6380] group-hover:text-blue-400 transition-colors"
            />
          </Link>
          <Link
            href="/photography"
            className="group border border-[#1e2d4a] hover:border-[#2a4060] rounded p-8
                       hover:bg-[#0d1530] transition-all flex justify-between items-end"
          >
            <div>
              <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
                Photography
              </p>
              <h3 className="text-white font-sans font-semibold text-lg">
                Explore the photography work
              </h3>
            </div>
            <ArrowRight
              className="w-5 h-5 text-[#4a6380] group-hover:text-blue-400 transition-colors"
            />
          </Link>
        </div>
      </section>
    </main>
  )
}
