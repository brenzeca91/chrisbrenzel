'use client'

import { useCallback, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { getAttribution } from '@/lib/attribution'
import { trackEvent } from '@/lib/analytics'

export type LeadFormSource = 'photography' | 'photography-session' | 'consulting'

function createSubmissionId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0
    return (char === 'x' ? random : (random & 0x3) | 0x8).toString(16)
  })
}

export function useLeadForm(formSource: LeadFormSource) {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  // One id per form session so a retry after a network failure is recognised
  // by the server as the same inquiry instead of creating a second lead.
  const submissionIdRef = useRef<string | null>(null)
  const inFlightRef = useRef(false)
  const startedRef = useRef(false)
  const trackedRef = useRef<string | null>(null)
  const honeypotRef = useRef<HTMLInputElement>(null)

  const onFormFocus = useCallback(() => {
    if (startedRef.current) return
    startedRef.current = true
    trackEvent('lead_form_start', {
      form_source: formSource,
      page_path: window.location.pathname,
    })
  }, [formSource])

  const submit = useCallback(
    async (fields: Record<string, string>) => {
      if (inFlightRef.current) return
      inFlightRef.current = true
      setSending(true)
      setError('')

      submissionIdRef.current ??= createSubmissionId()
      const submissionId = submissionIdRef.current
      const attribution = getAttribution()

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...fields,
            source: formSource,
            submissionId,
            website: honeypotRef.current?.value ?? '',
            attribution,
          }),
        })
        const data = (await res.json().catch(() => null)) as {
          success?: boolean
          leadId?: string | null
        } | null

        if (!res.ok || !data?.success) throw new Error('Request rejected')

        if (data.leadId && trackedRef.current !== submissionId) {
          trackedRef.current = submissionId
          const touch = attribution.last ?? attribution.first
          trackEvent('generate_lead', {
            form_source: formSource,
            inquiry_type: fields.inquiryType,
            lead_id: data.leadId,
            lead_source: touch?.source,
            lead_medium: touch?.medium,
            lead_campaign: touch?.campaign,
          })
        }
        setSubmitted(true)
      } catch {
        trackEvent('lead_form_error', { form_source: formSource })
        setError('Something went wrong — please email chris@chrisbrenzel.com directly.')
      } finally {
        inFlightRef.current = false
        setSending(false)
      }
    },
    [formSource],
  )

  return { submitted, sending, error, submit, onFormFocus, honeypotRef }
}

// Hidden from people and assistive tech; bots that fill every field trip it.
export function HoneypotField({ inputRef }: { inputRef: RefObject<HTMLInputElement | null> }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="website">Website</label>
      <input
        ref={inputRef}
        id="website"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  )
}
