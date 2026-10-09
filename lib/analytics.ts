type EventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Never pass names, emails, phone numbers or message text through here.
export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  const defined = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  )
  try {
    window.gtag('event', name, defined)
  } catch {}
}
