// 301 redirect is handled server-side in next.config.mjs.
// This file exists only so Next.js compiles the route without error.
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ServicesRedirect() {
  return null
}
