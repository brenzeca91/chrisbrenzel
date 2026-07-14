import type { Metadata } from 'next'
import { headers } from 'next/headers'
import SonyQuiz from '../SonyQuiz'

export const metadata: Metadata = {
  title: 'Best Sony Camera for Me -- Quiz',
  robots: { index: false, follow: false },
}

// Allow this page to be iframed from any origin
export async function generateStaticParams() {
  return []
}

export default function SonyQuizEmbed() {
  return (
    <html lang="en" className="bg-[#0c0c0c]">
      <body className="bg-[#0c0c0c] min-h-screen p-4 md:p-6 pb-16">
        <SonyQuiz embedMode={true} />
        <p className="text-white/20 font-sans text-xs text-center mt-6">
          Quiz by{' '}
          <a
            href="https://www.chrisbrenzel.com/photography/best-beginner-sony-camera"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/40 transition-colors"
          >
            chrisbrenzel.com
          </a>
        </p>
      </body>
    </html>
  )
}
