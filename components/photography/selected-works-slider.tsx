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
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }, [])

  useEffect(() => {
    updateScrollState()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scrollByAmount = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = Math.max(el.clientWidth * 0.8, 320)
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
            Selected Works
          </p>
          <h2 className="text-[#f5f0eb] font-serif italic text-3xl md:text-4xl font-medium text-balance">
            Recent captures
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll to previous photos"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2a2a]
                       text-[#f5f0eb] transition-all hover:border-[#555] hover:bg-[#161616]
                       disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            disabled={!canScrollRight}
            aria-label="Scroll to more photos"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2a2a]
                       text-[#f5f0eb] transition-all hover:border-[#555] hover:bg-[#161616]
                       disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {works.map((work) => (
          <figure
            key={work.src}
            className="group relative snap-start shrink-0 overflow-hidden rounded-lg border border-[#1a1a1a]
                       w-[80vw] sm:w-[60vw] md:w-[42vw] lg:w-[30vw] max-w-[440px]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#141414]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={work.src || "/placeholder.svg"}
                alt={`${work.title} — ${work.category} photography by Christopher Brenzel`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white/50 font-sans text-[10px] tracking-[0.15em] uppercase mb-1">
                {work.category}
              </p>
              <p className="text-[#f5f0eb] font-serif text-base font-medium">{work.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
