import Link from 'next/link'
import { ArrowRight, Camera, Printer, Mail, BookOpen, ShoppingBag } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use, Copyright & Print Licensing | Christopher Brenzel',
  description:
    'Understand how photographs on ChrisBrenzel.com are protected, how fine art prints are licensed, and how to inquire about commercial image licensing.',
}

const sections = [
  { id: 'about', label: 'About the Photography' },
  { id: 'copyright', label: 'Photography Copyright' },
  { id: 'sharing', label: 'Sharing My Photography' },
  { id: 'prints', label: 'Fine Art Print Purchases' },
  { id: 'prohibited', label: 'Prohibited Uses' },
  { id: 'commercial', label: 'Commercial Licensing' },
  { id: 'educational', label: 'Educational Content' },
  { id: 'affiliate', label: 'Affiliate Disclosure' },
  { id: 'ethics', label: 'Wildlife Ethics' },
  { id: 'external', label: 'External Links' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'changes', label: 'Changes to These Terms' },
  { id: 'contact', label: 'Contact' },
]

const relatedPages = [
  {
    href: '/photography/gallery',
    icon: Camera,
    title: 'Photography Portfolio',
    description: 'Browse the full gallery of wildlife, landscape, and astrophotography.',
  },
  {
    href: '/photography/prints',
    icon: Printer,
    title: 'Fine Art Prints',
    description: 'Order museum-quality prints for your home or office.',
  },
  {
    href: '/photography/journal',
    icon: BookOpen,
    title: 'Photo Journal',
    description: 'Field notes, editing workflows, and photography guides.',
  },
  {
    href: '/photography/gear',
    icon: ShoppingBag,
    title: 'My Photography Gear',
    description: 'Equipment used in the field, honestly reviewed.',
  },
  {
    href: '/photography/contact',
    icon: Mail,
    title: 'Contact',
    description: 'Inquire about commercial licensing or custom print orders.',
  },
]

export default function TermsPage() {
  return (
    <main className="bg-[#0c0c0c] text-[#f5f0eb] min-h-screen">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12">
        <p className="text-white/40 font-mono text-xs tracking-[0.2em] uppercase mb-4">
          Legal &amp; Licensing
        </p>
        <h1 className="font-sans font-semibold text-3xl md:text-4xl text-white text-balance mb-6">
          Terms of Use, Copyright &amp; Print Licensing
        </h1>
        <p className="font-sans text-base text-white/60 leading-relaxed max-w-2xl">
          Photography is about observing and sharing the natural world. These terms exist to protect
          my work while making it easy for visitors to enjoy it, share it responsibly, and understand
          how prints and image licensing work.
        </p>
        <p className="font-sans text-xs text-white/30 mt-6">Effective Date: June 29, 2026</p>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-0">

        {/* Quick-nav */}
        <nav
          aria-label="Page sections"
          className="mb-14 p-5 rounded-xl border border-[#222] bg-[#111]"
        >
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
            On this page
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="font-sans text-sm text-white/50 hover:text-[#f5f0eb] transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* About */}
        <section id="about" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">About the Photography</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            ChrisBrenzel.com features original photography focused primarily on Kentucky wildlife,
            birds, native wildflowers, macro photography, landscapes, and astrophotography, along
            with selected travel photography. The goal is to educate, inspire appreciation for
            nature, and offer fine art prints and commercial licensing opportunities.
          </p>
        </section>

        {/* Copyright */}
        <section id="copyright" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">Photography Copyright</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            Unless otherwise noted, all photographs, written content, graphics, and original
            materials are the intellectual property of Christopher Brenzel and protected by U.S.
            copyright law. All rights are reserved.
          </p>
        </section>

        {/* Sharing */}
        <section id="sharing" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">Sharing My Photography</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            You are welcome to share links to ChrisBrenzel.com or social posts featuring my work.
            If sharing an image where permitted, please credit Christopher Brenzel or
            ChrisBrenzel.com, link back when practical, and do not remove watermarks or
            substantially alter the image.
          </p>
        </section>

        {/* Prints — highlighted callout */}
        <section id="prints" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-5">Fine Art Print Purchases</h2>
          <div className="rounded-xl border border-[#2a3a2a] bg-[#0e160e] p-6">
            <p className="font-sans text-sm font-semibold text-green-400 tracking-widest uppercase mb-3">
              Print License
            </p>
            <p className="font-sans text-base text-white/70 leading-relaxed">
              Purchasing a print transfers ownership of the physical print only. Copyright and
              all reproduction rights remain with Christopher Brenzel. Prints are licensed for{' '}
              <strong className="text-white/90">personal display</strong> in homes or personal
              offices and may be given as personal gifts. They may not be resold, reproduced,
              or displayed in a commercial setting without a separate commercial license.
            </p>
          </div>
        </section>

        {/* Prohibited */}
        <section id="prohibited" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">Prohibited Uses</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed mb-4">
            Without prior written permission, images from this site may not be:
          </p>
          <ul className="space-y-2 font-sans text-base text-white/60">
            {[
              'Reproduced, downloaded, or redistributed in any form',
              'Used in advertising, commercial websites, or publications',
              'Incorporated into products for resale',
              'Used to train AI or machine learning models',
              'Scanned from purchased prints for digital use',
              'Sold or sublicensed to third parties',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-white/20" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Commercial — highlighted callout */}
        <section id="commercial" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-5">
            Commercial Photography Licensing
          </h2>
          <div className="rounded-xl border border-[#2a3050] bg-[#0d1020] p-6">
            <p className="font-sans text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
              Commercial Licensing
            </p>
            <p className="font-sans text-base text-white/70 leading-relaxed mb-5">
              Selected wildlife, bird, landscape, and nature photographs may be licensed for
              editorial, educational, tourism, conservation, or commercial use. Licensing terms
              and fees are negotiated on a per-project basis depending on usage, territory, and
              exclusivity.
            </p>
            <a
              href="mailto:chris@chrisbrenzel.com?subject=Commercial%20Licensing%20Inquiry"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Chris to discuss licensing
            </a>
          </div>
        </section>

        {/* Educational */}
        <section id="educational" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">Educational Content</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            Articles and guides on this site reflect personal experience, field observations,
            editing workflows, and equipment reviews. Techniques and recommendations may not
            produce identical results in every situation. Content is intended to be helpful but
            should be adapted to your own conditions and judgment.
          </p>
        </section>

        {/* Affiliate */}
        <section id="affiliate" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">Affiliate Disclosure</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            Some pages on this site contain affiliate links. If you purchase through one of these
            links, I may earn a small commission at no additional cost to you. Products are
            recommended because they have been personally used, rented, or extensively researched —
            not because of affiliate relationships.
          </p>
        </section>

        {/* Wildlife Ethics */}
        <section id="ethics" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">Wildlife Ethics</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            This website promotes ethical wildlife photography, Leave No Trace principles, and
            genuine respect for wildlife and public lands. The welfare of the subject always comes
            before the photograph. If a technique or location would cause stress to wildlife,
            damage habitat, or disturb other visitors, it is not worth pursuing.
          </p>
        </section>

        {/* External Links */}
        <section id="external" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">External Links</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            External links are provided for convenience and informational purposes only.
            ChrisBrenzel.com is not responsible for the content, accuracy, or practices of
            third-party websites. Linking does not imply endorsement.
          </p>
        </section>

        {/* Liability */}
        <section id="liability" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">Limitation of Liability</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            Information on this site is provided for educational and informational purposes without
            warranties regarding completeness, accuracy, or suitability for any particular purpose.
            Use the information at your own discretion. Christopher Brenzel is not liable for any
            losses or damages arising from the use of this website or its content.
          </p>
        </section>

        {/* Changes */}
        <section id="changes" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">Changes to These Terms</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            These terms may be updated periodically to reflect changes in how images are used,
            sold, or licensed. Continued use of this website constitutes acceptance of the
            current version. Check back occasionally if you plan to share or license images.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="py-10 border-t border-[#1a1a1a]">
          <h2 className="font-sans font-semibold text-xl text-white mb-4">Contact</h2>
          <p className="font-sans text-base text-white/60 leading-relaxed mb-4">
            Questions regarding prints, commercial licensing, or permissions:
          </p>
          <a
            href="mailto:chris@chrisbrenzel.com"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/70 hover:text-[#f5f0eb] transition-colors"
          >
            <Mail className="w-4 h-4" />
            chris@chrisbrenzel.com
          </a>
        </section>

        {/* Related pages */}
        <div className="pt-16 border-t border-[#1a1a1a]">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-white/30 mb-8">
            Related pages
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPages.map((page) => {
              const Icon = page.icon
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex flex-col gap-3 p-5 rounded-xl border border-[#1a1a1a] hover:border-[#333] bg-[#111] hover:bg-[#141414] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-sm text-white/80 group-hover:text-white transition-colors mb-1">
                      {page.title}
                    </p>
                    <p className="font-sans text-xs text-white/40 leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </main>
  )
}
