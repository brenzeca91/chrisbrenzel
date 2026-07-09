import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Birding at Bettman Nature Preserve',
    category: 'Wildlife',
    date: 'January 21, 2025',
    location: 'Cincinnati, OH',
    excerpt:
      'Winter bird photography at a nature preserve surrounded by feeders — bright plumage against white snow, bare branches, and the challenge of shooting through glass in cold overcast light.',
    slug: 'birding-at-bettman',
    cover: '/images/field-notes/bettman.jpg',
  },
  {
    title: 'Capturing Backyard Birds',
    category: 'Wildlife',
    date: 'January 20, 2025',
    location: 'Lexington, KY',
    excerpt:
      'A review of the Sony FE 200-600mm f/5.6-6.3 G OSS and what a backyard feeder setup can unlock — white-throated sparrows, cardinals, and a tufted titmouse at 50 feet.',
    slug: 'capturing-backyard-birds',
    cover: '/images/field-notes/backyard-birds.jpg',
  },
  {
    title: 'Capturing Snowflakes',
    category: 'Macro',
    date: 'January 16, 2025',
    location: 'Lexington, KY',
    excerpt:
      'Following in the footsteps of Wilson A. Bentley, who photographed over 5,000 snowflakes. A humbling first attempt at extreme macro photography of ice crystals before they melt.',
    slug: 'capturing-snowflakes',
    cover: '/images/field-notes/snowflakes.jpg',
  },
  {
    title: 'Solar Eclipse — Part II',
    category: 'Astrophotography',
    date: 'April 12, 2024',
    location: 'Springboro, OH',
    excerpt:
      "The moment of totality: solar filters off, shutter open. Massive solar flares visible around the moon's silhouette and the eerie light of a darkened afternoon sky.",
    slug: 'solar-eclipse-part-2',
    cover: '/images/field-notes/eclipse-part2.jpg',
  },
  {
    title: 'Solar Eclipse — Part I',
    category: 'Astrophotography',
    date: 'April 12, 2024',
    location: 'Springboro, OH',
    excerpt:
      'April 8, 2024: a total solar eclipse visible across a wide swath of the US. Setup, solar filters, and a homemade solution for protecting the camera sensor from the sun.',
    slug: 'solar-eclipse-part-1',
    cover: '/images/field-notes/eclipse-part1.jpg',
  },
  {
    title: 'How to: Lensball Photography',
    category: 'How-To',
    date: 'December 12, 2023',
    location: 'Lexington, KY',
    excerpt:
      'A crystal sphere that bends and inverts the world — and the unexpected challenges of capturing clean, original images through one. Common mistakes and tips for beginners.',
    slug: 'lensball-photography',
    cover: '/images/field-notes/lensball-forest-log-refraction-christopher-brenzel.jpg',
  },
  {
    title: 'Exploring Frankfort, KY',
    category: 'Street',
    date: 'May 1, 2023',
    location: 'Frankfort, KY',
    excerpt:
      "A day of street photography in Kentucky's capital — the brick castle of the Military History Museum, the river, ivy on a broken window, and a hunt for a striking natural divide.",
    slug: 'exploring-frankfort',
    cover: '/images/field-notes/frankfort.jpg',
  },
  {
    title: 'Macro Photography at Folly Beach',
    category: 'Macro',
    date: 'December 15, 2021',
    location: 'Folly Beach, SC',
    excerpt:
      'First outing with a macro lens on a Sony A6000. Tiny shells, sand grains, and the difficulty of keeping wind-blown subjects still long enough to cover.',
    slug: 'macro-at-folly-beach',
    cover: '/images/field-notes/folly-beach.jpg',
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
              className="group border border-[#1a1a1a] hover:border-[#333] rounded overflow-hidden hover:bg-[#141414] transition-all flex flex-col"
            >
              {/* Cover image */}
              <Link href={`/photography/field-notes/${post.slug}`} className="block overflow-hidden aspect-[4/3] relative bg-[#111]">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/60 to-transparent" />
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white/30 font-sans text-[10px] tracking-[0.15em] uppercase">
                    {post.category}
                  </p>
                  <p className="text-white/25 font-sans text-xs">{post.date}</p>
                </div>
                <h2 className="text-[#f5f0eb] font-serif text-lg font-medium mb-3 group-hover:text-white transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-white/40 font-sans text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/20 font-sans text-xs">{post.location}</span>
                  <Link
                    href={`/photography/field-notes/${post.slug}`}
                    className="flex items-center gap-1.5 text-white/35 hover:text-white/70 font-sans text-xs font-medium transition-colors"
                  >
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
