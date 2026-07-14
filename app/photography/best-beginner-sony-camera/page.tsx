import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CAMERA_RESULTS, LAST_REVIEWED } from '@/lib/sony-quiz-data'
import SonyQuiz, { ResultCard } from './SonyQuiz'

export const metadata: Metadata = {
  title: 'Best Beginner Sony Camera: Take the Sony Camera Quiz | Chris Brenzel',
  description:
    'Answer 15 questions to find the best beginner Sony camera for your budget, photography style, travel needs, video plans, and professional goals.',
  alternates: {
    canonical: 'https://www.chrisbrenzel.com/photography/best-beginner-sony-camera',
  },
  openGraph: {
    title: 'Which Sony Camera Is Right for You?',
    description:
      'Answer 15 questions to find the best beginner Sony camera for your budget, photography style, travel needs, video plans, and professional goals.',
    url: 'https://www.chrisbrenzel.com/photography/best-beginner-sony-camera',
  },
}

// ---- small shared primitives ----

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[#f5f0eb] font-sans text-lg font-semibold mt-10 mb-3 leading-snug">
      {children}
    </h2>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white/55 font-sans text-sm leading-relaxed">
      {children}
    </p>
  )
}

function Divider() {
  return <hr className="border-white/10 my-8" />
}

// ---- FAQ data ----

const FAQ = [
  {
    q: 'Is the Sony A6000 still worth buying in 2026?',
    a: "Yes, if your budget is tight and you can find a clean used body. The A6000 lacks modern autofocus, in-body stabilization, and current video tools, but it produces good images and teaches the fundamentals. It is where I started. If you can stretch to a used A6100 or A6400, the improved subject tracking is usually worth the extra cost.",
  },
  {
    q: 'Should I start with APS-C or full frame?',
    a: "APS-C is often the more relaxing beginning: smaller bodies, smaller lenses, lower cost, and useful apparent reach for wildlife. Full frame makes sense when low-light work, large prints, heavy cropping, access to existing full-frame lenses, or a deliberate professional path justifies the higher total system cost. Starting full frame can prevent rebuilding a lens collection later, but only when the buyer can afford a complete, usable kit.",
  },
  {
    q: 'How much should I budget for my first Sony camera system?',
    a: "Think in terms of system budget -- body plus one useful first lens, memory cards, and a spare battery -- rather than body price alone. A genuinely usable APS-C kit starts around $800 to $1,200. A used full-frame kit with one practical lens typically starts around $1,500 to $2,500. Budget well beyond those numbers if video, telephoto reach, weather protection, or professional redundancy are part of the plan.",
  },
  {
    q: 'Can I use APS-C lenses on a Sony full-frame body?',
    a: "Yes. Sony E-mount APS-C lenses fit and autofocus on full-frame Sony bodies, but the camera activates a crop mode that uses only the center portion of the full-frame sensor. This significantly reduces the effective resolution. APS-C lenses on a full-frame body are a transition option, not a compromise-free full-frame kit.",
  },
  {
    q: 'Is the Sony A6700 worth it over a used A6400?',
    a: "For current wildlife autofocus, modern video, and a long-term APS-C system, yes. The A6700 is substantially newer and more capable than a used A6400. If you are on a tighter budget, primarily photograph still subjects, and are comfortable buying used, a well-priced A6400 can serve you well for years. The quiz distinguishes between these paths based on your autofocus and budget answers.",
  },
  {
    q: 'Do I need to buy Sony-brand lenses?',
    a: "No. Tamron and Sigma make high-quality Sony E-mount lenses at competitive prices. Tamron has been a particularly strong value for wildlife telephoto zooms. Sony G and G Master lenses are excellent but come at a premium. Start with a lens appropriate for your most common subject rather than the brand name.",
  },
  {
    q: 'Does a bigger camera make someone look more professional?',
    a: "This is a subjective topic. I have personally felt more confident arriving to paid work with a larger full-frame body, and occasionally sensed that clients associated larger gear with professional capability. That perception is not proof of skill or image quality. A compact Sony can produce professional work. If client-facing confidence is part of your reason for upgrading, that is a legitimate factor -- just do not let it override practical system decisions.",
  },
  {
    q: 'Should I buy new or used?',
    a: "Used equipment from a reputable dealer can offer excellent value. Check condition grades, return policies, battery health, shutter count, card slot condition, screen, and lens mount. New equipment includes a full warranty and the latest manufacturing tolerances, but costs significantly more. The quiz scoring accounts for used comfort and adjusts recommendations accordingly.",
  },
]

export default function BestBeginnerSonyCameraPage() {
  return (
    <main className="pt-14">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-6 pt-8 pb-2">
        <ol className="flex items-center gap-2 text-white/30 font-sans text-xs">
          <li>
            <Link href="/photography" className="hover:text-white/60 transition-colors">
              Photography
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white/50">Best Beginner Sony Camera</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-8 pb-6">
        <p className="text-[#6fcf97] font-sans text-xs font-semibold uppercase tracking-widest mb-4">
          SONY CAMERA BUYING GUIDE
        </p>
        <h1 className="text-[#f5f0eb] font-sans text-3xl md:text-4xl font-bold leading-tight text-balance mb-4">
          Which Sony Camera Is Right for You?
        </h1>
        <p className="text-white/55 font-sans text-base leading-relaxed mb-2 max-w-2xl">
          Answer 15 questions about your budget, subjects, carry preferences, video plans, and
          future goals.
        </p>
        <p className="text-white/35 font-sans text-sm leading-relaxed mb-6 max-w-2xl">
          Choosing your first interchangeable-lens camera can be confusing because Sony offers
          everything from compact used APS-C bodies to high-resolution full-frame and professional
          flagship cameras. This quiz is designed to help beginners, students, serious hobbyists,
          and new professionals find the best beginner Sony camera for the way they actually plan
          to shoot. The goal is not to push you toward the most expensive camera -- it is to help
          you choose a Sony system you will enjoy using.
        </p>
        <p className="text-white/25 font-sans text-xs">
          Last reviewed {LAST_REVIEWED}. Model availability and pricing change frequently.
        </p>

      </section>

      {/* Quiz */}
      <section
        aria-label="Sony camera recommendation quiz"
        className="max-w-3xl mx-auto px-6 pb-12"
      >
        <SonyQuiz />
      </section>

      {/* Recommendation library */}
      <section aria-label="Sony camera recommendations" className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-[#f5f0eb] font-sans text-xl font-bold mb-2 text-balance">
          All Sony camera recommendations
        </h2>
        <p className="text-white/40 font-sans text-sm leading-relaxed mb-8">
          Every recommendation is shown below. Complete the quiz above to highlight your best match
          and scroll directly to it. Each section remains in the page HTML so it is fully
          accessible and crawlable without the quiz.
        </p>
        <div className="space-y-6">
          {CAMERA_RESULTS.map((result) => (
            <ResultCard key={result.id} result={result} isHighlighted={false} />
          ))}
        </div>
      </section>

      <Divider />

      {/* How the quiz works */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <SectionHeading>How the quiz works</SectionHeading>
        <Body>
          Each of the 15 questions adds weighted points to a set of Sony camera families: entry
          APS-C, current APS-C, used full frame, compact full frame, all-round full frame,
          high-resolution full frame, professional flagship, and video-first. Hard budget gates
          remove families that are not financially accessible. Post-score rules apply bonuses for
          portability, lens access, hiking, and resolution needs. The family with the highest
          score after all adjustments becomes the recommendation.
        </Body>
        <Body>
          The quiz distinguishes between a used A6000 and a used A6100/A6400 based on autofocus
          demands and budget; between a used A7 III and a used A7R III based on cropping
          importance; and between a standard A7 V and the compact A7C II based on portability
          scoring. The professional flagship (A1 II) requires both the highest budget tier and
          clear professional intent or high-stakes action needs -- it cannot be reached by budget
          alone.
        </Body>
      </section>

      <Divider />

      {/* Why Sony mirrorless */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <SectionHeading>Why Sony mirrorless?</SectionHeading>
        <Body>
          Sony is the camera system I know best because it is the system I have used while
          learning travel, street, family, macro, landscape, and wildlife photography. My first
          interchangeable-lens camera was a Sony A6000. Its small size made it easy to take to
          Spain, Italy, the beach, and family outings without feeling like I was carrying a large
          professional camera. As my interests shifted toward wildlife and detailed macro work, I
          moved into a high-resolution full-frame Sony body because I wanted more room to crop and
          a broader path into full-frame lenses. Sony is not the only good camera system, but it
          is the one I can discuss from real experience.
        </Body>

        <figure className="my-6">
          <div className="rounded overflow-hidden bg-[#111]">
            <Image
              src="/images/sony-quiz/photographer-alhambra-spain-sony.jpg"
              alt="Photographer shooting inside the Alhambra palace in Spain with a compact Sony mirrorless camera"
              width={840}
              height={1050}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mt-2 text-white/30 font-sans text-xs italic">
            Shooting inside the Alhambra, Granada -- the compact A6000 fit right in a daypack.
          </figcaption>
        </figure>

        <SectionHeading>Why not a different brand?</SectionHeading>
        <Body>
          Canon, Nikon, Fujifilm, Panasonic, OM System, and other manufacturers make excellent
          cameras. This guide does not attempt to declare Sony universally better. I simply do not
          have the same firsthand history with those systems, and I would rather give a narrower
          recommendation based on equipment and workflows I understand than repeat generic
          comparisons. If you already own lenses from another brand, enjoy that brand&apos;s
          controls or color, or have access to a school or family lens collection, staying with
          that system may be the smarter choice.
        </Body>
      </section>

      <Divider />

      {/* Beginner buying guide */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <SectionHeading>APS-C vs full frame: which is right for a beginner?</SectionHeading>
        <Body>
          APS-C is often the more relaxing beginning: smaller bodies, smaller lenses, lower
          prices, and useful apparent reach for wildlife. Full frame becomes attractive when low
          light, large prints, heavy cropping, access to full-frame lenses, or a deliberate
          professional path justifies the total cost. Starting full frame can prevent rebuilding a
          lens collection later, but only when the buyer can afford a complete, usable kit. A
          full-frame body with no suitable lens is not a better system than an APS-C camera that
          goes everywhere.
        </Body>

        <SectionHeading>The camera is only the beginning of the system</SectionHeading>
        <Body>
          A body-only price can make a camera look affordable while hiding the real cost. Think
          about the first useful lens, memory cards, batteries, a comfortable way to carry the
          camera, storage, editing software, and any specialty equipment your subjects require.
          Wildlife adds telephoto reach and weather protection. Video adds microphones, lighting,
          power, support, and editing hardware. Paid work adds backups, reliability, insurance,
          and client delivery. The quiz uses a system budget rather than asking only what you can
          spend on the body.
        </Body>

        <SectionHeading>Used Sony gear: a positive recommendation</SectionHeading>
        <Body>
          Used APS-C is not a consolation prize. A clean used A6000 or A6400 from a reputable
          dealer can be an excellent first Sony, and a used A7 III or A7R III gives access to
          full-frame Sony at a fraction of the cost of a new A7 V. The quiz scoring adds points to
          used families when you are comfortable with used equipment and adjusts away from them
          when you want new gear with a full warranty.
        </Body>

        <SectionHeading>A note about photography as a business</SectionHeading>
        <Body>
          Many people buy a serious camera imagining that photography will immediately become a
          business. It can become paid work, but trying to commercialize every hobby is also a
          fast way to make it feel like another obligation. There is nothing wrong with taking
          photographs because it is fun. If you already know you want clients, choose your system
          intentionally, plan for lenses and backups, and build toward the work you want to sell.
          If you are a hobbyist, prioritize the camera that makes you want to go outside and make
          photographs.
        </Body>
      </section>

      <Divider />

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-[#f5f0eb] font-sans text-xl font-bold mb-6 text-balance">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {FAQ.map(({ q, a }) => (
            <div key={q}>
              <h3 className="text-[#f5f0eb] font-sans text-sm font-semibold mb-1">{q}</h3>
              <p className="text-white/55 font-sans text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Related links and disclosure */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <SectionHeading>Related guides</SectionHeading>
        <ul className="space-y-2 mb-8">
          <li>
            <Link
              href="/photography/camera-bag"
              className="text-[#6fcf97] hover:text-[#9fe7b8] font-sans text-sm transition-colors"
            >
              What is in my camera bag
            </Link>
          </li>
          <li>
            <Link
              href="/photography/collections/wildlife"
              className="text-[#6fcf97] hover:text-[#9fe7b8] font-sans text-sm transition-colors"
            >
              Wildlife photography collection
            </Link>
          </li>
          <li>
            <Link
              href="/photography/lensrentals-review-wildlife-photography-gear"
              className="text-[#6fcf97] hover:text-[#9fe7b8] font-sans text-sm transition-colors"
            >
              Lensrentals review: why I rent wildlife gear before buying
            </Link>
          </li>
          <li>
            <Link
              href="/photography/field-notes"
              className="text-[#6fcf97] hover:text-[#9fe7b8] font-sans text-sm transition-colors"
            >
              Photography field notes
            </Link>
          </li>
        </ul>

        <div className="bg-white/5 border border-white/10 rounded p-4">
          <p className="text-white/30 font-sans text-xs leading-relaxed">
            <span className="text-white/50 font-semibold">Note.</span> Recommendations on this
            page are based on my own Sony ownership and research. I have personally owned and used
            Sony APS-C and full-frame cameras. Camera prices and model availability change
            frequently -- always verify current pricing before purchasing. Last reviewed {LAST_REVIEWED}.
          </p>
        </div>
      </section>
    </main>
  )
}
