# PROJECT_STATUS.md - ChrisBrenzel.com Baseline

## Framework and Package Manager
- Framework: Next.js 15 App Router, confirmed by `app/` routes and `next` dependency in `package.json`.
- Runtime/UI: React 19, TypeScript, Tailwind CSS 3, `lucide-react` icons, and custom components.
- Package manager: pnpm, confirmed by `pnpm-lock.yaml`. No npm lockfile was found.
- Repository inspected: `brenzeca91/chrisbrenzel` on GitHub, default branch `main`.

## Important Directories
- `app/`: App Router pages, layouts, metadata, and route-level content.
- `components/`: Shared React components, including `SiteNav`, `SiteFooter`, and photography sliders.
- `components/photography/`: Photography-specific reusable components such as selected-work and collection sliders.
- `public/`: Static files served from the site root, including images and downloadable files.
- `public/images/`: Main site image assets used by the professional and photography pages.
- `public/images/gallery/`, `public/images/field-notes/`, `public/images/collections/`, and `public/images/mockups/`: Photography, article, collection, and print mockup image assets referenced by pages.

## Current Page and Routes Structure
Confirmed routes and links include:

- `/`: Split landing page linking to Professional and Photography.
- `/consulting`: Professional landing page.
- `/consulting/experience`: Selected experience page, linked from the professional nav.
- `/consulting/about`: About page, linked from the professional nav.
- `/consulting/contact`: Contact page, linked from the professional nav.
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
- No CMS, database, Markdown, MDX, or content collection system was confirmed during this baseline inspection.

## Where Images and Assets Are Stored
- Main hero and professional images are referenced under `/images/...` from the `public/images/` tree.
- Photography gallery images are referenced from `/images/gallery/...`.
- Field note images are referenced from `/images/field-notes/...`.
- Collection images are referenced from `/images/collections/...`.
- Print mockups are referenced from `/images/mockups/...`.
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
- No `vercel.json` was confirmed during baseline inspection, so build settings are likely inferred from `package.json`.
- The production domain is assumed to be `https://chrisbrenzel.com`, based on `app/layout.tsx` Open Graph metadata and `next.config.mjs` remote image settings.
- Remote image host allowlisting suggests some migrated or legacy image content may still depend on WordPress-hosted domains.
- The app includes `resend`, so contact or email features may depend on environment variables that should be confirmed in Vercel before production changes.

## Verification Results
- GitHub repository access confirmed: `brenzeca91/chrisbrenzel`, default branch `main`, with write permissions available through the GitHub connector.
- `package.json`, `pnpm-lock.yaml`, `next.config.mjs`, `app/layout.tsx`, `app/page.tsx`, `app/consulting/page.tsx`, `app/consulting/layout.tsx`, `app/photography/page.tsx`, `app/photography/layout.tsx`, `components/SiteNav.tsx`, and `components/SiteFooter.tsx` were inspected.
- `AGENTS.md` and `PROJECT_STATUS.md` were added on branch `codex/project-baseline`.
- Local install/lint/typecheck/build were not completed in this session because `git` was unavailable in the shell and downloading the full repository ZIP timed out before producing a valid archive. A separate local checkout or Vercel preview should run the verification commands above.

## Open Questions or Risks
- The Codex desktop workspace initially pointed at an empty local folder, while a different site export existed in Downloads. GitHub should be treated as the source of truth going forward.
- `pnpm lint` uses `next lint`, which may be incompatible with newer Next.js versions if the project is upgraded later.
- There is no dedicated `typecheck` script.
- The footer LinkedIn URL currently appears to be the generic `https://linkedin.com`; confirm the correct profile URL.
- `next.config.mjs` references `eatingendeavors.files.wordpress.com`, which may be legacy branding or migration residue.
- Remote WordPress image domains should be reviewed before removing them, because current pages may still depend on migrated images.
- Field-note and photography copy includes specific locations, dates, observations, and image titles. Confirm firsthand details before expanding SEO content.
- Current professional path is `/consulting`, while the desired positioning may be broader than consulting. Future routing changes should be planned carefully to avoid breaking existing links.
- Contact/email functionality and any required `RESEND` environment variables were not verified.

## Recommended Next Three Tasks
1. Run a clean local or Vercel verification pass: `pnpm install`, `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build`.
2. Audit navigation and route naming against the desired Professional, Photography, About, Contact, Photo Journal, and Prints structure.
3. Review legacy links, remote image hosts, LinkedIn URL, CV filename, and contact/email behavior before making broader content or design changes.
