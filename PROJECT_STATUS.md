# PROJECT_STATUS.md - ChrisBrenzel.com Baseline

## Framework and Package Manager
- Framework: Next.js 15 App Router, confirmed by `app/` routes and `next` dependency in `package.json`.
- Runtime/UI: React 19, TypeScript, Tailwind CSS 3, `lucide-react` icons, and custom components.
- Package manager: pnpm, confirmed by `pnpm-lock.yaml`. No npm lockfile was found.
- Repository inspected: `brenzeca91/chrisbrenzel` on GitHub, default branch `main`.
- Local clone inspected: `C:\Users\chris\OneDrive\Documents\Chris Brenzel Website\chrisbrenzel`.

## Important Directories
- `app/`: App Router pages, layouts, metadata, API routes, and route-level content.
- `components/`: Shared React components, including `SiteNav` and `SiteFooter`.
- `components/photography/`: Photography-specific reusable components such as selected-work, collection, and print mockup sliders.
- `data/`: Source Word documents for privacy policy and terms/disclosures.
- `scripts/`: Utility scripts, currently including `composite-wall.mjs`.
- `public/`: Static files served from the site root, including images, staging assets, and downloadable files.
- `public/images/`: Main site image assets used by the professional and photography pages.
- `public/images/gallery/`, `public/images/field-notes/`, `public/images/collections/`, `public/images/ic5/`, `public/images/ic6/`, `public/images/logos/`, and `public/images/mockups/`: Photography, article, collection, logo, and print mockup assets.
- `public/staging/`: Staging image assets that may be temporary or awaiting placement.
- `images/`: Root-level image files that appear separate from the deployed `public/` asset tree.

## Current Page and Routes Structure
Confirmed routes and links include:

- `/`: Split landing page linking to Professional and Photography.
- `/api/contact`: Contact form API route using Resend.
- `/consulting`: Professional landing page.
- `/consulting/experience`: Selected experience page, linked from the professional nav.
- `/consulting/about`: About page, linked from the professional nav.
- `/consulting/contact`: Contact page, linked from the professional nav.
- `/consulting/services`: Services page present in the route tree.
- `/photography`: Photography landing page.
- `/photography/gallery`: Gallery page, with category query links such as `?category=wildlife`, `?category=macro`, `?category=eclipses`, `?category=travel`, and `?category=astrophotography`.
- `/photography/collections/rust-and-ruin`: Collection page linked from the photography landing page.
- `/photography/collections/wildlife`: Collection page linked from the photography landing page.
- `/photography/field-notes`: Field notes index.
- `/photography/field-notes/[slug]`: Field note detail pages linked by slug.
- `/photography/prints`: Print inquiry page.
- `/photography/contact`: Photography contact page.
- `/photography/terms`: Terms page linked from the footer.
- `/photography/privacy`: Privacy page linked from the footer.

## Where Content Is Stored
- Most content is stored directly inside route files in `app/**/page.tsx`.
- Global metadata is in `app/layout.tsx`.
- Navigation labels and primary route links are hard-coded in `components/SiteNav.tsx`.
- Footer identity, email, LinkedIn link, and legal links are hard-coded in `components/SiteFooter.tsx`.
- Photography landing-page categories, collection previews, and field-note teasers are hard-coded in `app/photography/page.tsx`.
- Field-note detail content is stored in `app/photography/field-notes/[slug]/page.tsx`.
- Legal policy source documents are stored in `data/`, while rendered routes live under `app/photography/privacy` and `app/photography/terms`.
- No CMS, database, Markdown, MDX, or content collection system was confirmed during this baseline inspection.

## Where Images and Assets Are Stored
- Main hero and professional images are referenced under `/images/...` from the `public/images/` tree.
- Photography gallery images are referenced from `/images/gallery/...`.
- Field note images are referenced from `/images/field-notes/...`.
- Collection images are referenced from `/images/collections/...`.
- Print mockups are referenced from `/images/mockups/...`.
- Logos are stored in `public/images/logos/`.
- Staging image batches are stored in `public/staging/`.
- Downloadable CV link currently points to `/CV-Christopher-Brenzel.pdf`.
- `next.config.mjs` allows remote images from `chrisbrenzel.com`, `i0.wp.com`, and `eatingendeavors.files.wordpress.com`.

## Available Scripts From `package.json`
- `pnpm dev`: starts the Next.js development server.
- `pnpm build`: creates a production Next.js build.
- `pnpm start`: starts the production server after a build.
- `pnpm lint`: runs `next lint`.

## How To Run Locally
1. Clone or open the repository locally.
2. Install dependencies with `pnpm install`.
3. Start the local server with `pnpm dev`.
4. Open the local URL shown by Next.js, usually `http://localhost:3000`.

## How To Verify a Production Build
1. Run `pnpm install`.
2. Run `pnpm exec tsc --noEmit` for a TypeScript check, since no dedicated typecheck script exists.
3. Run `pnpm lint`.
4. Run `pnpm build`.
5. Optionally run `pnpm start` and review the production build locally.

## Vercel Deployment Assumptions
- The project appears compatible with Vercel's default Next.js framework detection.
- No `vercel.json` was found, so build settings are likely inferred from `package.json`.
- The production domain is assumed to be `https://chrisbrenzel.com`, based on `app/layout.tsx` Open Graph metadata and `next.config.mjs` remote image settings.
- Remote image host allowlisting suggests some migrated or legacy image content may still depend on WordPress-hosted domains.
- Contact form delivery depends on Resend and requires `RESEND_API_KEY` in the build/runtime environment.

## Verification Results
- GitHub repository access confirmed: `brenzeca91/chrisbrenzel`, default branch `main`, with write permissions available through the GitHub connector.
- Local clone inspected at `C:\Users\chris\OneDrive\Documents\Chris Brenzel Website\chrisbrenzel`.
- `pnpm install` downloaded dependencies, but exited nonzero because pnpm ignored the `sharp@0.34.5` build script and requested `pnpm approve-builds`. Dependencies were still present afterward.
- TypeScript check passed with `tsc --noEmit`.
- Lint did not complete: `next lint` is deprecated and opened an interactive ESLint setup prompt because no ESLint config exists.
- Production build compiled successfully, then failed while collecting page data for `/api/contact` because `app/api/contact/route.ts` constructs `new Resend(process.env.RESEND_API_KEY)` at module load time and no `RESEND_API_KEY` was available locally.
- `AGENTS.md` and `PROJECT_STATUS.md` were added on branch `codex/project-baseline`.

## Open Questions or Risks
- `pnpm install` requires a decision about approving `sharp` build scripts.
- `pnpm lint` uses deprecated `next lint` and currently prompts to create an ESLint config instead of running non-interactively.
- There is no dedicated `typecheck` script.
- Local production build requires `RESEND_API_KEY` or a contact route change that avoids constructing the Resend client during build-time module evaluation.
- The footer LinkedIn URL currently appears to be the generic `https://linkedin.com`; confirm the correct profile URL.
- `next.config.mjs` references `eatingendeavors.files.wordpress.com`, which may be legacy branding or migration residue.
- Remote WordPress image domains should be reviewed before removing them, because current pages may still depend on migrated images.
- Field-note and photography copy includes specific locations, dates, observations, and image titles. Confirm firsthand details before expanding SEO content.
- Current professional path is `/consulting`, while the desired positioning may be broader than consulting. Future routing changes should be planned carefully to avoid breaking existing links.
- `public/staging/` and root-level `images/` should be reviewed to decide whether they are active assets, temporary staging files, or safe cleanup candidates.

## Recommended Next Three Tasks
1. Fix verification blockers: add a non-interactive lint setup or script, decide how to handle `sharp` build approval, and adjust the contact API so `pnpm build` does not fail without local Resend credentials.
2. Audit navigation and route naming against the desired Professional, Photography, About, Contact, Photo Journal, and Prints structure.
3. Review legacy links, remote image hosts, LinkedIn URL, CV filename, staging assets, and contact/email behavior before making broader content or design changes.
