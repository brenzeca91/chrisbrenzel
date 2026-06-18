'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Work = {
  src: string
  title: string
  category: string
}

const works: Work[] = [
  { src: '/images/gallery/photo-5.jpg', title: 'Great Blue Heron', category: 'Wildlife' },
  { src: '/images/gallery/photo-2.jpg', title: 'Ring of Fire', category: 'Eclipses' },
  { src: '/images/gallery/photo-9.jpg', title: 'Cascade in Winter Light', category: 'Landscapes' },
  { src: '/images/gallery/photo-1.jpg', title: 'Spring Phlox', category: 'Macro' },
  { src: '/images/gallery/photo-3.jpg', title: 'Maple on Still Water', category: 'Landscapes' },
  { src: '/images/gallery/photo-8.jpg', title: 'Leopard Slug', category: 'Macro' },
  { src: '/images/gallery/photo-6.jpg', title: 'White Coneflower', category: 'Macro' },
  { src: '/images/gallery/photo-7.jpg', title: 'Backlit Forest Moss', category: 'Macro' },
  { src: '/images/gallery/photo-4.jpg', title: 'The Alhambra, Granada', category: 'Travel' },
]

export function SelectedWorksSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / el.clientWidth)
    setActiveIndex(Math.min(Math.max(index, 0), works.length - 1))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateActiveIndex, { passive: true })
    return () => el.removeEventListener('scroll', updateActiveIndex)
  }, [updateActiveIndex])

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const clamped = Math.min(Math.max(index, 0), works.length - 1)
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-10">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
          Selected Works
        </p>
        <h2 className="text-[#f5f0eb] font-serif italic text-3xl md:text-5xl font-medium text-balance">
          Recent captures
        </h2>
      </div>

      <div className="relative">
        {/* Scroll track — one image per view, centered */}
        <div
          ref={scrollRef}
          className="works-scroll flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        >
          {works.map((work) => (
            <figure
              key={work.src}
              className="relative shrink-0 w-full snap-center flex flex-col items-center px-1"
            >
              <div className="flex w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.src || '/placeholder.svg'}
                  alt={`${work.title} — ${work.category} photography by Christopher Brenzel`}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg border border-[#1a1a1a]"
                />
              </div>
              <figcaption className="mt-4 text-center">
                <p className="text-white/40 font-sans text-[10px] tracking-[0.2em] uppercase mb-1">
                  {work.category}
                </p>
                <p className="text-[#f5f0eb] font-serif italic text-lg font-medium">
                  {work.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Arrow controls */}
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous photo"
          className="absolute left-2 top-[35%] -translate-y-1/2 hidden sm:flex h-11 w-11 items-center
                     justify-center rounded-full border border-[#2a2a2a] bg-black/40 backdrop-blur-sm
                     text-[#f5f0eb] transition-all hover:border-[#555] hover:bg-black/70
                     disabled:opacity-0 disabled:cursor-default"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === works.length - 1}
          aria-label="Next photo"
          className="absolute right-2 top-[35%] -translate-y-1/2 hidden sm:flex h-11 w-11 items-center
                     justify-center rounded-full border border-[#2a2a2a] bg-black/40 backdrop-blur-sm
                     text-[#f5f0eb] transition-all hover:border-[#555] hover:bg-black/70
                     disabled:opacity-0 disabled:cursor-default"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {works.map((work, i) => (
          <button
            key={work.src}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to photo ${i + 1}: ${work.title}`}
            aria-current={i === activeIndex}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? 'w-6 bg-[#f5f0eb]' : 'w-1.5 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
