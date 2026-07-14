// Sony Camera Quiz -- Data Configuration
// Last reviewed: July 14, 2026
// Edit this file to update camera models, prices, and scoring.

export type ScoreKey = 'BAS' | 'APS' | 'FFV' | 'CFF' | 'ALL' | 'RES' | 'PRO' | 'VID'

export type ScoreDelta = Partial<Record<ScoreKey, number>>

export interface QuizAnswer {
  label: string
  scores: ScoreDelta
  note?: string
}

export interface QuizQuestion {
  id: number
  question: string
  type: 'single' | 'multi' | 'slider'
  multiMax?: number
  sliderLabels?: string[]
  answers: QuizAnswer[]
  note?: string
}

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which best describes your photography experience?',
    type: 'single',
    note: "Starting with a smaller camera is not a lesser choice. Chris carried an A6000 through Spain, Italy, beach trips, and family outings because it was compact enough to bring along.",
    answers: [
      { label: 'My phone or a basic compact camera is all I have used', scores: { BAS: 5, APS: 2, VID: 1 } },
      { label: 'I used to own a camera and want to start again', scores: { BAS: 3, APS: 3, FFV: 2 } },
      { label: 'I am a photography student', scores: { BAS: 3, APS: 3, FFV: 2 } },
      { label: 'I am a serious hobbyist ready to improve', scores: { APS: 4, FFV: 3, CFF: 2, ALL: 2, RES: 1 } },
      { label: 'I am preparing to take on my first paying clients', scores: { FFV: 2, ALL: 5, RES: 4, PRO: 2, VID: 2 } },
      { label: 'I already have paying clients', scores: { ALL: 4, RES: 4, PRO: 6, VID: 2 } },
    ],
  },
  {
    id: 2,
    question: 'What do you most want to photograph?',
    type: 'multi',
    multiMax: 2,
    note: 'Select up to two. Choosing "A little bit of everything" locks your selection.',
    answers: [
      { label: 'Travel and street photography', scores: { BAS: 5, APS: 3, CFF: 5, ALL: 1 } },
      { label: 'Family and portraits', scores: { BAS: 3, APS: 2, FFV: 3, CFF: 3, ALL: 4, RES: 1 } },
      { label: 'Landscapes and architecture', scores: { APS: 1, FFV: 2, CFF: 2, ALL: 3, RES: 6 } },
      { label: 'Birds and wildlife', scores: { APS: 5, FFV: 1, ALL: 4, RES: 5, PRO: 6 } },
      { label: 'Sports and fast action', scores: { APS: 4, ALL: 5, PRO: 7 } },
      { label: 'Macro and product photography', scores: { BAS: 1, APS: 2, FFV: 2, ALL: 3, RES: 6 } },
      { label: 'Events and weddings', scores: { FFV: 3, ALL: 6, RES: 3, PRO: 4 } },
      { label: 'Video and content creation', scores: { APS: 3, ALL: 2, VID: 7, PRO: 1 } },
      { label: 'A little bit of everything', scores: { APS: 4, CFF: 2, ALL: 5 }, note: 'exclusive' },
    ],
  },
  {
    id: 3,
    question: 'What role do you want photography to play?',
    type: 'single',
    note: "Do not pressure yourself to monetize a hobby. If paid work is the goal, plan intentionally for dependable equipment and room to grow.",
    answers: [
      { label: 'It is purely for fun and relaxation', scores: { BAS: 6, APS: 3, CFF: 1 } },
      { label: 'I want to become a skilled hobbyist', scores: { APS: 5, FFV: 3, CFF: 2, ALL: 2, RES: 2 } },
      { label: 'I am studying photography or visual media', scores: { BAS: 3, APS: 4, FFV: 2 } },
      { label: 'I intentionally want to build a side business', scores: { FFV: 2, CFF: 2, ALL: 5, RES: 3, VID: 2 } },
      { label: 'I am preparing to launch a professional business', scores: { ALL: 6, RES: 4, PRO: 4, VID: 3 } },
      { label: 'Photography is already part of my paid work', scores: { ALL: 5, RES: 4, PRO: 7, VID: 3 } },
    ],
  },
  {
    id: 4,
    question: 'What is your realistic budget for a camera body and one useful first lens?',
    type: 'slider',
    sliderLabels: ['Under $800', '$800-$1,249', '$1,250-$1,999', '$2,000-$3,499', '$3,500-$5,999', '$6,000 or more'],
    note: 'Use your system budget -- body plus one useful first lens -- not the body price alone.',
    answers: [
      { label: 'Under $800', scores: { BAS: 10 } },
      { label: '$800-$1,249', scores: { BAS: 8, VID: 2 } },
      { label: '$1,250-$1,999', scores: { BAS: 2, APS: 7, FFV: 5, VID: 3 } },
      { label: '$2,000-$3,499', scores: { APS: 3, FFV: 4, CFF: 6, ALL: 6, VID: 5 } },
      { label: '$3,500-$5,999', scores: { CFF: 3, ALL: 6, RES: 8, VID: 5 } },
      { label: '$6,000 or more', scores: { ALL: 3, RES: 6, PRO: 10, VID: 4 } },
    ],
  },
  {
    id: 5,
    question: 'How do you feel about buying used camera equipment?',
    type: 'single',
    note: 'Used equipment from a reputable dealer can offer excellent value. Check condition grades, return policies, battery condition, and the lens mount.',
    answers: [
      { label: 'I prefer used equipment for the best value', scores: { BAS: 6, FFV: 7, RES: 1 } },
      { label: 'I am comfortable buying used from a reputable dealer', scores: { BAS: 3, APS: 1, FFV: 5, ALL: 1, RES: 2 } },
      { label: 'I only want new equipment with a full warranty', scores: { BAS: -12, FFV: -12, APS: 4, CFF: 4, ALL: 5, RES: 5, VID: 4, PRO: 5 } },
      { label: 'I am not sure yet', scores: { BAS: 2, FFV: 1, APS: 1 } },
    ],
  },
  {
    id: 6,
    question: 'How important is a small and lightweight camera?',
    type: 'slider',
    sliderLabels: ['Size does not matter', 'Can carry larger', 'Reasonable balance', 'Lightweight is important', 'Large camera = shoot less'],
    answers: [
      { label: 'Size does not matter', scores: { ALL: 3, RES: 4, PRO: 4 } },
      { label: 'I can comfortably carry a larger camera', scores: { FFV: 1, ALL: 3, RES: 2 } },
      { label: 'I want a reasonable balance', scores: { APS: 3, CFF: 3, ALL: 3 } },
      { label: 'Lightweight equipment is important', scores: { BAS: 3, APS: 5, CFF: 5, VID: 2 } },
      { label: 'A large camera would make me shoot less', scores: { BAS: 7, APS: 4, CFF: 6, VID: 2, RES: -3, PRO: -4 } },
    ],
  },
  {
    id: 7,
    question: 'How will you usually carry and use the camera?',
    type: 'single',
    note: "A technically superior telephoto kit does not help if it is too heavy to carry on the trail.",
    answers: [
      { label: 'Walking around cities and public places all day', scores: { BAS: 6, APS: 3, CFF: 6 } },
      { label: 'Family trips and carry-on travel', scores: { BAS: 5, APS: 4, CFF: 5 } },
      { label: 'Day hikes and outdoor excursions', scores: { APS: 5, CFF: 4, ALL: 2 } },
      { label: 'Long hikes where I also want wildlife reach', scores: { APS: 7, CFF: 2, ALL: 3, RES: 1 } },
      { label: 'Mostly studios, events, vehicles, or short walks', scores: { FFV: 2, ALL: 5, RES: 5, PRO: 5, VID: 2 } },
    ],
  },
  {
    id: 8,
    question: 'How important are heavy cropping, fine detail, and large prints?',
    type: 'slider',
    sliderLabels: ['Rarely crop', 'Small adjustments', 'Regularly reframe', 'Wildlife / large prints', 'Maximum detail priority'],
    note: "Cropping was the limitation that pushed Chris from the A6000 toward a 42 MP full-frame body for wildlife and macro work.",
    answers: [
      { label: 'I rarely expect to crop', scores: { BAS: 4, CFF: 2 } },
      { label: 'I might make small adjustments', scores: { BAS: 2, APS: 2, FFV: 2, ALL: 2 } },
      { label: 'I regularly reframe photographs', scores: { APS: 4, FFV: 2, ALL: 4 } },
      { label: 'I photograph distant wildlife or make large prints', scores: { APS: 6, ALL: 5, RES: 6, PRO: 5 } },
      { label: 'Maximum detail and aggressive cropping are major priorities', scores: { RES: 10, PRO: 7, ALL: 3, BAS: -2 } },
    ],
  },
  {
    id: 9,
    question: 'How often will you photograph or film in low light?',
    type: 'single',
    note: 'Lens aperture and lighting can matter as much as the camera body for low-light work.',
    answers: [
      { label: 'Mostly outdoors during the day', scores: { BAS: 4, APS: 3 } },
      { label: 'Family gatherings, sunsets, and occasional indoor scenes', scores: { APS: 2, FFV: 4, CFF: 4, ALL: 4 } },
      { label: 'Night photography, astrophotography, indoor events, or dawn wildlife', scores: { FFV: 4, CFF: 3, ALL: 6, RES: 3, PRO: 4 } },
      { label: 'Low-light video is one of my main goals', scores: { VID: 8, ALL: 3, PRO: 2 } },
      { label: 'I do not know yet', scores: {} },
    ],
  },
  {
    id: 10,
    question: 'How demanding are your autofocus and action needs?',
    type: 'slider',
    sliderLabels: ['Landscapes / still', 'People / pets occasionally', 'Children, pets, movement', 'Birds / wildlife / sports', 'Paid high-stakes action'],
    note: 'Budget alone does not produce a flagship recommendation. Action demands must also be high.',
    answers: [
      { label: 'Mostly landscapes, buildings, and still subjects', scores: { BAS: 3, CFF: 2, RES: 4 } },
      { label: 'People and pets occasionally', scores: { BAS: 2, APS: 3, ALL: 2 } },
      { label: 'Children, pets, and moderate movement', scores: { APS: 5, ALL: 4 } },
      { label: 'Birds, wildlife, and sports', scores: { APS: 6, ALL: 6, RES: 3, PRO: 7 } },
      { label: 'Paid or high-stakes action photography', scores: { ALL: 5, RES: 2, PRO: 11 } },
    ],
  },
  {
    id: 11,
    question: 'What conditions will you photograph in?',
    type: 'single',
    note: 'Weather-resistant equipment is not waterproof. Lens weather sealing matters too.',
    answers: [
      { label: 'Mostly fair weather and controlled settings', scores: { BAS: 4, CFF: 2 } },
      { label: 'Occasional outdoor use and light weather', scores: { APS: 3, FFV: 2, ALL: 2 } },
      { label: 'Regular hiking, birding, or outdoor field use', scores: { APS: 5, ALL: 5, RES: 4, PRO: 4 } },
      { label: 'Professional or wildlife work that cannot stop for poor conditions', scores: { ALL: 5, RES: 5, PRO: 8 } },
    ],
  },
  {
    id: 12,
    question: 'Do you already own or have access to Sony E-mount lenses?',
    type: 'single',
    note: 'APS-C lenses work on full-frame Sony bodies in crop mode, but resolution is reduced. They are a transition option, not a compromise-free full-frame kit.',
    answers: [
      { label: 'No -- I am starting completely from scratch', scores: { BAS: 5, APS: 3 } },
      { label: 'I can borrow or cheaply rent APS-C lenses', scores: { BAS: 2, APS: 6 } },
      { label: 'I can borrow or cheaply rent full-frame lenses', scores: { FFV: 4, CFF: 3, ALL: 6, RES: 5, PRO: 2 } },
      { label: 'I already own several APS-C lenses', scores: { BAS: 4, APS: 8, FFV: -3, CFF: -3, ALL: -3, RES: -3, PRO: -3 } },
      { label: 'I already own full-frame Sony lenses', scores: { FFV: 3, CFF: 5, ALL: 6, RES: 5, PRO: 4 } },
      { label: 'I plan to rent professional lenses for assignments', scores: { ALL: 5, RES: 4, PRO: 5, VID: 2 } },
    ],
  },
  {
    id: 13,
    question: 'What kind of video do you expect to create?',
    type: 'single',
    note: 'Audio quality, lighting, stabilization, power, and editing hardware can matter more than small camera spec differences.',
    answers: [
      { label: 'Almost none', scores: {} },
      { label: 'Family and travel clips', scores: { BAS: 2, APS: 3, CFF: 2, ALL: 2, VID: 1 } },
      { label: 'Tripod-based vlogs, tutorials, or online courses', scores: { APS: 3, CFF: 2, VID: 7 } },
      { label: 'Handheld travel or location content', scores: { APS: 5, ALL: 3, VID: 9 } },
      { label: 'Product videos, interviews, and paid client content', scores: { ALL: 4, VID: 11, PRO: 2 } },
      { label: 'Filmmaking or advanced professional video', scores: { VID: 13, PRO: 3 } },
    ],
  },
  {
    id: 14,
    question: 'How do you expect your lens collection to grow?',
    type: 'single',
    note: 'Switching bodies is easier than replacing a lens collection. Think about your likely destination before buying.',
    answers: [
      { label: 'I want one lens and the simplest possible setup', scores: { BAS: 7, APS: 4, CFF: 3 } },
      { label: 'I may eventually own two or three lenses', scores: { BAS: 2, APS: 5, FFV: 2, CFF: 3, ALL: 3 } },
      { label: 'I want to build a serious system over several years', scores: { FFV: 4, CFF: 2, ALL: 7, RES: 6, PRO: 2 } },
      { label: 'I expect professional lenses, backup bodies, and specialized equipment', scores: { ALL: 6, RES: 5, PRO: 10, VID: 4 } },
      { label: 'I honestly do not know', scores: { BAS: 3, APS: 2 } },
    ],
  },
  {
    id: 15,
    question: 'Which purchase would you regret most?',
    type: 'single',
    note: "Client perception should be framed as Chris's subjective experience: larger gear made him feel more credible, but equipment size is not proof of skill.",
    answers: [
      { label: 'Spending far more than I needed', scores: { BAS: 8, FFV: 3 } },
      { label: 'Buying equipment too heavy to carry regularly', scores: { BAS: 7, APS: 5, CFF: 7 } },
      { label: "Outgrowing the camera's detail or cropping ability", scores: { FFV: 3, ALL: 5, RES: 10, PRO: 3 } },
      { label: 'Missing action because autofocus or speed could not keep up', scores: { APS: 5, ALL: 6, PRO: 10 } },
      { label: 'Rebuilding my lens collection after an upgrade', scores: { FFV: 5, ALL: 6, RES: 5, PRO: 3 } },
      { label: 'Looking under-equipped when meeting paying clients', scores: { ALL: 6, RES: 5, PRO: 6 } },
      { label: 'Discovering that the camera limits my video work', scores: { VID: 11, ALL: 2 } },
    ],
  },
]

export type ResultKey =
  | 'a6000'
  | 'a6400'
  | 'a6700'
  | 'a7iii'
  | 'a7riii'
  | 'a7cii'
  | 'a7v'
  | 'a7r'
  | 'video'
  | 'a1'

export interface CameraResult {
  id: ResultKey
  anchorId: string
  scoreKey: ScoreKey
  name: string
  headline: string
  eyebrow: string
  shortVerdict: string
  chrisPerspective: string
  bestFor: string[]
  whySelected: string[]
  whatToKnow: string[]
  firstLensPlan: string
  whoShouldSkip: string
  moreAffordable: string
  upgradeNote: string
  priceNote?: string
  usedBody: boolean
}

export const CAMERA_RESULTS: CameraResult[] = [
  {
    id: 'a6000',
    anchorId: 'sony-a6000-recommendation',
    scoreKey: 'BAS',
    name: 'Sony A6000 (used)',
    headline: 'Used Sony A6000: the low-pressure, low-cost way to begin',
    eyebrow: 'YOUR BEST SONY MATCH',
    usedBody: true,
    shortVerdict:
      'The A6000 remains a practical entry into Sony photography when the budget is tight and used equipment is acceptable. It gives a beginner real control over exposure, interchangeable lenses, an electronic viewfinder, and image quality that can still produce excellent photographs. Its biggest advantage is not a specification: it is small enough to bring along. A camera that lives in a closet because it feels too large is not a bargain.',
    chrisPerspective:
      "This is where I started. With a small prime lens, the A6000 felt natural for street and travel photography rather than like I was walking around with a large professional rig. I took it to Spain, Italy, the beach, and family outings. A portrait lens made it useful for family photographs, and the inexpensive Sony 55-210mm gave me my first real telephoto capability. That small kit allowed me to learn what I actually enjoyed photographing before spending heavily.",
    bestFor: [
      'Travel and street photography',
      'Family photos',
      'Students and first-system buyers',
      'Daylight landscapes and everyday practice',
      'People who value compact size more than the newest autofocus',
    ],
    whySelected: [
      'Your budget is the strongest constraint.',
      'You value small size and low carry weight.',
      'You are learning for enjoyment rather than building an immediate professional kit.',
      'Your subjects do not require the newest tracking or extreme cropping headroom.',
    ],
    whatToKnow: [
      'It is an older body -- autofocus, menus, battery life, video tools, and general responsiveness do not match newer Sony cameras.',
      'Heavy wildlife cropping is where the limitation becomes clear.',
      'It does not include in-body image stabilization.',
      'Buy from a reputable used seller and inspect the sensor, controls, battery, card slot, screen, and lens mount.',
    ],
    firstLensPlan:
      'Keep the first kit simple. Use the compact 16-50mm kit zoom for travel and learning, or add a small normal/portrait prime when low-light family photographs and background blur matter. The 55-210mm is a cost-effective way to experiment with wildlife and outdoor subjects before committing to a larger telephoto.',
    whoShouldSkip:
      'Skip this recommendation when fast bird tracking, demanding video, paid event reliability, weather exposure, or aggressive cropping is central to your plan. A used A6100/A6400, A6700, or full-frame path will give you more room.',
    moreAffordable:
      'This is already the lowest-cost core recommendation. Spend savings on a battery, memory card, comfortable strap, and one lens you will use often.',
    upgradeNote:
      'Move to a used A6100/A6400 for newer autofocus, an A6700 for the strongest compact APS-C growth path, or full frame only after you know why you need it.',
  },
  {
    id: 'a6400',
    anchorId: 'sony-a6400-recommendation',
    scoreKey: 'APS',
    name: 'Sony A6100 / A6400 (used)',
    headline: 'Used Sony A6100 or A6400: the smarter APS-C value upgrade',
    eyebrow: 'YOUR BEST SONY MATCH',
    usedBody: true,
    shortVerdict:
      'Choose this path when the A6000 philosophy appeals to you but you want a more modern autofocus experience. A used A6100 or A6400 can preserve the compact APS-C advantage while reducing one of the main frustrations beginners encounter: missed focus on moving people, pets, and animals. It is often the sweet spot between buying the absolute cheapest body and paying for a current flagship APS-C model.',
    chrisPerspective:
      "My A6000 taught me how valuable the compact Sony format can be. If I were beginning again with a little more budget, I would place more value on improved subject tracking earlier. Better autofocus does not replace technique, but it can make the learning process less discouraging when children, pets, or birds refuse to stay still.",
    bestFor: [
      'Families with active children and pets',
      'Travel and street photography',
      'Beginning wildlife and bird photography',
      'Students who can borrow APS-C lenses',
      'Budget-conscious content creators who still need strong still photographs',
    ],
    whySelected: [
      'You want a compact system but rated autofocus above basic.',
      'You are comfortable buying used.',
      'You expect family, travel, wildlife, or occasional video rather than only static subjects.',
      'You want to learn without committing to full-frame lens prices.',
    ],
    whatToKnow: [
      'The A6100 is the simpler value body; the A6400 generally offers a more enthusiast-oriented build and controls.',
      'Neither provides the same stabilization and hybrid-video experience as the A6700.',
      'APS-C lens purchases should be intentional if you expect to move to full frame later.',
      'Long telephoto lenses can remove much of the size advantage of the small body.',
    ],
    firstLensPlan:
      'Start with a compact zoom for travel or a small prime for portraits and low light. For beginner wildlife, an affordable APS-C telephoto zoom is enough to learn tracking, shutter speed, and field technique before buying a large full-frame lens.',
    whoShouldSkip:
      'Skip this branch when you already know you need heavy cropping, large commercial prints, full-frame low-light performance, dual-card professional redundancy, or advanced video tools.',
    moreAffordable:
      'A used A6000 remains the cheaper choice when subjects are mostly still and the budget must stay extremely low.',
    upgradeNote:
      'The A6700 is the natural APS-C upgrade. A used A7 III or A7R III makes sense only when full-frame lenses and a specific full-frame benefit justify the total cost.',
  },
  {
    id: 'a6700',
    anchorId: 'sony-a6700-recommendation',
    scoreKey: 'APS',
    name: 'Sony A6700',
    headline: 'Sony A6700: the compact Sony system with serious room to grow',
    eyebrow: 'YOUR BEST SONY MATCH',
    usedBody: false,
    shortVerdict:
      'The A6700 is the strongest recommendation for someone who wants a genuinely capable modern camera while keeping the advantages of APS-C. It is small enough for travel and hiking, offers sophisticated subject recognition, and provides useful apparent reach with telephoto lenses. For many hobbyists, it is not a temporary beginner camera -- it can be the complete system.',
    chrisPerspective:
      "My early Sony experience showed me how much easier it is to carry a compact body in public and on trips. The A6700 preserves that strength while addressing many of the autofocus and video limitations that separate an older A6000 from a modern hybrid camera. For a hiker or birder, that balance can matter more than owning the largest possible sensor.",
    bestFor: [
      'Birding and wildlife on a weight-conscious kit',
      'Hiking and travel',
      'Children, pets, and action',
      'Hybrid still photography and video',
      'Students and hobbyists who want a current long-term APS-C body',
    ],
    whySelected: [
      'You want wildlife or action autofocus but also care about size.',
      'You expect to hike or travel with the camera.',
      'Video matters, but still photography remains important.',
      'You want a current body with room to learn rather than the lowest possible purchase price.',
    ],
    whatToKnow: [
      'APS-C can be an advantage for reach and portability, but it does not create extra optical magnification -- it narrows the field of view.',
      'Low-light performance and extreme cropping still depend on the lens, exposure, and available pixels.',
      'Building a large APS-C lens collection can complicate a later full-frame move.',
      'A serious telephoto lens remains the largest and most expensive part of many wildlife systems.',
    ],
    firstLensPlan:
      'For a one-lens travel or hiking setup, pair it with a versatile APS-C zoom. For wildlife, prioritize a telephoto that you can realistically carry. A smaller lens that reaches the trail is more useful than an enormous option left at home.',
    whoShouldSkip:
      'Choose full frame instead when you have reliable access to full-frame lenses, plan paid low-light events, need maximum cropping or print resolution, or already know that a professional full-frame lens system is your destination.',
    moreAffordable:
      'A used A6400 provides much of the compact APS-C philosophy for less money, with fewer modern conveniences.',
    upgradeNote:
      'A high-resolution full-frame body is the future path for maximum cropping and detail. Do not upgrade until the limitation is clear.',
  },
  {
    id: 'a7iii',
    anchorId: 'sony-a7iii-recommendation',
    scoreKey: 'FFV',
    name: 'Sony A7 III (used)',
    headline: 'Used Sony A7 III: the practical first full-frame system',
    eyebrow: 'YOUR BEST SONY MATCH',
    usedBody: true,
    shortVerdict:
      'A used A7 III can be the most rational entry into Sony full frame. It is old enough to be more affordable, but established enough that lenses, accessories, tutorials, and used-market support are abundant. It is especially compelling when you already have access to full-frame lenses or know that professional work is part of the plan.',
    chrisPerspective:
      "One reason I eventually preferred a larger full-frame Sony was not purely technical. This may be superficial, but I felt more confident arriving with a larger camera, and I sometimes sensed that clients associated a larger body and lens with professional capability. That perception does not make the photographs better, but confidence and client expectations are real parts of paid work.",
    bestFor: [
      'Portraits and family work',
      'Events and beginning paid assignments',
      'Low-light photography',
      'Students with access to full-frame lenses',
      'Hobbyists who want to build a full-frame lens collection carefully',
    ],
    whySelected: [
      'You want to begin building full-frame lenses without buying the newest body.',
      'Low light, portraits, events, or client work matter more than maximum resolution.',
      'You accept used equipment and a larger carry weight.',
      'You have access to full-frame lenses or plan a deliberate long-term kit.',
    ],
    whatToKnow: [
      'A newer body may offer substantially better subject recognition, video tools, menus, and handling.',
      '24 megapixels are enough for many uses, but frequent heavy wildlife cropping can feel restrictive.',
      'Full-frame lenses can erase the savings from a used body if the lens plan is not realistic.',
      'Professional work may eventually require a second body, lighting, audio, storage, insurance, and backups -- not only a better camera.',
    ],
    firstLensPlan:
      'Begin with one general-purpose full-frame zoom that covers the work you actually expect. Add a portrait prime for people or a telephoto only after you know the subject gap. Students with school lens access should use that advantage before buying duplicate glass.',
    whoShouldSkip:
      'Skip it when compact size is essential, video is a primary professional service, or wildlife cropping and maximum detail are the reason you want full frame.',
    moreAffordable:
      'A used A6100/A6400 costs less and may be easier to carry. It is often enough for a hobbyist without a full-frame lens plan.',
    upgradeNote:
      'The A7 V is the modern all-rounder. The A7R V or A7R VI is the resolution-first route. Keep good full-frame lenses when upgrading the body.',
  },
  {
    id: 'a7riii',
    anchorId: 'sony-a7riii-recommendation',
    scoreKey: 'RES',
    name: 'Sony A7R III (used)',
    headline: 'Used Sony A7R III: affordable high resolution for cropping and detail',
    eyebrow: 'YOUR BEST SONY MATCH',
    usedBody: true,
    shortVerdict:
      'The used A7R III is a focused recommendation rather than a universal beginner choice. Its 42 MP class resolution provides noticeably more room to crop and preserve fine detail than a typical 24 MP body, while used pricing can make it accessible to a serious hobbyist. It is a strong answer when resolution -- not simply owning full frame -- is the actual goal.',
    chrisPerspective:
      "This mirrors my own transition. I kept finding myself at the limit when cropping A6000 photographs, particularly as wildlife and macro became more important. I wanted more retained detail and a fuller path into better lenses, so a 42 MP full-frame Sony made sense. The larger files and heavier system were tradeoffs I accepted for a specific reason.",
    bestFor: [
      'Wildlife and bird photographs that need cropping room',
      'Landscapes and architecture',
      'Macro and product details',
      'Large prints',
      'Students or budding professionals with access to good full-frame lenses',
    ],
    whySelected: [
      'You rated cropping and fine detail highly.',
      'Wildlife, macro, landscape, architecture, or product photography is central.',
      'You are comfortable buying used and carrying a larger system.',
      'Your budget is serious, but you do not need the newest high-resolution body.',
    ],
    whatToKnow: [
      'High resolution magnifies poor focus, camera shake, atmospheric haze, and weak lenses -- megapixels do not fix technique.',
      'RAW files consume more storage and require a capable editing workflow.',
      'Older autofocus may not match current bodies for difficult birds or fast sports.',
      'APS-C crop mode is useful with APS-C lenses, but it discards much of the full-frame sensor.',
    ],
    firstLensPlan:
      'Resolution rewards good lenses. Start with a sharp general-purpose lens that fits the subject. For wildlife, plan toward a practical Tamron telephoto zoom or Sony alternative as finances allow.',
    whoShouldSkip:
      'Choose the A7 III when low light, general family/event work, and lower file burden matter more than cropping. Choose a newer A7R when advanced subject recognition and faster workflow justify the cost.',
    moreAffordable:
      'A used A7 III is the simpler full-frame value option. An A6700 may provide better modern tracking in a lighter system.',
    upgradeNote:
      'The A7R V is the value-oriented modern high-resolution step; the A7R VI is the newest high-resolution and speed combination.',
  },
  {
    id: 'a7cii',
    anchorId: 'sony-a7cii-recommendation',
    scoreKey: 'CFF',
    name: 'Sony A7C II / Sony A7CR',
    headline: 'Sony A7C II or A7CR: full frame without the traditional full-frame feel',
    eyebrow: 'YOUR BEST SONY MATCH',
    usedBody: false,
    shortVerdict:
      'The compact A7C family is for someone who wants full-frame image quality and lens compatibility but still cares deeply about carrying the camera. The A7C II is the broader 33 MP choice. The A7CR is the compact high-resolution branch for users who prioritize cropping and detail and can accept the higher price and larger files.',
    chrisPerspective:
      "The part of my A6000 experience I would never dismiss is how comfortable it felt for travel and street photography. A compact body attracts less attention and is easier to bring on a long day. The A7C family carries that idea into full frame, although the lens still determines whether the complete kit stays compact.",
    bestFor: [
      'Travel and street photography',
      'Family and lifestyle work',
      'Lightweight full-frame hiking kits',
      'Hybrid stills and video',
      'Photographers who dislike traditional large camera bodies',
    ],
    whySelected: [
      'Portability scored very highly, but full-frame needs remained strong.',
      'You travel, walk in public, or hike enough that a larger body would discourage use.',
      'You want a lens system that can grow into professional full-frame work.',
      'The A7CR branch appears when heavy cropping or large prints are also priorities.',
    ],
    whatToKnow: [
      'A compact body does not make a large full-frame telephoto compact.',
      'Smaller controls and viewfinder placement may feel less comfortable with heavy lenses or long events.',
      'The A7CR creates large files and can require better lenses and storage.',
      'Client perception should not drive the purchase by itself; a compact camera can produce professional work.',
    ],
    firstLensPlan:
      'Protect the reason you chose this family by pairing it with a compact full-frame prime or moderate zoom. If you attach an enormous lens for every outing, the body-size advantage becomes less meaningful. Rent specialized telephotos when the assignment is occasional.',
    whoShouldSkip:
      'Choose the standard A7 body style when you expect long paid events, large lenses, frequent dual-control operation, or a more substantial grip. Choose APS-C when total system weight and price matter more than full-frame benefits.',
    moreAffordable:
      'A used A7C, A7 III, or modern APS-C body may preserve much of the intended use for less money.',
    upgradeNote:
      'The A7 V is the stronger traditional all-rounder. The A7R V/VI is the resolution-focused path when compact size becomes secondary.',
  },
  {
    id: 'a7v',
    anchorId: 'sony-a7v-recommendation',
    scoreKey: 'ALL',
    name: 'Sony A7 V (A7 IV as value alternative)',
    headline: 'Sony A7 V: the intentional all-rounder for a budding professional',
    eyebrow: 'YOUR BEST SONY MATCH',
    usedBody: false,
    shortVerdict:
      'The A7 V is the recommendation for someone who is no longer only experimenting. It is a general-purpose full-frame body built to handle a wide range of paid and personal work without forcing the user into a highly specialized resolution or cinema camera. The older A7 IV remains the value alternative when the budget should go toward lenses, lighting, audio, or a backup body instead.',
    chrisPerspective:
      "If someone knows from the beginning that clients are part of the plan, I think it is reasonable to choose equipment with growth in mind. My own move into a larger Sony system gave me more cropping room, access to better full-frame lens options, and greater confidence in client-facing situations. The important part is having that intention before building an entire kit -- not buying a large camera because it looks professional.",
    bestFor: [
      'New professionals and intentional side businesses',
      'Events, portraits, and family clients',
      'Mixed still photography and video',
      'Wildlife and action without flagship pricing',
      'Users building a long-term full-frame lens system',
    ],
    whySelected: [
      'You selected paid work or deliberate business growth.',
      'You photograph several subjects rather than one narrow specialty.',
      'Modern autofocus and meaningful video are important.',
      'You have the budget or lens access to build full frame responsibly.',
    ],
    whatToKnow: [
      'A professional body does not include the lenses, lighting, audio, storage, insurance, software, backup equipment, and business skills required for paid work.',
      'A smaller APS-C or compact full-frame body may still be better for travel-heavy personal photography.',
      'If large prints and extreme cropping dominate, the A7R family may fit better.',
      'If high-stakes sports or wildlife is the business, the A1 family may be the eventual destination.',
    ],
    firstLensPlan:
      'Start with one dependable full-frame standard zoom that can handle the work you expect most often. Add a portrait prime, wide lens, or telephoto based on actual assignments. For wildlife, Tamron full-frame telephoto zooms can provide a realistic growth path before moving to the most expensive Sony professional lenses.',
    whoShouldSkip:
      'Do not buy this simply because you hope photography might someday make money. Choose it when the full-frame lens plan, subject demands, and budget already support the decision.',
    moreAffordable:
      'A discounted or used A7 IV, or a used A7 III, can leave more money for the lens and support equipment that often matter more.',
    upgradeNote:
      'The A7R V/VI is the high-resolution branch. The A1 II is the flagship speed-plus-resolution branch for established professional demand.',
  },
  {
    id: 'a7r',
    anchorId: 'sony-a7r-recommendation',
    scoreKey: 'RES',
    name: 'Sony A7R V / Sony A7R VI',
    headline: 'Sony A7R V or A7R VI: when resolution is part of the actual assignment',
    eyebrow: 'YOUR BEST SONY MATCH',
    usedBody: false,
    shortVerdict:
      'The A7R family is not simply the expensive answer. It is the resolution-first answer. The A7R V remains a compelling value when discounted or purchased used, while the A7R VI is the current high-resolution model for buyers who also value its newer speed and processing. Both make the most sense when the visitor can describe how extra resolution will change the work.',
    chrisPerspective:
      "My own high-resolution upgrade came from repeatedly hitting the crop limit of a lower-resolution APS-C body. Wildlife does not always stand where you want it, and macro work rewards detail. Moving to 42 MP gave me more freedom, but it also created larger files and increased the importance of focus, shutter speed, lens quality, and editing discipline. More megapixels reveal mistakes as readily as they reveal detail.",
    bestFor: [
      'Wildlife and bird cropping',
      'Large landscape and fine-art prints',
      'Macro, product, and commercial detail',
      'Architecture and controlled professional work',
      'Budding professionals who can support high-resolution storage and lenses',
    ],
    whySelected: [
      'Cropping/detail scored at or near the maximum.',
      'Wildlife, landscapes, architecture, macro, product, or large prints are central.',
      'You have a substantial system budget or access to good full-frame lenses.',
      'You accept larger files, greater lens demands, and a heavier overall kit.',
    ],
    whatToKnow: [
      'Resolution is only valuable when focus, exposure, shutter speed, atmospheric conditions, and the lens support it.',
      'Storage, backup, computer performance, and export time become part of the purchase.',
      'The A7R V may be the financially smarter choice when its resolution already exceeds the real requirement.',
      'For the fastest professional action, the A1 II is the broader flagship.',
    ],
    firstLensPlan:
      'Choose lenses based on the final use rather than prestige. For wildlife, plan a staged telephoto upgrade. Tamron telephoto zooms can be a cost-conscious bridge into serious reach, while Sony high-end lenses remain an eventual option when business or field demands justify them.',
    whoShouldSkip:
      'Skip the high-resolution path when you mainly post small images online, rarely crop, dislike large files, or would have to compromise heavily on the lens to afford the body.',
    moreAffordable:
      'The A7R V is the value-oriented modern recommendation. A used A7R III or A7R IV provides a lower-cost high-resolution entry.',
    upgradeNote:
      'The A1 II is the upgrade only when flagship action speed, professional reliability, and hybrid demands overlap with resolution.',
  },
  {
    id: 'video',
    anchorId: 'sony-video-recommendation',
    scoreKey: 'VID',
    name: 'Sony ZV-E10 II / A6700 / FX30',
    headline: 'Sony ZV-E10 II, A6700, or FX30: choose video by how you actually create',
    eyebrow: 'YOUR BEST SONY MATCH',
    usedBody: false,
    shortVerdict:
      'Video should not be one generic checkbox. A creator filming tutorials at home needs different equipment from someone making short films or shooting interviews on location. The ZV-E10 II is the accessible video-first branch. The A6700 is the hybrid choice when still photography matters. The FX30 is the cinema-oriented branch when video is the job rather than an occasional feature.',
    chrisPerspective:
      "The most important lesson here is to budget beyond the body. A camera on a tripod at home can benefit more from a good microphone, controlled lighting, and dependable power than from a more expensive sensor. Location work adds stabilization, weather, batteries, storage, monitoring, and portable audio. The quiz should recommend the workflow, not only the camera.",
    bestFor: [
      'Tripod-based tutorials and vlogs',
      'Travel and handheld creator content',
      'Product demonstrations and interviews',
      'Hybrid photographers who need strong stills',
      'Beginning filmmakers and paid video work',
    ],
    whySelected: [
      'Video is a primary use rather than an occasional clip.',
      'Your selected workflow determines the branch: home tripod, hybrid travel, paid client content, or filmmaking.',
      'You budgeted for microphones, lighting, support, storage, and editing needs.',
      'Still-photo importance determines whether the A6700 should outrank a dedicated video body.',
    ],
    whatToKnow: [
      'The ZV-E10 II is video-friendly but lacks the traditional viewfinder experience many still photographers prefer.',
      'The A6700 is the safer hybrid when photography remains important.',
      'The FX30 is not automatically the best beginner camera simply because it is cinema-oriented.',
      'Audio quality, lighting, lens noise, stabilization, power, heat management, media, and editing hardware can be more important than small specification differences.',
    ],
    firstLensPlan:
      'For home content, begin with a lens wide enough for the room and prioritize microphone placement and lighting. For handheld travel, use a compact stabilized lens. For interviews and product work, build the lens choice around framing distance, background, and controlled sound.',
    whoShouldSkip:
      'Do not choose a video-specialist body when you mainly want photographs and only occasional clips. Do not choose a stills-first body without checking recording limits, audio connections, stabilization, screen movement, and the required video formats for your work.',
    moreAffordable:
      'The ZV-E10 II is the budget video path. A used ZV-E10 may be considered when cost is paramount and its limitations are acceptable.',
    upgradeNote:
      'Move from ZV-E10 II to A6700 when hybrid stills become important, or toward FX30 and a complete audio/support kit when filmmaking becomes intentional paid work.',
  },
  {
    id: 'a1',
    anchorId: 'sony-a1ii-recommendation',
    scoreKey: 'PRO',
    name: 'Sony A1 II (original A1 as value alternative)',
    headline: 'Sony A1 II: the flagship only when the work genuinely requires it',
    eyebrow: 'YOUR BEST SONY MATCH',
    usedBody: false,
    shortVerdict:
      'The A1 II should be a difficult result to earn. It combines the qualities that are normally tradeoffs -- high resolution, very fast shooting, advanced autofocus, and professional hybrid capability -- but the body price is only the beginning. It belongs with users whose work, revenue, access requirements, or failure cost can justify it. The original A1 may be the more rational value option for a used-friendly professional.',
    chrisPerspective:
      "A flagship camera can create confidence and remove technical bottlenecks, but it cannot create clients, fieldcraft, timing, composition, or business discipline. I would recommend beginning with the A1 path only when someone is intentionally building professional work and already understands the lens and support costs. For a hobbyist, spending flagship money can add pressure that makes photography less enjoyable rather than more enjoyable.",
    bestFor: [
      'Professional wildlife and bird photography',
      'High-stakes sports and action',
      'Assignments requiring both speed and detailed files',
      'Professional hybrid stills/video production',
      'Users with a complete lens, storage, backup, and business plan',
    ],
    whySelected: [
      'You selected professional intent or existing paid work.',
      'Fast wildlife, birds, sports, or high-stakes action scored at the maximum.',
      'You also need substantial resolution rather than speed alone.',
      'Your budget supports the body plus professional lenses, media, storage, batteries, insurance, and backups.',
    ],
    whatToKnow: [
      'The complete system can cost far more than the body.',
      'A7 V, A7R V/VI, and A6700 can be better choices when only one part of the flagship feature set is needed.',
      'Large telephoto lenses are physically demanding; the best body does not solve hiking weight.',
      'Professional reliability includes redundancy, workflow, service, and backup equipment -- not only camera specifications.',
    ],
    firstLensPlan:
      'Build around the actual assignments. For wildlife, a practical Tamron telephoto zoom can be a staged starting point. For events or commercial work, prioritize dependable standard zooms and backup coverage before collecting specialty lenses.',
    whoShouldSkip:
      'Skip the flagship when the purchase would consume the lens budget, when photography is primarily a relaxing hobby, or when an A7R body provides the needed resolution at lower cost. Budget alone must never produce an A1 recommendation.',
    moreAffordable:
      'A used original A1 is the direct value alternative. The A7R V/VI is the resolution-first alternative; the A7 V is the all-rounder.',
    upgradeNote:
      'There is no routine upgrade path. The next investment is usually the right lens, backup body, field support, storage, or professional workflow rather than another camera.',
  },
]

export const LAST_REVIEWED = 'July 14, 2026'
