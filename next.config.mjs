/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ---------------------------------------------------------------
      // Field notes — WordPress date-based permalinks → new canonical URLs
      // Both trailing-slash and non-trailing-slash variants are covered.
      // ---------------------------------------------------------------

      // Trailing slashes are stripped by Next.js before redirect matching,
      // so only the no-slash form is needed for each rule.

      // Birding at Bettman (2025-01-21)
      { source: '/2025/01/21/birding-at-bettman-nature-preserve', destination: '/photography/field-notes/birding-at-bettman', permanent: true },

      // Capturing Backyard Birds (2024-12-10)
      { source: '/2024/12/10/capturing-backyard-birds', destination: '/photography/field-notes/capturing-backyard-birds', permanent: true },

      // Capturing Snowflakes (2024-02-15)
      { source: '/2024/02/15/capturing-snowflakes', destination: '/photography/field-notes/capturing-snowflakes', permanent: true },

      // Solar Eclipse Part II (2024-04-12)
      { source: '/2024/04/12/solar-eclipse-part-2', destination: '/photography/field-notes/solar-eclipse-part-2', permanent: true },

      // Solar Eclipse Part I (2024-04-08)
      { source: '/2024/04/08/solar-eclipse-part-1', destination: '/photography/field-notes/solar-eclipse-part-1', permanent: true },

      // Lensball Photography (2023-06-01)
      { source: '/2023/06/01/lensball-photography', destination: '/photography/field-notes/lensball-photography', permanent: true },

      // Exploring Frankfort (2022-09-10)
      { source: '/2022/09/10/exploring-frankfort', destination: '/photography/field-notes/exploring-frankfort', permanent: true },

      // Macro at Folly Beach (2021-12-15)
      { source: '/2021/12/15/macro-photography-at-folly-beach', destination: '/photography/field-notes/macro-at-folly-beach', permanent: true },

      // ---------------------------------------------------------------
      // Slug-only fallbacks — catches links that omit the date prefix
      // ---------------------------------------------------------------
      { source: '/birding-at-bettman-nature-preserve/:rest*', destination: '/photography/field-notes/birding-at-bettman',     permanent: true },
      { source: '/capturing-backyard-birds/:rest*',           destination: '/photography/field-notes/capturing-backyard-birds', permanent: true },
      { source: '/capturing-snowflakes/:rest*',               destination: '/photography/field-notes/capturing-snowflakes',    permanent: true },
      { source: '/solar-eclipse-part-2/:rest*',               destination: '/photography/field-notes/solar-eclipse-part-2',   permanent: true },
      { source: '/solar-eclipse-part-1/:rest*',               destination: '/photography/field-notes/solar-eclipse-part-1',   permanent: true },
      { source: '/lensball-photography/:rest*',               destination: '/photography/field-notes/lensball-photography',   permanent: true },
      { source: '/exploring-frankfort/:rest*',                destination: '/photography/field-notes/exploring-frankfort',    permanent: true },
      { source: '/macro-photography-at-folly-beach/:rest*',   destination: '/photography/field-notes/macro-at-folly-beach',  permanent: true },

      // ---------------------------------------------------------------
      // Unmatched date-archive URLs — fallback to field notes index
      // (must come AFTER the specific date rules above)
      // ---------------------------------------------------------------
      // Trailing slashes stripped before matching — slug-only form covers both.
      { source: '/:year(20\\d{2})/:month(\\d{2})/:day(\\d{2})/:slug', destination: '/photography/field-notes', permanent: true },
      { source: '/:year(20\\d{2})/:month(\\d{2})',                    destination: '/photography/field-notes', permanent: true },
      { source: '/:year(20\\d{2})',                                    destination: '/photography/field-notes', permanent: true },

      // ---------------------------------------------------------------
      // WordPress author, category, tag, and pagination archives
      // ---------------------------------------------------------------
      { source: '/author/:author/:rest*',        destination: '/photography',                      permanent: true },
      { source: '/category/photography/:rest*',  destination: '/photography',                      permanent: true },
      { source: '/category/nature/:rest*',       destination: '/photography/collections/wildlife', permanent: true },
      { source: '/category/:category/:rest*',    destination: '/photography/field-notes',          permanent: true },
      { source: '/tag/:tag/:rest*',              destination: '/photography/field-notes',          permanent: true },
      { source: '/page/:num',                    destination: '/photography/field-notes',          permanent: true },

      // ---------------------------------------------------------------
      // Legacy top-level navigation pages
      // ---------------------------------------------------------------
      // Trailing slashes stripped by Next.js before matching — no slash variants needed.
      { source: '/about',               destination: '/consulting/about',      permanent: true },
      { source: '/contact-me',          destination: '/photography/contact',   permanent: true },
      { source: '/contact',             destination: '/photography/contact',   permanent: true },
      { source: '/portfolio',           destination: '/photography/gallery',   permanent: true },
      { source: '/gallery',             destination: '/photography/gallery',   permanent: true },
      { source: '/photography-gallery', destination: '/photography/gallery',   permanent: true },
      { source: '/selected-experience', destination: '/consulting/experience', permanent: true },
      { source: '/experience',          destination: '/consulting/experience', permanent: true },

      // consulting/services — proper 301 replacing the client-side redirect
      { source: '/consulting/services', destination: '/consulting', permanent: true },

      // ---------------------------------------------------------------
      // WordPress feed, sitemap, and XML endpoints
      // ---------------------------------------------------------------
      { source: '/feed',              destination: '/photography/field-notes', permanent: true },
      { source: '/comments/feed',     destination: '/photography/field-notes', permanent: true },
      { source: '/:any*/feed',        destination: '/photography/field-notes', permanent: true },
      { source: '/sitemap_index.xml', destination: '/sitemap.xml',             permanent: true },
      { source: '/wp-sitemap.xml',    destination: '/sitemap.xml',             permanent: true },

      // ---------------------------------------------------------------
      // WordPress admin, login, and system paths (also deters bots)
      // ---------------------------------------------------------------
      { source: '/wp-login.php',          destination: '/', permanent: true },
      { source: '/wp-admin/:rest*',       destination: '/', permanent: true },
      { source: '/wp-content/:rest*',     destination: '/', permanent: true },
      { source: '/wp-includes/:rest*',    destination: '/', permanent: true },
      { source: '/wp-json/:rest*',        destination: '/', permanent: true },
      { source: '/xmlrpc.php',            destination: '/', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        // Allow the embed page to be iframed from any origin
        source: '/photography/best-beginner-sony-camera/embed',
        headers: [
          { key: 'X-Frame-Options', value: 'ALLOWALL' },
          { key: 'Content-Security-Policy', value: "frame-ancestors *" },
        ],
      },
    ]
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'chrisbrenzel.com' },
      { protocol: 'https', hostname: 'i0.wp.com' },
      { protocol: 'https', hostname: 'eatingendeavors.files.wordpress.com' },
    ],
  },
}

export default nextConfig
