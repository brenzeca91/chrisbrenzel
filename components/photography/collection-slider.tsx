'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export type CollectionPhoto = {
  src: string
  title: string
  caption?: string
}

type Props = {
  title: string
  subtitle: string
  description: string
  href: string
  photos: CollectionPhoto[]
  accentColor?: string
}

export function CollectionSlider({
  title,
  subtitle,
  description,
  href,
  photos,
  accentColor = '#f5f0eb',
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / el.clientWidth)
    setActiveIndex(Math.min(Math.max(index, 0), photos.length - 1))
  }, [photos.length])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateActiveIndex, { passive: true })
    return () => el.removeEventListener('scroll', updateActiveIndex)
  }, [updateActiveIndex])

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const clamped = Math.min(Math.max(index, 0), photos.length - 1)
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
            Collection
          </p>
          <h2
            className="font-serif italic text-4xl md:text-5xl font-medium text-balance leading-tight"
            style={{ color: accentColor }}
          >
            {title}
          </h2>
          <p className="text-white/50 font-sans text-base mt-3 max-w-lg leading-relaxed">
            {description}
          </p>
        </div>
        <Link
          href={href}
          className="shrink-0 inline-flex items-center gap-2 border border-[#333] hover:border-[#666]
                     text-[#f5f0eb] hover:text-white font-sans text-sm px-5 py-2.5 rounded
                     transition-all self-start md:self-auto"
        >
          View full collection
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          ref={scrollRef}
          className="works-scroll flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        >
          {photos.map((photo, i) => (
            <figure
              key={photo.src}
              className="relative shrink-0 w-full snap-center flex flex-col items-center px-1"
            >
              <div className="flex w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg border border-[#1a1a1a]"
                />
              </div>
              {(photo.title || photo.caption) && (
                <figcaption className="mt-4 text-center">
                  <p className="text-white/40 font-sans text-[10px] tracking-[0.2em] uppercase mb-1">
                    {subtitle}
                  </p>
                  <p className="text-[#f5f0eb] font-serif italic text-lg font-medium">
                    {photo.title}
                  </p>
                  {photo.caption && (
                    <p className="text-white/40 font-sans text-sm mt-1">{photo.caption}</p>
                  )}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {/* Arrows */}
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
          disabled={activeIndex === photos.length - 1}
          aria-label="Next photo"
          className="absolute right-2 top-[35%] -translate-y-1/2 hidden sm:flex h-11 w-11 items-center
                     justify-center rounded-full border border-[#2a2a2a] bg-black/40 backdrop-blur-sm
                     text-[#f5f0eb] transition-all hover:border-[#555] hover:bg-black/70
                     disabled:opacity-0 disabled:cursor-default"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === activeIndex}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? 'w-6 bg-[#f5f0eb]' : 'w-1.5 bg-white/20 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
