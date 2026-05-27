const timeline = [
  {
    title: 'Director of Business Development',
    org: 'The START Center for Cancer Research',
    period: '2023 – Present',
  },
  {
    title: 'Sales and Business Development Manager',
    org: 'GemPharmatech',
    period: '2022 – 2023',
  },
  {
    title: 'Executive Director, Business Development',
    org: 'Hera BioLabs',
    period: '2021 – 2022',
  },
  {
    title: 'Executive Director, Gene Editing Solutions',
    org: 'Hera BioLabs',
    period: '2019 – 2021',
  },
  {
    title: 'Business Development Manager',
    org: 'Hera BioLabs',
    period: '2017 – 2019',
  },
  {
    title: 'Technical Sales Specialist',
    org: 'Transposagen Biopharmaceuticals',
    period: '2014 – 2017',
  },
]

const achievements = [
  'Helped drive sustained revenue growth for preclinical CRO services',
  'Built and managed strategic client relationships across biotech, pharma, and academic sectors',
  'Supported gene editing and model system commercialization',
  'Negotiated commercial and research licensing opportunities',
  'Developed sales processes, proposals, forecasts, and account plans',
  'Presented complex scientific services to research and business stakeholders',
]

const expertise = {
  Commercial: [
    'Business development',
    'Strategic partnerships',
    'Key account management',
    'Revenue forecasting',
    'Market research',
    'Contract negotiation',
    'Technology licensing',
  ],
  'Scientific / Technical': [
    'Preclinical CRO services',
    'Translational oncology',
    'PDX oncology models',
    'Gene editing',
    'CRISPR/Cas9',
    'Transgenic rodent models',
    'Toxicology and pharmacology studies',
    'Cell line development',
  ],
  Tools: [
    'Salesforce',
    'HubSpot',
    'Pipedrive',
    'Google Analytics',
    'SEO / AdWords',
    'MS Office',
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
          Over a decade of biotech business development, preclinical CRO growth, and
          scientific partnership support across the life science industry.
        </p>
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
                  <h3 className="text-white font-sans font-semibold text-lg mb-1">
                    {role.title}
                  </h3>
                  <p className="text-blue-400 font-sans text-sm">{role.org}</p>
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
          <div>
            <h3 className="text-white font-sans font-semibold text-base mb-1">
              B.S. Biology
            </h3>
            <p className="text-blue-400 font-sans text-sm">University of Notre Dame</p>
          </div>
          <div>
            <h3 className="text-white font-sans font-semibold text-base mb-1">
              M.S. Pharmacogenomics and Personalized Healthcare
            </h3>
            <p className="text-blue-400 font-sans text-sm">
              University of Cincinnati
            </p>
            <p className="text-[#4a6380] font-sans text-xs mt-1">
              In progress — Expected Spring 2028
            </p>
          </div>
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
