import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SelectedWorksSlider } from '@/components/photography/selected-works-slider'

const categories = [
  { label: 'Wildlife', href: '/photography/gallery?category=wildlife', color: '#2d4a2d' },
  { label: 'Landscapes', href: '/photography/gallery?category=landscapes', color: '#1a2d3d' },
  { label: 'Weather', href: '/photography/gallery?category=weather', color: '#1e1e2d' },
  { label: 'Eclipses', href: '/photography/gallery?category=eclipses', color: '#2d1a0a' },
  { label: 'Macro', href: '/photography/gallery?category=macro', color: '#1a2a1a' },
  { label: 'Travel', href: '/photography/gallery?category=travel', color: '#1a1a2a' },
]

const featuredGrid = [
  {
    title: 'Bettman Nature Preserve',
    category: 'Wildlife',
    color: '#0d1f0d',
    aspect: 'col-span-2 row-span-2',
  },
  {
    title: 'Solar Eclipse',
    category: 'Eclipses',
    color: '#1a0d00',
    aspect: '',
  },
  {
    title: 'Capturing Snowflakes',
    category: 'Macro',
    color: '#0d0d1f',
    aspect: '',
  },
  {
    title: 'Macro at Folly Beach',
    category: 'Macro',
    color: '#0d1a0d',
    aspect: '',
  },
  {
    title: 'Exploring Frankfort, KY',
    category: 'Travel',
    color: '#1a1208',
    aspect: '',
  },
]

export default function PhotographyPage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/photography-hero.jpg')" }}
          aria-hidden="true"
        />
        {/* Overlays for legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-[#0c0c0c]/20"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        {/* Content */}
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

      {/* Category grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-8 font-sans">
          Browse by subject
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group relative overflow-hidden rounded aspect-square flex items-end p-4
                         border border-[#222] hover:border-[#444] transition-all"
              style={{ backgroundColor: cat.color }}
            >
              <span
                className="text-[#f5f0eb] font-sans text-sm font-medium relative z-10
                              group-hover:text-white transition-colors"
              >
                {cat.label}
              </span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#222]" />
      </div>

      {/* Featured image grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-8">
          <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase font-sans">
            Recent work
          </p>
          <Link
            href="/photography/gallery"
            className="flex items-center gap-2 text-white/40 hover:text-white/70 font-sans text-sm transition-colors"
          >
            All photos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {featuredGrid.map((item, i) => (
            <Link
              key={item.title}
              href="/photography/gallery"
              className={`photo-zoom group relative rounded overflow-hidden border border-[#1a1a1a] hover:border-[#333]
                          transition-all ${i === 0 ? 'row-span-2' : ''}`}
              style={{
                backgroundColor: item.color,
                aspectRatio: i === 0 ? 'auto' : '4/3',
                minHeight: i === 0 ? '400px' : '200px',
              }}
            >
              {/* Placeholder image bg */}
              <div
                className="img-inner absolute inset-0"
                style={{ backgroundColor: item.color }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-1 group-hover:translate-y-0 transition-transform">
                <p className="text-white/50 font-sans text-[10px] tracking-[0.15em] uppercase mb-1">
                  {item.category}
                </p>
                <p className="text-[#f5f0eb] font-serif text-sm font-medium">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
          {[
            { title: 'Birding at Bettman Nature Preserve', category: 'Wildlife', excerpt: 'Notes and observations from a morning walk through one of Lexington\'s best birding spots.' },
            { title: 'Solar Eclipse Part I', category: 'Eclipses', excerpt: 'Preparation, gear, and the experience of capturing totality from central Kentucky.' },
            { title: 'Macro Photography at Folly Beach', category: 'Macro', excerpt: 'Finding detail in the texture of shoreline subjects.' },
          ].map((post) => (
            <Link
              key={post.title}
              href="/photography/field-notes"
              className="group border border-[#1a1a1a] hover:border-[#333] rounded overflow-hidden
                         hover:bg-[#141414] transition-all"
            >
              <div
                className="aspect-video bg-[#141414] border-b border-[#1a1a1a]"
                aria-hidden="true"
              />
              <div className="p-6">
                <p className="text-white/30 font-sans text-[10px] tracking-[0.15em] uppercase mb-2">
                  {post.category}
                </p>
                <h3 className="text-[#f5f0eb] font-serif text-lg font-medium mb-3 group-hover:text-white transition-colors">
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
