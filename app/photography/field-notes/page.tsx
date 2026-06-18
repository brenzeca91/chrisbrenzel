import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Birding at Bettman Nature Preserve',
    category: 'Wildlife',
    date: 'March 2024',
    excerpt: 'A quiet morning at one of Lexington\'s most productive birding spots. Notes on species, light, and the patience required to observe well.',
    slug: 'birding-at-bettman',
    color: '#0d1f0d',
  },
  {
    title: 'Capturing Backyard Birds',
    category: 'Wildlife',
    date: 'February 2024',
    excerpt: 'What you can photograph without leaving your own yard — and why a simple feeder setup unlocks consistent access to wildlife.',
    slug: 'capturing-backyard-birds',
    color: '#0a1a0a',
  },
  {
    title: 'Capturing Snowflakes',
    category: 'Macro',
    date: 'January 2024',
    excerpt: 'The brief window after snowfall when individual crystals hold their shape. Equipment, setup, and what to look for.',
    slug: 'capturing-snowflakes',
    color: '#0d0d1f',
  },
  {
    title: 'Solar Eclipse Part I',
    category: 'Eclipses',
    date: 'April 2024',
    excerpt: 'Preparation, location scouting, and the gear choices that shaped how I approached photographing totality.',
    slug: 'solar-eclipse-part-1',
    color: '#1a0d00',
  },
  {
    title: 'Solar Eclipse Part II',
    category: 'Eclipses',
    date: 'April 2024',
    excerpt: 'In the field during totality. What worked, what didn\'t, and the images that came out of it.',
    slug: 'solar-eclipse-part-2',
    color: '#1f0800',
  },
  {
    title: 'How to: Lensball Photography',
    category: 'Macro',
    date: 'December 2023',
    excerpt: 'Using a glass sphere as a lens element. Setup, focusing challenges, and creative possibilities.',
    slug: 'lensball-photography',
    color: '#0a0f1a',
  },
  {
    title: 'Macro Photography at Folly Beach',
    category: 'Macro',
    date: 'October 2023',
    excerpt: 'Sand, shells, and shoreline texture at extreme magnification. Field notes from South Carolina.',
    slug: 'macro-at-folly-beach',
    color: '#0d1a0a',
  },
  {
    title: 'Exploring Frankfort, KY',
    category: 'Travel',
    date: 'September 2023',
    excerpt: 'A day in Kentucky\'s state capital — architecture, the river, and light at the end of summer.',
    slug: 'exploring-frankfort',
    color: '#1a1208',
  },
]

export default function FieldNotesPage() {
  return (
    <main className="pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
          Field Notes
        </p>
        <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl font-medium leading-tight mb-4 text-balance">
          Writing from the field
        </h1>
        <p className="text-white/40 font-sans text-base md:text-lg leading-relaxed max-w-xl">
          Notes on photography process, species observations, location scouting,
          and what it takes to document the natural world carefully.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1a1a1a]" />
      </div>

      {/* Posts grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border border-[#1a1a1a] hover:border-[#333] rounded overflow-hidden
                         hover:bg-[#141414] transition-all"
            >
              {/* Placeholder image */}
              <div
                className="photo-zoom aspect-video overflow-hidden border-b border-[#1a1a1a]"
                style={{ backgroundColor: post.color }}
              >
                <div
                  className="img-inner w-full h-full"
                  style={{ backgroundColor: post.color }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white/30 font-sans text-[10px] tracking-[0.15em] uppercase">
                    {post.category}
                  </p>
                  <p className="text-white/25 font-sans text-xs">{post.date}</p>
                </div>
                <h2 className="text-[#f5f0eb] font-serif text-lg font-medium mb-3 group-hover:text-white transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-white/40 font-sans text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/photography/field-notes/${post.slug}`}
                  className="flex items-center gap-1.5 text-white/35 hover:text-white/70 font-sans text-xs
                             font-medium transition-colors"
                >
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
