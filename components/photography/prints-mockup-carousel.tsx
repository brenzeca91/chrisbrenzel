'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const MOCKUPS = [
  {
    src: '/images/mockups/mockup-heron.png',
    alt: 'Great Blue Heron portrait print in a slim black frame above a linen sofa in a bright minimal living room',
    caption: '"Great Blue Heron" — Wildlife',
  },
  {
    src: '/images/mockups/mockup-living-room.png',
    alt: 'Meadow and kite landscape print framed above a cream sofa in a warm Scandinavian living room',
    caption: 'Landscape print — living room setting',
  },
  {
    src: '/images/mockups/mockup-gallery-wall.png',
    alt: 'Gallery wall above a fireplace mantle featuring seven framed prints including eclipse totality, snowflake macro, and wildlife',
    caption: 'Gallery wall arrangement — multiple prints',
  },
  {
    src: '/images/mockups/mockup-office.png',
    alt: 'Autumn maple leaf on lily pads print in a slim black frame above a dark walnut desk in a modern home office',
    caption: '"Floating Maple" — Nature macro, office setting',
  },
]

export function PrintsMockupCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const go = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setIsTransitioning(false)
    }, 200)
  }, [isTransitioning])

  const prev = useCallback(() => go((current - 1 + MOCKUPS.length) % MOCKUPS.length), [current, go])
  const next = useCallback(() => go((current + 1) % MOCKUPS.length), [current, go])

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % MOCKUPS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const mockup = MOCKUPS[current]

  return (
    <div className="flex justify-center">
      <div className="relative w-full md:w-[70%] group">

        {/* Image */}
        <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a]">
          <div
            className="transition-opacity duration-200"
            style={{ opacity: isTransitioning ? 0 : 1 }}
          >
            <Image
              key={mockup.src}
              src={mockup.src}
              alt={mockup.alt}
              width={1280}
              height={960}
              className="w-full h-auto"
              priority={current === 0}
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-5 right-6">
            <p className="text-white/50 font-sans text-xs italic drop-shadow-md">
              {mockup.caption}
            </p>
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous mockup"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
                       bg-black/40 hover:bg-black/70 flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-white/80" />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next mockup"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
                       bg-black/40 hover:bg-black/70 flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronRight className="w-5 h-5 text-white/80" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {MOCKUPS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to mockup ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-5 h-1.5 bg-white/60'
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
