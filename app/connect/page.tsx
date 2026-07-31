import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Download,
  MapPin,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Connect with Christopher Brenzel',
  description:
    'Choose Christopher Brenzel’s professional or nature photography contact card.',
  alternates: { canonical: 'https://www.chrisbrenzel.com/connect' },
  robots: { index: false, follow: true },
}

const paths = [
  {
    label: 'Professional',
    title: 'Biotech & research',
    description:
      'Preclinical strategy, scientific partnerships, business development, and professional experience.',
    href: '/connect/p',
    icon: BriefcaseBusiness,
    iconClass: 'text-blue-300',
    hoverClass: 'hover:border-blue-400/35 hover:bg-blue-400/[0.07]',
  },
  {
    label: 'Nature photography',
    title: 'Wildlife & field work',
    description:
      'Wildlife, birds, macro, landscapes, field notes, prints, and photography inquiries.',
    href: '/connect/n',
    icon: Camera,
    iconClass: 'text-[#d9c5a4]',
    hoverClass: 'hover:border-[#c8aa7a]/40 hover:bg-[#c8aa7a]/[0.07]',
  },
]

export default function ConnectPage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#080d18] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.20),transparent_34%),radial-gradient(circle_at_85%_90%,rgba(193,166,126,0.15),transparent_36%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-md flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] sm:justify-center sm:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1423]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="px-6 pb-6 pt-7 text-center sm:px-8">
            <div className="mb-6 flex items-center justify-center gap-2">
              <span className="h-px w-7 bg-blue-400/60" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/45">
                chrisbrenzel.com
              </p>
              <span className="h-px w-7 bg-[#c1a67e]/60" />
            </div>

            <div className="relative mx-auto mb-5 h-28 w-28">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400/80 via-blue-600/25 to-[#c1a67e]/70 blur-[1px]" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#0d1423]">
                <Image
                  src="/images/chris-headshot-new.png"
                  alt="Christopher Brenzel"
                  fill
                  priority
                  sizes="112px"
                  className="object-cover object-[50%_24%]"
                />
              </div>
            </div>

            <h1 className="text-balance font-serif text-[2rem] leading-tight text-[#f7f3ed]">
              Christopher Brenzel
            </h1>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/58">
              How would you like to connect?
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/38">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Lexington, Kentucky
            </p>
          </div>

          <div className="border-t border-white/[0.07] px-4 py-4 sm:px-5">
            <div className="space-y-3">
              {paths.map(
                ({ label, title, description, href, icon: Icon, iconClass, hoverClass }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${hoverClass}`}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.045]">
                      <Icon className={`h-5 w-5 ${iconClass}`} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-white/34">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-white/90">
                        {title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-white/42">
                        {description}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-white/22 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60"
                      aria-hidden="true"
                    />
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="border-t border-white/[0.07] px-5 py-5">
            <a
              href="/christopher-brenzel.vcf"
              download
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#f7f3ed] px-5 text-sm font-semibold text-[#0a1020] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:scale-[0.99]"
            >
              <Download className="h-4.5 w-4.5" aria-hidden="true" />
              Save general contact
            </a>
          </div>

          <div className="border-t border-white/[0.07] px-6 py-4 text-center">
            <Link
              href="/"
              className="text-[0.68rem] text-white/28 transition hover:text-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Visit the full website
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
