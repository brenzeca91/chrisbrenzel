import Link from 'next/link'
import { ArrowRight, MoveRight } from 'lucide-react'

const valueCards = [
  {
    number: '01',
    text: 'Translate science into market strategy',
  },
  {
    number: '02',
    text: 'Build stronger client and partner relationships',
  },
  {
    number: '03',
    text: 'Support preclinical growth with practical commercial execution',
  },
]

export default function ConsultingPage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
              Consulting
            </p>
            <h1 className="text-white font-sans font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              Strategic Biotech
              <br />
              <span className="font-light text-[#8fa3bb]">Consulting</span>
            </h1>
            <p className="text-[#8fa3bb] font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Practical business development, preclinical strategy, and scientific
              partnership support for biotech companies, CROs, and research service
              providers.
            </p>
            <p className="text-[#6b8aaa] font-sans text-base md:text-lg leading-relaxed mb-12 max-w-xl">
              I help life science organizations clarify their market position,
              communicate complex scientific capabilities, build strategic
              partnerships, and grow preclinical research opportunities.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/consulting/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500
                           text-white font-sans font-medium text-sm px-6 py-3 rounded
                           transition-colors"
              >
                Start a Consulting Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consulting/experience"
                className="inline-flex items-center gap-2 border border-[#1e2d4a] hover:border-[#3b82f6]
                           text-[#8fa3bb] hover:text-white font-sans font-medium text-sm px-6 py-3 rounded
                           transition-colors"
              >
                View Experience
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border border-[#1e2d4a]">
              <img
                src="/images/chris-lab-portrait.jpg"
                alt="Christopher Brenzel standing in a research laboratory"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/40 to-transparent pt-[25px] pb-[25px]"
                aria-hidden="true"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#0d1530] border border-[#1e2d4a] rounded px-5 py-3">
              <p className="text-white font-sans text-sm font-medium">Christopher Brenzel</p>
              <p className="text-[#6b8aaa] font-sans text-xs mt-0.5">
                Biotech Business Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Value cards */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-12 font-sans">
          What I do
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueCards.map((card) => (
            <div
              key={card.number}
              className="border border-[#1e2d4a] rounded p-8 hover:border-[#2a3d5a] transition-colors group"
            >
              <p className="text-blue-500/40 font-mono text-xs tracking-[0.2em] mb-6">
                {card.number}
              </p>
              <p className="text-white font-sans text-lg leading-snug font-medium">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lab image band */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="relative rounded-lg overflow-hidden border border-[#1e2d4a]">
          <img
            src="/images/consulting-collaboration.jpg"
            alt="Two scientists reviewing imaging results together at a biosafety cabinet in a research laboratory"
            className="w-full object-cover aspect-[16/9] md:aspect-[21/9]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/70 via-transparent to-transparent"
            aria-hidden="true"
          />
          <p className="absolute bottom-5 left-6 text-[#b8c7d9] font-sans text-sm max-w-md">
            Connecting scientific capabilities with practical commercial strategy.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Services teaser */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-4 font-sans">
              Services
            </p>
            <h2 className="text-white font-sans font-semibold text-3xl md:text-4xl leading-tight max-w-lg text-balance">
              Areas of focus
            </h2>
          </div>
          <Link
            href="/consulting/services"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-sans text-sm font-medium transition-colors shrink-0"
          >
            All services <MoveRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Preclinical Research Strategy',
              desc: 'Support for teams developing, positioning, or communicating preclinical research services, including oncology models, pharmacology, toxicology, and translational research capabilities.',
            },
            {
              title: 'Business Development & Licensing',
              desc: 'Project-based or fractional support for pipeline development, account planning, outreach strategy, proposal communication, and strategic partnership discussions.',
            },
            {
              title: 'Translational Oncology & Model Systems',
              desc: 'Commercial and strategic support for organizations working with PDX models, genetically engineered models, humanized systems, and other preclinical tools.',
            },
            {
              title: 'Scientific Partnership & Communication',
              desc: 'Help translating technical capabilities into clear client-facing narratives for biotech, pharma, academic, and CRO audiences.',
            },
          ].map((svc) => (
            <div
              key={svc.title}
              className="border border-[#1e2d4a] rounded p-8 hover:border-[#2a3d5a]
                         hover:bg-[#0d1530] transition-all"
            >
              <h3 className="text-white font-sans font-semibold text-lg mb-3">
                {svc.title}
              </h3>
              <p className="text-[#6b8aaa] font-sans text-sm leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#0d1530] border-t border-b border-[#1e2d4a]">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-white font-sans font-semibold text-2xl md:text-3xl mb-2 text-balance">
              Ready to start a conversation?
            </h2>
            <p className="text-[#8fa3bb] font-sans text-base">
              Consulting, advisory, or fractional business development support — reach out directly.
            </p>
          </div>
          <Link
            href="/consulting/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500
                       text-white font-sans font-medium text-sm px-8 py-4 rounded
                       transition-colors whitespace-nowrap"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
