# AGENTS.md - ChrisBrenzel.com

## Project mission
ChrisBrenzel.com is Christopher Brenzel's dual-purpose personal website. It should feel cohesive while clearly separating:

1. A professional side focused on biotech business development, commercial strategy, preclinical CRO growth, technology licensing, strategic partnerships, and scientific communication.
2. A photography side focused on nature, wildlife, macro, birding, astrophotography, Kentucky locations, field notes, photo journals, and print inquiries.

The site should not feel like generic portfolio filler. Every page should help visitors understand who Christopher is, what he offers, what he photographs, and how to contact him.

## Current positioning notes
- Professional positioning should be credible and practical, not overhyped.
- Do not frame Christopher only as a traditional job seeker or only as a consultant. Present him as a biotech business development and commercial strategy professional with selected experience, consulting/advisory/project support, and a strong professional profile.
- The user has recently wanted to dial back an overly "consultant" feel and make the professional side better support full-time career opportunities. Balance this with the site's existing consulting/print inquiry goals.
- Photography should feel observant, grounded, field-note driven, and visually focused.

## Known background details that are safe to use
- Christopher Brenzel is based in Lexington, Kentucky.
- B.S. Biology, University of Notre Dame; minor in Science, Business & Technology.
- M.S. Pharmacogenomics and Personalized Healthcare in progress at the University of Cincinnati, expected Spring 2028.
- Director of Business Development at The START Center for Cancer Research.
- Sales and Business Development Manager at GemPharmatech.
- Executive Director / Business Development roles at Hera BioLabs.
- Technical Sales Specialist at Transposagen Biopharmaceuticals.
- Resume-backed outcomes include >20% year-over-year revenue growth at Hera BioLabs from 2020-2023 and more than $300,000 in custom genetic engineering sales at Transposagen in FY2015.

Do not invent client names, outcomes, publications, partnerships, certifications, pricing, or services.

## Professional themes to preserve
- Business development strategy
- Preclinical CRO growth
- Research outsourcing
- CRO relationship management
- Strategic partnerships
- Key account development
- Technical sales enablement
- Gene editing commercialization
- Market positioning
- Technology transfer and licensing
- Commercial licensing strategy
- Scientific client communication
- Preclinical drug development
- Translational oncology
- Oncology model systems
- PDX models
- Genetically engineered mouse and rat models
- Cell line development
- Pharmacogenomics and personalized healthcare

## Photography and SEO themes to preserve
The photography section should build long-term topical authority around:

- Kentucky photography locations
- Bird photography
- Wildlife photography
- Macro photography
- Astrophotography
- Photography editing
- Photography gear
- Field notes and photo journals
- Beginner photography education
- Kentucky wildlife identification
- Conservation and outdoor ethics
- Prints and behind-the-image stories
- Science of photography, where Christopher's science background adds useful context

Do not fabricate firsthand experience. When drafting field-note or location content, leave placeholders for details that need Christopher's confirmation.

## Voice and writing style
Write in a warm, friendly, direct, scientifically grounded voice. Prefer practical, precise, accessible language. Avoid hype, vague claims, inflated corporate phrasing, and SEO filler.

Avoid phrases such as:
- world-class
- industry-leading
- revolutionary
- cutting-edge, unless clearly supported by context
- unparalleled

Use clear headings, concise paragraphs, and practical calls to action.

## Preferred calls to action
- Contact Christopher
- Start a consulting conversation
- Discuss a project
- View selected experience
- View photography
- Inquire about prints

Use `chris@chrisbrenzel.com` for website contact copy unless a task says otherwise.

## Current recommended site structure
- Home
- Consulting / Professional Services, or a more balanced Professional page if the task is reducing the consultant-forward feel
- Selected Experience
- About
- Photography
- Photo Journal
- Prints
- Contact

## Content rules
- Separate professional content from photography content while keeping the site visually cohesive.
- Do not assume ecommerce. Prints should be "available by inquiry" unless explicitly asked to build purchasing.
- Do not imply clinical, legal, investment, or regulatory advice.
- Do not present Christopher as a full-service agency.
- Do not use fake testimonials, fake project examples, invented photography locations visited, or invented camera settings.
- Flag old navigation and branding inconsistencies when encountered, especially legacy WordPress remnants, unrelated links, "Photography by Chris" branding, resume placement issues, or eatingendeavors references.

## SEO article workflow
For each photography article or field guide, create or check:

1. Primary keyword
2. Secondary keywords and long-tail opportunities
3. Search intent
4. Related entities
5. Competitive gap: what generic articles miss and how Christopher's original photography or field experience can improve the answer
6. Heading outline
7. FAQ ideas
8. Image opportunities, filenames, and alt text
9. Internal links to related pages
10. Print, affiliate, licensing, newsletter, or social repurposing opportunities, only where natural
11. Meta title, meta description, slug, social teaser, and newsletter excerpt

Prioritize topical authority over chasing generic high-volume terms.

## Ethical photography standards
Encourage original photography, honest editing, Leave No Trace principles, respect for wildlife, and safe distance from animals. Never suggest disturbing wildlife, baiting wildlife, trespassing, or harming habitats for a better photo.

## Technical workflow expectations
The user is a beginner. When proposing or summarizing changes, explain:

- What changed
- Why it changed
- Where the files are
- How to preview locally
- How to verify the Vercel preview
- What to do if something looks wrong

Keep content updates, front-end/design updates, GitHub work, Vercel deployment, and WordPress/DNS concerns clearly separated.

## Repo discovery and verification
Before editing, inspect the repository structure. Identify the framework, package manager, routes, content source, image handling, and build commands.

After editing, run the available checks. Prefer, in this order:

1. Install only what the repo already expects.
2. Run type checking if available.
3. Run linting if available.
4. Run the production build if available.
5. If checks fail because of pre-existing issues, report that clearly and identify whether the task's changes caused the failure.

Current discovered commands:

- Install dependencies: `pnpm install`
- Run locally: `pnpm dev`
- Lint: `pnpm lint`
- Production build: `pnpm build`
- Typecheck: no dedicated package script; `pnpm exec tsc --noEmit` can be used manually.

## Pull request / task summary expectations
Every completed task should include:

- Summary of changes
- Files changed
- Verification performed
- Any skipped checks and why
- Any content assumptions or placeholders
- Suggested next task

## First priority tasks for Codex
1. Inspect the repo and identify framework, routing, content structure, image locations, and deployment assumptions.
2. Add or update this `AGENTS.md` in the repo root.
3. Create a short `PROJECT_STATUS.md` with the current page structure, known content sources, open questions, and next recommended work.
4. Do not make major visual redesigns until the existing repo structure is understood.
