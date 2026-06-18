import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SelectedWorksSlider } from '@/components/photography/selected-works-slider'
import { CollectionSlider } from '@/components/photography/collection-slider'

const rustAndRuinPreview = [
  { src: '/images/collections/rust-and-ruin/rr-6.jpg',  title: 'Autumn Ivy on Fire-Escape Facade' },
  { src: '/images/collections/rust-and-ruin/rr-8.jpg',  title: 'Rusted Machinery Gears' },
  { src: '/images/collections/rust-and-ruin/rr-3.jpg',  title: 'Broken Greenhouse Glass' },
  { src: '/images/collections/rust-and-ruin/rr-7.jpg',  title: 'Abandoned Brick Porch' },
  { src: '/images/collections/rust-and-ruin/rr-5.jpg',  title: 'Looking Up Through a Stone Tower' },
]

const wildlifePreview = [
  { src: '/images/gallery/photo-5.jpg',                 title: 'Great Blue Heron' },
  { src: '/images/collections/wildlife/wl-2.jpg',       title: 'Green Anole' },
  { src: '/images/collections/wildlife/wl-5.jpg',       title: 'House Finch' },
  { src: '/images/collections/wildlife/wl-4.jpg',       title: 'Garden Snail' },
  { src: '/images/collections/wildlife/wl-12.jpg',      title: 'Slug on Fallen Oak Leaf' },
]

const categories = [
  {
    label: 'Wildlife',
    href: '/photography/gallery?category=wildlife',
    image: '/images/collections/wildlife/wl-1.jpg',
    alt: 'Mourning dove perched on a bare winter branch',
  },
  {
    label: 'Macro',
    href: '/photography/gallery?category=macro',
    image: '/images/field-notes/folly-beach.jpg',
    alt: 'Macro photograph of shells and sand grains at Folly Beach',
  },
  {
    label: 'Eclipses',
    href: '/photography/gallery?category=eclipses',
    image: '/images/field-notes/eclipse-part2.jpg',
    alt: 'Total solar eclipse at totality with solar flares visible',
  },
  {
    label: 'Rust & Ruin',
    href: '/photography/collections/rust-and-ruin',
    image: '/images/collections/rust-and-ruin/rr-3.jpg',
    alt: 'Ivy growing through a broken greenhouse window',
  },
  {
    label: 'Travel',
    href: '/photography/gallery?category=travel',
    image: '/images/field-notes/frankfort.jpg',
    alt: 'Ivy growing on a wall with broken window in Frankfort, KY',
  },
  {
    label: 'Astrophotography',
    href: '/photography/gallery?category=astrophotography',
    image: '/images/field-notes/eclipse-part1.jpg',
    alt: 'Partial solar eclipse through a solar filter',
  },
]

const fieldNotesPosts = [
  {
    title: 'Birding at Bettman Nature Preserve',
    category: 'Wildlife',
    date: 'Jan 21, 2025',
    excerpt: 'Winter bird photography at a nature preserve surrounded by feeders — bright plumage against white snow and bare branches.',
    image: '/images/field-notes/bettman.jpg',
    alt: 'Dark-eyed junco perched on bare winter branches',
    slug: 'birding-at-bettman',
  },
  {
    title: 'Solar Eclipse — Part II',
    category: 'Astrophotography',
    date: 'Apr 12, 2024',
    excerpt: 'The moment of totality: solar filters off, shutter open. Massive solar flares visible around the moon\'s silhouette.',
    image: '/images/field-notes/eclipse-part2.jpg',
    alt: 'Total solar eclipse at totality with solar corona and flares',
    slug: 'solar-eclipse-part-2',
  },
  {
    title: 'Macro Photography at Folly Beach',
    category: 'Macro',
    date: 'Dec 15, 2021',
    excerpt: 'First outing with a macro lens. Tiny shells, sand grains, and the challenge of keeping wind-blown subjects in focus.',
    image: '/images/field-notes/folly-beach.jpg',
    alt: 'Macro close-up of a shell resting in sand at Folly Beach SC',
    slug: 'macro-at-folly-beach',
  },
]

export default function PhotographyPage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/photography-hero.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-[#0c0c0c]/20"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 md:pb-20 w-full">
          <p className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase mb-6 font-sans">
            Nature Photography
          </p>
          <h1 className="text-[#f5f0eb] font-serif italic text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 text-balance">
            Slowing down.
            <br />
            Paying attention.
          </h1>
          <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-xl mb-4">
            Wildlife, macro details, landscapes, weather, eclipses, and field notes
            from Kentucky and beyond.
          </p>
          <p className="text-white/55 font-sans text-sm leading-relaxed max-w-lg">
            Photography gives Christopher a way to slow down, pay attention, and
            document the natural world. This section collects visual work, learning
            experiments, and field observations.
          </p>
        </div>
      </section>

      {/* Selected works slider */}
      <SelectedWorksSlider />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Browse by subject */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
          Browse by subject
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group relative overflow-hidden rounded aspect-square border border-[#222] hover:border-[#444] transition-all"
              aria-label={`Browse ${cat.label} photos`}
            >
              {/* Real photo background */}
              <img
                src={cat.image}
                alt={cat.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Label */}
              <span className="absolute bottom-3 left-3 right-3 text-[#f5f0eb] font-sans text-sm font-medium z-10 group-hover:text-white transition-colors">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Rust & Ruin collection preview */}
      <CollectionSlider
        title="Rust & Ruin"
        subtitle="Nature & Decay"
        description="Nature reclaiming what was built — ivy pressing through mortar, rust blooming on iron, glass cracking under the weight of vines."
        href="/photography/collections/rust-and-ruin"
        photos={rustAndRuinPreview}
        accentColor="#e8d5c0"
      />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Wildlife collection preview */}
      <CollectionSlider
        title="Wildlife"
        subtitle="Birds & Creatures"
        description="Birds, reptiles, and small creatures caught in an unguarded moment — still long enough to be seen, close enough to be known."
        href="/photography/collections/wildlife"
        photos={wildlifePreview}
        accentColor="#c8dfc8"
      />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Field notes teaser */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
              Field Notes
            </p>
            <h2 className="text-[#f5f0eb] font-serif italic text-3xl md:text-4xl font-medium text-balance">
              Writing from the field
            </h2>
          </div>
          <Link
            href="/photography/field-notes"
            className="flex items-center gap-2 text-white/40 hover:text-white/70 font-sans text-sm transition-colors"
          >
            All posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fieldNotesPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/photography/field-notes/${post.slug}`}
              className="group border border-[#1a1a1a] hover:border-[#333] rounded overflow-hidden hover:bg-[#141414] transition-all"
            >
              <div className="aspect-video overflow-hidden border-b border-[#1a1a1a] bg-[#0c0c0c]">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white/30 font-sans text-[10px] tracking-[0.15em] uppercase">
                    {post.category}
                  </p>
                  <p className="text-white/25 font-sans text-xs">{post.date}</p>
                </div>
                <h3 className="text-[#f5f0eb] font-serif text-lg font-medium mb-3 group-hover:text-white transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-white/40 font-sans text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
