'use client'

import { useState } from 'react'

const allPhotos = [
  // --- Selected Works (9) ---
  { src: '/images/gallery/photo-1.jpg', title: 'Great Blue Heron', category: 'Wildlife', location: 'Kentucky', caption: 'A heron standing motionless in shallow water at dusk.' },
  { src: '/images/gallery/photo-2.jpg', title: 'Ring of Fire Eclipse', category: 'Eclipses', location: 'Central Kentucky', caption: 'Annular eclipse at maximum coverage.' },
  { src: '/images/gallery/photo-3.jpg', title: 'Cascade Detail', category: 'Landscapes', location: 'Red River Gorge, KY', caption: 'Long-exposure water over mossy sandstone.' },
  { src: '/images/gallery/photo-4.jpg', title: 'Spring Phlox', category: 'Macro', location: 'Kentucky', caption: 'Wild blue phlox backlit in early morning.' },
  { src: '/images/gallery/photo-5.jpg', title: 'Floating Maple Leaf', category: 'Macro', location: 'Kentucky', caption: 'Autumn maple leaf drifting on a still pond.' },
  { src: '/images/gallery/photo-6.jpg', title: 'Leopard Slug', category: 'Wildlife', location: 'Kentucky', caption: 'A leopard slug moving through fallen leaves.' },
  { src: '/images/gallery/photo-7.jpg', title: 'White Coneflower', category: 'Macro', location: 'Lexington, KY', caption: 'A late-season coneflower against a dark background.' },
  { src: '/images/gallery/photo-8.jpg', title: 'Backlit Forest Moss', category: 'Macro', location: 'Red River Gorge, KY', caption: 'Moss-covered bark lit from behind by afternoon sun.' },
  { src: '/images/gallery/photo-9.jpg', title: 'Alhambra', category: 'Travel', location: 'Granada, Spain', caption: 'Courtyard details at the Alhambra palace complex.' },

  // --- Rust & Ruin (16) ---
  { src: '/images/collections/rust-and-ruin/rr-1.jpg',  title: 'Ivy on Dry-Stone Wall', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Dense ivy pressing into the gaps of an old fieldstone wall.' },
  { src: '/images/collections/rust-and-ruin/rr-2.jpg',  title: 'Hedgerow Over Culvert', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Wild hedge growing over a weathered stone water channel.' },
  { src: '/images/collections/rust-and-ruin/rr-3.jpg',  title: 'Broken Greenhouse Glass', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Grapevine threading through a shattered greenhouse pane.' },
  { src: '/images/collections/rust-and-ruin/rr-4.jpg',  title: 'Art-Deco Cable Tower', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Brick facade and art-deco detail on an old utility structure.' },
  { src: '/images/collections/rust-and-ruin/rr-5.jpg',  title: 'Stone Tower Interior', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Looking up through the hollow of a crumbling stone tower.' },
  { src: '/images/collections/rust-and-ruin/rr-6.jpg',  title: 'Autumn Ivy Fire Escape', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Red ivy climbing a metal fire escape on a brick building.' },
  { src: '/images/collections/rust-and-ruin/rr-7.jpg',  title: 'Abandoned Brick Porch', category: 'Rust & Ruin', location: 'Kentucky', caption: 'A derelict wooden porch sagging against a brick facade.' },
  { src: '/images/collections/rust-and-ruin/rr-8.jpg',  title: 'Rusted Machinery Gears', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Close detail of oxidized iron gears on old farm equipment.' },
  { src: '/images/collections/rust-and-ruin/rr-9.jpg',  title: 'Old Farm Gate', category: 'Rust & Ruin', location: 'Kentucky', caption: 'A rusted iron gate half-open in an overgrown pasture.' },
  { src: '/images/collections/rust-and-ruin/rr-10.jpg', title: 'Derelict Stained-Glass Door', category: 'Rust & Ruin', location: 'Kentucky', caption: 'An abandoned doorway with a cracked transom window.' },
  { src: '/images/collections/rust-and-ruin/rr-11.jpg', title: 'Graffiti Underpass', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Layered spray paint beneath a concrete overpass.' },
  { src: '/images/collections/rust-and-ruin/rr-12.jpg', title: 'Broken Windows & Stair', category: 'Rust & Ruin', location: 'Kentucky', caption: 'A decaying exterior staircase beside blown-out windows.' },
  { src: '/images/collections/rust-and-ruin/rr-13.jpg', title: 'Brick Archway Storeroom', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Light filtering through a collapsed brick arch.' },
  { src: '/images/collections/rust-and-ruin/rr-14.jpg', title: 'Art-Deco Brick Facade', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Ornate brickwork on a forgotten urban building.' },
  { src: '/images/collections/rust-and-ruin/rr-15.jpg', title: 'Stone Weir', category: 'Rust & Ruin', location: 'Kentucky', caption: 'A historic stone dam wall reflected in still water below.' },
  { src: '/images/collections/rust-and-ruin/rr-16.jpg', title: 'Vintage Fire Hydrant', category: 'Rust & Ruin', location: 'Kentucky', caption: 'An old red fire hydrant spotted with rust and age.' },

  // --- Wildlife (14) ---
  { src: '/images/collections/wildlife/wl-1.jpg',  title: 'Mourning Dove', category: 'Wildlife', location: 'Lexington, KY', caption: 'A mourning dove resting at a backyard feeder.' },
  { src: '/images/collections/wildlife/wl-2.jpg',  title: 'Green Anole', category: 'Wildlife', location: 'Kentucky', caption: 'A green anole clinging to stone, dewlap extended.' },
  { src: '/images/collections/wildlife/wl-3.jpg',  title: 'Autumn Maple Canopy', category: 'Landscapes', location: 'Kentucky', caption: 'Peak autumn color looking up through the maple canopy.' },
  { src: '/images/collections/wildlife/wl-4.jpg',  title: 'Garden Snail', category: 'Wildlife', location: 'Kentucky', caption: 'A garden snail moving slowly across a rusty iron rail.' },
  { src: '/images/collections/wildlife/wl-5.jpg',  title: 'House Finch', category: 'Wildlife', location: 'Lexington, KY', caption: 'A house finch perched on a weathered metal railing.' },
  { src: '/images/collections/wildlife/wl-6.jpg',  title: 'Brick & Cable Tower', category: 'Rust & Ruin', location: 'Kentucky', caption: 'Industrial brick tower with aged cable hardware.' },
  { src: '/images/collections/wildlife/wl-7.jpg',  title: 'Orange Leaf on Lily Pads', category: 'Macro', location: 'Kentucky', caption: 'A single autumn leaf resting on lily pad surface.' },
  { src: '/images/collections/wildlife/wl-8.jpg',  title: 'Alhambra Gardens', category: 'Travel', location: 'Granada, Spain', caption: 'A visitor pausing in the palace gardens at the Alhambra.' },
  { src: '/images/collections/wildlife/wl-9.jpg',  title: 'Bracket Fungus', category: 'Macro', location: 'Kentucky', caption: 'Close detail of a shelf fungus on an old hardwood log.' },
  { src: '/images/collections/wildlife/wl-10.jpg', title: 'Forest Fern Macro', category: 'Macro', location: 'Kentucky', caption: 'Unfurling fern fronds in a damp woodland understory.' },
  { src: '/images/collections/wildlife/wl-11.jpg', title: 'Seedlings on Bark', category: 'Macro', location: 'Kentucky', caption: 'Tiny seedlings taking hold on the surface of a fallen log.' },
  { src: '/images/collections/wildlife/wl-12.jpg', title: 'Slug on Oak Leaf', category: 'Wildlife', location: 'Kentucky', caption: 'A slug crossing a fallen red oak leaf in autumn.' },
  { src: '/images/collections/wildlife/wl-13.jpg', title: 'Historic Stone Dam', category: 'Landscapes', location: 'Kentucky', caption: 'A stone weir wall with its reflection in calm water.' },
  { src: '/images/collections/wildlife/wl-14.jpg', title: 'Red Fire Hydrant', category: 'Rust & Ruin', location: 'Kentucky', caption: 'A sun-faded red fire hydrant on a quiet street.' },
]

const categories = ['All', 'Wildlife', 'Landscapes', 'Macro', 'Eclipses', 'Rust & Ruin', 'Travel']

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'All' ? allPhotos : allPhotos.filter((p) => p.category === active)

  const openLightbox = (idx: number) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i !== null && i > 0 ? i - 1 : i))
  const next = () => setLightbox((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i))

  return (
    <main className="pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-16">
        <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
          Gallery
        </p>
        <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl font-medium leading-tight mb-2 text-balance">
          All photographs
        </h1>
        <p className="text-white/35 font-sans text-sm mt-3">
          {allPhotos.length} photographs across {categories.length - 1} subjects
        </p>
      </section>

      {/* Filters */}
      <div className="sticky top-14 z-30 bg-[#0c0c0c]/95 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 overflow-x-auto py-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-sans text-sm font-medium whitespace-nowrap transition-colors pb-1 border-b
                  ${active === cat
                    ? 'text-[#f5f0eb] border-[#f5f0eb]'
                    : 'text-white/35 border-transparent hover:text-white/60'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((photo, idx) => (
            <div
              key={photo.src}
              onClick={() => openLightbox(idx)}
              className="group relative break-inside-avoid rounded overflow-hidden border border-[#1a1a1a]
                         hover:border-[#444] transition-all cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="w-full block transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0
                               group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <p className="text-white/50 font-sans text-[10px] tracking-[0.15em] uppercase mb-1">
                  {photo.category}
                </p>
                <p className="text-[#f5f0eb] font-serif text-sm font-medium leading-snug">{photo.title}</p>
                <p className="text-white/40 font-sans text-xs mt-0.5">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-white/25 font-sans text-sm">No photos in this category yet.</p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-6 text-white/50 hover:text-white font-sans text-2xl leading-none z-10"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* Prev */}
          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                         rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Previous photo"
            >
              &#8592;
            </button>
          )}

          {/* Image */}
          <div className="max-w-5xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
            <div className="mt-4 text-center">
              <p className="text-white/40 font-sans text-[11px] tracking-[0.15em] uppercase mb-1">
                {filtered[lightbox].category} &middot; {filtered[lightbox].location}
              </p>
              <p className="text-[#f5f0eb] font-serif italic text-base">{filtered[lightbox].title}</p>
              <p className="text-white/40 font-sans text-xs mt-1">{filtered[lightbox].caption}</p>
            </div>
          </div>

          {/* Next */}
          {lightbox < filtered.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                         rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Next photo"
            >
              &#8594;
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/30 font-sans text-xs">
            {lightbox + 1} / {filtered.length}
          </p>
        </div>
      )}
    </main>
  )
}
