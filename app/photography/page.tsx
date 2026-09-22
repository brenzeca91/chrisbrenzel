import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Users, Baby, Gift, PartyPopper, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portrait, Family & Event Photographer in Lexington, KY | Chris Brenzel',
  description:
    'Relaxed, candid photography for families, couples, engagements, newborns, and small events in Lexington and Central Kentucky.',
  alternates: { canonical: 'https://www.chrisbrenzel.com/photography' },
  openGraph: {
    title: 'Portrait, Family & Event Photographer in Lexington, KY | Chris Brenzel',
    description:
      'Relaxed, candid photography for families, couples, engagements, newborns, and small events in Lexington and Central Kentucky.',
    url: 'https://www.chrisbrenzel.com/photography',
    siteName: 'ChrisBrenzel.com',
    type: 'website',
    images: [{ url: 'https://www.chrisbrenzel.com/og-image.png', width: 1200, height: 630, alt: 'Christopher Brenzel Photography' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portrait, Family & Event Photographer in Lexington, KY | Chris Brenzel',
    images: ['https://www.chrisbrenzel.com/og-image.png'],
  },
}

const goodFitFor = [
  'Engagement sessions',
  'Couples portraits',
  'Family portraits',
  'Parent-and-child sessions',
  'Newborn and birth-announcement photographs',
  'Proposals',
  'Courthouse ceremonies',
  'Elopements',
  'Small personal celebrations',
  'Outdoor portraits',
]

const howItWorks = [
  { n: '1', title: 'Tell me what you are planning.' },
  { n: '2', title: 'Choose a location and approach.' },
  { n: '3', title: 'Relax and be present while I provide direction when helpful.' },
  { n: '4', title: 'Receive edited images through an online gallery.' },
]

const faqItems = [
  {
    q: 'What types of sessions do you photograph?',
    a: 'I photograph engagement sessions, couples portraits, family portraits, newborn and birth-announcement photographs, proposals, courthouse ceremonies, elopements, and other small personal celebrations.',
  },
  {
    q: 'Where do sessions take place?',
    a: 'Most sessions take place outdoors or at a location that has personal meaning to you — a park, a neighborhood, private property, or somewhere else in Central Kentucky. If you have a location in mind, mention it in your inquiry.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Earlier is better, especially for weekends, fall color, and spring blooms. Send an inquiry even if your plans are still flexible and I will work with you on timing.',
  },
  {
    q: 'Do you photograph full weddings?',
    a: 'My focus is engagements, families, and smaller personal sessions. For large full-day weddings, I am happy to recommend a dedicated wedding specialist who focuses on complete wedding-day coverage.',
  },
]

export default function PhotographyPage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/events/couple-sunset.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/50 to-[#0c0c0c]/20"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 md:pb-20 w-full">
          <p className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-6 font-sans">
            Lexington, Kentucky &middot; Central Kentucky
          </p>
          <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-balance max-w-4xl">
            Portrait, Family &amp; Event Photographer in Lexington, KY
          </h1>
          <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            Relaxed, candid photography for the people and moments that matter—engagements,
            families, newborns, milestones, and intimate events in Lexington and Central Kentucky.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/photography/contact/session"
              className="flex items-center gap-2 bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f] font-sans font-semibold text-sm px-6 py-3 rounded transition-colors"
            >
              Book a Session
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/photography/gallery?category=people"
              className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
            >
              View People Portfolio
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Engagements and couples */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a]" style={{ height: '320px' }}>
            <img
              src="/images/events/engagement-embrace.jpg"
              alt="Engaged couple embracing outdoors during a candid engagement session near Lexington, KY"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="lg:col-span-2">
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              Engagements and couples
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed max-w-2xl">
              Engagement sessions should feel like time spent together, not a long list of poses.
              I provide gentle direction while documenting the way you naturally interact, whether
              you are planning save-the-dates, celebrating a proposal, or simply preserving this
              season of your relationship.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Families */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 lg:order-1">
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              Families
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed max-w-2xl">
              Family sessions are relaxed, flexible, and built around connection. I photograph
              families outdoors and in meaningful locations, creating a gallery that includes both
              beautiful portraits and the small moments you will want to remember later.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a] lg:order-2" style={{ height: '320px' }}>
            <img
              src="/images/events/siblings.jpg"
              alt="Siblings photographed together outdoors during a relaxed family session in Central Kentucky"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Newborns and milestones */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a]" style={{ height: '320px' }}>
            <img
              src="/images/events/newborn-feet.jpg"
              alt="Close-up of a newborn baby's feet during a birth-announcement photography session"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="lg:col-span-2">
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              Newborns and milestones
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed max-w-2xl">
              For newborns, birth announcements, and family milestones, I focus on natural
              interactions, quiet details, and the relationships that make the moment meaningful.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Small events and elopements */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 lg:order-1">
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              Small events and elopements
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed max-w-2xl">
              For courthouse ceremonies, proposals, backyard celebrations, and intimate events, I
              offer simple, candid coverage with clear expectations before the day begins.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a] lg:order-2" style={{ height: '320px' }}>
            <img
              src="/images/events/couple-champagne.jpg"
              alt="Couple celebrating with champagne during a small backyard event in Kentucky"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Good fit for */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
          Good fit for
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl">
          {goodFitFor.map((label) => (
            <div
              key={label}
              className="flex items-center gap-2.5 border border-[#1a1a1a] bg-[#0a0a0a] rounded-lg px-4 py-3"
            >
              <Heart className="w-3.5 h-3.5 text-[#5b9bff] shrink-0" />
              <span className="text-white/60 font-sans text-xs leading-relaxed">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
          How it works
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {howItWorks.map((step) => (
            <div key={step.n} className="border border-[#1a1a1a] bg-[#090909] rounded-lg p-6">
              <p className="text-[#5b9bff] font-serif italic text-3xl mb-4">{step.n}</p>
              <p className="text-[#f5f0eb] font-sans text-sm leading-relaxed">{step.title}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Service area */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#5b9bff] shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase font-sans">
              Serving Central Kentucky
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-white/60 font-sans text-base leading-relaxed max-w-2xl">
              Based in Lexington, I photograph sessions throughout{' '}
              <span className="text-white/80">Lexington</span>,{' '}
              <span className="text-white/80">Nicholasville</span>,{' '}
              <span className="text-white/80">Georgetown</span>,{' '}
              <span className="text-white/80">Versailles</span>,{' '}
              <span className="text-white/80">Richmond</span>,{' '}
              <span className="text-white/80">Winchester</span>, and nearby Central Kentucky
              communities.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
          Frequently asked questions
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

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Nature photography cross-link */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-white/30 font-sans text-sm leading-relaxed">
          Looking for wildlife, landscape, or fine-art nature photography instead? Visit the{' '}
          <Link
            href="/nature-photography"
            className="text-white/50 hover:text-[#f5f0eb] underline underline-offset-2 transition-colors"
          >
            nature photography portfolio
          </Link>
          .
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#17233d] bg-[#070c17] rounded-lg p-8 md:p-12">
          <div>
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-sans">
              Get started
            </p>
            <h2 className="text-[#f5f0eb] font-serif italic text-2xl md:text-3xl font-medium mb-3 text-balance">
              Ready to plan your session?
            </h2>
            <p className="text-white/50 font-sans text-sm md:text-base leading-relaxed max-w-lg">
              Tell me what you are celebrating and we can figure out the right approach together.
            </p>
          </div>
          <Link
            href="/photography/contact/session"
            className="flex items-center gap-2 bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f] font-sans font-semibold text-sm px-6 py-3 rounded transition-colors shrink-0 self-start md:self-auto"
          >
            Book a Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
