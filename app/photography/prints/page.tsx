import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function PrintsPage() {
  return (
    <main className="pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
          Prints
        </p>
        <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl font-medium leading-tight mb-4 text-balance">
          Prints by inquiry.
        </h1>
        <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
          Selected images are available as print-quality files or prints by
          inquiry. Availability depends on the image, intended use, preferred
          size, and format.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1a1a1a]" />
      </div>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-10 font-sans">
          How to inquire
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
          <div>
            <p className="text-white/60 font-sans text-base leading-relaxed mb-8">
              When reaching out, include the following details so I can give you
              an accurate response:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                'The image title or a link to the gallery',
                'Intended use (personal, gift, commercial, etc.)',
                'Preferred size or format',
                'Timeline if relevant',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-white/30 mt-2.5 shrink-0" />
                  <span className="text-white/50 font-sans text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:chris@chrisbrenzel.com?subject=Print inquiry"
              className="group flex items-center gap-4 border border-[#222] hover:border-[#444]
                         rounded p-6 transition-all hover:bg-[#141414]"
            >
              <Mail className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors shrink-0" />
              <div>
                <p className="text-[#f5f0eb] font-sans text-sm font-medium mb-0.5 group-hover:text-white transition-colors">
                  Email Christopher about a print
                </p>
                <p className="text-white/30 font-sans text-xs">
                  chris@chrisbrenzel.com
                </p>
              </div>
            </a>

            <p className="text-white/25 font-sans text-xs leading-relaxed">
              Response time is typically within a few days. Not all images are
              available for every use or format — I will let you know what is
              possible for the specific image you are interested in.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1a1a1a]" />
      </div>

      {/* Browse gallery link */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-white/40 font-sans text-sm max-w-sm">
            Browse the gallery to find an image you are interested in, then use the
            title or link when you reach out.
          </p>
          <Link
            href="/photography/gallery"
            className="border border-[#222] hover:border-[#444] text-white/50 hover:text-[#f5f0eb]
                       font-sans font-medium text-sm px-6 py-3 rounded transition-colors whitespace-nowrap"
          >
            Browse gallery
          </Link>
        </div>
      </section>
    </main>
  )
}
