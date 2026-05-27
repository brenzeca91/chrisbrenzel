import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Preclinical Research Strategy',
    copy: 'Support for teams developing, positioning, or communicating preclinical research services, including oncology models, pharmacology, toxicology, and translational research capabilities.',
  },
  {
    number: '02',
    title: 'Business Development & Licensing',
    copy: 'Project-based or fractional support for pipeline development, account planning, outreach strategy, proposal communication, commercial licensing, and strategic partnership discussions.',
  },
  {
    number: '03',
    title: 'Translational Oncology & Model Systems',
    copy: 'Commercial and strategic support for organizations working with PDX models, genetically engineered models, humanized systems, and other preclinical tools used to move oncology programs forward.',
  },
  {
    number: '04',
    title: 'Scientific Partnership & Communication',
    copy: 'Help translating technical capabilities into clear client-facing narratives for biotech, pharma, academic, and CRO audiences.',
  },
]

const typicalProjects = [
  'Market positioning review',
  'Service-line messaging',
  'BD and outreach strategy',
  'Key account planning',
  'Proposal and pitch support',
  'Licensing and partnership support',
  'CRM and pipeline process improvement',
  'Conference follow-up planning',
  'Scientific sales enablement',
]

export default function ServicesPage() {
  return (
    <main className="pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
          Services
        </p>
        <h1 className="text-white font-sans font-semibold text-4xl md:text-5xl leading-tight mb-4 text-balance">
          How I can help
        </h1>
        <p className="text-[#8fa3bb] font-sans text-lg leading-relaxed max-w-2xl">
          Project-based, fractional, or advisory support tailored to where your
          organization is and what it needs to move forward.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Service cards */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="flex flex-col gap-8">
          {services.map((svc) => (
            <div
              key={svc.number}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 border border-[#1e2d4a]
                         rounded p-8 hover:border-[#2a4060] hover:bg-[#0d1530] transition-all"
            >
              <span className="text-blue-500/40 font-mono text-xs tracking-[0.2em] pt-1">
                {svc.number}
              </span>
              <div>
                <h2 className="text-white font-sans font-semibold text-xl md:text-2xl mb-4">
                  {svc.title}
                </h2>
                <p className="text-[#8fa3bb] font-sans text-base leading-relaxed max-w-2xl">
                  {svc.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Typical projects */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-10 font-sans">
          Typical projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {typicalProjects.map((project) => (
            <div
              key={project}
              className="flex items-start gap-3 p-5 border border-[#1e2d4a] rounded
                         hover:border-[#2a4060] transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span className="text-[#8fa3bb] font-sans text-sm leading-relaxed">
                {project}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="h-px bg-[#1e2d4a] mb-12" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[#8fa3bb] font-sans text-base max-w-md">
            Have a specific challenge in mind? Reach out to discuss what kind of
            support would be most useful.
          </p>
          <Link
            href="/contact?type=consulting"
            className="inline-flex items-center gap-2 border border-[#1e2d4a] hover:border-blue-500
                       text-[#8fa3bb] hover:text-white font-sans font-medium text-sm px-6 py-3 rounded
                       transition-colors whitespace-nowrap"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
