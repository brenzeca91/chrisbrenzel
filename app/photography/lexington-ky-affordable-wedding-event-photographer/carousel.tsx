'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselSlides = [
  {
    src: '/images/events/couple-sunset.jpg',
    alt: 'Couple embracing at golden hour on a Kentucky farm, champagne in hand',
  },
  {
    src: '/images/events/engagement-embrace.jpg',
    alt: 'Engaged couple embracing in front of pink flowering trees',
  },
  {
    src: '/images/events/siblings.jpg',
    alt: "Young child gently touching newborn sibling's head",
  },
  {
    src: '/images/events/newborn-feet.jpg',
    alt: 'Close-up of newborn baby feet',
  },
]

export function PhotoCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % carouselSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + carouselSlides.length) % carouselSlides.length)
  const next = () => setCurrent((c) => (c + 1) % carouselSlides.length)

  return (
    <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a] bg-[#080808]">
      {carouselSlides.map((slide, i) => (
        <div
          key={slide.src}
          className="px-[25%] py-6"
          style={{ display: i === current ? 'block' : 'none' }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-auto block rounded"
          />
        </div>
      ))}
      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={next}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            style={{ background: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)' }}
          />
        ))}
      </div>
    </div>
  )
}
