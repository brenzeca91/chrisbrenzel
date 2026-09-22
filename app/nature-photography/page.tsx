import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Camera, Image as ImageIcon, ShoppingBag } from 'lucide-react'
import { SelectedWorksSlider } from '@/components/photography/selected-works-slider'
import { CollectionSlider } from '@/components/photography/collection-slider'

export const metadata: Metadata = {
  title: 'Kentucky Nature Photography & Fine Art Prints | Chris Brenzel',
  description:
    'Explore Kentucky wildlife, bird, macro, landscape, and astrophotography by Chris Brenzel, with fine-art prints and field notes from Kentucky and beyond.',
  alternates: { canonical: 'https://www.chrisbrenzel.com/nature-photography' },
  openGraph: {
    title: 'Kentucky Nature Photography & Fine Art Prints | Chris Brenzel',
    description:
      'Explore Kentucky wildlife, bird, macro, landscape, and astrophotography by Chris Brenzel, with fine-art prints and field notes from Kentucky and beyond.',
    url: 'https://www.chrisbrenzel.com/nature-photography',
    siteName: 'ChrisBrenzel.com',
    type: 'website',
    images: [{ url: 'https://www.chrisbrenzel.com/og-image.png', width: 1200, height: 630, alt: 'Christopher Brenzel Nature Photography' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kentucky Nature Photography & Fine Art Prints | Chris Brenzel',
    images: ['https://www.chrisbrenzel.com/og-image.png'],
  },
}

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
    label: 'Landscapes',
    href: '/photography/gallery?category=landscapes',
    image: '/images/gallery/photo-9.jpg',
    alt: 'Long-exposure waterfall spilling over sandstone ledges at Red River Gorge, KY',
  },
  {
    label: 'Macro',
    href: '/photography/gallery?category=macro',
    image: '/images/field-notes/folly-beach.jpg',
    alt: 'Macro photograph of shells and sand grains at Folly Beach',
  },
  {
    label: 'Eclipse & Astrophotography',
    href: "/photography/gallery?category=eclipse%20%26%20astrophotography",
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
]

const fieldNotesPosts = [
  {
    title: 'Which Sony Camera Is Right for You?',
    category: 'Gear',
    date: 'Jul 14, 2026',
    excerpt: 'Answer 15 questions about your budget, subjects, and goals — and get a personalized Sony camera recommendation.',
    image: '/images/sony-quiz/photographer-alhambra-spain-sony.jpg',
    alt: 'Photographer shooting inside the Alhambra palace in Spain with a compact Sony mirrorless camera',
    href: '/photography/best-beginner-sony-camera',
  },
  {
    title: 'Renting Gear for Wildlife Photography',
    category: 'Gear',
    date: 'Jul 9, 2026',
    excerpt: 'A firsthand look at renting the Sony 200-600mm through Lensrentals — shipping, condition, and whether it makes sense before buying.',
    image: '/images/field-notes/lensrentals-telephoto-bird-photography-forest.jpg',
    alt: 'Telephoto lens in a forest setting for bird and wildlife photography',
    href: '/photography/lensrentals-review-wildlife-photography-gear',
  },
  {
    title: 'Birding at Bettman Nature Preserve',
    category: 'Wildlife',
    date: 'Jan 21, 2025',
    excerpt: 'Winter bird photography at a nature preserve surrounded by feeders — bright plumage against white snow and bare branches.',
    image: '/images/field-notes/bettman.jpg',
    alt: 'Dark-eyed junco perched on bare winter branches',
    slug: 'birding-at-bettman',
  },
]

const resources = [
  {
    label: 'Gallery',
    description: 'Browse the full collection of wildlife, landscape, macro, and astrophotography.',
    href: '/photography/gallery',
    icon: ImageIcon,
  },
  {
    label: 'Fine-Art Prints',
    description: 'Order select images as fine-art prints through the Pixieset print store.',
    href: '/photography/prints',
    icon: ShoppingBag,
  },
  {
    label: 'Field Notes',
    description: 'Field observations, gear reviews, and writing from photography outings.',
    href: '/photography/field-notes',
    icon: BookOpen,
  },
  {
    label: 'Camera Bag',
    description: 'The cameras, lenses, and accessories carried in the field.',
    href: '/photography/camera-bag',
    icon: Camera,
  },
]

export default function NaturePhotographyPage() {
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
            Nature photography from Kentucky and beyond
          </h1>
          <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Wildlife, birds, landscapes, macro details, weather, eclipses, and field observations
            from Kentucky and beyond.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/photography/gallery"
              className="flex items-center gap-2 bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f] font-sans font-semibold text-sm px-6 py-3 rounded transition-colors"
            >
              View the Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/photography/prints"
              className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
            >
              Browse Fine-Art Prints
            </Link>
            <Link
              href="/photography/field-notes"
              className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-sans font-medium text-sm px-6 py-3 rounded transition-colors"
            >
              Read Field Notes
            </Link>
          </div>
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
              <img
                src={cat.image}
                alt={cat.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
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
              key={'href' in post ? post.href : post.slug}
              href={'href' in post ? post.href! : `/photography/field-notes/${post.slug}`}
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

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Prints CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-[28%] shrink-0 rounded overflow-hidden border border-[#1a1a1a]">
            <img
              src="/images/mockups/mockup-living-room.png"
              alt="Kite Day — Father and Son print displayed in a minimal living room"
              className="w-full h-auto block"
            />
          </div>
          <div>
            <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
              Prints by Inquiry
            </p>
            <h2 className="text-[#f5f0eb] font-serif italic text-2xl md:text-3xl font-medium mb-4 text-balance">
              Bring a photograph home.
            </h2>
            <p className="text-white/50 font-sans text-sm leading-relaxed max-w-md mb-6">
              Select images from this collection are available as fine-art prints. Each is printed to order — reach out to discuss sizing, framing, and availability.
            </p>
            <Link
              href="/photography/prints"
              className="inline-flex items-center gap-2 text-[#f5f0eb] hover:text-white font-sans text-sm border border-[#333] hover:border-[#555] px-5 py-2.5 rounded transition-all"
            >
              View prints <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Resource hub */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
          Explore more
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map(({ label, description, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col gap-4 border border-[#1a1a1a] hover:border-[#3a3a3a] rounded-lg p-6 transition-all hover:bg-[#0e0e0e]"
            >
              <div className="w-9 h-9 rounded-md bg-[#1a1a2e] flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-[#5b9bff]" />
              </div>
              <div>
                <p className="text-[#f5f0eb] font-sans font-semibold text-base mb-2 group-hover:text-white transition-colors">
                  {label}
                </p>
                <p className="text-white/40 font-sans text-sm leading-relaxed">{description}</p>
              </div>
              <p className="text-[#5b9bff] font-sans text-xs mt-auto">Visit &rarr;</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#1a2a1a] bg-[#090f09] rounded-lg p-8 md:p-12">
          <div>
            <p className="text-white/40 text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
              The full collection
            </p>
            <h2 className="text-[#f5f0eb] font-serif italic text-2xl md:text-3xl font-medium mb-3 text-balance">
              Explore the full collection
            </h2>
            <p className="text-white/50 font-sans text-sm md:text-base leading-relaxed max-w-lg">
              Wildlife, landscapes, macro, astrophotography, and field notes from Kentucky and beyond.
            </p>
          </div>
          <Link
            href="/photography/gallery"
            className="flex items-center gap-2 bg-[#5b9bff] hover:bg-[#7ab2ff] text-[#050d1f] font-sans font-semibold text-sm px-6 py-3 rounded transition-colors shrink-0 self-start md:self-auto"
          >
            Explore the full collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
