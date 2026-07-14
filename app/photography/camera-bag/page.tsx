'use client'

import Link from 'next/link'
import { ArrowRight, Camera, ExternalLink, Heart, BookOpen, MapPin, Star } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface GearItem {
  id: string
  name: string
  tagline: string
  description: string
  bestFor: string[]
  pros?: string[]
  amazon?: string
  reviewLink?: string
  reviewLabel?: string
  badge?: string
}

interface GearSection {
  id: string
  label: string
  items: GearItem[]
}

// ─── Gear Data ────────────────────────────────────────────────────────────────

const gear: GearSection[] = [
  {
    id: 'cameras',
    label: 'Camera Bodies',
    items: [
      {
        id: 'a7r3',
        name: 'Sony Alpha A7R III',
        tagline: 'Primary body — full-frame, 42MP, weather-sealed',
        badge: 'Primary',
        description:
          'The Sony A7R III is currently my primary camera body and the camera I carry for most wildlife and landscape photography. The combination of excellent image quality, high resolution, strong dynamic range, and weather-resistant construction makes it incredibly versatile for everything from birds to night skies. I particularly appreciate the ability to crop heavily when photographing distant wildlife while still retaining impressive detail.',
        bestFor: ['Wildlife', 'Birds', 'Landscapes', 'Astrophotography', 'Travel'],
        pros: [
          '42.4MP full-frame sensor — heavy crops still retain detail',
          'Strong dynamic range for challenging light',
          'Weather-sealed body for trail use',
          'Dual SD card slots',
          'In-body image stabilization (IBIS)',
        ],
        amazon: 'https://www.amazon.com/s?k=Sony+A7R+III&tag=chrisbrenzel-20',
        reviewLink: '/photography/field-notes',
        reviewLabel: 'Sony A7R III Review (Coming Soon)',
      },
      {
        id: 'a6000',
        name: 'Sony Alpha A6000',
        tagline: 'Lightweight backup — APS-C, 24MP, excellent value',
        badge: 'Backup',
        description:
          'Although it\'s no longer my primary camera, the Sony A6000 remains one of the best values in photography. I still carry it as a lightweight backup body and frequently pair it with a telephoto lens when I want additional reach thanks to the APS-C crop factor. For beginners entering wildlife photography, I still think it\'s an outstanding camera.',
        bestFor: ['Beginners', 'Hiking', 'Travel', 'Wildlife on a budget'],
        pros: [
          'Incredibly lightweight and portable',
          'APS-C crop factor adds reach on telephoto lenses',
          'Outstanding autofocus for the price',
          'Great entry point into Sony E-mount ecosystem',
        ],
        amazon: 'https://www.amazon.com/s?k=Sony+A6000&tag=chrisbrenzel-20',
        reviewLink: '/photography/field-notes',
        reviewLabel: 'Sony A6000 Review (Coming Soon)',
      },
    ],
  },
  {
    id: 'lenses',
    label: 'Lenses',
    items: [
      {
        id: 'tamron-50-400',
        name: 'Tamron 50–400mm f/4.5–6.3',
        tagline: 'Di III VC VXD — The one lens I\'d keep',
        badge: 'Favorite',
        description:
          'If I could only own one wildlife lens, this would probably be it. The zoom range makes it incredibly flexible — I can photograph larger mammals at 50mm, isolate landscapes around 100–200mm, and immediately zoom to 400mm for birds without changing lenses. This has quickly become my favorite wildlife lens.',
        bestFor: ['Birds', 'Wildlife', 'Hiking', 'Travel', 'Yellowstone', 'Kentucky State Parks'],
        pros: [
          '50–400mm in a single, field-ready package',
          'Fast, accurate autofocus on Sony bodies',
          'Moisture-resistant construction',
          'Relatively compact for the focal range',
          'Excellent sharpness at 400mm',
        ],
        amazon: 'https://www.amazon.com/s?k=Tamron+50-400+Sony&tag=chrisbrenzel-20',
        reviewLink: '/photography/field-notes',
        reviewLabel: 'Complete Tamron 50–400 Review (Coming Soon)',
      },
      {
        id: 'sony-28-70',
        name: 'Sony FE 28–70mm f/3.5–5.6 OSS',
        tagline: 'Kit lens — lightweight travel and landscape',
        description:
          'This was the kit lens included with my A7R III. While often overlooked, it remains a useful lightweight travel and landscape lens. It\'s typically the lens I choose when I know wildlife won\'t be my primary subject.',
        bestFor: ['Travel', 'Landscapes', 'Street', 'Family'],
        amazon: 'https://www.amazon.com/s?k=Sony+FE+28-70mm+OSS&tag=chrisbrenzel-20',
      },
      {
        id: 'sony-16-50',
        name: 'Sony E 16–50mm OSS',
        tagline: 'A6000 kit lens — compact and lightweight',
        description:
          'The original kit lens for my A6000. Compact and lightweight, it\'s ideal for travel, family outings, and general photography. Although I rarely use it today, it helped me learn the fundamentals of photography.',
        bestFor: ['Travel', 'Family', 'Everyday'],
        amazon: 'https://www.amazon.com/s?k=Sony+E+16-50mm+OSS&tag=chrisbrenzel-20',
      },
      {
        id: 'sony-55-210',
        name: 'Sony E 55–210mm OSS',
        tagline: 'My first telephoto — still great value for APS-C',
        description:
          'My first telephoto lens. For photographers starting with an APS-C Sony camera, I still think this lens offers tremendous value. It was my introduction to bird photography.',
        bestFor: ['Birds', 'Wildlife', 'Beginners', 'APS-C bodies'],
        amazon: 'https://www.amazon.com/s?k=Sony+E+55-210mm+OSS&tag=chrisbrenzel-20',
      },
      {
        id: 'samyang-12',
        name: 'Samyang 12mm f/2 Manual Focus',
        tagline: 'Ultra-wide — Milky Way and night skies',
        description:
          'This manual-focus ultra-wide lens is one of my favorites for astrophotography. The fast aperture and wide field of view make it an excellent option for photographing the Milky Way and dramatic landscapes. Manual focus isn\'t a drawback at night — in fact, it\'s often preferred.',
        bestFor: ['Astrophotography', 'Milky Way', 'Landscapes', 'Night skies'],
        pros: [
          'f/2 aperture gathers significant light',
          'Excellent sharpness across the frame',
          'Very affordable for a fast ultra-wide',
          'Manual focus is ideal for infinity night focus',
        ],
        amazon: 'https://www.amazon.com/s?k=Samyang+12mm+f2+Sony&tag=chrisbrenzel-20',
      },
      {
        id: 'sony-30-macro',
        name: 'Sony 30mm f/3.5 Macro',
        tagline: 'Close-up details — insects, flowers, textures',
        description:
          'Macro photography has become one of my favorite ways to slow down and really observe nature. This lens is perfect for wildflowers, mushrooms, insects, moss, frost, and fine textures in the natural world.',
        bestFor: ['Macro', 'Wildflowers', 'Insects', 'Mushrooms', 'Textures'],
        amazon: 'https://www.amazon.com/s?k=Sony+30mm+f3.5+Macro&tag=chrisbrenzel-20',
      },
    ],
  },
  {
    id: 'filters',
    label: 'Filters',
    items: [
      {
        id: 'bw-nd',
        name: 'B+W F-Pro Neutral Density Filter',
        tagline: 'Long exposures — waterfalls and streams',
        description:
          'Used primarily for waterfalls, streams, and long exposures to create motion blur in water. A quality ND filter opens up creative possibilities in daylight that would otherwise require very fast shutter speeds.',
        bestFor: ['Waterfalls', 'Streams', 'Long exposures', 'Motion blur'],
        amazon: 'https://www.amazon.com/s?k=B%2BW+F-Pro+Neutral+Density+Filter&tag=chrisbrenzel-20',
      },
      {
        id: 'tiffen-uv',
        name: 'Tiffen UV Protection Filters',
        tagline: 'Lens protection for trail use',
        description:
          'Every lens I regularly carry is protected by a UV filter. While photographers debate their necessity, I prefer protecting the front element from dust, scratches, and trail conditions. On the trail, a scratched UV filter is far cheaper to replace than a scratched front element.',
        bestFor: ['Trail protection', 'Hiking', 'Dusty conditions'],
        amazon: 'https://www.amazon.com/s?k=Tiffen+UV+Protection+Filter&tag=chrisbrenzel-20',
      },
    ],
  },
  {
    id: 'accessories',
    label: 'Accessories',
    items: [
      {
        id: 'essentials',
        name: 'Field Essentials',
        tagline: 'What stays in the bag on every outing',
        description:
          'This section will continue to grow as I document individual items in more detail. Current essentials include extra batteries, SD cards, lens cleaning supplies, microfiber cloths, a rocket blower, a camera backpack, and a tripod. Each of these has proven its value in the field.',
        bestFor: ['Every outing', 'Wildlife', 'Hiking', 'Travel'],
      },
    ],
  },
  {
    id: 'software',
    label: 'Software',
    items: [
      {
        id: 'workflow',
        name: 'Editing Workflow',
        tagline: 'From RAW to final image',
        description:
          'My editing workflow is built around Adobe Lightroom for culling, organization, and global adjustments, with selective use of Photoshop for more detailed work. I\'ll be publishing a detailed breakdown of my complete wildlife editing workflow soon.',
        bestFor: ['RAW processing', 'Color grading', 'Wildlife', 'Batch editing'],
        reviewLink: '/photography/field-notes',
        reviewLabel: 'Wildlife Editing Workflow (Coming Soon)',
      },
    ],
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function GearCard({ item }: { item: GearItem }) {
  return (
    <article
      id={item.id}
      className="bg-[#0f1117] border border-[#1e2533] rounded-xl overflow-hidden hover:border-[#2a3650] transition-colors"
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            {item.badge && (
              <span className="inline-block text-[10px] font-sans font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-[#5b9bff]/10 text-[#5b9bff] border border-[#5b9bff]/20 mb-3">
                {item.badge}
              </span>
            )}
            <h3 className="text-[#f5f0eb] font-serif text-xl md:text-2xl font-medium leading-snug">
              {item.name}
            </h3>
            <p className="text-[#4a6380] font-sans text-sm mt-1">{item.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/60 font-sans text-sm leading-relaxed mb-6">{item.description}</p>

        {/* Best for */}
        <div className="mb-6">
          <p className="text-[#4a6380] font-sans text-xs tracking-[0.15em] uppercase mb-3 font-medium">Best for</p>
          <div className="flex flex-wrap gap-2">
            {item.bestFor.map((tag) => (
              <span
                key={tag}
                className="text-xs font-sans px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Pros */}
        {item.pros && item.pros.length > 0 && (
          <div className="mb-6">
            <p className="text-[#4a6380] font-sans text-xs tracking-[0.15em] uppercase mb-3 font-medium">Why I use it</p>
            <ul className="space-y-2">
              {item.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2.5 text-white/55 font-sans text-sm leading-relaxed">
                  <Star className="w-3 h-3 text-[#5b9bff]/60 mt-1 shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-[#1e2533]">
          {item.amazon && (
            <a
              href={item.amazon}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff9900]/10 hover:bg-[#ff9900]/20 border border-[#ff9900]/30 text-[#ff9900] font-sans text-sm font-medium transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Amazon
            </a>
          )}
          {item.reviewLink && (
            <Link
              href={item.reviewLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white/70 font-sans text-sm transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              {item.reviewLabel ?? 'Read more'}
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CameraBagPage() {
  return (
    <main className="pt-14 min-h-screen bg-[#0c0c0c]">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-20 md:pb-16">
        <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase mb-5 font-sans">
          Wildlife Photography Gear
        </p>
        <h1 className="text-[#f5f0eb] font-serif italic text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-balance max-w-3xl">
          {"What's In My Camera Bag (2026)"}
        </h1>
        <div className="max-w-2xl space-y-4">
          <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed">
            Over the years I&apos;ve learned that there isn&apos;t one perfect camera bag — only the gear
            that works for the way you photograph.
          </p>
          <p className="text-white/45 font-sans text-sm leading-relaxed">
            My focus is primarily wildlife, birding, macro photography, landscapes, and
            astrophotography, with most of my photography taking place in Kentucky&apos;s parks,
            nature preserves, and public lands. This page reflects the equipment I actually
            carry in the field — updated as my gear changes.
          </p>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-[#0f1a12] border border-[#1e3a22] rounded-xl p-6 flex gap-4">
          <Heart className="w-5 h-5 text-[#4ade80] shrink-0 mt-0.5" />
          <div>
            <p className="text-[#4ade80] font-sans text-sm font-semibold mb-2">Supporting ChrisBrenzel.com</p>
            <p className="text-white/55 font-sans text-sm leading-relaxed">
              Some of the links on this page are affiliate links. If you decide to purchase
              something through one of them, I may earn a small commission at no additional cost
              to you. I only recommend gear that I personally own, have used, have rented, or
              have thoroughly researched. Your support helps cover the costs of running this
              website and allows me to continue exploring new locations and creating free
              photography guides and field notes. Thank you.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="h-px bg-[#1a1a1a]" />
      </div>

      {/* Main layout — sidebar + content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex gap-12 lg:gap-16 items-start">

          {/* Sticky sidebar nav */}
          <aside className="hidden lg:block w-48 shrink-0 sticky top-20 self-start">
            <p className="text-white/25 font-sans text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">
              Quick Navigation
            </p>
            <nav className="space-y-1" aria-label="Gear sections">
              {gear.map((section) => (
                <a
                  key={section.id}
                  href={`#section-${section.id}`}
                  className="block font-sans text-sm text-white/40 hover:text-white/80 py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5b9bff]/40 pl-3"
                >
                  {section.label}
                </a>
              ))}
              <a
                href="#philosophy"
                className="block font-sans text-sm text-white/40 hover:text-white/80 py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5b9bff]/40 pl-3"
              >
                My Philosophy
              </a>
              <a
                href="#continue"
                className="block font-sans text-sm text-white/40 hover:text-white/80 py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5b9bff]/40 pl-3"
              >
                Related Guides
              </a>
            </nav>
          </aside>

          {/* Gear sections */}
          <div className="flex-1 min-w-0 space-y-16">
            {gear.map((section) => (
              <section key={section.id} id={`section-${section.id}`}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-blue-300 font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                    {section.label}
                  </h2>
                  <div className="flex-1 h-px bg-[#1a1a1a]" />
                </div>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <GearCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}

            {/* Philosophy */}
            <section id="philosophy">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-blue-300 font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                  My Philosophy on Camera Gear
                </h2>
                <div className="flex-1 h-px bg-[#1a1a1a]" />
              </div>
              <div className="bg-[#0f1117] border border-[#1e2533] rounded-xl p-6 md:p-8">
                <div className="max-w-2xl space-y-4">
                  <p className="text-white/70 font-sans text-base leading-relaxed">
                    One of the biggest lessons I&apos;ve learned is that better photographs rarely
                    come from buying more expensive equipment.
                  </p>
                  <p className="text-white/55 font-sans text-sm leading-relaxed">
                    They come from spending more time outdoors. I&apos;d much rather invest in another
                    morning at Raven Run, another weekend exploring Red River Gorge, or another
                    opportunity to photograph migrating birds than constantly chase the newest camera body.
                  </p>
                  <div className="pt-2 border-t border-[#1e2533] mt-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#5b9bff] shrink-0 mt-1" />
                      <p className="text-white/40 font-sans text-sm italic leading-relaxed">
                        Good gear makes photography easier. Time in the field makes you a better photographer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#1a1a1a]" />
      </div>

      {/* Continue Exploring */}
      <section id="continue" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <p className="text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-3 font-sans">
          Continue Exploring
        </p>
        <h2 className="text-[#f5f0eb] font-serif italic text-3xl md:text-4xl font-medium mb-10 text-balance">
          More from the field
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
            {
              title: 'Capturing Backyard Birds',
              desc: 'The Sony 200-600mm in practice — backyard feeders, songbirds, and what worked.',
              href: '/photography/field-notes/capturing-backyard-birds',
              icon: <Camera className="w-5 h-5" />,
            },
            {
              title: 'Birding at Bettman Nature Preserve',
              desc: 'Winter bird photography at a Cincinnati nature preserve with active feeders.',
              href: '/photography/field-notes/birding-at-bettman',
              icon: <MapPin className="w-5 h-5" />,
            },
            {
              title: 'Renting Gear for Wildlife Photography',
              desc: 'A firsthand look at renting the Sony 200-600mm through Lensrentals.',
              href: '/photography/lensrentals-review-wildlife-photography-gear',
              icon: <BookOpen className="w-5 h-5" />,
            },
            {
              title: 'Best Beginner Sony Camera Quiz',
              desc: 'Answer 15 questions to find the right Sony system for your style and budget.',
              href: '/photography/best-beginner-sony-camera',
              icon: <Star className="w-5 h-5" />,
            },
            {
              title: 'Photography Portfolio',
              desc: 'Wildlife, macro, landscapes, and astrophotography from Kentucky and beyond.',
              href: '/photography/gallery',
              icon: <Camera className="w-5 h-5" />,
            },
            {
              title: 'Field Notes',
              desc: 'Writing and reflections from photography outings throughout the year.',
              href: '/photography/field-notes',
              icon: <BookOpen className="w-5 h-5" />,
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group bg-[#0f1117] border border-[#1e2533] hover:border-[#2a3650] rounded-xl p-6 transition-all hover:bg-[#121821]"
            >
              <div className="text-[#5b9bff]/60 mb-4 group-hover:text-[#5b9bff] transition-colors">
                {card.icon}
              </div>
              <h3 className="text-[#f5f0eb] font-serif text-lg font-medium mb-2 leading-snug group-hover:text-white transition-colors">
                {card.title}
              </h3>
              <p className="text-white/40 font-sans text-sm leading-relaxed mb-4">{card.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-[#5b9bff]/60 group-hover:text-[#5b9bff] font-sans text-sm transition-colors">
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom affiliate note */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="h-px bg-[#1a1a1a] mb-8" />
        <p className="text-white/25 font-sans text-xs leading-relaxed max-w-2xl">
          Some of the links on this page are affiliate links. If you decide to purchase
          something through one of them, I may earn a small commission at no additional
          cost to you. I only recommend gear that I personally own, have used, have
          rented, or have thoroughly researched.
        </p>
      </div>
    </main>
  )
}
