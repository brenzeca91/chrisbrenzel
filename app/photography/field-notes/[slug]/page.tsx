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
    cover: '/images/field-notes/bettman.jpg',
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
          src="/images/field-notes/bettman-feeder-1.png"
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
          src="/images/field-notes/bettman-feeder-2.png"
          alt="Bird in winter at Bettman Nature Preserve"
        />
        <p>
          In order to avoid the freezing cold temperatures, I was lucky enough to be able to
          photograph from inside the nature center building. It required patience to wait for birds
          to settle on the feeder — but it was worth it.
        </p>
        <PostImage
          src="/images/field-notes/bettman-cardinal.png"
          alt="Bird perched at feeder, Bettman Nature Preserve"
          caption="Photographed through the nature center window"
        />
        <PostImage
          src="/images/field-notes/bettman.jpg"
          alt="Bird at Bettman Nature Preserve"
        />
        <p>
          All in all, Bettman Nature Preserve proved to be a fantastic winter birding spot. The
          serene, snowy landscape and the added pop of color from the local birdlife created an ideal
          environment for photography. If you&apos;re looking to capture the vivid contrast of
          vibrant feathers against a snowy backdrop, I highly recommend paying a visit — just
          remember to bundle up and be ready to adjust your camera settings on the fly.
        </p>
      </div>
    ),
  },

  'capturing-backyard-birds': {
    title: 'Capturing Backyard Birds',
    date: 'January 20, 2025',
    location: 'Lexington, KY',
    category: 'Wildlife',
    cover: '/images/field-notes/backyard-birds.jpg',
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
          src="/images/field-notes/backyard-sparrow.png"
          alt="White-throated sparrow captured at distance with Sony 200-600mm"
          caption="White-throated sparrow — captured from at least 50 feet away"
        />
        <p>
          This white-throated sparrow was captured from at least 50 feet away and you can see that
          the lens has the ability to capture stunning images of far-away subjects in great detail.
        </p>
        <PostImage
          src="/images/field-notes/backyard-titmouse.png"
          alt="Tufted titmouse in backyard tree"
        />
        <p>
          Putting out seeds attracted a variety of songbirds, sparrows, cardinals, and robins — and
          of course squirrels. A tufted titmouse and a male cardinal were both captured in great
          detail from my deck, in the trees and bird feeder below.
        </p>
        <PostImage
          src="/images/field-notes/backyard-cardinal.png"
          alt="Male cardinal at backyard feeder"
          caption="Male cardinal at the feeder"
        />
        <PostImage
          src="/images/field-notes/backyard-birds.jpg"
          alt="White-throated sparrow on fence"
          caption="My favorite — white-throated sparrow on the fence"
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
    cover: '/images/field-notes/snowflakes.jpg',
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
          src="/images/field-notes/snowflakes.jpg"
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
    cover: '/images/field-notes/eclipse-part2.jpg',
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
          src="/images/field-notes/eclipse-totality.png"
          alt="Total solar eclipse — Bailey's beads and solar flares visible around the moon"
          caption="Totality — solar flares visible around the moon's edge"
        />
        <p>
          The reddish-pink spots surrounding the moon are massive solar flares erupting from the
          sun, and you can see the light just starting to peek around the moon&apos;s edge. Absolutely
          incredible to witness in person and to be able to capture.
        </p>
        <PostImage
          src="/images/field-notes/eclipse-part2.jpg"
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
    cover: '/images/field-notes/eclipse-part1.jpg',
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
          src="/images/field-notes/eclipse-part1.jpg"
          alt="Sun with sunspots photographed through solar filter"
          caption="Sun with visible sunspots — shot through a homemade solar filter on a 300mm lens"
        />
        <p>
          This image was captured through a solar filter on a 300mm lens on a Sony Alpha 7 III. It
          is incredible to be able to capture sunspots with consumer gear.
        </p>
        <PostImage
          src="/images/field-notes/eclipse-partial.png"
          alt="Partial solar eclipse — moon beginning to cover the sun"
          caption="Partial phase — the moon beginning its transit"
        />
        <PostImage
          src="/images/field-notes/eclipse-part2.jpg"
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
    title: 'How to Use a Lensball for Creative Nature Photography',
    date: 'December 12, 2023',
    location: 'Lexington, KY',
    category: 'How-To',
    cover: '/images/field-notes/lensball-forest-log-refraction-christopher-brenzel.jpg',
    prev: { slug: 'exploring-frankfort', title: 'Exploring Frankfort, KY' },
    next: { slug: 'solar-eclipse-part-1', title: 'Solar Eclipse — Part I' },
    body: (
      <div className="flex flex-col gap-5">

        {/* Affiliate disclosure */}
        <p className="text-white/35 text-xs border border-white/10 rounded px-3 py-2 font-sans">
          This post contains affiliate links. If you purchase through them I may earn a small
          commission at no extra cost to you.
        </p>

        <p>
          I was recently gifted a lensball — a solid glass sphere that acts as a natural lens,
          bending and inverting the world around it. If you&apos;ve seen crystal ball photography
          on Instagram, this is the tool behind most of those shots. The concept is simple: place
          the ball in front of your camera, focus through it, and the sphere inverts and compresses
          the scene inside a perfect circle.
        </p>

        <PostImage
          src="/images/field-notes/lensball-forest-log-refraction-christopher-brenzel.jpg"
          alt="Lensball photograph reflecting pine trees on a fallen log in a Kentucky forest"
          caption="A lensball turns a simple forest scene into a small inverted world."
        />

        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          What Is Lensball Photography?
        </h3>
        <p>
          Lensball photography — sometimes called crystal ball photography — is a creative technique
          where a solid glass sphere is used to refract and invert a scene. The ball functions like
          a fisheye lens compressed into a small circle. Subjects like trees, architecture, and
          landscapes bend inward, creating a miniaturized world inside the sphere. You shoot through
          or around the ball with your camera, typically at close range with a longer focal length
          to isolate the ball against a blurred background.
        </p>
        <p>
          The technique works because the glass sphere bends light from all angles simultaneously —
          the same physics that make a water droplet reflect a whole scene. The result is a
          180-degree field of view compressed into the diameter of the ball, always flipped
          upside-down.
        </p>

        <PostImage
          src="/images/field-notes/lensball-on-fallen-log-pine-forest.jpg"
          alt="Lensball resting on a fallen log with pine trees refracted inside the glass sphere"
          caption="Changing the angle even slightly changes how much sky, tree line, and foreground appear inside the ball."
        />

        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          My First Lensball Photography Attempt
        </h3>
        <p>
          I took the lensball out to a pine forest and placed it on a fallen log. The warm wood
          gave the ball a natural resting point and kept the forest floor from dominating the frame.
          The vertical pine trees created strong lines inside the sphere — which, inverted, read as
          a clean pattern radiating from the bottom edge.
        </p>
        <p>
          Getting the ball sharp while keeping a blurred background required more experimentation
          than I expected. Too close and the background compressed into a smear. Too far and the
          sphere lost its presence against the scene. The sweet spot — at least with the lens I had
          — was around two to three feet from the ball at a moderate aperture like f/5.6 or f/8.
        </p>

        {/* Photo notes callout */}
        <div className="border border-white/10 rounded px-4 py-4 bg-white/[0.02]">
          <p className="text-white/50 text-xs font-semibold font-sans uppercase tracking-wide mb-2">
            Photo Notes
          </p>
          <p className="text-white/45 text-sm font-sans leading-relaxed">
            These photos are from my own early lensball experiments. I kept them in the article
            because they show the real learning process: finding a clean background, keeping
            fingerprints and fingers out of the frame, watching how much ground appears inside
            the ball, and learning how dramatically the composition changes with small shifts in
            camera height. The fallen log images worked best because the warm wood gave the
            lensball a natural base and the vertical pine trees created strong lines inside the
            sphere. The handheld images were useful too, but they made it much harder to avoid
            fingers, glare, and distracting reflections.
          </p>
        </div>

        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          Common Lensball Photography Mistakes
        </h3>

        <p className="text-white/55">
          <strong className="text-white/70">1. Including too much ground.</strong> When the ball
          sits too low — directly on the ground or on a low surface — the forest floor fills a
          large portion of the interior. In a forest setting, this means pine needles and dirt
          dominate the composition rather than the trees or sky you were trying to capture.
        </p>

        <PostImage
          src="/images/field-notes/lensball-pine-needles-close-up-refraction.jpg"
          alt="Close-up lensball photo showing pine needles and forest floor around the refracted tree scene"
          caption="One early lesson: if the ball sits too low, the forest floor can dominate the composition."
        />

        <p className="text-white/55">
          <strong className="text-white/70">2. Capturing your fingers, hand, or stand.</strong>{' '}
          Because the sphere picks up light from almost every angle, whatever is holding the ball
          tends to appear somewhere in the frame. Holding it with two fingers from below looks
          natural, but getting a clean shot where the fingers don&apos;t compete with the scene
          inside the ball is harder than it sounds.
        </p>

        <PostImage
          src="/images/field-notes/handheld-lensball-tree-canopy-example.jpg"
          alt="Handheld lensball photograph showing tree canopy reflections and visible fingers"
          caption="Holding the lensball can work, but fingers and reflections are hard to keep out of the frame."
        />

        <p className="text-white/55">
          <strong className="text-white/70">3. Originality.</strong> After looking at hundreds of
          lensball photos on Instagram, finding a composition that doesn&apos;t feel like a
          repeat of what everyone else has done is genuinely difficult. The sphere is the star of
          almost every shot — which means the challenge quickly becomes finding backgrounds,
          surfaces, and lighting that make yours stand apart.
        </p>

        <p className="text-white/55">
          <strong className="text-white/70">4. Focal length and aperture.</strong> Getting the
          scene inside the ball sharp while keeping a smooth background blur requires
          experimentation. A longer focal length compresses the background nicely but makes
          precise focus harder at close range. A wider aperture increases background separation
          but shrinks your focus plane to a sliver.
        </p>

        <p className="text-white/55">
          <strong className="text-white/70">5. Smudges and fingerprints.</strong> Bring a
          microfiber cloth. Any fingerprint on the glass surface will show up clearly in the
          final image — especially when shooting in bright conditions. Clean the ball before
          every shot.
        </p>

        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          Lensball Safety Warning
        </h3>
        <p>
          A lensball is a magnifying glass. In direct sunlight, it will concentrate light into a
          focused beam intense enough to burn skin, start a fire, or damage a camera sensor.
          Never leave a lensball sitting in direct sunlight unattended — on a car seat, a table,
          or the ground. Treat it the same way you would treat a magnifying glass around paper.
          When shooting in bright sun, keep your shooting time brief and never point the sphere
          directly toward the sun.
        </p>

        <PostImage
          src="/images/field-notes/lensball-snow-fence-sunlight-safety-example.jpg"
          alt="Lensball held in bright winter sunlight with blue sky and fence reflected inside"
          caption="Bright sunlight can make a lensball risky. Treat it like a magnifying glass and never leave it sitting in direct sun."
        />

        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          Lensball Camera Settings — Starting Point
        </h3>
        <ul className="list-disc list-inside flex flex-col gap-2 text-white/55">
          <li>
            <strong className="text-white/70">Focal length:</strong> 50mm–200mm. Longer focal
            lengths compress the background and give the ball more presence in the frame.
          </li>
          <li>
            <strong className="text-white/70">Aperture:</strong> f/5.6–f/8 to keep the ball
            sharp. Wider apertures can blur too much of the sphere itself.
          </li>
          <li>
            <strong className="text-white/70">Focus:</strong> Manual focus on the front surface
            of the sphere, or use autofocus with a center point aimed at the sphere interior.
          </li>
          <li>
            <strong className="text-white/70">Distance:</strong> 1–3 feet from the ball. Closer
            increases the ball&apos;s size relative to the background; farther shrinks it.
          </li>
        </ul>

        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          Tips for Beginners
        </h3>
        <ul className="list-disc list-inside flex flex-col gap-2 text-white/55">
          <li>
            Place the ball on an elevated natural surface — a rock, log, or fence post — to
            reduce ground coverage inside the sphere.
          </li>
          <li>
            Clean the ball before every shot with a microfiber cloth. Fingerprints are the
            fastest way to ruin an otherwise clean image.
          </li>
          <li>
            Look for strong vertical lines in the background: trees, fences, buildings. They
            create satisfying patterns when compressed and inverted inside the sphere.
          </li>
          <li>
            Experiment with camera height. Even a few inches up or down changes the
            sky-to-ground ratio inside the ball dramatically.
          </li>
          <li>
            Shoot in soft, overcast light when possible. Harsh sunlight creates glare spots
            on the glass surface that are difficult to remove in editing.
          </li>
        </ul>

        <h3 className="text-white/60 font-sans text-sm font-semibold tracking-wide uppercase mt-2">
          Lensball Photography Examples
        </h3>
        <p className="text-white/55">
          Here are a few examples from my own lensball experiments. Some are more successful than
          others, but each one helped me understand composition, focus, light, and reflection a
          little better.
        </p>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure>
            <div className="rounded overflow-hidden bg-[#111]">
              <Image
                src="/images/field-notes/lensball-forest-log-refraction-christopher-brenzel.jpg"
                alt="Lensball on fallen log — forest reflection with shallow depth of field"
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-2 text-white/30 font-sans text-xs italic">
              Forest reflection inside the lensball, with the background softened by shallow depth of field.
            </figcaption>
          </figure>
          <figure>
            <div className="rounded overflow-hidden bg-[#111]">
              <Image
                src="/images/field-notes/lensball-on-fallen-log-pine-forest.jpg"
                alt="Lensball on fallen log — slightly lower angle, more log and sky visible"
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-2 text-white/30 font-sans text-xs italic">
              A slightly lower angle changes the balance of trees, sky, and fallen log.
            </figcaption>
          </figure>
          <figure>
            <div className="rounded overflow-hidden bg-[#111]">
              <Image
                src="/images/field-notes/lensball-pine-needles-close-up-refraction.jpg"
                alt="Lensball close-up on forest floor — pine needles dominate the interior"
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-2 text-white/30 font-sans text-xs italic">
              A close-up example where the forest floor becomes a major part of the image.
            </figcaption>
          </figure>
          <figure>
            <div className="rounded overflow-hidden bg-[#111]">
              <Image
                src="/images/field-notes/handheld-lensball-tree-canopy-example.jpg"
                alt="Handheld lensball — fingers visible, tree canopy reflected"
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-2 text-white/30 font-sans text-xs italic">
              A handheld lensball shot showing how difficult it can be to hide fingers and reflections.
            </figcaption>
          </figure>
        </div>
        <figure>
          <div className="rounded overflow-hidden bg-[#111]">
            <Image
              src="/images/field-notes/lensball-snow-fence-sunlight-safety-example.jpg"
              alt="Lensball held in bright winter sunlight — fence and blue sky reflected"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mt-2 text-white/30 font-sans text-xs italic text-center">
            A bright winter example and a reminder to be careful with direct sunlight.
          </figcaption>
        </figure>

        {/* CTA */}
        <div className="border border-white/10 rounded px-4 py-4 bg-white/[0.02]">
          <p className="text-white/55 text-sm font-sans leading-relaxed">
            If you want to try lensball photography yourself, a simple glass photography ball is
            an inexpensive way to practice composition, focus, and creative nature photography.{' '}
            <a
              href="https://amzn.to/4fcseDj"
              rel="sponsored nofollow"
              target="_blank"
              className="text-blue-300 hover:text-blue-200 transition-colors underline"
            >
              This is the one I&apos;m currently linking for beginners.
            </a>
          </p>
        </div>

      </div>
    ),
  },

  'exploring-frankfort': {
    title: 'Exploring Frankfort, KY',
    date: 'May 1, 2023',
    location: 'Frankfort, KY',
    category: 'Street',
    cover: '/images/field-notes/frankfort.jpg',
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
          src="/images/field-notes/frankfort-museum.png"
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
          src="/images/field-notes/frankfort-street.png"
          alt="Street in Frankfort, KY — trees between buildings with a power line"
        />
        <PostImage
          src="/images/field-notes/frankfort.jpg"
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
          src="/images/field-notes/frankfort-ivy.png"
          alt="Ivy on a wall with a broken window — quiet ruin in Frankfort KY"
          caption="Ivy on a broken window — a quiet ruin on a side street"
        />
        <p>
          My favorite picture from the day was of ivy growing on a wall with a broken window — a
          quiet piece of ruin hiding in plain sight on a side street.
        </p>
      </div>
    ),
  },

  'macro-at-folly-beach': {
    title: 'Macro Photography at Folly Beach',
    date: 'December 15, 2021',
    location: 'Folly Beach, SC',
    category: 'Macro',
    cover: '/images/field-notes/folly-beach.jpg',
    next: { slug: 'exploring-frankfort', title: 'Exploring Frankfort, KY' },
    body: (
      <div className="flex flex-col gap-5">
        <p>
          The beach was a good place to practice macro photography — small flowers, shells, grasses,
          and sand. I was using my Sony A6000 with a new macro lens and wanted to push the limits of
          what it could do.
        </p>
        <PostImage
          src="/images/field-notes/folly-beach.jpg"
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
