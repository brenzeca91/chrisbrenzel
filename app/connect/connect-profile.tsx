import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Download,
  FileText,
  Images,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
} from 'lucide-react'

type IconName =
  | 'briefcase'
  | 'camera'
  | 'file'
  | 'gallery'
  | 'instagram'
  | 'linkedin'
  | 'mail'
  | 'phone'
  | 'prints'

type LinkItem = {
  label: string
  detail: string
  href: string
  icon: IconName
  external?: boolean
}

type ExploreItem = LinkItem & { eyebrow: string }

type ConnectProfileProps = {
  variant: 'professional' | 'nature'
  eyebrow: string
  subtitle: string
  description: string
  vcardHref: string
  quickLinks: LinkItem[]
  exploreLinks: ExploreItem[]
}

const icons = {
  briefcase: BriefcaseBusiness,
  camera: Camera,
  file: FileText,
  gallery: Images,
  instagram: Instagram,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  prints: ShoppingBag,
}

const themes = {
  professional: {
    main: 'bg-[#080d18]',
    glow:
      'bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.24),transparent_36%),radial-gradient(circle_at_85%_90%,rgba(37,99,235,0.10),transparent_36%)]',
    line: 'bg-blue-400/60',
    avatar:
      'bg-gradient-to-br from-blue-300/90 via-blue-600/35 to-slate-400/45',
    accentText: 'text-blue-300/85',
    hover: 'hover:border-blue-400/30 hover:bg-blue-400/[0.06]',
    ring: 'focus-visible:ring-blue-400',
  },
  nature: {
    main: 'bg-[#0b0e0b]',
    glow:
      'bg-[radial-gradient(circle_at_18%_0%,rgba(95,120,78,0.25),transparent_36%),radial-gradient(circle_at_88%_92%,rgba(193,166,126,0.18),transparent_38%)]',
    line: 'bg-[#bfa879]/65',
    avatar:
      'bg-gradient-to-br from-[#a8bd91]/80 via-[#647956]/35 to-[#c1a67e]/75',
    accentText: 'text-[#d9c5a4]',
    hover: 'hover:border-[#c8aa7a]/35 hover:bg-[#c8aa7a]/[0.06]',
    ring: 'focus-visible:ring-[#c8aa7a]',
  },
}

export function ConnectProfile({
  variant,
  eyebrow,
  subtitle,
  description,
  vcardHref,
  quickLinks,
  exploreLinks,
}: ConnectProfileProps) {
  const theme = themes[variant]

  return (
    <main className={`relative min-h-[100svh] overflow-hidden text-white ${theme.main}`}>
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${theme.glow}`} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-md flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] sm:justify-center sm:py-10">
        <Link
          href="/connect"
          className={`mb-3 inline-flex w-fit items-center gap-1.5 rounded-full px-2 py-1.5 text-xs text-white/40 transition hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 ${theme.ring}`}
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Choose another card
        </Link>

        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1423]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="relative px-6 pb-6 pt-7 text-center sm:px-8">
            <div className="mb-6 flex items-center justify-center gap-2">
              <span className={`h-px w-7 ${theme.line}`} />
              <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${theme.accentText}`}>
                {eyebrow}
              </p>
              <span className={`h-px w-7 ${theme.line}`} />
            </div>

            <div className="relative mx-auto mb-5 h-28 w-28">
              <div className={`absolute -inset-1 rounded-full blur-[1px] ${theme.avatar}`} />
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
            <p className="mx-auto mt-2 max-w-xs text-sm font-medium leading-6 text-white/68">
              {subtitle}
            </p>
            <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-white/40">
              {description}
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/35">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Lexington, Kentucky
            </p>

            <a
              href={vcardHref}
              download
              className={`mt-7 flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#f7f3ed] px-5 text-sm font-semibold text-[#0a1020] shadow-lg shadow-black/20 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1423] active:scale-[0.99] ${theme.ring}`}
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              Save to contacts
            </a>
            <p className="mt-2.5 text-[0.68rem] text-white/28">
              Downloads this contact card to your phone
            </p>
          </div>

          <div className="border-t border-white/[0.07] px-4 py-4 sm:px-5">
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map(({ label, detail, href, icon, external }) => {
                const Icon = icons[icon]
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={`group min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition focus-visible:outline-none focus-visible:ring-2 ${theme.hover} ${theme.ring}`}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <Icon className={`h-5 w-5 ${theme.accentText}`} aria-hidden="true" />
                      <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:text-white/50" aria-hidden="true" />
                    </div>
                    <span className="block text-sm font-medium text-white/90">{label}</span>
                    <span className="mt-1 block truncate text-[0.68rem] text-white/35">{detail}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="border-t border-white/[0.07] px-4 py-4 sm:px-5">
            <p className="px-1 pb-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/28">
              Explore
            </p>
            <div className="space-y-2">
              {exploreLinks.map(({ eyebrow: itemEyebrow, label, detail, href, icon, external }) => {
                const Icon = icons[icon]
                return (
                  <Link
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-4 rounded-2xl px-3 py-3.5 transition focus-visible:outline-none focus-visible:ring-2 ${theme.hover} ${theme.ring}`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                      <Icon className={`h-5 w-5 ${theme.accentText}`} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/28">{itemEyebrow}</span>
                      <span className="mt-0.5 block text-sm font-medium text-white/88">{label}</span>
                      <span className="mt-1 block text-xs leading-5 text-white/38">{detail}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/55" aria-hidden="true" />
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="border-t border-white/[0.07] px-6 py-4 text-center">
            <Link
              href="/"
              className={`text-[0.68rem] text-white/28 transition hover:text-white/55 focus-visible:outline-none focus-visible:ring-2 ${theme.ring}`}
            >
              Visit the full website
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
