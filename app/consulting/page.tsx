import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_URL, consultingServices } from '@/lib/consulting-services'

export const metadata: Metadata = {
  title: 'Biotech Consulting | CRSPZ Scientific Consulting — Chris Brenzel',
  description:
    'CRSPZ Scientific Consulting, led by Christopher Brenzel, provides preclinical program management, drug development strategy, fractional biotech leadership, scientific sales enablement, and technology commercialization.',
  alternates: { canonical: `${SITE_URL}/consulting` },
  openGraph: {
    title: 'CRSPZ Scientific Consulting | Christopher Brenzel',
    description:
      'Independent biotech consulting — preclinical program management, drug development strategy, fractional commercial leadership, scientific sales enablement, and technology commercialization.',
    url: `${SITE_URL}/consulting`,
    siteName: 'ChrisBrenzel.com',
    type: 'website',
  },
}

const strengths = [
  'Preclinical CRO services',
  'Translational oncology',
  'Gene editing technologies',
  'PDX and xenograft models',
  'Genetically engineered mouse and rat models',
  'Proposal development',
  'Contract and licensing negotiation',
  'Strategic partnerships',
  'Key account development',
  'Technical sales enablement',
  'Fundraising and investor readiness',
  'Technology and IP commercialization',
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/consulting/#service`,
      name: 'CRSPZ Scientific Consulting',
      description:
        'Independent biotech consultancy led by Christopher Brenzel, providing preclinical program management, drug development strategy, fractional commercial leadership, scientific sales enablement, and technology commercialization.',
      url: `${SITE_URL}/consulting`,
      founder: { '@id': `${SITE_URL}/#person` },
      areaServed: 'US',
      serviceType: consultingServices.map((s) => s.cardTitle),
    },
  ],
}

export default function ConsultingPage() {
  return (
    <main className="pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
              CRSPZ Scientific Consulting
            </p>
            <h1 className="text-white font-sans font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              Biotech strategy for
              <br />
              <span className="font-light text-[#8fa3bb]">preclinical and translational teams</span>
            </h1>
            <p className="text-[#8fa3bb] font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              I help emerging biotech companies, CROs, and technology-transfer teams move
              research forward — coordinating preclinical programs, sharpening development
              strategy, and building the commercial capabilities that turn scientific work
              into partnerships, funding, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/consulting/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
              >
                Discuss a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consulting/experience"
                className="inline-flex items-center gap-2 border border-[#1e2d4a] hover:border-[#3b82f6] text-[#8fa3bb] hover:text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
              >
                View Experience
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 md:w-72 lg:w-80">
              <div className="relative rounded-2xl overflow-hidden border border-[#1e2d4a]">
                <img
                  src="/images/chris-lab-portrait.jpg"
                  alt="Christopher Brenzel in a research laboratory"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/40 to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0d1530] border border-[#1e2d4a] rounded-xl px-4 py-2.5">
                <p className="text-white font-sans text-sm font-medium">Christopher Brenzel</p>
                <p className="text-[#6b8aaa] font-sans text-xs mt-0.5">CRSPZ Scientific Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1e2d4a]" /></div>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
          Consulting Services
        </p>
        <h2 className="text-white font-sans font-semibold text-3xl md:text-4xl leading-tight text-balance mb-12 max-w-2xl">
          Five ways to work together, depending on where your program stands.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consultingServices.map((service) => (
            <Link
              key={service.slug}
              href={`/consulting/${service.slug}`}
              className="group border border-[#1e2d4a] rounded p-8 hover:border-[#2a3d5a] hover:bg-[#0d1530] transition-all flex flex-col"
            >
              <h3 className="text-white font-sans font-semibold text-lg mb-3 leading-snug text-balance">
                {service.cardTitle}
              </h3>
              <p className="text-[#6b8aaa] font-sans text-sm leading-relaxed mb-6 flex-1">
                {service.cardDescription}
              </p>
              <span className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 font-sans text-sm font-medium transition-colors">
                {service.linkLabel}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Lab image band */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div
          className="relative rounded-lg overflow-hidden border border-[#1e2d4a] flex items-center justify-center"
          style={{ height: '320px' }}
          role="img"
          aria-label="Two scientists reviewing imaging results together in a research laboratory"
        >
          <img
            src="/images/consulting-collaboration.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ transform: 'scaleY(1.43)', transformOrigin: 'center' }}
          />
          <div className="absolute inset-0 bg-[#0a0f1e]/60" aria-hidden="true" />
          <p className="relative z-10 text-[#b8c7d9] font-sans text-xl md:text-2xl max-w-xl text-center px-6 text-balance">
            <strong className="block text-white font-semibold text-2xl md:text-3xl mb-2">
              Scientific understanding. Clear communication. Careful execution.
            </strong>
            The combination that keeps complex research programs organized and moving forward.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1e2d4a]" /></div>

      {/* Who this is for */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <h2 className="text-white font-sans font-semibold text-2xl md:text-3xl leading-tight text-balance">
            Who this is for
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Emerging and virtual biotech companies',
              'Preclinical CROs and scientific-service providers',
              'Academic technology-transfer teams and inventors',
              'Gene editing and model-system technology developers',
              'Founders who need fractional commercial leadership',
              'Teams preparing for fundraising or partnership conversations',
            ].map((area) => (
              <li key={area} className="flex items-start gap-3">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                <span className="text-[#8fa3bb] font-sans text-sm leading-relaxed">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1e2d4a]" /></div>

      {/* Selected Strengths */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-10 font-sans">
          Selected Strengths
        </p>
        <div className="flex flex-wrap gap-3">
          {strengths.map((s) => (
            <span
              key={s}
              className="border border-[#1e2d4a] text-[#8fa3bb] font-sans text-sm px-4 py-2 rounded hover:border-[#2a4a6a] hover:text-white transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0d1530] border-t border-b border-[#1e2d4a]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
            Get in Touch
          </p>
          <h2 className="text-white font-sans font-semibold text-3xl md:text-4xl mb-4 text-balance max-w-xl">
            Let&apos;s talk about your program.
          </h2>
          <p className="text-[#8fa3bb] font-sans text-base leading-relaxed max-w-xl mb-10">
            If any of these services sound relevant to where your company or technology
            stands, I would be glad to talk through the details and scope of a potential
            engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/consulting/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
            >
              Discuss a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/consulting/experience"
              className="inline-flex items-center gap-2 border border-[#1e2d4a] hover:border-[#3b82f6] text-[#8fa3bb] hover:text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
            >
              View Selected Experience
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
