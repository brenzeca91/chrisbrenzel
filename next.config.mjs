/** @type {import('next').NextConfig} */
const nextConfig = {
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
