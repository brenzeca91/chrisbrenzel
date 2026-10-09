'use client'

export type Touch = {
  source?: string
  medium?: string
  campaign?: string
  content?: string
  term?: string
  ts: string
  landing: string
}

export type Attribution = {
  first?: Touch
  last?: Touch
}

const STORAGE_KEY = 'cb_attribution_v1'
const WINDOW_MS = 30 * 24 * 60 * 60 * 1000

// Used when the browser blocks both localStorage and sessionStorage.
let memoryCopy: string | null = null

// The site has no cookie-consent banner today, so the browser-level
// opt-out signals are the only consent settings available to honour.
function trackingAllowed() {
  if (typeof navigator === 'undefined') return false
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean }
  return nav.globalPrivacyControl !== true && navigator.doNotTrack !== '1'
}

function readRaw(): string | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    if (value !== null) return value
  } catch {}
  try {
    const value = window.sessionStorage.getItem(STORAGE_KEY)
    if (value !== null) return value
  } catch {}
  return memoryCopy
}

function writeRaw(value: string) {
  memoryCopy = value
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
    return
  } catch {}
  try {
    window.sessionStorage.setItem(STORAGE_KEY, value)
  } catch {}
}

function clean(value: string | null): string | undefined {
  if (!value) return undefined
  const trimmed = value.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 200)
  return trimmed || undefined
}

function isFresh(touch: Touch | undefined): touch is Touch {
  if (!touch || typeof touch.ts !== 'string') return false
  const time = Date.parse(touch.ts)
  return Number.isFinite(time) && Date.now() - time <= WINDOW_MS
}

function read(): Attribution {
  const raw = readRaw()
  if (!raw) return {}
  try {
    const parsed = JSON.parse(raw) as Attribution
    const first = isFresh(parsed.first) ? parsed.first : undefined
    const last = isFresh(parsed.last) ? parsed.last : undefined
    // If the original visit aged out, the oldest surviving visit stands in.
    return { first: first ?? last, last }
  } catch {
    return {}
  }
}

export function captureAttribution() {
  if (typeof window === 'undefined' || !trackingAllowed()) return
  const params = new URLSearchParams(window.location.search)
  const tagged = {
    source: clean(params.get('utm_source')),
    medium: clean(params.get('utm_medium')),
    campaign: clean(params.get('utm_campaign')),
    content: clean(params.get('utm_content')),
    term: clean(params.get('utm_term')),
  }
  if (!Object.values(tagged).some(Boolean)) return

  const touch: Touch = {
    ...tagged,
    ts: new Date().toISOString(),
    landing: window.location.pathname,
  }
  const current = read()
  writeRaw(JSON.stringify({ first: current.first ?? touch, last: touch }))
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined' || !trackingAllowed()) return {}
  return read()
}
