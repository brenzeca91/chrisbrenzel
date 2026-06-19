// Orgs with real logo image files
const orgImageLogos: Record<string, { src: string; alt: string; bg: string; height: number }> = {
  'Hera BioLabs, Inc.': {
    src: '/images/logos/hera-biolabs.png',
    alt: 'Hera BioLabs',
    bg: '#ffffff',
    height: 52,
  },
  'Transposagen Biopharmaceuticals, Inc.': {
    src: '/images/logos/transposagen.webp',
    alt: 'Transposagen',
    bg: '#ffffff',
    height: 44,
  },
  'University of Cincinnati — James L. Winkle College of Pharmacy': {
    src: '/images/logos/university-of-cincinnati.png',
    alt: 'University of Cincinnati',
    bg: '#e00122',
    height: 52,
  },
  'University of Notre Dame': {
    src: '/images/logos/notre-dame.webp',
    alt: 'University of Notre Dame',
    bg: '#0c2340',
    height: 52,
  },
  'GemPharmatech': {
    src: '/images/logos/gempharmatech.png',
    alt: 'GemPharmatech',
    bg: '#ffffff',
    height: 44,
  },
}

// Text badge fallback for orgs without image logos
const orgBadges: Record<string, { initials: string; color: string; bg: string; full: string }> = {
  'The START Center for Cancer Research / XenoSTART': {
    initials: 'SC', color: '#ef4444', bg: '#1f0a0a', full: 'START Center',
  },
}

function OrgLogo({ org }: { org: string }) {
  const img = orgImageLogos[org]
  if (img) {
    return (
      <div
        className="shrink-0 rounded overflow-hidden flex items-center justify-center px-3 py-2"
        style={{ background: img.bg, height: img.height, minWidth: 80 }}
        title={org}
      >
        <img
          src={img.src}
          alt={img.alt}
          style={{ height: img.height - 16, width: 'auto', maxWidth: 120, objectFit: 'contain' }}
        />
      </div>
    )
  }
  const badge = orgBadges[org]
  if (!badge) return null
  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded border shrink-0"
      style={{ borderColor: badge.color + '33', background: badge.bg }}
      title={org}
    >
      <span className="font-mono font-bold text-sm leading-none" style={{ color: badge.color }}>
        {badge.initials}
      </span>
      <span className="hidden sm:block font-sans text-xs leading-none" style={{ color: badge.color + 'cc' }}>
        {badge.full}
      </span>
    </div>
  )
}

const timeline = [
  {
    title: 'Director of Business Development',
    org: 'The START Center for Cancer Research / XenoSTART',
    location: 'Remote',
    period: '2025',
    points: [
      'Supported external partnership development for XenoSTART preclinical oncology research services, with emphasis on patient-derived xenograft models, translational oncology, and drug development decision-making.',
      'Managed account and project development plans while tracking progress against relationship, proposal, contract, and study-planning milestones.',
      'Met with clinical cancer research stakeholders, including oncologists and clinical trial leaders, to connect clinical research needs with preclinical model selection.',
      'Communicated the translational relevance of patient-derived xenograft models and preclinical oncology platforms to scientific and industry stakeholders.',
    ],
  },
  {
    title: 'Sales and Business Development Manager, Mid-Atlantic Territory',
    org: 'GemPharmatech',
    location: 'Remote',
    period: '2024 – 2025',
    points: [
      'Supported client relationships involving genetically engineered mouse models, preclinical research services, and biomedical research applications.',
      'Communicated technical capabilities to scientific stakeholders across academic, biotech, pharmaceutical, and preclinical research organizations.',
    ],
  },
  {
    title: 'Executive Director, Gene Editing Solutions',
    org: 'Hera BioLabs, Inc.',
    location: 'Lexington, KY',
    period: '2020 – 2024',
    points: [
      'Led client-facing project management for cell line engineering, custom gene editing, and transgenic mouse and rat model creation, coordinating scope, timelines, scientific requirements, and internal execution.',
      'Hired and supervised scientific team members, expanding the gene editing team from 4 to 7 reports to support increased project volume.',
      'Led the strategic pivot from research-focused cell line creation toward CHO bioprocessing and cell line development service offerings.',
      'Implemented GLP-like quality controls, SOPs, and documentation practices to improve consistency, traceability, and client-ready project records.',
      'Oversaw gene editing service development involving CRISPR/Cas9, Cas-CLOVER, and piggyBac transposon-based technologies.',
    ],
  },
  {
    title: 'Executive Director, Business Development',
    org: 'Hera BioLabs, Inc.',
    location: 'Lexington, KY',
    period: '2020 – 2024',
    points: [
      'Managed strategic research accounts and ongoing service initiatives with regular communication across scientific, operational, and external stakeholders.',
      'Coordinated proposal development, pricing strategy, and project planning for preclinical toxicology, pharmacology, oncology, and gene editing services.',
      'Negotiated commercial and research licensing agreements for gene editing technologies and preclinical research services.',
      'Created and executed business development and marketing plans that contributed to sustained company growth.',
    ],
  },
  {
    title: 'Business Development Manager',
    org: 'Hera BioLabs, Inc.',
    location: 'Lexington, KY',
    period: '2016 – 2020',
    points: [
      'Collaborated with senior scientists to develop proposals for CRO services, including efficacy, pharmacology, toxicology, and gene editing studies.',
      'Maintained a pipeline of preclinical research service opportunities, including communication, scoping, follow-up, and project development.',
      'Managed spending, invoicing, and lab supply ordering for two SBIR-funded grant projects, supporting budget tracking and research administration.',
    ],
  },
  {
    title: 'Technical Sales Specialist',
    org: 'Transposagen Biopharmaceuticals, Inc.',
    location: 'Lexington, KY',
    period: '2014 – 2016',
    points: [
      'Delivered technical presentations to scientific decision makers on custom genetic engineering and model creation services.',
      'Managed logistics and marketing for company participation at scientific conferences and trade shows.',
    ],
  },
]

const achievements = [
  'Expanded the gene editing team from 4 to 7 reports to support growing project volume',
  'Led the strategic pivot toward CHO bioprocessing and cell line development services',
  'Negotiated commercial and research licensing agreements for gene editing technologies',
  'Implemented GLP-like quality controls, SOPs, and documentation practices',
  'Managed budgets, invoicing, and supply ordering for two SBIR-funded grant projects',
  'Created and executed business development plans driving sustained company growth',
]

const publications = [
  {
    authors:
      'Noto, F.K., Towobola Adedeji, B., Moody, S., Brenzel, C., Crawford, J., Narla, G., Evers, B.M., & Jamling, T.Y.',
    title:
      'A Rag2/Il2rg double-knockout rat (SRG OncoRat) enables precision-medicine based cancer studies with cell line- and patient-derived xenografts.',
    venue:
      'AACR-NCI-EORTC International Conference on Molecular Targets and Cancer Therapeutics, Boston, MA',
    year: '2019',
  },
  {
    authors:
      'Towobola Adedeji, B., Noto, F.K., Moody, S., Steffey, V., Brenzel, C., Crawford, J., Jamling, T.Y., & Narla, G.',
    title: 'Rats support cancer studies.',
    venue: 'American Association for Cancer Research Annual Meeting',
    year: '2020',
  },
  {
    authors:
      'Aw Yong, K.M., Eberle, C.S., Dowdy, C., Walton, G., Brenzel, C., Noto, F., & Festin, S.',
    title:
      'The SRG immunodeficient rat demonstrates utility across multiple tumor types of different organ origins.',
    venue: 'American Association for Cancer Research Annual Meeting',
    year: '2023',
  },
  {
    authors:
      'Aw Yong, K.M., Eberle, C.S., Dowdy, C., Brenzel, C., Begemann, D., Walton, G., Noto, F., & Festin, S.',
    title:
      'Comparative analysis of complete blood count, serum chemistry and immune phenotype between SRG and CD rats.',
    venue: 'Journal for ImmunoTherapy of Cancer',
    year: '2023',
  },
  {
    authors:
      'Walton, G., Begemann, D., Dunn, C., Steffey, V., Brenzel, C., & Noto, F.',
    title:
      'The SRG OncoRat supports tumors derived from several RAS mutant cell lines for pre-clinical testing of RAS-inhibitors.',
    venue:
      'AACR-NCI-EORTC International Conference on Molecular Targets and Cancer Therapeutics',
    year: '2023',
  },
]

const expertise = {
  Commercial: [
    'Business development',
    'Strategic partnerships',
    'Key account management',
    'Revenue forecasting',
    'Market research',
    'Contract coordination',
    'Technology licensing',
    'Proposal development',
  ],
  'Scientific / Technical': [
    'Preclinical oncology',
    'Patient-derived xenograft models',
    'Translational drug development',
    'Gene editing (CRISPR/Cas9)',
    'Cas-CLOVER & piggyBac technologies',
    'Transgenic rodent models',
    'Toxicology & pharmacology studies',
    'CHO cell line development',
  ],
  'Operations & Tools': [
    'Project management',
    'SOP development',
    'Budget & research administration',
    'Salesforce / HubSpot / Pipedrive',
    'SnapGene',
    'Google Analytics / AdWords',
    'ActiveCampaign / Constant Contact',
    'MS Office / Teams',
  ],
}

export default function ExperiencePage() {
  return (
    <main className="pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
          Experience
        </p>
        <h1 className="text-white font-sans font-semibold text-4xl md:text-5xl leading-tight mb-4 text-balance">
          Professional background
        </h1>
        <p className="text-[#8fa3bb] font-sans text-lg leading-relaxed max-w-2xl">
          A decade of biotech and translational research experience spanning scientific
          project management, preclinical CRO services, gene editing technologies, and
          client-facing research coordination across the life science industry.
        </p>
      </section>

      {/* Lab image */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="relative rounded-lg overflow-hidden border border-[#1e2d4a]">
          <img
            src="/images/consulting-instruments.jpg"
            alt="A row of preclinical research instruments lined up along a laboratory bench"
            className="w-full object-cover aspect-[16/9] md:aspect-[21/9]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-12 font-sans">
          Career history
        </p>
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1e2d4a] hidden md:block" />
          <div className="flex flex-col gap-0">
            {timeline.map((role, i) => (
              <div
                key={i}
                className="group relative md:pl-10 py-8 border-b border-[#1e2d4a] last:border-b-0
                           hover:bg-[#0d1530] -mx-6 px-6 md:px-0 md:ml-0 md:pr-0 transition-colors"
              >
                {/* Dot */}
                <div
                  className="absolute left-[-4px] top-10 w-2 h-2 rounded-full bg-[#1e2d4a]
                               group-hover:bg-blue-500 transition-colors hidden md:block"
                />
                <div className="md:ml-6">
                  <p className="text-[#4a6380] font-mono text-xs tracking-widest mb-2">
                    {role.period}
                  </p>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="text-white font-sans font-semibold text-lg">
                      {role.title}
                    </h3>
                    <OrgLogo org={role.org} />
                  </div>
                  <p className="text-blue-400 font-sans text-sm mb-4">
                    {role.org}
                    <span className="text-[#4a6380]"> · {role.location}</span>
                  </p>
                  <ul className="flex flex-col gap-2 max-w-3xl">
                    {role.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-[#2a4060] mt-2.5 shrink-0" />
                        <p className="text-[#8fa3bb] font-sans text-sm leading-relaxed">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Achievements */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-10 font-sans">
          Selected achievements
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {achievements.map((a) => (
            <div key={a} className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-blue-500 mt-2.5 shrink-0" />
              <p className="text-[#8fa3bb] font-sans text-sm md:text-base leading-relaxed">
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Education */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-10 font-sans">
          Education
        </p>
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white font-sans font-semibold text-base mb-1">
                M.S. Pharmacogenomics &amp; Personalized Healthcare
              </h3>
              <p className="text-blue-400 font-sans text-sm">
                University of Cincinnati — James L. Winkle College of Pharmacy
              </p>
              <p className="text-[#4a6380] font-sans text-xs mt-1">
                In progress (Part-Time/Evenings) — Expected Spring 2028
              </p>
            </div>
            <OrgLogo org="University of Cincinnati — James L. Winkle College of Pharmacy" />
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white font-sans font-semibold text-base mb-1">
                B.S. Biology
              </h3>
              <p className="text-blue-400 font-sans text-sm">University of Notre Dame</p>
              <p className="text-[#4a6380] font-sans text-xs mt-1">
                Minor: Science, Business &amp; Technology — 2014
              </p>
            </div>
            <OrgLogo org="University of Notre Dame" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Publications */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-10 font-sans">
          Posters &amp; scientific presentations
        </p>
        <div className="flex flex-col gap-8 max-w-4xl">
          {publications.map((pub, i) => (
            <div key={i} className="flex gap-4 md:gap-6">
              <span className="text-[#4a6380] font-mono text-xs tracking-widest pt-1 shrink-0">
                {pub.year}
              </span>
              <div>
                <h3 className="text-white font-sans font-medium text-sm md:text-base leading-snug mb-2">
                  {pub.title}
                </h3>
                <p className="text-[#8fa3bb] font-sans text-xs leading-relaxed mb-1">
                  {pub.authors}
                </p>
                <p className="text-blue-400 font-sans text-xs italic">{pub.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Expertise */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-10 font-sans">
          Areas of expertise
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(expertise).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-white font-sans font-semibold text-sm mb-6 pb-3 border-b border-[#1e2d4a]">
                {category}
              </h3>
              <ul className="flex flex-col gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[#8fa3bb] font-sans text-sm leading-relaxed flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#2a4060] shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
