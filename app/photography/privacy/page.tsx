import Link from 'next/link'
import { ArrowRight, Camera, Printer, Mail, Shield, Eye, Cookie, BarChart2, Link2, Lock, Users, Settings, RefreshCw } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Christopher Brenzel',
  description:
    'How ChrisBrenzel.com collects, uses, and protects your information. A straightforward privacy policy written for visitors, not lawyers.',
}

const sections = [
  { id: 'provide', label: 'Information You Choose to Provide', icon: Users },
  { id: 'automatic', label: 'Automatically Collected Information', icon: Eye },
  { id: 'cookies', label: 'Cookies', icon: Cookie },
  { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  { id: 'affiliate', label: 'Affiliate Links', icon: Link2 },
  { id: 'inquiries', label: 'Photography Inquiries', icon: Camera },
  { id: 'third-party', label: 'Third-Party Services', icon: Settings },
  { id: 'external', label: 'External Links', icon: ArrowRight },
  { id: 'security', label: 'Data Security', icon: Lock },
  { id: 'children', label: "Children's Privacy", icon: Shield },
  { id: 'choices', label: 'Your Choices', icon: Settings },
  { id: 'changes', label: 'Changes to This Privacy Policy', icon: RefreshCw },
  { id: 'contact', label: 'Contact', icon: Mail },
]

const relatedPages = [
  {
    href: '/photography/terms',
    icon: Shield,
    title: 'Terms of Use, Copyright & Print Licensing',
    description: 'How photographs are protected and how prints and licensing work.',
  },
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
    href: '/photography/contact',
    icon: Mail,
    title: 'Contact',
    description: 'Reach out with questions, print inquiries, or licensing requests.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="bg-[#0c0c0c] text-[#f5f0eb] min-h-screen">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12">
        <p className="text-white/40 font-mono text-xs tracking-[0.2em] uppercase mb-4">
          Privacy
        </p>
        <h1 className="font-sans font-semibold text-3xl md:text-4xl text-white text-balance mb-6">
          Privacy Policy
        </h1>
        <p className="font-sans text-base text-white/60 leading-relaxed max-w-2xl">
          Respecting your privacy matters. This site collects only the information necessary to
          operate, respond to inquiries, and improve your experience — nothing more. This policy
          explains what that means in plain language.
        </p>
        <p className="font-sans text-xs text-white/30 mt-6">Effective Date: June 29, 2026</p>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-0">

        {/* Privacy at a Glance */}
        <div className="mb-14 rounded-xl border border-[#2a3a2a] bg-[#0e160e] p-6">
          <p className="font-sans text-sm font-semibold text-green-400 tracking-widest uppercase mb-4">
            Privacy at a Glance
          </p>
          <ul className="space-y-2.5">
            {[
              "I don't sell your personal information.",
              'I only collect information you voluntarily provide.',
              'Basic analytics help improve the website.',
              'Affiliate links may use cookies.',
              'You can contact me with any privacy questions.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-sans text-sm text-white/70 leading-relaxed">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-green-400/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>

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

        {/* ChrisBrenzel.com intro */}
        <section className="py-10 border-t border-[#1a1a1a]">
          <p className="font-sans text-base text-white/60 leading-relaxed">
            ChrisBrenzel.com is a personal website featuring wildlife, bird, landscape, macro, and
            astrophotography, educational photography articles, fine art prints, and photography
            resources. This Privacy Policy explains what information may be collected, how it is
            used, and the choices you have.
          </p>
        </section>

        {/* Information You Choose to Provide */}
        <section id="provide" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">
              Information You Choose to Provide
            </h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            You may voluntarily provide your name, email address, and any information you include
            when contacting me, requesting information about prints or licensing, or subscribing to
            future newsletters. This information is used only to respond to your request.
          </p>
        </section>

        {/* Automatically Collected */}
        <section id="automatic" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">
              Automatically Collected Information
            </h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            The website may automatically collect limited technical information such as browser
            type, device type, operating system, pages visited, referring websites, general
            geographic region, and IP address where available through analytics or server logs.
          </p>
        </section>

        {/* Cookies */}
        <section id="cookies" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">Cookies</h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            Cookies may be used to remember preferences, measure website traffic, improve
            performance, and support affiliate links. You may disable cookies through your browser
            settings.
          </p>
        </section>

        {/* Analytics */}
        <section id="analytics" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <BarChart2 className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">Analytics</h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            The website may use services such as Google Analytics or similar tools to understand
            how visitors use the website. Analytics information is aggregated and is not intended
            to identify individual visitors.
          </p>
        </section>

        {/* Affiliate Links */}
        <section id="affiliate" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Link2 className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">Affiliate Links</h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            Some pages contain affiliate links. If you purchase through one of these links, I may
            earn a commission at no additional cost to you. Affiliate partners may use cookies
            according to their own privacy policies.
          </p>
        </section>

        {/* Photography Inquiries */}
        <section id="inquiries" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">Photography Inquiries</h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            Information submitted through print, licensing, or photography inquiries is used only
            to respond to your request and provide the information you have asked for.
          </p>
        </section>

        {/* Third-Party Services */}
        <section id="third-party" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">Third-Party Services</h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            Trusted third-party providers may be used for website hosting, analytics, contact
            forms, newsletter delivery, print fulfillment, and affiliate marketing. These providers
            maintain their own privacy policies.
          </p>
        </section>

        {/* External Links */}
        <section id="external" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Link2 className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">External Links</h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            Links to third-party websites are provided for convenience. Once you leave
            ChrisBrenzel.com, your interactions are governed by the privacy policy of that website.
          </p>
        </section>

        {/* Data Security */}
        <section id="security" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">Data Security</h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            Reasonable measures are taken to protect information submitted through this website;
            however, no method of internet transmission or storage is completely secure.
          </p>
        </section>

        {/* Children's Privacy */}
        <section id="children" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">{"Children's Privacy"}</h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            This website is intended for a general audience and is not directed toward children
            under 13. Personal information is not knowingly collected from children.
          </p>
        </section>

        {/* Your Choices */}
        <section id="choices" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">Your Choices</h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            You may decline cookies, request deletion of information you have voluntarily
            submitted, and unsubscribe from future email communications at any time.
          </p>
        </section>

        {/* Changes */}
        <section id="changes" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">
              Changes to This Privacy Policy
            </h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed">
            This Privacy Policy may be updated as the website evolves. The Effective Date above
            indicates the latest revision. Continued use of the website after a change constitutes
            acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="py-10 border-t border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-white/30 shrink-0" />
            <h2 className="font-sans font-semibold text-xl text-white">Contact</h2>
          </div>
          <p className="font-sans text-base text-white/60 leading-relaxed mb-4">
            For questions regarding this Privacy Policy, contact Christopher Brenzel directly:
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
