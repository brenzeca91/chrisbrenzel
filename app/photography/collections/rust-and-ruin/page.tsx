import { CollectionSlider } from '@/components/photography/collection-slider'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const photos = [
  { src: '/images/collections/rust-and-ruin/rr-1.jpg',  title: 'Ivy on Dry-Stone Wall', caption: 'Nature reclaiming the gaps between stones' },
  { src: '/images/collections/rust-and-ruin/rr-2.jpg',  title: 'Hedge Over Stone Culvert', caption: 'Green swallowing grey' },
  { src: '/images/collections/rust-and-ruin/rr-3.jpg',  title: 'Broken Greenhouse Glass', caption: 'Grapevine through fractured panes' },
  { src: '/images/collections/rust-and-ruin/rr-4.jpg',  title: 'Art-Deco Tower & Cable', caption: 'Brick and steel against open sky' },
  { src: '/images/collections/rust-and-ruin/rr-5.jpg',  title: 'Looking Up Through a Stone Tower', caption: 'Circular window of sky above a ruin' },
  { src: '/images/collections/rust-and-ruin/rr-6.jpg',  title: 'Autumn Ivy on Fire-Escape Facade', caption: 'Red and orange against painted brick' },
  { src: '/images/collections/rust-and-ruin/rr-7.jpg',  title: 'Abandoned Brick Porch', caption: 'Peeling paint, quiet threshold' },
  { src: '/images/collections/rust-and-ruin/rr-8.jpg',  title: 'Rusted Machinery Gears', caption: 'Iron teeth frozen mid-turn' },
  { src: '/images/collections/rust-and-ruin/rr-9.jpg',  title: 'Old Farm Gate', caption: 'Rust and lichen on a hinged boundary' },
  { src: '/images/collections/rust-and-ruin/rr-10.jpg', title: 'Derelict Door', caption: 'Stained-glass transom above a rotting frame' },
  { src: '/images/collections/rust-and-ruin/rr-11.jpg', title: 'Graffiti Underpass', caption: 'Color in a forgotten corridor' },
  { src: '/images/collections/rust-and-ruin/rr-12.jpg', title: 'Brick Facade, Broken Windows', caption: 'Wooden stair and cracked glass' },
  { src: '/images/collections/rust-and-ruin/rr-13.jpg', title: 'Stone Archway Storeroom', caption: 'Vaulted ceiling, forgotten interior' },
]

export const metadata = {
  title: 'Rust & Ruin — Christopher Brenzel Photography',
  description: 'A collection of nature reclaiming abandoned structures — ivy, rust, broken glass, and weathered stone.',
}

export default function RustAndRuinPage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: "url('/images/collections/rust-and-ruin/rr-6.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/50 to-[#0c0c0c]/10" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <Link
            href="/photography"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-sans text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Photography
          </Link>
          <p className="text-white/40 text-xs font-medium tracking-[0.2em] uppercase mb-4 font-sans">
            Collection
          </p>
          <h1 className="text-[#e8d5c0] font-serif italic text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-4 text-balance">
            Rust & Ruin
          </h1>
          <p className="text-white/60 font-sans text-base md:text-lg leading-relaxed max-w-xl">
            The slow work of nature reclaiming what was built. Ivy pressing through mortar,
            rust blooming on iron, glass cracking under the weight of vines. These images
            follow the edges where the made world gives way.
          </p>
        </div>
      </section>

      {/* Full collection slider */}
      <CollectionSlider
        title="Rust & Ruin"
        subtitle="Nature & Decay"
        description="All photographs from this collection — nature reclaiming abandoned structures across Kentucky and beyond."
        href="/photography/collections/rust-and-ruin"
        photos={photos}
        accentColor="#e8d5c0"
      />

      {/* Full grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="h-px bg-[#222] mb-16" />
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
          All {photos.length} photographs
        </p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div key={photo.src} className="break-inside-avoid">
              <div className="overflow-hidden rounded-lg border border-[#1a1a1a] group">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <p className="text-white/40 font-sans text-xs mt-2 px-1">{photo.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
