'use client'

import { useState } from 'react'
import Link from 'next/link'

const allPhotos = [
  { title: 'Backyard Birds', category: 'Wildlife', location: 'Lexington, KY', caption: 'A busy feeder on a winter morning.', color: '#0d1f0d' },
  { title: 'Bettman Nature Preserve', category: 'Wildlife', location: 'Lexington, KY', caption: 'Early spring migration at Bettman.', color: '#0a1a0a' },
  { title: 'Capturing Snowflakes', category: 'Macro', location: 'Lexington, KY', caption: 'Individual snowflakes on a cold January morning.', color: '#0d0d1f' },
  { title: 'Solar Eclipse', category: 'Eclipses', location: 'Central Kentucky', caption: 'Totality from central Kentucky.', color: '#1a0d00' },
  { title: 'Macro at Folly Beach', category: 'Macro', location: 'Folly Beach, SC', caption: 'Shoreline textures in extreme closeup.', color: '#0d1a0a' },
  { title: 'Exploring Frankfort, KY', category: 'Travel', location: 'Frankfort, KY', caption: 'Architecture and light in the state capital.', color: '#1a1208' },
  { title: 'Morning Storm', category: 'Weather', location: 'Lexington, KY', caption: 'Approaching anvil cloud at dawn.', color: '#0a0a1a' },
  { title: 'Fall Canopy', category: 'Landscapes', location: 'Red River Gorge, KY', caption: 'Peak color in the Daniel Boone National Forest.', color: '#1a0d08' },
  { title: 'Solar Eclipse Part II', category: 'Eclipses', location: 'Central Kentucky', caption: 'Chromosphere revealed at second contact.', color: '#1f0800' },
  { title: 'Lensball Reflections', category: 'Macro', location: 'Lexington, KY', caption: 'The world inverted in glass.', color: '#0a0f1a' },
  { title: 'Red-tailed Hawk', category: 'Wildlife', location: 'Lexington, KY', caption: 'A cold-perched raptor on a January fence post.', color: '#0f1a0f' },
  { title: 'Mammoth Cave Region', category: 'Landscapes', location: 'Mammoth Cave, KY', caption: 'Surface landscape above the world\'s longest cave.', color: '#0d1408' },
]

const categories = ['All', 'Wildlife', 'Landscapes', 'Weather', 'Eclipses', 'Macro', 'Travel']

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? allPhotos : allPhotos.filter((p) => p.category === active)

  return (
    <main className="pt-14">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-16">
        <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
          Gallery
        </p>
        <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl font-medium leading-tight mb-4 text-balance">
          All photographs
        </h1>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((photo) => (
            <div
              key={photo.title}
              className="photo-zoom group relative rounded overflow-hidden border border-[#1a1a1a]
                         hover:border-[#333] transition-all cursor-pointer"
              style={{ backgroundColor: photo.color }}
            >
              {/* Placeholder */}
              <div
                className="img-inner aspect-[4/5] w-full"
                style={{ backgroundColor: photo.color }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0
                               group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <p className="text-white/50 font-sans text-[10px] tracking-[0.15em] uppercase mb-1">
                  {photo.category}
                </p>
                <p className="text-[#f5f0eb] font-serif text-sm font-medium mb-0.5">{photo.title}</p>
                <p className="text-white/40 font-sans text-xs">{photo.location}</p>
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
    </main>
  )
}
