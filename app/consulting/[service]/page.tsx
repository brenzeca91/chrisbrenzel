import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ChevronRight } from 'lucide-react'
import {
  SITE_URL,
  consultingServices,
  getConsultingService,
  getRelatedServices,
} from '@/lib/consulting-services'

export function generateStaticParams() {
  return consultingServices.map((service) => ({ service: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>
}): Promise<Metadata> {
  const { service: slug } = await params
  const service = getConsultingService(slug)
  if (!service) return {}

  const url = `${SITE_URL}/consulting/${service.slug}`

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    robots: service.ready
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: 'ChrisBrenzel.com',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: service.cardTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${SITE_URL}/og-image.png`],
    },
  }
}

export default async function ConsultingServicePage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service: slug } = await params
  const service = getConsultingService(slug)
  if (!service) notFound()

  const related = getRelatedServices(service)
  const url = `${SITE_URL}/consulting/${service.slug}`

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Consulting',
        item: `${SITE_URL}/consulting`,
      },
      { '@type': 'ListItem', position: 3, name: service.h1, item: url },
    ],
  }

  // Prepared for activation once this service page has full content —
  // rendered automatically once `ready` is set to true in
  // lib/consulting-services.ts.
  const serviceJsonLd = service.ready
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.h1,
        description: service.cardDescription,
        url,
        provider: { '@id': `${SITE_URL}/consulting/#service` },
      }
    : null

  return (
    <main className="pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {serviceJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      )}

      {/* Breadcrumbs */}
      <section className="max-w-7xl mx-auto px-6 pt-24 md:pt-32">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-sans text-xs text-[#4a6380]">
            <li>
              <Link href="/" className="hover:text-[#8fa3bb] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
            </li>
            <li>
              <Link href="/consulting" className="hover:text-[#8fa3bb] transition-colors">
                Consulting
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
            </li>
            <li aria-current="page" className="text-[#8fa3bb]">
              {service.h1}
            </li>
          </ol>
        </nav>
      </section>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-16 md:pb-20">
        <h1 className="text-white font-sans font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 text-balance max-w-3xl">
          {service.h1}
        </h1>
        <p className="text-blue-300 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
          {service.audience}
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* Description + scope */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 max-w-4xl">
          <div>
            <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-4 font-sans">
              What this covers
            </p>
            <p className="text-[#b8c7d9] font-sans text-lg leading-relaxed">
              {service.cardDescription}
            </p>
          </div>
          <div>
            <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
              Scope of support
            </p>
            <ul className="flex flex-col gap-4">
              {service.scopeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-[#8fa3bb] font-sans text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1e2d4a]" />
      </div>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <p className="text-[#8fa3bb] font-sans text-base leading-relaxed max-w-xl mb-8">
          To discuss the scope of a potential engagement, get in touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/consulting/contact?service=${service.slug}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
          >
            Discuss This Service
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 border border-[#1e2d4a] hover:border-[#3b82f6] text-[#8fa3bb] hover:text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
          >
            Explore All Consulting Services
          </Link>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <>
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-[#1e2d4a]" />
          </div>
          <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
            <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
              Related services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/consulting/${r.slug}`}
                  className="group border border-[#1e2d4a] hover:border-[#2a4060] rounded p-8 hover:bg-[#0d1530] transition-all flex justify-between items-end"
                >
                  <div>
                    <p className="text-[#4a6380] text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
                      Consulting
                    </p>
                    <h3 className="text-white font-sans font-semibold text-lg text-balance">
                      {r.cardTitle}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#4a6380] group-hover:text-blue-400 transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  )
}
