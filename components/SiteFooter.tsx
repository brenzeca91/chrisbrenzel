import Link from 'next/link'
import { Mail, Linkedin } from 'lucide-react'

type FooterMode = 'consulting' | 'photography'

export default function SiteFooter({ mode }: { mode: FooterMode }) {
  const isConsulting = mode === 'consulting'

  return (
    <footer
      className={`mt-auto py-12 px-6 border-t ${
        isConsulting
          ? 'bg-[#0a0f1e] border-[#1e2d4a]'
          : 'bg-[#0c0c0c] border-[#222]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left: identity */}
          <div>
            <p
              className={`font-sans font-medium text-base mb-1 ${
                isConsulting ? 'text-white' : 'text-[#f5f0eb]'
              }`}
            >
              Christopher Brenzel
            </p>
            <p
              className={`font-sans text-sm mb-1 ${
                isConsulting ? 'text-[#8fa3bb]' : 'text-white/50'
              }`}
            >
              Biotech professional and nature photography
            </p>
            <p
              className={`font-sans text-sm ${
                isConsulting ? 'text-[#8fa3bb]' : 'text-white/50'
              }`}
            >
              Lexington, Kentucky
            </p>
          </div>

          {/* Right: links */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:chris@chrisbrenzel.com"
              className={`flex items-center gap-2 font-sans text-sm transition-colors ${
                isConsulting
                  ? 'text-[#8fa3bb] hover:text-blue-400'
                  : 'text-white/50 hover:text-[#f5f0eb]'
              }`}
            >
              <Mail className="w-4 h-4" />
              chris@chrisbrenzel.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 font-sans text-sm transition-colors ${
                isConsulting
                  ? 'text-[#8fa3bb] hover:text-blue-400'
                  : 'text-white/50 hover:text-[#f5f0eb]'
              }`}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-10 pt-6 border-t flex flex-col md:flex-row justify-between gap-2 ${
            isConsulting ? 'border-[#1e2d4a]' : 'border-[#222]'
          }`}
        >
          <p
            className={`font-sans text-xs ${
              isConsulting ? 'text-[#4a6380]' : 'text-white/25'
            }`}
          >
            &copy; {new Date().getFullYear()} Christopher Brenzel.{' '}
            <Link
              href="/photography/terms"
              className={`underline underline-offset-2 transition-colors ${
                isConsulting ? 'hover:text-[#8fa3bb]' : 'hover:text-white/50'
              }`}
            >
              All rights reserved.
            </Link>
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/"
              className={`font-sans text-xs transition-colors ${
                isConsulting
                  ? 'text-[#4a6380] hover:text-[#8fa3bb]'
                  : 'text-white/25 hover:text-white/50'
              }`}
            >
              Home
            </Link>
            <Link
              href={isConsulting ? '/photography' : '/consulting'}
              className={`font-sans text-xs transition-colors ${
                isConsulting
                  ? 'text-[#4a6380] hover:text-[#8fa3bb]'
                  : 'text-white/25 hover:text-white/50'
              }`}
            >
              {isConsulting ? 'Photography' : 'Professional'}
            </Link>
            <Link
              href="/photography/contact"
              className={`font-sans text-xs transition-colors ${
                isConsulting
                  ? 'text-[#4a6380] hover:text-[#8fa3bb]'
                  : 'text-white/25 hover:text-white/50'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/photography/terms"
              className={`font-sans text-xs transition-colors ${
                isConsulting
                  ? 'text-[#4a6380] hover:text-[#8fa3bb]'
                  : 'text-white/25 hover:text-white/50'
              }`}
            >
              Terms of Use
            </Link>
            <Link
              href="/photography/privacy"
              className={`font-sans text-xs transition-colors ${
                isConsulting
                  ? 'text-[#4a6380] hover:text-[#8fa3bb]'
                  : 'text-white/25 hover:text-white/50'
              }`}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
