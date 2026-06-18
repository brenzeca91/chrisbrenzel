import { CollectionSlider } from '@/components/photography/collection-slider'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const photos = [
  { src: '/images/gallery/photo-5.jpg',                          title: 'Great Blue Heron',          caption: 'Patient and still at the water\'s edge' },
  { src: '/images/collections/wildlife/wl-2.jpg',               title: 'Green Anole',               caption: 'Basking on weathered stone' },
  { src: '/images/collections/wildlife/wl-1.jpg',               title: 'Mourning Dove',             caption: 'Framed through the feeder window' },
  { src: '/images/collections/wildlife/wl-5.jpg',               title: 'House Finch',               caption: 'Perched on a rusty rail in winter light' },
  { src: '/images/collections/wildlife/wl-4.jpg',               title: 'Garden Snail',              caption: 'A perfect spiral, moving slow' },
  { src: '/images/collections/wildlife/wl-12.jpg',              title: 'Slug on Fallen Oak Leaf',   caption: 'Brown against autumn pink' },
]

export const metadata = {
  title: 'Wildlife — Christopher Brenzel Photography',
  description: 'Birds, reptiles, and small creatures photographed across Kentucky and beyond.',
}

export default function WildlifePage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: "url('/images/gallery/photo-5.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
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
          <h1 className="text-[#c8dfc8] font-serif italic text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-4 text-balance">
            Wildlife
          </h1>
          <p className="text-white/60 font-sans text-base md:text-lg leading-relaxed max-w-xl">
            Birds, reptiles, and small creatures encountered in backyards, nature preserves,
            and coastal edges. Each one caught in an unguarded moment — still long enough to
            be seen, close enough to be known.
          </p>
        </div>
      </section>

      {/* Full collection slider */}
      <CollectionSlider
        title="Wildlife"
        subtitle="Birds & Creatures"
        description="Birds, reptiles, and small creatures photographed across Kentucky and the Southeast."
        href="/photography/collections/wildlife"
        photos={photos}
        accentColor="#c8dfc8"
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
