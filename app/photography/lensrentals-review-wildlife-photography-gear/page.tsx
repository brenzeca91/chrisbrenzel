import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lensrentals Review: Why I Rent Wildlife Photography Gear Before Buying | Chris Brenzel',
  description:
    'A beginner-friendly Lensrentals review for wildlife and nature photographers. Learn why renting camera lenses before buying can save money and help you choose better gear.',
  openGraph: {
    title: 'Why I Rent Camera Lenses Before Buying Them',
    description:
      'Renting wildlife photography gear has helped me test expensive lenses, avoid bad purchases, and find gear I actually love using in the field.',
  },
}

const LENSRENTALS_URL = 'https://share.lensrentals.com/x/VA0yZa'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[#f5f0eb] font-sans text-lg font-semibold mt-10 mb-3 leading-snug">
      {children}
    </h2>
  )
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white/55 font-sans text-sm leading-relaxed">
      {children}
    </p>
  )
}

function CTAButton({ label = 'Rent Camera Gear Through Lensrentals' }: { label?: string }) {
  return (
    <a
      href={LENSRENTALS_URL}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#6fcf97] hover:bg-[#9fe7b8] text-[#071a0e] font-sans font-semibold text-sm px-6 py-3 rounded transition-colors"
    >
      {label}
      <ArrowUpRight className="w-4 h-4" />
    </a>
  )
}

export default function LensrentalsReviewPage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-14 pb-6">
        <p className="text-[#6fcf97] font-sans text-xs font-semibold uppercase tracking-widest mb-4">
          Gear -- Rental Review
        </p>
        <h1 className="text-[#f5f0eb] font-sans text-3xl md:text-4xl font-bold leading-tight text-balance mb-4">
          Why I Love Lensrentals.com for Wildlife Photography Gear
        </h1>
        <p className="text-white/50 font-sans text-base leading-relaxed mb-8 max-w-2xl">
          Photography gear gets expensive fast -- especially for wildlife, macro, and travel
          photography. Renting lenses before buying has helped me make better decisions, avoid
          expensive mistakes, and find gear that actually fits the way I photograph.
        </p>
        <CTAButton />
      </section>

      {/* Hero photo */}
      <div className="max-w-3xl mx-auto px-6 pb-8">
        <figure>
          <div className="rounded overflow-hidden bg-[#111]">
            <Image
              src="/images/field-notes/lensrentals-telephoto-bird-photography-forest.jpg"
              alt="Two photographers in a forest -- one with binoculars, one shooting upward with a rented telephoto lens"
              width={1300}
              height={868}
              className="w-full h-auto"
              priority
            />
          </div>
          <figcaption className="mt-2 text-white/30 font-sans text-xs italic">
            Renting a telephoto for a birding trip -- binoculars to spot, long lens to capture.
          </figcaption>
        </figure>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-white/10 my-8" />
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-20 flex flex-col gap-4">

        {/* Affiliate disclosure */}
        <p className="text-white/30 font-sans text-xs leading-relaxed border border-white/10 rounded px-4 py-3 bg-white/[0.02]">
          Disclosure: some links on this page are referral or affiliate links. If you rent through
          my Lensrentals link, I may receive a small reward at no extra cost to you. I only
          recommend tools, gear, or services I have personally used, rented, or seriously
          considered for my own photography.
        </p>

        <BodyText>
          Photography gear gets expensive fast. That is especially true once you start getting
          interested in wildlife photography, bird photography, macro photography, or travel
          photography. A good telephoto lens can cost hundreds or thousands of dollars, and it is
          hard to know whether a lens is right for you until you actually use it in the field.
        </BodyText>

        <BodyText>
          That is why I love{' '}
          <a
            href={LENSRENTALS_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="text-[#6fcf97] hover:text-[#9fe7b8] underline underline-offset-2 transition-colors"
          >
            Lensrentals.com
          </a>
          .
        </BodyText>

        <BodyText>
          I have rented several lenses from Lensrentals over time. Some I loved enough that I
          eventually purchased them. Others I am very glad I tested first, because they were not a
          good fit for the way I actually photograph. That is the whole value of renting: it lets
          you learn from real field use before making an expensive decision.
        </BodyText>

        {/* Callout: renting before buying */}
        <div className="border border-white/10 rounded-lg px-6 py-5 bg-white/[0.02] my-4">
          <p className="text-[#f5f0eb] font-sans text-sm font-semibold mb-3">
            Why renting before buying makes sense
          </p>
          <p className="text-white/45 font-sans text-sm leading-relaxed mb-4">
            When I started taking nature and wildlife photography more seriously, I quickly realized
            that lens choice matters. A lens that looks perfect on paper may feel too heavy, too
            short, too slow, or just not fun to carry around. Renting gives you a low-risk way to
            answer practical questions:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              'Can I comfortably carry this lens?',
              'Is the reach long enough for birds and wildlife?',
              'Does it autofocus well enough for the subjects I photograph?',
              'Does it work well on my camera body?',
              'Will I actually use it enough to justify buying it?',
              'Does it fit my style of photography?',
            ].map((q) => (
              <li key={q} className="flex items-start gap-2 text-white/45 font-sans text-sm">
                <span className="text-[#6fcf97] mt-0.5 shrink-0">--</span>
                {q}
              </li>
            ))}
          </ul>
          <p className="text-white/35 font-sans text-xs mt-4 leading-relaxed">
            Those are questions that spec sheets and YouTube reviews cannot fully answer.
          </p>
        </div>

        <SectionHeading>The Tamron 50-400mm Was a Perfect Example</SectionHeading>

        {/* Callout: Tamron */}
        <div className="border border-[#1e2d1e] rounded-lg px-6 py-5 bg-[#0a120a] my-2">
          <p className="text-[#6fcf97] font-sans text-xs font-semibold uppercase tracking-widest mb-2">
            Real rental example
          </p>
          <p className="text-[#f5f0eb] font-sans text-sm font-semibold mb-2">
            Tamron 50-400mm f/4.5-6.3 Di III VC VXD
          </p>
          <p className="text-white/45 font-sans text-sm leading-relaxed">
            The Tamron 50-400mm is one of the lenses I tested through Lensrentals and ended up
            loving. For wildlife, travel, and nature photography, that zoom range is incredibly
            useful -- enough reach for birds and wildlife while still being flexible for
            landscapes, larger animals, and travel photography. Renting it gave me a chance to
            use it in real conditions instead of just reading about it.
          </p>
        </div>

        <BodyText>
          That experience helped me understand how the lens handled, how much reach I actually
          needed, and whether it made sense for the kind of photography I wanted to do. That is
          exactly why I think renting is so valuable. Sometimes it confirms that a piece of gear
          is worth buying. Other times, it saves you from buying something that looks exciting
          online but does not fit your real needs.
        </BodyText>

        <SectionHeading>Why Lensrentals Works Well for Wildlife Photography</SectionHeading>

        <BodyText>
          For wildlife photographers, Lensrentals is especially useful because the lenses we want
          to test are often the expensive ones. Telephoto lenses, super-telephoto zooms, macro
          lenses, fast primes, camera bodies, teleconverters, tripods, and specialty gear can all
          be rented before making a major purchase.
        </BodyText>

        <BodyText>
          If you are going to Yellowstone, the Smoky Mountains, Red River Gorge, a birding
          hotspot, or even a local Kentucky wildlife area, renting a longer lens can make the trip
          more productive without forcing you to buy immediately. A rental can also help you decide
          between similar options -- maybe you are comparing a 70-200mm, a 100-400mm, a 150-500mm,
          or a 200-600mm. Renting one for a real outing will teach you more than reading ten more
          reviews.
        </BodyText>

        <SectionHeading>My Experience With Lensrentals Customer Service</SectionHeading>

        <BodyText>
          One of the reasons I keep coming back to Lensrentals is that they have been reliable and
          easy to work with. The gear has arrived when it was supposed to. The website is easy to
          follow. The listings include the specs I need. The selection is huge. And when I have had
          questions, I have received prompt responses from customer service.
        </BodyText>

        <BodyText>
          Returns have also been straightforward. You follow the directions, apply the provided
          shipping label, and drop off the package. That simplicity matters when you are returning
          expensive gear after a trip.
        </BodyText>

        <BodyText>
          I also had one situation where I accidentally forgot to include a component in the return
          shipment. Instead of immediately getting hit with an unreasonable fee, customer service
          worked with me to get the missing item back to them. That kind of real-world support
          matters. Mistakes happen, especially when you are packing up multiple pieces of
          photography gear after travel, and I appreciated that they handled it practically.
        </BodyText>

        <SectionHeading>I Like the Optional Insurance Coverage</SectionHeading>

        <BodyText>
          Another thing I appreciate is the optional insurance coverage. I am usually skeptical of
          add-on insurance because some policies feel intentionally confusing -- you pay for peace
          of mind, but the coverage details are buried in fine print and full of exclusions.
        </BodyText>

        <BodyText>
          With Lensrentals, I like that the protection options are presented in a way that is
          easier to understand. When I am renting an expensive lens for a trip, paying a little
          extra for peace of mind can make sense. For wildlife and travel photography, that
          matters. Gear gets carried through parking lots, trails, airports, hotels, rental cars,
          overlooks, and unpredictable weather. I would rather focus on photography than spend the
          whole trip worrying about every little bump.
        </BodyText>

        <SectionHeading>Renting Helps Beginners Learn Faster</SectionHeading>

        <BodyText>
          One underrated benefit of renting gear is that it helps you learn what you actually
          value as a photographer. When you are new, it is easy to assume that more expensive gear
          automatically solves the problem. Sometimes it helps. Sometimes it does not. Renting
          lets you test that honestly.
        </BodyText>

        <BodyText>
          You may discover that you love the reach of a long telephoto lens but hate the weight.
          You may find that a smaller lens gets used more often because you actually bring it with
          you. You may realize that your next best upgrade is not a new camera body, but a better
          lens for the type of photography you enjoy most. That kind of experience is incredibly
          valuable.
        </BodyText>

        <SectionHeading>What I Like About Lensrentals</SectionHeading>

        <BodyText>
          The biggest thing I appreciate about Lensrentals is that it makes expensive camera gear
          feel approachable. You can search for the lens or camera body you want, review the specs,
          choose your rental dates, reserve gear in advance, and return it using the included
          return label. That removes a lot of friction from trying something new.
        </BodyText>

        <BodyText>
          I also like that renting encourages smarter buying. Instead of making a big purchase
          based only on reviews, I can test gear in real conditions and decide whether it actually
          fits my photography. A lens is not just a spec sheet. It is something you carry,
          balance, focus, pack, protect, and use while trying not to miss the shot.
        </BodyText>

        <SectionHeading>Next on My List: Renting a Tilt-Shift Lens</SectionHeading>

        <BodyText>
          Next on my list is a tilt-shift lens. I do not have enough regular use for one to
          justify buying right now, but I would love to experiment with the tilt-shift miniature
          effect -- tilt-shift photography can make real-world scenes look like tiny models by
          creating a narrow plane of focus and blurring the areas above and below it.
        </BodyText>

        <BodyText>
          That sounds like exactly the kind of creative experiment I would rather rent for. Instead
          of buying a specialty lens that might sit on a shelf most of the year, I can rent one for
          a week, practice with it, see what kinds of scenes work, and decide whether it is
          something I want to explore further.
        </BodyText>

        <p className="text-white/55 font-sans text-sm leading-relaxed">
          If you are curious about the technique,{' '}
          <a
            href="https://www.canonoutsideofauto.ca/2025/10/16/master-tilt-shift-photography-create-stunning-miniature-effects-and-perfect-focus/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6fcf97] hover:text-[#9fe7b8] underline underline-offset-2 transition-colors inline-flex items-center gap-1"
          >
            this Canon Outside of Auto article
            <ExternalLink className="w-3 h-3 shrink-0" />
          </a>{' '}
          gives a helpful overview of tilt-shift photography and the miniature effect.
        </p>

        <SectionHeading>A Few Tips Before Renting Camera Gear</SectionHeading>

        <BodyText>
          If you are renting a lens or camera body for a trip, I recommend building in at least a
          little time before the trip begins. You want enough time to mount the lens, test
          autofocus, check settings, make sure you have the right memory cards or batteries, and
          get comfortable with the controls. Do not wait until the first morning of a big trip to
          learn where the buttons are.
        </BodyText>

        <ul className="flex flex-col gap-2 mt-1">
          {[
            'Camera mount compatibility',
            'Filter size, if you plan to use filters',
            'Whether you need a tripod collar or support system',
            'Whether your camera bag can fit the rental lens',
            'Whether your insurance or rental protection choices make sense for the trip',
            'How and when the gear needs to be returned',
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-2 text-white/45 font-sans text-sm">
              <span className="text-[#6fcf97] mt-0.5 shrink-0">--</span>
              {tip}
            </li>
          ))}
        </ul>

        <SectionHeading>Is Lensrentals Worth It?</SectionHeading>

        <BodyText>
          For me, yes. Lensrentals is worth it because it lets photographers try better gear
          without immediately committing to a major purchase. It is especially useful for wildlife
          photography, bird photography, travel photography, macro photography, and creative
          specialty lenses that you may not use often enough to buy.
        </BodyText>

        <BodyText>
          If you only need a lens for one trip, renting may be much cheaper than buying. If you
          are thinking about buying a lens, renting first can help you avoid an expensive mistake.
          And if you are still figuring out what kind of photographer you are, renting gives you
          hands-on experience with gear you might not otherwise get to try.
        </BodyText>

        <BodyText>
          That has been my experience. I have rented lenses that helped me make better buying
          decisions, rented lenses I was glad I did not buy, and found gear like the Tamron
          50-400mm that genuinely fit the way I like to photograph.
        </BodyText>

        {/* Final CTA */}
        <div className="border border-[#1e2d1e] bg-[#0a120a] rounded-lg px-6 py-8 mt-6 flex flex-col gap-4">
          <p className="text-[#f5f0eb] font-sans font-semibold text-base">
            Curious about renting a lens or camera body?
          </p>
          <p className="text-white/45 font-sans text-sm leading-relaxed">
            If you are curious about renting a telephoto lens, macro lens, tilt-shift lens, or
            other photography gear, you can check out Lensrentals here.
          </p>
          <CTAButton />
        </div>

        {/* Affiliate disclosure footer */}
        <p className="text-white/25 font-sans text-xs leading-relaxed mt-2">
          Disclosure: this post contains affiliate or referral links. If you rent through my
          Lensrentals link, I may receive a small reward at no extra cost to you.
        </p>

        {/* Internal links */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-white/35 font-sans text-xs font-semibold uppercase tracking-widest mb-4">
            Related pages
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/photography/camera-bag', label: "What's in My Camera Bag" },
              { href: '/photography/gallery', label: 'Wildlife Photography Gallery' },
              { href: '/photography/field-notes', label: 'Field Notes' },
              { href: '/photography', label: 'Photography' },
              { href: '/photography/prints', label: 'Print Store' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white/40 hover:text-[#6fcf97] font-sans text-sm underline underline-offset-2 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </article>
    </main>
  )
}
