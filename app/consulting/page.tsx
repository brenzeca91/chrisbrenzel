import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const valueCards = [
  {
    number: '01',
    title: 'Preclinical & Translational Research Support',
    desc: 'Experience supporting scientific discussions and project development around oncology models, patient-derived xenografts, genetically engineered rodents, cell line engineering, toxicology, pharmacology, and translational research platforms.',
  },
  {
    number: '02',
    title: 'Scientific Communication & Stakeholder Coordination',
    desc: 'Comfortable translating complex technical capabilities into clear communication for scientists, commercial teams, external partners, clients, and internal leadership. Strong fit for roles that require careful follow-up, documentation, and cross-functional coordination.',
  },
  {
    number: '03',
    title: 'Business Development & Partnership Strategy',
    desc: 'Background in account development, strategic partnerships, proposal development, contract coordination, licensing discussions, market positioning, revenue forecasting, and pipeline management within biotech and preclinical research service organizations.',
  },
  {
    number: '04',
    title: 'Gene Editing, Model Systems & Emerging Personalized Medicine',
    desc: 'Experience with CRISPR/Cas9, Cas-CLOVER, piggyBac transposon technologies, transgenic model creation, cell line engineering, and preclinical model systems. Currently pursuing graduate study in Pharmacogenomics and Personalized Healthcare.',
  },
]

const roleAreas = [
  'Preclinical or translational drug development',
  'Scientific project or program management',
  'Research operations or research administration',
  'Clinical research coordination or translational research support',
  'Business development or alliance management in biotech, pharma, CROs, or research services',
  'Scientific partnerships, vendor management, or research outsourcing',
  'Pharmacogenomics, genomic medicine, and personalized healthcare implementation',
  'Technical sales enablement, product strategy, or market development for scientific platforms',
]

const strengths = [
  'Scientific communication',
  'Cross-functional project coordination',
  'Client-facing research support',
  'Preclinical CRO services',
  'Translational oncology',
  'Gene editing technologies',
  'PDX and xenograft models',
  'Genetically engineered mouse and rat models',
  'Proposal development',
  'Contract and purchasing workflow support',
  'Budget tracking and research administration',
  'Strategic partnerships',
  'Key account development',
  'Technical sales enablement',
  'Documentation and SOP-minded execution',
]

export default function ProfessionalPage() {
  return (
    <main className="pt-14">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
              Professional Focus
            </p>
            <h1 className="text-white font-sans font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              Preclinical &amp; Translational
              <br />
              <span className="font-light text-[#8fa3bb]">Drug Development</span>
            </h1>
            <p className="text-[#8fa3bb] font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              I work at the intersection of scientific communication, preclinical research services,
              business development, and translational strategy. My background includes gene editing
              technologies, oncology model systems, client-facing research coordination, proposal
              development, strategic partnerships, and cross-functional project execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/consulting/experience"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
              >
                View Experience
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/CV-Christopher-Brenzel.pdf"
                download
                className="inline-flex items-center gap-2 border border-[#1e2d4a] hover:border-[#3b82f6] text-[#8fa3bb] hover:text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
              >
                Download CV
              </a>
              <Link
                href="/consulting/contact"
                className="inline-flex items-center gap-2 text-[#6b8aaa] hover:text-[#8fa3bb] font-sans font-medium text-sm px-6 py-3 transition-colors"
              >
                Contact Christopher
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border border-[#1e2d4a]">
              <img
                src="/images/chris-lab-portrait.jpg"
                alt="Christopher Brenzel in a research laboratory"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/40 to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#0d1530] border border-[#1e2d4a] rounded px-5 py-3">
              <p className="text-white font-sans text-sm font-medium">Christopher Brenzel</p>
              <p className="text-[#6b8aaa] font-sans text-xs mt-0.5">Preclinical &amp; Translational Drug Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1e2d4a]" /></div>

      {/* Section 1 — Professional Direction */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
          Professional Direction
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <h2 className="text-white font-sans font-semibold text-3xl md:text-4xl leading-tight text-balance">
            Focused on roles where science and strategy move together.
          </h2>
          <div className="space-y-4 text-[#8fa3bb] font-sans text-base leading-relaxed">
            <p>
              I am focused on roles where scientific communication, project coordination, and commercial
              strategy help move research programs forward. My experience has centered on preclinical CRO
              services, gene editing technologies, translational oncology, genetically engineered mouse and
              rat models, PDX model systems, and client-facing research support.
            </p>
            <p>
              I am especially interested in opportunities connected to preclinical and translational drug
              development, clinical research support, pharmacogenomics, precision medicine, scientific
              partnerships, research operations, business development, alliance management, or technical
              program and project management.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1e2d4a]" /></div>

      {/* Section 2 — Where I Add Value */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-12 font-sans">
          Where I Add Value
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valueCards.map((card) => (
            <div
              key={card.number}
              className="border border-[#1e2d4a] rounded p-8 hover:border-[#2a3d5a] hover:bg-[#0d1530] transition-all"
            >
              <p className="text-blue-500/40 font-mono text-xs tracking-[0.2em] mb-4">{card.number}</p>
              <h3 className="text-white font-sans font-semibold text-base mb-3 leading-snug">{card.title}</h3>
              <p className="text-[#6b8aaa] font-sans text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lab image band */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div
          className="relative rounded-lg overflow-hidden border border-[#1e2d4a] aspect-[21/9] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/images/consulting-collaboration.jpg')" }}
          role="img"
          aria-label="Two scientists reviewing imaging results together in a research laboratory"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/70 via-[#0a0f1e]/30 to-transparent" aria-hidden="true" />
          <p className="relative z-10 text-[#b8c7d9] font-sans text-xl md:text-2xl max-w-xl text-center px-6 text-balance">
            <strong className="block text-white font-semibold text-2xl md:text-3xl mb-2">
              Scientific understanding. Clear communication. Careful execution.
            </strong>
            The combination that keeps complex research projects organized and moving forward.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1e2d4a]" /></div>

      {/* Section 3 — Roles and Environments */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <div>
            <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-4 font-sans">
              Roles &amp; Environments
            </p>
            <h2 className="text-white font-sans font-semibold text-2xl md:text-3xl leading-tight text-balance">
              Looking for full-time opportunities where I can contribute meaningfully.
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {roleAreas.map((area) => (
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

      {/* Section 4 — Selected Strengths */}
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

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1e2d4a]" /></div>

      {/* Section 5 — Consulting note (understated) */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <p className="text-[#4a6380] font-sans text-sm leading-relaxed max-w-2xl">
          I am primarily focused on full-time professional opportunities, but I may also consider
          selective project-based or advisory work when there is a clear fit around preclinical
          research services, scientific communication, proposal support, partnership strategy, or
          gene editing and model system commercialization.
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0d1530] border-t border-b border-[#1e2d4a]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
            Get in Touch
          </p>
          <h2 className="text-white font-sans font-semibold text-3xl md:text-4xl mb-4 text-balance max-w-xl">
            Open to the right professional opportunity.
          </h2>
          <p className="text-[#8fa3bb] font-sans text-base leading-relaxed max-w-xl mb-10">
            I am interested in roles where scientific understanding, communication, organization, and
            relationship-building can support meaningful research. If my background seems relevant to
            your team or organization, I would be glad to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/consulting/experience"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
            >
              View Selected Experience
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/CV-Christopher-Brenzel.pdf"
              download
              className="inline-flex items-center gap-2 border border-[#1e2d4a] hover:border-[#3b82f6] text-[#8fa3bb] hover:text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
            >
              Download CV
            </a>
            <Link
              href="/consulting/contact"
              className="inline-flex items-center gap-2 border border-[#1e2d4a] hover:border-[#3b82f6] text-[#8fa3bb] hover:text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
            >
              Contact Christopher
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
