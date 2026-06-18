import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface Post {
  title: string
  date: string
  location: string
  category: string
  cover: string
  body: React.ReactNode
  prev?: { slug: string; title: string }
  next?: { slug: string; title: string }
}

function PostImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8 -mx-0">
      <div className="relative w-full overflow-hidden rounded bg-[#111]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-white/30 font-sans text-xs text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

const postData: Record<string, Post> = {
  'birding-at-bettman': {
    title: 'Birding at Bettman Nature Preserve',
    date: 'January 21, 2025',
    location: 'Cincinnati, OH',
    category: 'Wildlife',
    cover: 'https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc02188.jpeg',
    prev: { slug: 'capturing-backyard-birds', title: 'Capturing Backyard Birds' },
    body: (
      <div className="flex flex-col gap-5">
        <p>
          I visited Bettman Nature Preserve in Cincinnati to photograph birds as it is home to many
          different species flitting around the many bird feeders that surround the nature center
          building.
        </p>
        <p>
          There&apos;s something magical about winter bird photography — the bright plumage of
          cardinals, blue jays, and other species stands out against the blanket of white snow,
          making every shot feel vibrant and alive. With bare branches and fewer leaves on the trees,
          it was also much easier to spot and track the birds as they moved through the preserve.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc02136-1.jpg"
          alt="Bird at Bettman Nature Preserve feeder"
        />
        <p>
          However, winter photography comes with its own set of challenges. The overcast sky that day
          provided beautiful soft light, but it also meant I had to adjust my camera settings to
          compensate for the lower light levels. Using a wider aperture and a slightly higher ISO was
          essential for capturing sharp images. Despite compensating for the low light, the long
          focal length of the lens I was using made far-away shots a bit blurrier than I was hoping.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc02158.jpeg"
          alt="Bird in winter at Bettman Nature Preserve"
        />
        <p>
          In order to avoid the freezing cold temperatures, I was lucky enough to be able to
          photograph from inside the nature center building. It required patience to wait for birds
          to settle on the feeder — but it was worth it.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc02188.jpeg"
          alt="Bird perched at feeder, Bettman Nature Preserve"
          caption="Photographed through the nature center window"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/bird-2.jpg"
          alt="Bird at Bettman Nature Preserve"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/img_3966-1-edited.jpeg"
          alt="Bird portrait at Bettman Nature Preserve"
        />
        <p>
          All in all, Bettman Nature Preserve proved to be a fantastic winter birding spot. The
          serene, snowy landscape and the added pop of color from the local birdlife created an ideal
          environment for photography. If you&apos;re looking to capture the vivid contrast of
          vibrant feathers against a snowy backdrop, I highly recommend paying a visit — just
          remember to bundle up and be ready to adjust your camera settings on the fly.
        </p>
        <PostImage
          src="https://eatingendeavors.files.wordpress.com/2024/04/ella-newborn-186-1-edited-1.jpg"
          alt="Baby portrait photography"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/9d862dcb-fb19-4409-b43d-e430df0ab5e6.jpeg"
          alt="Bird at Bettman Nature Preserve"
        />
      </div>
    ),
  },

  'capturing-backyard-birds': {
    title: 'Capturing Backyard Birds',
    date: 'January 20, 2025',
    location: 'Lexington, KY',
    category: 'Wildlife',
    cover: 'https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc01896.jpg',
    next: { slug: 'birding-at-bettman', title: 'Birding at Bettman Nature Preserve' },
    body: (
      <div className="flex flex-col gap-5">
        <h2 className="text-[#f5f0eb] font-serif text-xl font-medium mt-2">
          Review of the Sony FE 200-600mm f/5.6-6.3 G OSS
        </h2>
        <p>
          Capturing stunning images of birds requires a lens with a long focal length (200–600mm),
          especially when the birds are easily startled or wary of your presence. In this post I
          share some of the birds that appeared in my backyard that I captured with the Sony FE
          200-600mm f/5.6-6.3 G OSS and provide a brief review of the lens itself.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc01870.jpg"
          alt="White-throated sparrow captured at distance with Sony 200-600mm"
          caption="White-throated sparrow — captured from at least 50 feet away"
        />
        <p>
          This white-throated sparrow was captured from at least 50 feet away and you can see that
          the lens has the ability to capture stunning images of far-away subjects in great detail.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc01876.jpg"
          alt="Tufted titmouse in backyard tree"
        />
        <p>
          Putting out seeds attracted a variety of songbirds, sparrows, cardinals, and robins — and
          of course squirrels. A tufted titmouse and a male cardinal were both captured in great
          detail from my deck, in the trees and bird feeder below.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc01880.jpg"
          alt="Male cardinal at backyard feeder"
          caption="Male cardinal at the feeder"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc01896.jpg"
          alt="White-throated sparrow on fence"
          caption="My favorite — white-throated sparrow on the fence"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc01902.jpg"
          alt="Backyard bird in winter"
        />
        <p>
          My favorite photo is of the white-throated sparrow hanging out on the fence.
        </p>
        <p>
          <strong className="text-white/70">Lens thoughts:</strong> While fantastic for capturing
          birds, it is too large to function well as a handheld lens and was best suited for a
          tripod. There was a noticeable loss in clarity for birds far away in low light. More to
          follow in the next post.
        </p>
      </div>
    ),
  },

  'capturing-snowflakes': {
    title: 'Capturing Snowflakes',
    date: 'January 16, 2025',
    location: 'Lexington, KY',
    category: 'Macro',
    cover: 'https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc01701-1.jpg',
    prev: { slug: 'solar-eclipse-part-2', title: 'Solar Eclipse — Part II' },
    next: { slug: 'capturing-backyard-birds', title: 'Capturing Backyard Birds' },
    body: (
      <div className="flex flex-col gap-5">
        <h2 className="text-[#f5f0eb] font-serif text-xl font-medium mt-2">Harder than it looks</h2>
        <p>
          Wilson A. Bentley (1865–1931) is famous for pioneering snowflake photography. He was a
          Vermont dairy farmer who took over 5,000 photographs of snowflakes. Now that I&apos;ve
          tried my hand at it, I can sincerely admire the patience, skill, and cold this man must
          have endured in order to capture such stunning beauty.
        </p>
        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          Why is it so difficult?
        </h3>
        <p>Capturing images of snowflakes is extremely difficult for several reasons:</p>
        <ol className="list-decimal list-inside flex flex-col gap-2 text-white/55">
          <li>
            <strong className="text-white/70">They melt.</strong> If you even slightly warm these
            tiny crystals they turn into a sad little water droplet.
          </li>
          <li>
            <strong className="text-white/70">They are very small.</strong> Even in perfect snowfall
            conditions, the ice crystals of snowflakes are tiny and capturing them can be extremely
            difficult.
          </li>
          <li>
            <strong className="text-white/70">Hard to find.</strong> Snowflakes often fall as
            clumps, or as ice, or are blown around. You need gently falling snow to happen upon a
            photo-worthy specimen.
          </li>
        </ol>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2025/01/dsc01701-1.jpg"
          alt="Snowflake macro photography attempt"
          caption="Snowflake macro — first attempt"
        />
        <p>
          Wilson Bentley spent years perfecting his setup in order to capture the stunning images we
          have all seen. It was with some hubris that I set out to capture snowflakes, and it
          shouldn&apos;t come as a surprise that I was met with unexpected challenges.
        </p>
        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          The results
        </h3>
        <p>
          I spent an afternoon trying to capture snowflakes. More to follow as the season progresses.
        </p>
      </div>
    ),
  },

  'solar-eclipse-part-2': {
    title: 'Solar Eclipse — Part II',
    date: 'April 12, 2024',
    location: 'Springboro, OH',
    category: 'Astrophotography',
    cover: 'https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc01026.jpg',
    prev: { slug: 'solar-eclipse-part-1', title: 'Solar Eclipse — Part I' },
    body: (
      <div className="flex flex-col gap-5">
        <p>
          In Part I, I described the solar filters used to protect the lens to be able to capture
          photos of the sun. However, when totality was reached, these filters block too much light
          to capture the event.
        </p>
        <p>
          As soon as the light faded, I ripped off the solar filters and began capturing images of
          the total eclipse — using my Sony Alpha 7 III camera with a 300mm lens.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc01010-1.jpg"
          alt="Total solar eclipse — Bailey's beads and solar flares visible around the moon"
          caption="Totality — solar flares visible around the moon's edge"
        />
        <p>
          The reddish-pink spots surrounding the moon are massive solar flares erupting from the
          sun, and you can see the light just starting to peek around the moon&apos;s edge. Absolutely
          incredible to witness in person and to be able to capture.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc01026.jpg"
          alt="Total solar eclipse totality shot with corona visible"
          caption="Full totality — the corona and solar flares"
        />
        <p>
          With enough planning, I believe a larger lens (400mm) would render even better pictures.
          The images through my telescope showed the same details with incredible clarity — about
          twice as good as captured here.
        </p>
        <p>
          Some mild post-processing was done in Lightroom to increase the contrast so the solar
          flares would be more visible.
        </p>
        <p>
          For comparison, I highly recommend Andrew McCarthy&apos;s photography work — his photos
          are by far the best I have seen taken during this event.
        </p>
      </div>
    ),
  },

  'solar-eclipse-part-1': {
    title: 'Solar Eclipse — Part I',
    date: 'April 12, 2024',
    location: 'Springboro, OH',
    category: 'Astrophotography',
    cover: 'https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc00961.jpg',
    prev: { slug: 'lensball-photography', title: 'How to: Lensball Photography' },
    next: { slug: 'solar-eclipse-part-2', title: 'Solar Eclipse — Part II' },
    body: (
      <div className="flex flex-col gap-5">
        <p>
          On April 8th, 2024, a total solar eclipse was visible throughout a large swath of the
          United States. I was lucky enough to travel only a short distance to end up directly in
          the shadow cast by the moon — heading just south of Dayton to Clear Creek Park in
          Springboro for a front-row seat to totality.
        </p>
        <p>
          I&apos;ve decided to break the eclipse posts into two parts: one to discuss setup and
          filters, and one to cover the photos captured during totality.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc00961.jpg"
          alt="Sun with sunspots photographed through solar filter"
          caption="Sun with visible sunspots — shot through a homemade solar filter on a 300mm lens"
        />
        <p>
          This image was captured through a solar filter on a 300mm lens on a Sony Alpha 7 III. It
          is incredible to be able to capture sunspots with consumer gear.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc00968-1.jpg"
          alt="Partial solar eclipse — moon beginning to cover the sun"
          caption="Partial phase — the moon beginning its transit"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc00979-1.jpg"
          alt="Partial solar eclipse — moon covering most of the sun"
          caption="Deep partial phase approaching totality"
        />
        <p>
          There was a serious risk of burning out the camera sensor — but the homemade filter worked
          perfectly. I was able to document the progress as the moon slowly covered the sun through
          the partial phases leading up to totality.
        </p>
      </div>
    ),
  },

  'lensball-photography': {
    title: 'How to: Lensball Photography',
    date: 'December 12, 2023',
    location: 'Lexington, KY',
    category: 'How-To',
    cover: 'https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc08116.jpg',
    prev: { slug: 'exploring-frankfort', title: 'Exploring Frankfort, KY' },
    next: { slug: 'solar-eclipse-part-1', title: 'Solar Eclipse — Part I' },
    body: (
      <div className="flex flex-col gap-5">
        <p>
          I was recently gifted a fascinating photography tool — a lens ball (or lensball). If you
          haven&apos;t seen one, imagine a crystal ball that acts as a lens, creating mesmerizing
          photos by bending and magnifying light.
        </p>
        <p>
          <strong className="text-white/70">Safety first:</strong> like any magnifying glass, the
          lensball can concentrate sunlight and poses a risk of fire, eye damage, or camera sensor
          damage. Never shoot directly through it toward the sun and be careful about placement.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc07761.jpg"
          alt="Lensball photography — inverted scene inside crystal sphere"
          caption="First attempt — autumn trees inverted in the lensball"
        />
        <p>
          I&apos;ve only had a couple of chances to take this fun tool out, but in the short time I
          could see that it presented real challenges. Capturing the clean, professional images found
          on the Lensball website was not going to happen anytime soon.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc07789.jpg"
          alt="Lensball with outdoor scene inverted inside"
        />
        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          Common Mistakes
        </h3>
        <ol className="list-decimal list-inside flex flex-col gap-2 text-white/55">
          <li>
            <strong className="text-white/70">Capturing your own fingers or the stand.</strong>{' '}
            Because almost all light that passes through is reflected, I had difficulty keeping
            whatever was holding the ball — my hand, the ground, or a stand — out of the image.
          </li>
          <li>
            <strong className="text-white/70">Originality.</strong> Having looked at many examples
            on Instagram before attempting my own, I found it difficult to find original
            applications that aren&apos;t already done over and over again.
          </li>
          <li>
            <strong className="text-white/70">Focal length and aperture.</strong> Getting the image
            inside the ball sharp while keeping a nice background blur requires significant
            experimentation.
          </li>
          <li>
            <strong className="text-white/70">Avoiding smudges.</strong> Bring something to clean
            the ball — otherwise your images will be hampered by fingerprints and dirt.
          </li>
        </ol>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc07813.jpg"
          alt="Lensball with landscape inverted inside crystal sphere"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc07828.jpg"
          alt="Lensball photography experiment"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc07835-1.jpg"
          alt="Lensball photography — experimenting with placement and aperture"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc08116.jpg"
          alt="Lensball with reflected scene — best shot of the session"
          caption="Best result from the session"
        />
        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          Tips for Beginners
        </h3>
        <ul className="list-disc list-inside flex flex-col gap-2 text-white/55">
          <li>Use a macro or close-focus lens to get the scenery inside the ball sharp.</li>
          <li>Try placing it on elevated surfaces or holding it at various heights to reduce ground in the frame.</li>
          <li>Experiment — there&apos;s no right or wrong way and you might surprise yourself.</li>
        </ul>
      </div>
    ),
  },

  'exploring-frankfort': {
    title: 'Exploring Frankfort, KY',
    date: 'May 1, 2023',
    location: 'Frankfort, KY',
    category: 'Street',
    cover: 'https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc02193-1.jpg',
    prev: { slug: 'macro-at-folly-beach', title: 'Macro Photography at Folly Beach' },
    next: { slug: 'lensball-photography', title: 'How to: Lensball Photography' },
    body: (
      <div className="flex flex-col gap-5">
        <p>
          I took the day to explore Frankfort, Kentucky with the idea to capture street photography.
          I&apos;ve always been drawn to the Kentucky Military History Museum building — it has
          always fascinated me.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc01991.jpg"
          alt="Kentucky Military History Museum — red brick building on a hill overlooking the Kentucky River"
          caption="Kentucky Military History Museum — perched above the Kentucky River"
        />
        <p>
          Capturing this building in a way that helps explain why it has always been interesting to
          me was supremely difficult. Perched on a hill overlooking the Kentucky River, this red
          brick castle perfectly encapsulates the history contained within. I highly recommend a
          visit — I don&apos;t think my photos do it justice.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc01999.jpg"
          alt="Street in Frankfort, KY — trees between buildings with a power line"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc02018.jpg"
          alt="Frankfort KY street scene — striking natural boundary between colors and textures"
          caption="Trees and power line creating a natural graphic divide"
        />
        <p>
          I also set out to capture a photo with clear, distinct boundaries that are striking and
          naturally occurring. I have seen several examples of this type of photography but have
          always wanted to capture my own. I found an opportunity while exploring Frankfort — the
          trees peeking between buildings, crossed by a power line, provided a striking distinction
          between colors and textures that I tried to capture in a single shot.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc02044.jpg"
          alt="Frankfort KY street detail"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc02052.jpg"
          alt="Ivy on a wall with a broken window — quiet ruin in Frankfort KY"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc02120.jpg"
          alt="Street scene in Frankfort KY"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc02129.jpg"
          alt="Frankfort KY — architectural detail"
        />
        <p>
          My favorite picture from the day was of ivy growing on a wall with a broken window — a
          quiet piece of ruin hiding in plain sight on a side street.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc02193-1.jpg"
          alt="Ivy growing on a wall with a broken window in Frankfort KY"
          caption="Ivy on a broken window — a quiet ruin on a side street"
        />
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2024/04/dsc02219.jpg"
          alt="Frankfort KY — street photography"
        />
      </div>
    ),
  },

  'macro-at-folly-beach': {
    title: 'Macro Photography at Folly Beach',
    date: 'December 15, 2021',
    location: 'Folly Beach, SC',
    category: 'Macro',
    cover: 'https://chrisbrenzel.com/wp-content/uploads/2021/12/unnamed-1.jpg',
    next: { slug: 'exploring-frankfort', title: 'Exploring Frankfort, KY' },
    body: (
      <div className="flex flex-col gap-5">
        <p>
          The beach was a good place to practice macro photography — small flowers, shells, grasses,
          and sand. I was using my Sony A6000 with a new macro lens and wanted to push the limits of
          what it could do.
        </p>
        <PostImage
          src="https://chrisbrenzel.com/wp-content/uploads/2021/12/unnamed-1.jpg"
          alt="Tiny shell on sand at Folly Beach, SC — macro photography"
          caption="A shell that would fit on the tip of a finger — Folly Beach, SC"
        />
        <p>
          Capturing small shells was incredibly difficult as the wind kept blowing the tiny sand
          grains around. The shell in the image may look large but would have easily fit on the tip
          of my finger.
        </p>
        <p>
          You might be familiar with the work of Dr. Gary Greenburg, whose macro images of sand are
          extraordinary. While these tiny shells are striking, you can clearly see the crushed silica
          with no defined shape making up the majority of the particles in the photograph — all of it
          ground down by the waves.
        </p>
        <p>
          I discovered when taking macro photos that the f-stop is critically important because it
          determines how much of the subject is in focus. With a macro lens, depth of field becomes
          razor-thin — even small aperture changes make a dramatic difference in what reads as sharp
          and what dissolves into blur.
        </p>
      </div>
    ),
  },
}

export default async function FieldNotePost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = postData[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/30 font-sans text-sm mb-4">Post not found</p>
          <Link
            href="/photography/field-notes"
            className="text-white/50 hover:text-white font-sans text-sm transition-colors"
          >
            Back to field notes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="pt-14">
      {/* Hero cover image */}
      <div className="relative w-full aspect-[21/9] bg-[#111] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/30 to-transparent" />
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* Back link */}
        <Link
          href="/photography/field-notes"
          className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 font-sans text-xs mb-10 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Field notes
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <span className="text-white/30 font-sans text-[10px] tracking-[0.15em] uppercase">
            {post.category}
          </span>
          <span className="w-px h-3 bg-white/15" />
          <span className="text-white/25 font-sans text-xs">{post.date}</span>
          <span className="w-px h-3 bg-white/15" />
          <span className="text-white/25 font-sans text-xs">{post.location}</span>
        </div>

        <h1 className="text-[#f5f0eb] font-serif italic text-3xl md:text-4xl font-medium leading-tight mb-10 text-balance">
          {post.title}
        </h1>

        {/* Body */}
        <div className="text-white/55 font-sans text-base leading-relaxed [&_p]:text-white/55 [&_p]:leading-relaxed [&_strong]:text-white/70 [&_li]:leading-relaxed">
          {post.body}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1a1a1a] mt-14 mb-10" />

        {/* Prev / Next */}
        <nav className="flex items-center justify-between gap-4">
          {post.prev ? (
            <Link
              href={`/photography/field-notes/${post.prev.slug}`}
              className="flex items-center gap-2 text-white/30 hover:text-white/60 font-sans text-xs transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
              <span className="group-hover:underline underline-offset-2">{post.prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {post.next ? (
            <Link
              href={`/photography/field-notes/${post.next.slug}`}
              className="flex items-center gap-2 text-white/30 hover:text-white/60 font-sans text-xs transition-colors group"
            >
              <span className="group-hover:underline underline-offset-2">{post.next.title}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </main>
  )
}
