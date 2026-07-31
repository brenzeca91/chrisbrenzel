import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Download,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Connect with Christopher Brenzel',
  description:
    'Save Christopher Brenzel’s contact information and explore his biotech consulting and nature photography work.',
  alternates: {
    canonical: 'https://www.chrisbrenzel.com/connect',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export const dynamic = 'force-dynamic'

const baseQuickLinks = [
  {
    label: 'Email',
    detail: 'chris@chrisbrenzel.com',
    href: 'mailto:chris@chrisbrenzel.com?subject=Great%20connecting%20with%20you',
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    detail: 'Connect professionally',
    href: 'https://www.linkedin.com/in/christopherbrenzel',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Instagram',
    detail: '@lexingtonkyphotos',
    href: 'https://www.instagram.com/lexingtonkyphotos/',
    icon: Instagram,
    external: true,
  },
]

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, '')
  const localDigits =
    digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits

  if (localDigits.length !== 10) return value

  return `${localDigits.slice(0, 3)}-${localDigits.slice(3, 6)}-${localDigits.slice(6)}`
}

function phoneHref(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits ? `tel:+${digits}` : ''
}

const workLinks = [
  {
    eyebrow: 'Professional',
    title: 'Biotech consulting',
    description: 'Business development, preclinical strategy, and scientific partnerships.',
    href: '/consulting',
    icon: BriefcaseBusiness,
    accent: 'text-[#79a9ff]',
  },
  {
    eyebrow: 'Creative',
    title: 'Nature photography',
    description: 'Wildlife, birds, macro, landscapes, and field notes from Kentucky and beyond.',
    href: '/photography',
    icon: Camera,
    accent: 'text-[#d6c6ad]',
  },
]

export default function ConnectPage() {
  const contactPhone = process.env.CONTACT_PHONE?.trim()
  const quickLinks = contactPhone
    ? [
        {
          label: 'Phone',
          detail: formatPhoneNumber(contactPhone),
          href: phoneHref(contactPhone),
          icon: Phone,
          external: false,
        },
        ...baseQuickLinks,
      ]
    : baseQuickLinks

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#080d18] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.20),transparent_34%),radial-gradient(circle_at_85%_90%,rgba(193,166,126,0.13),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-md flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] sm:justify-center sm:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1423]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="relative px-6 pb-6 pt-7 text-center sm:px-8">
            <div className="mb-6 flex items-center justify-center gap-2">
              <span className="h-px w-7 bg-blue-400/60" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/45">
                chrisbrenzel.com
              </p>
              <span className="h-px w-7 bg-blue-400/60" />
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
              Biotech business development
              <span className="mx-2 text-blue-400/70">•</span>
              Nature photographer
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/38">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Lexington, Kentucky
            </p>

            <a
              href="/christopher-brenzel.vcf"
              download
              className="mt-7 flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#f7f3ed] px-5 text-sm font-semibold text-[#0a1020] shadow-lg shadow-black/20 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1423] active:scale-[0.99]"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              Save to contacts
            </a>
            <p className="mt-2.5 text-[0.68rem] text-white/30">
              Downloads a contact card to your phone
            </p>
          </div>

          <div className="border-t border-white/[0.07] px-4 py-4 sm:px-5">
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map(({ label, detail, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition hover:border-blue-400/30 hover:bg-white/[0.065] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <Icon className="h-5 w-5 text-blue-300/80" aria-hidden="true" />
                    <ArrowUpRight
                      className="h-4 w-4 text-white/20 transition group-hover:text-white/50"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="block text-sm font-medium text-white/90">{label}</span>
                  <span className="mt-1 block truncate text-[0.68rem] text-white/35">
                    {detail}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.07] px-4 py-4 sm:px-5">
            <p className="px-1 pb-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/28">
              Explore my work
            </p>
            <div className="space-y-2">
              {workLinks.map(
                ({ eyebrow, title, description, href, icon: Icon, accent }) => (
                  <Link
                    key={title}
                    href={href}
                    className="group flex items-center gap-4 rounded-2xl px-3 py-3.5 transition hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                      <Icon className={`h-5 w-5 ${accent}`} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/28">
                        {eyebrow}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-white/88">
                        {title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-white/38">
                        {description}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/55"
                      aria-hidden="true"
                    />
                  </Link>
                ),
              )}
            </div>
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
