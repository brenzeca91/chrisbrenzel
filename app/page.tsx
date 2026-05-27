'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      {/* Desktop: side by side | Mobile: stacked */}
      <div className="flex flex-col md:flex-row h-full">
        {/* ── Consulting half ── */}
        <Link
          href="/consulting"
          className="group relative flex-1 flex flex-col justify-center px-10 md:px-16 lg:px-20
                     bg-[#0a0f1e] min-h-[50vh] md:min-h-0
                     transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                     md:hover:flex-[0.6]"
          aria-label="Enter consulting section"
        >
          {/* Subtle left accent bar */}
          <span
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          <div className="max-w-md animate-[fadeIn_0.8s_ease-out_forwards]">
            {/* Label */}
            <p className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
              Consulting
            </p>

            <h1 className="text-white font-sans font-light text-4xl md:text-5xl lg:text-6xl leading-tight mb-2 text-balance">
              Christopher
            </h1>
            <h1 className="text-white font-sans font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              Brenzel
            </h1>

            <p className="text-[#3b82f6] font-sans font-medium text-lg md:text-xl tracking-wide mb-6">
              Biotech Consultant
            </p>

            <p className="text-[#8fa3bb] font-sans text-sm md:text-base leading-relaxed max-w-sm">
              Business development, preclinical strategy, and scientific partnership
              support for biotech and research service organizations.
            </p>

            <div className="mt-10 flex items-center gap-2 text-[#3b82f6] text-sm font-medium
                            opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0
                            transition-all duration-300">
              <span>View consulting work</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Corner indicator */}
          <div className="absolute bottom-6 right-8 text-[#1e2d4a] text-xs font-mono tracking-widest select-none hidden md:block">
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
                     md:hover:flex-[0.6]"
          aria-label="Enter photography section"
        >
          {/* Background image with zoom */}
          <div className="absolute inset-0 photo-zoom">
            <div
              className="img-inner absolute inset-0 bg-cover bg-center transition-transform duration-700
                          group-hover:scale-105"
              style={{ backgroundImage: "url('/images/hero-photography.png')" }}
            />
            {/* Fallback gradient when no image */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, #0c1a0c 0%, #0d2618 25%, #0a1a0a 50%, #111a0b 75%, #0c0c0c 100%)',
              }}
            />
          </div>

          {/* Dark editorial overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75 z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-end h-full p-10 md:p-16 lg:p-20">
            <p className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
              Photography
            </p>
            <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-medium italic leading-tight mb-4 text-balance">
              Nature Photography
            </h2>
            <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed max-w-sm">
              Field notes, wildlife, macro, weather, eclipses, and outdoor
              observation.
            </p>

            <div className="mt-8 flex items-center gap-2 text-white/60 text-sm font-medium
                            opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0
                            transition-all duration-300">
              <span>Explore photography</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Corner indicator */}
          <div className="absolute top-6 right-8 text-white/20 text-xs font-mono tracking-widest select-none hidden md:block">
            02 / PHOTOGRAPHY
          </div>
        </Link>
      </div>
    </main>
  )
}
