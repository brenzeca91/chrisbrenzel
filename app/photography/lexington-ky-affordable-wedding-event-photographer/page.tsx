import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Camera, Check, ExternalLink, Heart, Info } from 'lucide-react'
import { PhotoCarousel } from './carousel'

export const metadata: Metadata = {
  title: 'Affordable Wedding & Event Photographer in Lexington KY | Chris Brenzel',
  description:
    'Budget-friendly photography in Lexington, KY for courthouse weddings, micro-weddings, engagements, proposals, birth announcements, family milestones, and small personal events. Limited availability, with simple sessions sometimes available under $500.',
}

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

const coverageExamples = [
  {
    label: 'Courthouse ceremony',
    desc: 'Quick, relaxed coverage of the signing and moments after. Usually 1–2 hours.',
  },
  {
    label: 'Micro-wedding or elopement',
    desc: 'Small ceremony with a handful of guests. Candid, natural approach with no formal posing workflow.',
  },
  {
    label: 'Engagement session',
    desc: 'Outdoor session, natural light, relaxed walk-around. Great for birth announcements or save-the-dates.',
  },
  {
    label: 'Newborn / fresh 48',
    desc: 'Hospital or home. Sibling introductions, tiny details, quiet moments.',
  },
  {
    label: 'Family milestone',
    desc: 'Anniversaries, adoption days, gender reveals, small outdoor celebrations.',
  },
]

const faqItems = [
  {
    q: 'Can I get wedding photos under $500 in Lexington, KY?',
    a: 'For very simple events — a courthouse ceremony, a short outdoor session, or a small backyard elopement — a session under $500 may be possible depending on date, location, and coverage length. Send me the details and I can give you an honest answer.',
  },
  {
    q: 'How much do you charge for a wedding?',
    a: 'For a wedding I typically charge $1,000 plus $500 to $2,000 depending on the agreed upon photo package and types of deliverables. Standard delivery includes 150 to 300 edited photos (color and b&w) available for digital download.',
  },
  {
    q: 'Are you a full-time wedding photographer?',
    a: 'No. My primary work is nature, wildlife, macro, and landscape photography in Kentucky. I take on a small number of personal event sessions per year, to support my other photography efforts such as travel expenses, buying lenses and equipment, and other overhead costs. When the event is a good fit for a candid, natural approach and the client has realistic expectations.',
  },
  {
    q: 'What types of events do you cover?',
    a: 'Small weddings, elopements, courthouse ceremonies, micro-weddings, engagement photos, proposal photos, birth announcements, fresh 48 sessions, family milestones, outdoor portraits, and small personal celebrations.',
  },
  {
    q: 'What areas near Lexington do you cover?',
    a: 'I am based in Lexington and regularly work throughout Central Kentucky including Nicholasville, Georgetown, Versailles, Richmond, Winchester, and surrounding Fayette County communities.',
  },
  {
    q: 'When should I hire a dedicated wedding photographer instead?',
    a: 'If you have a large guest count, need full-day coverage from getting ready through reception, want a second shooter, or are looking for printed albums and a full wedding workflow — a full-time wedding photographer is the right call. I can personally recommend Kevin and Anna Photography and Meghan Beth Photography in Lexington.',
  },
]

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
          events in Lexington and Central Kentucky.
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
        <p className="text-blue-300 font-sans text-xs mt-4 mb-4 leading-relaxed max-w-lg">
          In most cases full wedding coverage is best handled by a dedicated wedding
          photographer.{' '}
          <a
            href="#top-recommendations"
            className="hover:text-[#7ab2ff] transition-colors underline"
          >
            Check out my top recommendations
          </a>
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
            alt="Couple laughing and popping champagne in a sunlit pine tree avenue during an engagement shoot in Lexington KY"
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
              work is out in the field, not in a studio or capturing portraits.
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed mb-4">
              That said, I occasionally take on limited personal event work for
              small, simple, lower-pressure occasions where a natural, candid
              approach is a better fit than a formal wedding photography workflow.
              If the event is relaxed and the expectations are clear, it can be a
              good match.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/photography"
                className="text-white/40 hover:text-white/70 font-sans text-sm transition-colors flex items-center gap-1"
              >
                Photography <ArrowUpRight className="w-3 h-3" />
              </Link>
              <Link
                href="/photography/gallery"
                className="text-white/40 hover:text-white/70 font-sans text-sm transition-colors flex items-center gap-1"
              >
                Gallery <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
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
      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-14">
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

      <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-14"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* What to expect + engagement ring photo */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl items-start">

          {/* Ring close-up */}
          <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a]" style={{ height: '300px' }}>
            <img
              src="/images/events/engagement-ring.jpg"
              alt="Close-up of an engagement ring on a couple's stacked hands — engagement photography in Lexington KY"
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

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Simple coverage examples */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          Simple coverage examples
        </p>
        <p className="text-white/50 font-sans text-base leading-relaxed max-w-2xl mb-10">
          Here are the types of sessions that tend to be a good fit for my approach
          and price range.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl">
          {coverageExamples.map((example) => (
            <div
              key={example.label}
              className="border border-[#1a1a1a] bg-[#090909] rounded-lg p-5"
            >
              <p className="text-[#f5f0eb] font-sans text-sm font-semibold mb-2">{example.label}</p>
              <p className="text-white/40 font-sans text-xs leading-relaxed">{example.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo carousel */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <PhotoCarousel />
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-4"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* When to hire a dedicated wedding photographer */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-9 md:pb-9">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          When to hire a dedicated wedding photographer
        </p>
        <p className="text-white/50 font-sans text-base leading-relaxed max-w-2xl mb-8">
          For larger, more complex weddings, a full-time wedding photographer will
          serve you far better than I can. That includes:
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
          primary work is weddings.
          <br />
          <br />
          Wedding photographers who specialize in capturing people and events are
          always worth the investment. For full wedding-day coverage, I strongly
          recommend working with a dedicated wedding photographer — it will make a
          meaningful difference in your photos. See my{' '}
          <a href="#top-recommendations" className="text-blue-300 underline hover:text-[#7ab2ff] transition-colors">
            top recommendations
          </a>{' '}
          for photographers in Lexington, KY that I can personally vouch for.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Recommended pros */}
      <section id="top-recommendations" className="max-w-7xl mx-auto px-6 mt-11 pb-12 md:pb-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          Top recommendations
        </p>
        <p className="text-white/50 font-sans text-sm leading-relaxed max-w-2xl mb-8">
          I have personally seen both of these photographers work. They are
          excellent and I highly recommend them without hesitation for weddings,
          family portraits, engagement photos, and more!
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

      {/* Service area */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          Service area
        </p>
        <p className="text-white/50 font-sans text-sm leading-relaxed max-w-2xl">
          Based in Lexington, KY and available throughout Central Kentucky including{' '}
          <span className="text-white/70">Nicholasville</span>,{' '}
          <span className="text-white/70">Georgetown</span>,{' '}
          <span className="text-white/70">Versailles</span>,{' '}
          <span className="text-white/70">Richmond</span>,{' '}
          <span className="text-white/70">Winchester</span>, and surrounding Fayette County communities.
          Travel outside Central Kentucky is possible for the right event — just ask.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          Frequently asked questions
        </p>
        <p className="text-white/50 font-sans text-base leading-relaxed max-w-2xl mb-10">
          Common questions about affordable wedding and event photography in Lexington, KY.
        </p>
        <div className="flex flex-col gap-0 max-w-3xl divide-y divide-[#1a1a1a]">
          {faqItems.map((item) => (
            <div key={item.q} className="py-6">
              <p className="text-[#f5f0eb] font-sans text-sm font-semibold mb-3 leading-snug">
                {item.q}
              </p>
              <p className="text-white/45 font-sans text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
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
            <div className="flex gap-4 mt-2">
              <Link href="/photography/prints" className="text-white/30 hover:text-white/60 font-sans text-sm transition-colors">
                Prints
              </Link>
              <Link href="/photography/contact" className="text-white/30 hover:text-white/60 font-sans text-sm transition-colors">
                Contact
              </Link>
            </div>
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
