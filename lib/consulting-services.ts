// Shared data for the five consulting services.
//
// This single source of truth drives:
//   - The service cards on /consulting
//   - Each /consulting/[service] placeholder page (metadata, copy, related links)
//   - The service dropdown in SiteNav
//   - The inquiry-type options and preselection on /consulting/contact
//
// --- Enabling indexing for a finished service page ---
// Each service defaults to `ready: false`, which makes its page emit
// `robots: { index: false, follow: true }` and keeps it out of
// public/sitemap.xml. Once full content for a service is written:
//   1. Set that service's `ready` to `true` below.
//   2. Add a matching <url> entry for it in public/sitemap.xml.
// No other code changes are required — the noindex tag and Service
// structured data are both wired to this flag automatically.

export const SITE_URL = 'https://www.chrisbrenzel.com'

export interface ConsultingService {
  slug: string
  /** Short label used in nav menus. */
  navLabel: string
  /** Title used on the homepage service card. */
  cardTitle: string
  /** One-line description used on the homepage service card. */
  cardDescription: string
  /** Three concise scope bullets, shared between the homepage card and the service page. */
  scopeItems: [string, string, string]
  /** Call-to-action label linking to the service page from the homepage card. */
  linkLabel: string
  /** H1 used on the dedicated service page (may differ slightly from cardTitle). */
  h1: string
  /** Short audience statement used on the dedicated service page. */
  audience: string
  metaTitle: string
  metaDescription: string
  /** Whether this service page is ready to be indexed and included in the sitemap. */
  ready: boolean
  /** Slugs of two related services, shown at the bottom of the service page. */
  related: [string, string]
}

export const consultingServices: ConsultingService[] = [
  {
    slug: 'preclinical-program-management',
    navLabel: 'Preclinical Programs',
    cardTitle: 'Preclinical Program Management & Outsourcing',
    cardDescription:
      'Plan, contract, and manage outsourced preclinical studies without building a large internal program-management team.',
    scopeItems: [
      'CRO identification, vendor vetting, and pricing negotiation',
      'MSA and SOW coordination, study scope, and timelines',
      'Program tracking from target validation through IND-enabling study coordination',
    ],
    linkLabel: 'Explore Preclinical Program Management',
    h1: 'Preclinical Program Management & Outsourcing',
    audience:
      'For emerging and virtual biotech companies coordinating outsourced preclinical research.',
    metaTitle: 'Preclinical Program Management Consultant | Chris Brenzel',
    metaDescription:
      'Preclinical program management for biotech teams: CRO vetting, MSA and SOW coordination, pricing negotiation, and timelines through IND-enabling studies.',
    ready: false,
    related: ['drug-development-strategy', 'fractional-biotech-leadership'],
  },
  {
    slug: 'drug-development-strategy',
    navLabel: 'Drug Development',
    cardTitle: 'Drug Development & Translational Strategy',
    cardDescription:
      'Build a practical development path for a therapeutic, discovery platform, or gene-editing technology.',
    scopeItems: [
      'Development objectives, evidence gaps, and preclinical priorities',
      'Platform positioning and market opportunity',
      'Licensing and partnering strategy aligned with development milestones',
    ],
    linkLabel: 'Explore Drug Development Strategy',
    h1: 'Drug Development & Translational Strategy',
    audience:
      'For early-stage drug companies and platform developers planning their next development and partnering milestones.',
    metaTitle: 'Drug Development Strategy Consultant | Chris Brenzel',
    metaDescription:
      'Drug development consulting for emerging biotech: preclinical priorities, evidence gaps, platform positioning, licensing, and translational strategy.',
    ready: false,
    related: ['preclinical-program-management', 'technology-commercialization'],
  },
  {
    slug: 'fractional-biotech-leadership',
    navLabel: 'Fractional Leadership',
    cardTitle: 'Fractional Biotech Commercial Leadership',
    cardDescription:
      'Add experienced commercial leadership during a critical stage of growth without immediately hiring a full-time executive.',
    scopeItems: [
      'Commercial priorities and business planning',
      'Strategic collaborations and partnership development',
      'Fundraising readiness, investor materials, and outreach support',
    ],
    linkLabel: 'Explore Fractional Leadership',
    h1: 'Fractional Biotech Commercial Leadership',
    audience:
      'For biotech founders who need ongoing commercial and partnership leadership as their company grows.',
    metaTitle: 'Fractional Biotech Commercial Leadership | Chris Brenzel',
    metaDescription:
      'Fractional commercial leadership for biotech founders: business planning, strategic partnerships, fundraising readiness, and business development.',
    ready: false,
    related: ['scientific-sales-enablement', 'drug-development-strategy'],
  },
  {
    slug: 'scientific-sales-enablement',
    navLabel: 'Scientific Sales',
    cardTitle: 'Scientific Sales Enablement & Fractional BD',
    cardDescription:
      'Turn complex scientific capabilities into clear positioning, stronger proposals, and a sales process your team can execute.',
    scopeItems: [
      'Technical messaging, marketing, and trade-show strategy',
      'CRM workflows and integrations across Pipedrive, HubSpot, and Salesforce',
      'Pipeline management, account strategy, and fractional business development',
    ],
    linkLabel: 'Explore Scientific Sales Enablement',
    h1: 'Scientific Sales Enablement & Fractional Business Development',
    audience:
      'For CROs, scientific-service providers, and technology companies building a stronger commercial operation.',
    metaTitle: 'Scientific Sales Enablement & Fractional BD | Chris Brenzel',
    metaDescription:
      'Scientific sales consulting for CROs and biotech vendors: positioning, proposals, trade shows, CRM workflows, pipeline management, and fractional BD.',
    ready: false,
    related: ['fractional-biotech-leadership', 'technology-commercialization'],
  },
  {
    slug: 'technology-commercialization',
    navLabel: 'Commercialization',
    cardTitle: 'Technology Commercialization',
    cardDescription:
      'Evaluate the commercial potential of scientific intellectual property and develop a practical path toward a company, license, or market-ready offering.',
    scopeItems: [
      'Market research, customer needs, and competing technologies',
      'Business models, business planning, and market-entry strategy',
      'Licensing opportunities, partnerships, and company-formation planning',
    ],
    linkLabel: 'Explore Technology Commercialization',
    h1: 'Biotech Technology Commercialization',
    audience:
      'For academic founders, inventors, and technology-transfer teams moving scientific intellectual property toward a business.',
    metaTitle: 'Biotech Technology Commercialization | Chris Brenzel',
    metaDescription:
      'Turn scientific IP into a commercial plan with biotech market research, business models, licensing strategy, and company-formation planning.',
    ready: false,
    related: ['drug-development-strategy', 'scientific-sales-enablement'],
  },
]

export function getConsultingService(slug: string): ConsultingService | undefined {
  return consultingServices.find((service) => service.slug === slug)
}

export function getRelatedServices(service: ConsultingService): ConsultingService[] {
  return service.related
    .map((slug) => getConsultingService(slug))
    .filter((s): s is ConsultingService => Boolean(s))
}
