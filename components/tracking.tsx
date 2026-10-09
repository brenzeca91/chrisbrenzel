'use client'

import { useEffect } from 'react'
import { captureAttribution } from '@/lib/attribution'
import { trackEvent } from '@/lib/analytics'

const CONTACT_PATHS = ['/photography/contact', '/consulting/contact']

export default function Tracking() {
  useEffect(() => {
    if (!window.location.pathname.startsWith('/admin')) {
      captureAttribution()
    }

    function onClick(event: MouseEvent) {
      const target = event.target as Element | null
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!anchor) return

      if (anchor.href.startsWith('mailto:')) {
        trackEvent('contact_cta_click', {
          cta_type: 'email',
          page_path: window.location.pathname,
        })
        return
      }

      let url: URL
      try {
        url = new URL(anchor.href, window.location.href)
      } catch {
        return
      }
      if (url.origin !== window.location.origin) return
      if (!CONTACT_PATHS.some((path) => url.pathname.startsWith(path))) return

      trackEvent('contact_cta_click', {
        cta_type: 'link',
        cta_destination: url.pathname,
        cta_text: (anchor.textContent ?? '').trim().slice(0, 80),
        page_path: window.location.pathname,
      })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
