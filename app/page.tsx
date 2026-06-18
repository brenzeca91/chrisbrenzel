'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      {/* Desktop: side by side | Mobile: stacked */}
      <div className="flex flex-col md:flex-row h-full">
        {/* ── Consulting half ── */}
        <Link
          href="/consulting"
          className="group relative flex-1 overflow-hidden min-h-[50vh] md:min-h-0
                     transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                     md:hover:flex-[1.4]"
          aria-label="Enter consulting section"
        >
          {/* Background image with zoom */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/consulting-vials.jpg')" }}
            />
          </div>

          {/* Navy editorial overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0f1e]/85 via-[#0a0f1e]/70 to-[#0a0f1e]/90" />

          {/* Subtle left accent bar */}
          <span className="absolute left-0 top-0 bottom-0 z-20 w-[3px] bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-end h-full p-10 md:p-16 lg:p-20">
            <p className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
              Consulting
            </p>

            <h1 className="font-sans leading-tight mb-4 text-balance">
              <span className="block text-white font-light text-4xl md:text-5xl lg:text-6xl">
                Christopher
              </span>
              <span className="block text-white font-semibold text-4xl md:text-5xl lg:text-6xl">
                Brenzel
              </span>
            </h1>

            <p className="text-[#5b9bff] font-sans font-medium text-lg md:text-xl tracking-wide mb-4">
              Biotech Consultant
            </p>

            <p className="text-[#aec3dd] font-sans text-sm md:text-base leading-relaxed max-w-sm">
              Business development, preclinical strategy, and scientific partnership
              support for biotech and research service organizations.
            </p>

            <div className="mt-8 flex items-center gap-2 text-[#5b9bff] text-sm font-medium
                            opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0
                            transition-all duration-300">
              <span>View consulting work</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Corner indicator */}
          <div className="absolute top-6 right-8 z-20 text-white/25 text-xs font-mono tracking-widest select-none hidden md:block">
            01 / CONSULTING
          </div>
        </Link>

        {/* ── Divider (mobile only) ── */}
        <div className="md:hidden h-px bg-gradient-to-r from-transparent via-[#1e2d4a] to-transparent" />

        {/* ── Photography half ── */}
        <Link
          href="/photography"
          className="group relative flex-1 overflow-hidden min-h-[50vh] md:min-h-0
                     transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                     md:hover:flex-[1.4]"
          aria-label="Enter photography section"
        >
          {/* Background image with zoom */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/photography-leaf.jpg')" }}
            />
          </div>

          {/* Dark editorial overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-end h-full p-10 md:p-16 lg:p-20">
            <p className="text-white/55 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
              Photography
            </p>
            <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-medium italic leading-tight mb-4 text-balance">
              Nature Photography
            </h2>
            <p className="text-white/75 font-sans text-sm md:text-base leading-relaxed max-w-sm">
              Field notes, wildlife, macro, weather, eclipses, and outdoor
              observation.
            </p>

            <div className="mt-8 flex items-center gap-2 text-white/70 text-sm font-medium
                            opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0
                            transition-all duration-300">
              <span>Explore photography</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Corner indicator */}
          <div className="absolute top-6 right-8 z-20 text-white/25 text-xs font-mono tracking-widest select-none hidden md:block">
            02 / PHOTOGRAPHY
          </div>
        </Link>
      </div>
    </main>
  )
}
