'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

type Review = {
  name: string
  rating: number
  service: string
  quote: string
  date: string
}

const reviews: Review[] = [
  {
    name: 'G.K.',
    rating: 5,
    service: 'Portrait Photography',
    quote:
      'Amazing experience! He came to our home for our newborn photoshoot and made everything so comfortable and stress-free. He was so patient and gentle with our baby, and the photos came out beautiful! We absolutely love them and would definitely recommend him.',
    date: 'Sep 20, 2026',
  },
  {
    name: 'K.B.',
    rating: 5,
    service: 'Photography Lessons',
    quote:
      'I could tell that Chris is knowledgeable and passionate about photography. He takes the time to listen to what you say while giving you his opinion on a subject matter while not making you feel dumb about not knowing much about the subject. I am looking forward to learning more about photography from Chris.',
    date: 'Sep 19, 2026',
  },
  {
    name: 'M.H.',
    rating: 5,
    service: 'Portrait Photography',
    quote: 'Great experience, Chris was a pleasure to work with!',
    date: 'Jul 15, 2026',
  },
]

const AUTO_ADVANCE_MS = 7000

export function ReviewsSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % reviews.length) + reviews.length) % reviews.length)
  }, [])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % reviews.length)
    }, AUTO_ADVANCE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleManualNav = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    goTo(index)
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % reviews.length)
    }, AUTO_ADVANCE_MS)
  }

  const active = reviews[activeIndex]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
        Client reviews
      </p>

      <div className="relative border border-[#1a1a1a] bg-[#0a0a0a] rounded-lg px-6 py-10 md:px-14 md:py-14">
        <div
          role="group"
          aria-roledescription="slide"
          aria-label={`Review ${activeIndex + 1} of ${reviews.length}`}
          className="flex flex-col items-center text-center max-w-2xl mx-auto min-h-[220px] md:min-h-[200px]"
        >
          <div className="flex items-center gap-1 mb-5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < active.rating ? 'fill-[#5b9bff] text-[#5b9bff]' : 'fill-none text-white/20'
                }`}
              />
            ))}
          </div>

          <p className="text-[#f5f0eb] font-serif italic text-lg md:text-2xl leading-relaxed text-balance mb-6">
            &ldquo;{active.quote}&rdquo;
          </p>

          <p className="text-[#f5f0eb] font-sans text-sm font-semibold">{active.name}</p>
          <p className="text-white/40 font-sans text-xs mt-1">
            {active.service} &middot; {active.date}
          </p>
        </div>

        {/* Arrow controls */}
        <button
          type="button"
          onClick={() => handleManualNav(activeIndex - 1)}
          aria-label="Previous review"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center
                     justify-center rounded-full border border-[#2a2a2a] bg-black/40 backdrop-blur-sm
                     text-[#f5f0eb] transition-all hover:border-[#555] hover:bg-black/70"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => handleManualNav(activeIndex + 1)}
          aria-label="Next review"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center
                     justify-center rounded-full border border-[#2a2a2a] bg-black/40 backdrop-blur-sm
                     text-[#f5f0eb] transition-all hover:border-[#555] hover:bg-black/70"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {reviews.map((review, i) => (
          <button
            key={review.name}
            type="button"
            onClick={() => handleManualNav(i)}
            aria-label={`Go to review from ${review.name}`}
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
