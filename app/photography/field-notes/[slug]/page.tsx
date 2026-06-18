import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Example static post data — this would be replaced by a CMS or MDX
const postData: Record<string, { title: string; date: string; location: string; category: string; excerpt: string; color: string }> = {
  'birding-at-bettman': {
    title: 'Birding at Bettman Nature Preserve',
    date: 'March 15, 2024',
    location: 'Lexington, KY',
    category: 'Wildlife',
    excerpt: 'A quiet morning at one of Lexington\'s most productive birding spots.',
    color: '#0d1f0d',
  },
  'capturing-backyard-birds': {
    title: 'Capturing Backyard Birds',
    date: 'February 8, 2024',
    location: 'Lexington, KY',
    category: 'Wildlife',
    excerpt: 'What you can photograph without leaving your own yard.',
    color: '#0a1a0a',
  },
  'capturing-snowflakes': {
    title: 'Capturing Snowflakes',
    date: 'January 22, 2024',
    location: 'Lexington, KY',
    category: 'Macro',
    excerpt: 'The brief window when individual crystals hold their shape.',
    color: '#0d0d1f',
  },
  'solar-eclipse-part-1': {
    title: 'Solar Eclipse Part I',
    date: 'April 7, 2024',
    location: 'Central Kentucky',
    category: 'Eclipses',
    excerpt: 'Preparation, location scouting, and gear choices for totality.',
    color: '#1a0d00',
  },
  'solar-eclipse-part-2': {
    title: 'Solar Eclipse Part II',
    date: 'April 9, 2024',
    location: 'Central Kentucky',
    category: 'Eclipses',
    excerpt: 'In the field during totality.',
    color: '#1f0800',
  },
  'lensball-photography': {
    title: 'How to: Lensball Photography',
    date: 'December 12, 2023',
    location: 'Lexington, KY',
    category: 'Macro',
    excerpt: 'Using a glass sphere as a lens element.',
    color: '#0a0f1a',
  },
  'macro-at-folly-beach': {
    title: 'Macro Photography at Folly Beach',
    date: 'October 5, 2023',
    location: 'Folly Beach, SC',
    category: 'Macro',
    excerpt: 'Sand, shells, and shoreline texture at extreme magnification.',
    color: '#0d1a0a',
  },
  'exploring-frankfort': {
    title: 'Exploring Frankfort, KY',
    date: 'September 18, 2023',
    location: 'Frankfort, KY',
    category: 'Travel',
    excerpt: 'A day in Kentucky\'s state capital.',
    color: '#1a1208',
  },
}

export default async function FieldNotePost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = postData[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/30 font-sans text-sm mb-4">Post not found</p>
          <Link
            href="/photography/field-notes"
            className="text-white/50 hover:text-white font-sans text-sm transition-colors"
          >
            Back to field notes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="pt-14">
      {/* Hero image */}
      <div
        className="relative w-full"
        style={{ height: 'min(70vh, 600px)', backgroundColor: post.color }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0c0c]" />
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 -mt-12 relative z-10 pb-20">
        {/* Back link */}
        <Link
          href="/photography/field-notes"
          className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 font-sans text-xs mb-10 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Field notes
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-white/30 font-sans text-[10px] tracking-[0.15em] uppercase">
            {post.category}
          </span>
          <span className="w-px h-3 bg-white/15" />
          <span className="text-white/25 font-sans text-xs">{post.date}</span>
          <span className="w-px h-3 bg-white/15" />
          <span className="text-white/25 font-sans text-xs">{post.location}</span>
        </div>

        <h1 className="text-[#f5f0eb] font-serif italic text-3xl md:text-4xl font-medium leading-tight mb-8 text-balance">
          {post.title}
        </h1>

        {/* Body placeholder */}
        <div className="flex flex-col gap-5">
          <p className="text-white/55 font-sans text-base leading-relaxed">
            {post.excerpt} These are field notes — observations made in the moment,
            refined lightly for clarity. The goal is to document what the experience
            was actually like, what the conditions were, and what the images
            required to make.
          </p>
          <p className="text-white/45 font-sans text-base leading-relaxed">
            Photography has a way of forcing you to slow down. You cannot photograph
            what you have not noticed. These posts are as much about noticing as
            they are about technique.
          </p>
        </div>

        {/* Camera info placeholder */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
          <p className="text-white/25 text-xs font-medium tracking-[0.15em] uppercase mb-4 font-sans">
            Equipment & settings
          </p>
          <p className="text-white/30 font-sans text-xs leading-relaxed">
            Camera and settings information will be added when available.
          </p>
        </div>

        {/* Related */}
        <div className="mt-12">
          <p className="text-white/25 text-xs font-medium tracking-[0.15em] uppercase mb-6 font-sans">
            More field notes
          </p>
          <Link
            href="/photography/field-notes"
            className="inline-flex items-center gap-2 text-white/35 hover:text-white/65 font-sans text-sm transition-colors"
          >
            Back to all posts
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </article>
    </main>
  )
}
