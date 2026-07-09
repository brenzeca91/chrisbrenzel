import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Mail, ShoppingBag } from 'lucide-react'
import { PrintsMockupCarousel } from '@/components/photography/prints-mockup-carousel'

export default function PrintsPage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="w-full">
        <div className="relative w-full aspect-[21/9] overflow-hidden">
          <Image
            src="/images/prints-hero.jpg"
            alt="Red kite soaring above a golden-green hillside under a dramatic blue sky, two silhouetted figures on the ridge"
            fill
            className="object-cover object-[center_75%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <p className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase mb-2 font-sans">
              Featured print
            </p>
            <p className="text-[#f5f0eb] font-serif italic text-xl md:text-2xl font-medium">
              Kite Day — Father and Son
            </p>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-10 md:pt-14 md:pb-12">
        <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-4 font-sans">
          Prints
        </p>
        <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl font-medium leading-tight mb-3 text-balance">
          Order prints online.
        </h1>
        <p className="text-white/50 font-sans text-base leading-relaxed max-w-2xl">
          Fine art prints of selected Kentucky nature images are now available to
          order directly through my Pixieset print store; professional lab
          printing, multiple sizes, and shipping handled for you.
        </p>
      </section>

      {/* Pixieset store CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="border border-[#1e2d1e] bg-[#0a120a] rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-[#1a2e1a] shrink-0">
              <ShoppingBag className="w-5 h-5 text-[#6fcf97]" />
            </div>
            <div>
              <p className="text-[#f5f0eb] font-sans font-semibold text-lg mb-1">
                Print Store — Chris Brenzel Photography
              </p>
              <p className="text-white/40 font-sans text-sm leading-relaxed max-w-lg">
                Browse the full Kentucky Nature collection and place your order
                directly. Ordering, payment, and fulfillment are handled by
                Pixieset, a professional photography print platform. If you run
                into any issues, feel free to{' '}
                <Link href="/photography/contact" className="text-[#6fcf97] hover:text-[#9fe7b8] underline underline-offset-2 transition-colors">
                  get in touch
                </Link>
                .
              </p>
            </div>
          </div>
          <a
            href="https://chrisbrenzelphotography.pixieset.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#6fcf97] hover:bg-[#9fe7b8] text-[#071a0e] font-sans font-semibold text-sm px-6 py-3 rounded transition-colors whitespace-nowrap shrink-0"
          >
            Visit Print Store
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <p className="text-white/20 font-sans text-xs mt-3 leading-relaxed">
          Prints are fulfilled by Pixieset via professional lab partners. All
          images remain the copyright of Christopher Brenzel.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Beyond the store — inquire directly */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
          Beyond the store
        </p>
        <p className="text-white/50 font-sans text-base leading-relaxed max-w-2xl mb-10">
          The print store covers standard sizes and personal use. For anything
          outside of that, reach out directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Custom prints */}
          <a
            href="mailto:chris@chrisbrenzel.com?subject=Custom print inquiry"
            className="group flex flex-col gap-4 border border-[#222] hover:border-[#3a3a3a] rounded-lg p-6 transition-all hover:bg-[#0e0e0e]"
          >
            <div className="w-8 h-8 rounded-md bg-[#1a1a2e] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#5b9bff]" />
            </div>
            <div>
              <p className="text-[#f5f0eb] font-sans font-semibold text-base mb-2 group-hover:text-white transition-colors">
                Custom prints
              </p>
              <p className="text-white/35 font-sans text-sm leading-relaxed">
                Non-standard sizes, panoramic formats, canvas, metal, or acrylic
                substrates. Also available as high-resolution digital files for
                your own printing.
              </p>
            </div>
            <p className="text-[#5b9bff] font-sans text-xs mt-auto">Get in touch &rarr;</p>
          </a>

          {/* Commercial licensing */}
          <a
            href="mailto:chris@chrisbrenzel.com?subject=Commercial licensing inquiry"
            className="group flex flex-col gap-4 border border-[#222] hover:border-[#3a3a3a] rounded-lg p-6 transition-all hover:bg-[#0e0e0e]"
          >
            <div className="w-8 h-8 rounded-md bg-[#1a1a2e] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#5b9bff]" />
            </div>
            <div>
              <p className="text-[#f5f0eb] font-sans font-semibold text-base mb-2 group-hover:text-white transition-colors">
                Commercial licensing
              </p>
              <p className="text-white/35 font-sans text-sm leading-relaxed">
                Editorial, advertising, product packaging, or any use that goes
                beyond personal display. License terms and pricing depend on the
                image and scope of use.
              </p>
            </div>
            <p className="text-[#5b9bff] font-sans text-xs mt-auto">Get in touch &rarr;</p>
          </a>

          {/* Event photography */}
          <Link
            href="/photography/lexington-ky-affordable-wedding-event-photographer"
            className="group flex flex-col gap-4 border border-[#222] hover:border-[#3a3a3a] rounded-lg p-6 transition-all hover:bg-[#0e0e0e]"
          >
            <div className="w-8 h-8 rounded-md bg-[#1a1a2e] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#5b9bff]" />
            </div>
            <div>
              <p className="text-[#f5f0eb] font-sans font-semibold text-base mb-2 group-hover:text-white transition-colors">
                Hire Chris to shoot
              </p>
              <p className="text-white/35 font-sans text-sm leading-relaxed">
                Small weddings, courthouse ceremonies, engagements, family
                milestones, and personal events in and around Lexington, KY.
              </p>
            </div>
            <p className="text-[#5b9bff] font-sans text-xs mt-auto">Learn more &rarr;</p>
          </Link>
        </div>

        <p className="text-white/20 font-sans text-xs mt-6 leading-relaxed">
          Response time is typically within a few days. Include the image title,
          intended use, and any relevant timeline when reaching out.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Wall mockup carousel */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
          What it looks like
        </p>
        <p className="text-white/40 font-sans text-sm leading-relaxed max-w-lg mb-8">
          Prints look striking at large scale. A few examples of how they might look mounted and hung.
        </p>
        <PrintsMockupCarousel />
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Browse gallery link */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-white/40 font-sans text-sm max-w-sm">
            Browse the gallery to find an image you are interested in, then visit
            the print store or get in touch directly.
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

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-[#1a1a1a]" /></div>

      {/* Pixieset affiliate — for photographers */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-white/20 font-sans text-xs font-medium tracking-[0.15em] uppercase mb-3">
          For photographers
        </p>
        <p className="text-white/30 font-sans text-sm leading-relaxed max-w-xl">
          If you are a photographer considering a print store or client gallery
          platform; I use Pixieset - it handles ordering, fulfillment, and
          delivery cleanly without a lot of overhead.{' '}
          <a
            href="https://pixieset.com/ref/xmgzd3ILMAvz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white/70 underline underline-offset-2 transition-colors"
          >
            Check it out here.
          </a>
        </p>
      </section>
    </main>
  )
}
