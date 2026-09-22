import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Users, Baby, PersonStanding, Camera as CameraIcon, Gift, PartyPopper } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Engagement & Family Photographer in Lexington, KY',
  description:
    'Relaxed, candid engagement and family photography in Lexington, KY and Central Kentucky. View Chris Brenzel’s work and book a session.',
  alternates: { canonical: 'https://www.chrisbrenzel.com/photography/engagement-family-photographer-lexington-ky' },
  openGraph: {
    title: 'Engagement & Family Photographer in Lexington, KY',
    description:
      'Relaxed, candid engagement and family photography in Lexington, KY and Central Kentucky.',
    url: 'https://www.chrisbrenzel.com/photography/engagement-family-photographer-lexington-ky',
    siteName: 'ChrisBrenzel.com',
    type: 'website',
    images: [{ url: 'https://www.chrisbrenzel.com/og-image.png', width: 1200, height: 630, alt: 'Christopher Brenzel Photography' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engagement & Family Photographer in Lexington, KY',
    images: ['https://www.chrisbrenzel.com/og-image.png'],
  },
}

const familyUseCases = [
  { label: 'Annual family photographs', icon: Users },
  { label: 'Families with young children', icon: Baby },
  { label: 'Parent-and-child portraits', icon: PersonStanding },
  { label: 'Sibling photographs', icon: Users },
  { label: 'Grandparents and extended family', icon: Heart },
  { label: 'Birth announcements', icon: Gift },
  { label: 'Outdoor family milestones', icon: PartyPopper },
]

const sessionSteps = [
  {
    n: '1',
    title: 'Tell me what you are planning',
    desc: 'Share your preferred date, location, group size, and the kind of photographs you have in mind.',
  },
  {
    n: '2',
    title: 'Choose an approach',
    desc: 'We will talk through locations, timing, clothing, and the balance between portraits and candid photographs.',
  },
  {
    n: '3',
    title: 'Relax and be present',
    desc: 'I will provide direction when it is helpful, but you will not need to perform for the camera.',
  },
  {
    n: '4',
    title: 'Receive your photographs',
    desc: 'Edited images are delivered through an online gallery for viewing, downloading, and sharing.',
  },
]

const faqItems = [
  {
    q: 'What kinds of sessions do you photograph?',
    a: 'I focus on engagement sessions, couples photography, family portraits, birth announcements, outdoor portraits, and other small personal milestones.',
  },
  {
    q: 'Where do sessions take place?',
    a: 'Most sessions take place outdoors or at a location that has personal meaning to you. We can discuss parks, neighborhoods, private property, or another location in Central Kentucky.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Earlier is better for weekends, fall color, spring blooms, and other popular dates. Send an inquiry even if your plans are still flexible.',
  },
  {
    q: 'Do you photograph full weddings?',
    a: 'I focus on engagements, families, and smaller personal sessions. For large full-day weddings, I can recommend photographers who specialize in complete wedding-day coverage.',
  },
]

export default function EngagementFamilyPhotographerPage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-5 font-sans">
          Lexington, Kentucky &middot; Central Kentucky
        </p>
        <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-5 text-balance max-w-4xl">
          Engagement &amp; Family Photographer in Lexington, KY
        </h1>
        <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-8">
          Relaxed, candid photography for couples and families who want photographs
          that feel like the day actually felt.
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
            className="flex items-center gap-2 border border-[#222] hover:border-[#444] text-white/50 hover:text-[#f5f0eb] font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
          >
            View People Portfolio
          </Link>
        </div>
      </section>

      {/* Hero image */}
      <section className="max-w-7xl mx-auto px-6 pt-8">
        <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a]" style={{ height: '500px' }}>
          <div className="absolute inset-0 bg-[#0a0f1e]/20" aria-hidden="true" />
          <img
            src="/images/events/couple-sunset.jpg"
            alt="Couple standing close together at golden hour during an engagement session in Lexington, KY"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-8"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Photos that feel like you */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          Photos that feel like you
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
          <p className="text-white/55 font-sans text-base leading-relaxed">
            Whether you are celebrating an engagement, updating family photographs,
            or marking an important season of life, I create natural images with
            room for real expressions, movement, and connection.
          </p>
          <p className="text-white/55 font-sans text-base leading-relaxed">
            Sessions are guided without feeling overly posed. We will choose a
            location and approach that fits your family, your relationship, and
            the kind of photographs you actually want to keep.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Engagement & couples */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a]" style={{ height: '300px' }}>
            <img
              src="/images/events/engagement-embrace.jpg"
              alt="Engaged couple embracing outdoors during a candid engagement session near Lexington, KY"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="lg:col-span-2">
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              Engagement and couples photography
            </p>
            <p className="text-white/55 font-sans text-base leading-relaxed mb-4 max-w-2xl">
              Engagement sessions should feel like time spent together — not a long
              list of poses.
            </p>
            <p className="text-white/50 font-sans text-sm leading-relaxed max-w-2xl">
              I will help you feel comfortable in front of the camera while
              documenting the way you naturally interact. Sessions can be used for
              save-the-date photographs, announcements, proposal celebrations, or
              simply photographs of the two of you in a meaningful place.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Family photography */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-10">
          <div className="lg:col-span-2 lg:order-1">
            <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              Family photography
            </p>
            <p className="text-white/55 font-sans text-base leading-relaxed mb-4 max-w-2xl">
              Family sessions are relaxed, flexible, and built around connection.
            </p>
            <p className="text-white/50 font-sans text-sm leading-relaxed max-w-2xl">
              I photograph families outdoors, at meaningful locations, and in
              everyday moments where children can move and interact naturally. The
              goal is a gallery that includes both beautiful portraits and the
              small moments you will want to remember later.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a] lg:order-2" style={{ height: '300px' }}>
            <img
              src="/images/events/siblings.jpg"
              alt="Siblings photographed together outdoors during a relaxed family session in Central Kentucky"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <p className="text-white/40 font-sans text-sm font-semibold uppercase tracking-[0.15em] mb-5">
          Family sessions may be a good fit for:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl">
          {familyUseCases.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-start gap-3 border border-[#1a1a1a] bg-[#0a0a0a] rounded-lg px-4 py-3"
            >
              <Icon className="w-4 h-4 text-[#5b9bff] mt-0.5 shrink-0" />
              <span className="text-white/55 font-sans text-xs leading-relaxed">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* What a session is like */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          What a session is like
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
          {sessionSteps.map((step) => (
            <div key={step.n} className="border border-[#1a1a1a] bg-[#090909] rounded-lg p-5">
              <p className="text-[#5b9bff] font-serif italic text-2xl mb-3">{step.n}</p>
              <p className="text-[#f5f0eb] font-sans text-sm font-semibold mb-2 leading-snug">{step.title}</p>
              <p className="text-white/40 font-sans text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Service area */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          Serving Lexington and Central Kentucky
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
          <p className="text-white/55 font-sans text-base leading-relaxed">
            I am based in Lexington and photograph sessions throughout Central
            Kentucky, including{' '}
            <span className="text-white/70">Nicholasville</span>,{' '}
            <span className="text-white/70">Georgetown</span>,{' '}
            <span className="text-white/70">Versailles</span>,{' '}
            <span className="text-white/70">Richmond</span>,{' '}
            <span className="text-white/70">Winchester</span>, and nearby
            communities.
          </p>
          <p className="text-white/50 font-sans text-sm leading-relaxed">
            If you have a location in mind, include it in your inquiry. I am happy
            to discuss whether it will work well for the kind of photographs you
            want.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
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

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Ready to plan your session?
          </p>
          <p className="text-white/55 font-sans text-lg leading-relaxed mb-8">
            Tell me what you are celebrating, and we can figure out the right
            approach together.
          </p>
          <Link
            href="/photography/contact/session"
            className="inline-flex items-center gap-2 bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f] font-sans font-semibold text-sm px-6 py-3 rounded transition-colors"
          >
            Book an Engagement or Family Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
