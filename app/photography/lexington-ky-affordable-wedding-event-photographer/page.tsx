'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Camera, Check, ChevronLeft, ChevronRight, ExternalLink, Heart, Info } from 'lucide-react'
import { useEffect, useState } from 'react'

const goodFitEvents = [
  'Courthouse weddings',
  'Micro-weddings and elopements',
  'Backyard ceremonies',
  'Engagement photos',
  'Proposal photos',
  'Birth announcements',
  'Fresh 48 / new baby photos',
  'Family milestones',
  'Outdoor portraits',
  'Small personal celebrations',
]

const whatToExpect = [
  'Natural light when possible',
  'Real moments over heavy posing',
  'Relaxed, low-pressure approach',
  'Clear expectations before the event',
  'Edited digital images delivered through an online gallery',
  'Honest communication about what I can and cannot provide',
]

const fullWeddingNeeds = [
  'Large weddings with 50+ guests',
  'Full-day coverage (ceremony through reception)',
  'Wedding party posing and timeline support',
  'Reception coverage and dancing shots',
  'Second shooter coordination',
  'Printed albums and full wedding workflow',
]

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
    alt: 'Young child gently touching newborn sibling\'s head',
  },
  {
    src: '/images/events/newborn-feet.jpg',
    alt: 'Close-up of newborn baby feet',
  },
]

function PhotoCarousel() {
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
    <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a]" style={{ height: '420px' }}>
      {carouselSlides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
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

export default function LexingtonEventPhotographyPage() {
  return (
    <main className="pt-14">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
          Lexington, KY
        </p>
        <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-5 text-balance max-w-4xl">
          Affordable Wedding &amp; Personal Event Photography in Lexington, KY
        </h1>
        <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-8">
          Budget-friendly photography for small weddings, courthouse ceremonies,
          engagements, birth announcements, family milestones, and simple personal
          events.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:chris@chrisbrenzel.com?subject=Event photography inquiry - Lexington KY"
            className="flex items-center gap-2 bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f] font-sans font-semibold text-sm px-6 py-3 rounded transition-colors"
          >
            Ask About Availability
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/photography/gallery"
            className="flex items-center gap-2 border border-[#222] hover:border-[#444] text-white/50 hover:text-[#f5f0eb] font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
          >
            View Photography
          </Link>
        </div>
        <p className="text-white/20 font-sans text-xs mt-5 leading-relaxed max-w-lg">
          Limited availability. Small events only. Full wedding coverage is best
          handled by a dedicated wedding photographer.
        </p>
      </section>

      {/* Hero image — champagne couple in pine avenue */}
      <section className="max-w-7xl mx-auto px-6 pb-0">
        <div
          className="relative rounded-lg overflow-hidden border border-[#1a1a1a]"
          style={{ height: '500px' }}
        >
          <div className="absolute inset-0 bg-[#0a0f1e]/20" aria-hidden="true" />
          <img
            src="/images/events/couple-champagne.jpg"
            alt="Couple laughing and popping champagne in a sunlit pine tree avenue during an engagement shoot"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-8"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl">
          <div>
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              About Christopher
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed mb-4">
              I am a Lexington-based photographer focused primarily on nature,
              wildlife, macro, and landscape photography in Kentucky. My day-to-day
              work is out in the field, not in a studio.
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed">
              That said, I occasionally take on limited personal event work for
              small, simple, lower-pressure occasions where a natural, candid
              approach is a better fit than a formal wedding photography workflow.
              If the event is relaxed and the expectations are clear, it can be a
              good match.
            </p>
          </div>
          <div className="border border-[#1a2a1a] bg-[#090f09] rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-4 h-4 text-[#6fcf97] mt-0.5 shrink-0" />
              <p className="text-white/50 font-sans text-xs font-semibold tracking-[0.1em] uppercase">
                A budget-friendly option for simple events
              </p>
            </div>
            <p className="text-white/45 font-sans text-sm leading-relaxed mb-3">
              If you are searching for an affordable wedding photographer in
              Lexington KY, cheap wedding photographers Lexington KY, or wedding
              photos under $500 in Lexington KY, this may be worth a conversation.
            </p>
            <p className="text-white/45 font-sans text-sm leading-relaxed">
              As a courthouse wedding photographer Lexington KY or Lexington KY
              engagement photographer, I can offer a relaxed, natural approach at
              a price point that full-service studios typically cannot.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Good fit events */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          This may be a good fit for
        </p>
        <p className="text-white/50 font-sans text-base leading-relaxed max-w-2xl mb-10">
          Small, simple occasions where natural and candid photography fits better
          than a formal wedding studio workflow.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl">
          {goodFitEvents.map((event) => (
            <div
              key={event}
              className="border border-[#1e2d1e] bg-[#090f09] rounded-lg px-4 py-3 text-center"
            >
              <p className="text-white/55 font-sans text-xs leading-relaxed">{event}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* What to expect + engagement ring photo */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl items-start">

          {/* Ring close-up */}
          <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a]" style={{ height: '300px' }}>
            <img
              src="/images/events/engagement-ring.jpg"
              alt="Close-up of an engagement ring on a couple's stacked hands"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              What to expect
            </p>
            <ul className="flex flex-col gap-3">
              {whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#6fcf97] mt-0.5 shrink-0" />
                  <span className="text-white/55 font-sans text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div>
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              Pricing &amp; availability
            </p>
            <p className="text-white/55 font-sans text-sm leading-relaxed mb-4">
              Pricing depends on date, location, coverage time, and final image
              needs. For small events, short sessions, courthouse ceremonies, and
              simple personal milestones, limited budget-friendly options may be
              available under $500.
            </p>
            <p className="text-white/40 font-sans text-sm leading-relaxed">
              Availability is limited. I take on a small number of personal event
              sessions per year alongside my nature photography work. Reach out
              early if you have a date in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Photo carousel */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <PhotoCarousel />
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-4"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* When to hire a dedicated wedding photographer */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          When to hire a dedicated wedding photographer
        </p>
        <p className="text-white/50 font-sans text-base leading-relaxed max-w-2xl mb-8">
          I want to be straightforward: for larger, more complex weddings, a
          full-time wedding photographer will serve you far better than I can.
          That includes:
        </p>
        <ul className="flex flex-col gap-3 max-w-xl mb-8">
          {fullWeddingNeeds.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0" />
              <span className="text-white/45 font-sans text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-white/40 font-sans text-sm leading-relaxed max-w-xl">
          If your event needs any of the above, please hire a professional whose
          primary work is weddings. Two photographers in Lexington I can
          personally recommend are listed below.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Recommended pros */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          Top recommendations
        </p>
        <p className="text-white/50 font-sans text-sm leading-relaxed max-w-2xl mb-8">
          I have personally seen both of these photographers work. They are
          excellent and I recommend them without hesitation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mb-12">
          {/* Kevin and Anna */}
          <a
            href="https://kevinandannaweddings.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-[#222] hover:border-[#3a3a3a] rounded-lg overflow-hidden transition-all hover:bg-[#0e0e0e]"
          >
            <div className="relative overflow-hidden" style={{ height: '180px' }}>
              <img
                src="/images/photographers/kevin-anna.jpg"
                alt="Sample wedding photo by Kevin and Anna Photography - outdoor ceremony at a Kentucky horse farm"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#5b9bff]" />
                <span className="text-white font-sans text-xs font-semibold">Top pick</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-[#f5f0eb] font-sans font-semibold text-base group-hover:text-white transition-colors">
                  Kevin and Anna Photography
                </p>
                <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40 transition-colors shrink-0" />
              </div>
              <p className="text-white/35 font-sans text-sm leading-relaxed">
                Award-winning husband and wife wedding photography team based in
                Lexington, KY. Full-day coverage, editorial style, over 150
                weddings photographed.
              </p>
              <p className="text-[#5b9bff] font-sans text-xs mt-1">kevinandannaweddings.com</p>
            </div>
          </a>

          {/* Meghan Beth */}
          <a
            href="https://www.meghanbeth.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-[#222] hover:border-[#3a3a3a] rounded-lg overflow-hidden transition-all hover:bg-[#0e0e0e]"
          >
            <div className="relative overflow-hidden" style={{ height: '180px' }}>
              <img
                src="/images/photographers/meghan-beth.jpg"
                alt="Sample wedding photo by Meghan Beth Photography - warm, intimate couple portrait"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#5b9bff]" />
                <span className="text-white font-sans text-xs font-semibold">Top pick</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-[#f5f0eb] font-sans font-semibold text-base group-hover:text-white transition-colors">
                  Meghan Beth Photography
                </p>
                <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40 transition-colors shrink-0" />
              </div>
              <p className="text-white/35 font-sans text-sm leading-relaxed">
                Full wedding coverage, albums, and a warm, natural style. Weddings,
                newborns, and family sessions in Lexington and surrounding areas.
              </p>
              <p className="text-[#5b9bff] font-sans text-xs mt-1">meghanbeth.com</p>
            </div>
          </a>
        </div>

        {/* Also worth looking at */}
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          Also worth looking at
        </p>
        <p className="text-white/50 font-sans text-sm leading-relaxed max-w-2xl mb-8">
          Other photographers doing great work in the Lexington area.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
          {/* Created with Grace */}
          <a
            href="https://www.createdwithgrace.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-[#222] hover:border-[#3a3a3a] rounded-lg overflow-hidden transition-all hover:bg-[#0e0e0e]"
          >
            <div className="relative overflow-hidden" style={{ height: '160px' }}>
              <img
                src="/images/photographers/created-with-grace.jpg"
                alt="Sample photo by Created with Grace Photography - Lexington KY wedding and portrait photographer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-[#f5f0eb] font-sans font-semibold text-sm group-hover:text-white transition-colors">
                  Created with Grace
                </p>
                <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/40 transition-colors shrink-0" />
              </div>
              <p className="text-white/30 font-sans text-xs leading-relaxed">
                Lexington KY wedding and portrait photographer. Bright, timeless style.
              </p>
              <p className="text-[#5b9bff] font-sans text-xs mt-1">createdwithgrace.com</p>
            </div>
          </a>

          {/* Megan Sweeting */}
          <a
            href="https://megansweeting.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-[#222] hover:border-[#3a3a3a] rounded-lg overflow-hidden transition-all hover:bg-[#0e0e0e]"
          >
            <div className="relative overflow-hidden" style={{ height: '160px' }}>
              <img
                src="/images/photographers/megan-sweeting.jpg"
                alt="Sample wedding photo by Megan Sweeting Photo and Video - Lexington KY wedding photographers"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-[#f5f0eb] font-sans font-semibold text-sm group-hover:text-white transition-colors">
                  Megan Sweeting Photo + Video
                </p>
                <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/40 transition-colors shrink-0" />
              </div>
              <p className="text-white/30 font-sans text-xs leading-relaxed">
                Lexington KY wedding photo and video. Documentary approach to wedding coverage.
              </p>
              <p className="text-[#5b9bff] font-sans text-xs mt-1">megansweeting.com</p>
            </div>
          </a>

          {/* Jennifer Chang */}
          <a
            href="https://jenniferchangphotography.com/portfolio#portfolio.0"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-[#222] hover:border-[#3a3a3a] rounded-lg overflow-hidden transition-all hover:bg-[#0e0e0e]"
          >
            <div className="relative overflow-hidden" style={{ height: '160px' }}>
              <img
                src="/images/photographers/jennifer-chang.jpg"
                alt="Sample wedding photo by Jennifer Chang Photography - elegant wedding portrait"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-[#f5f0eb] font-sans font-semibold text-sm group-hover:text-white transition-colors">
                  Jennifer Chang Photography
                </p>
                <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/40 transition-colors shrink-0" />
              </div>
              <p className="text-white/30 font-sans text-xs leading-relaxed">
                Wedding and portrait photographer. Fine art, editorial style portfolio.
              </p>
              <p className="text-[#5b9bff] font-sans text-xs mt-1">jenniferchangphotography.com</p>
            </div>
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Inquiry */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          Ask about availability
        </p>
        <p className="text-white/50 font-sans text-base leading-relaxed max-w-2xl mb-8">
          If this sounds like a good fit, send a quick note with the following
          details and I will get back to you within a few days.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
          <ul className="flex flex-col gap-3">
            {[
              'Event date',
              'Location in or near Lexington, KY',
              'Type of event',
              'Coverage length needed',
              'Must-have photos or moments',
              'Approximate budget',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Camera className="w-4 h-4 text-white/20 mt-0.5 shrink-0" />
                <span className="text-white/50 font-sans text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:chris@chrisbrenzel.com?subject=Event photography inquiry - Lexington KY"
              className="flex items-center gap-2 bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f] font-sans font-semibold text-sm px-6 py-3 rounded transition-colors self-start"
            >
              Email Chris
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-white/20 font-sans text-xs leading-relaxed max-w-xs">
              chris@chrisbrenzel.com. Response time is typically within a few
              days. Not every date or event type will be a good fit.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Footer nav */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-6">
          <Link href="/photography" className="text-white/30 hover:text-white/60 font-sans text-sm transition-colors">
            Photography
          </Link>
          <Link href="/photography/gallery" className="text-white/30 hover:text-white/60 font-sans text-sm transition-colors">
            Gallery
          </Link>
          <Link href="/photography/prints" className="text-white/30 hover:text-white/60 font-sans text-sm transition-colors">
            Prints
          </Link>
          <Link href="/photography/contact" className="text-white/30 hover:text-white/60 font-sans text-sm transition-colors">
            Contact
          </Link>
        </div>
      </section>

    </main>
  )
}
