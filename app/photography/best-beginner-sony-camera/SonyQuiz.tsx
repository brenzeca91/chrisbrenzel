'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, RotateCcw, ExternalLink } from 'lucide-react'
import {
  QUESTIONS,
  CAMERA_RESULTS,
  type ScoreKey,
  type ResultKey,
  type CameraResult,
} from '@/lib/sony-quiz-data'

// ---- scoring engine ----

type Scores = Record<ScoreKey, number>

function emptyScores(): Scores {
  return { BAS: 0, APS: 0, FFV: 0, CFF: 0, ALL: 0, RES: 0, PRO: 0, VID: 0 }
}

interface QuizAnswers {
  [questionId: number]: string | string[]
}

function applyBudgetGates(scores: Scores, budgetAnswer: string): Scores {
  const s = { ...scores }
  const tier = [
    'Under $800',
    '$800-$1,249',
    '$1,250-$1,999',
    '$2,000-$3,499',
    '$3,500-$5,999',
    '$6,000 or more',
  ].indexOf(budgetAnswer)

  if (tier < 2) { s.FFV = 0; s.CFF = 0; s.ALL = 0; s.RES = 0; s.PRO = 0 }
  else if (tier < 3) { s.ALL = 0; s.PRO = 0 }
  else if (tier < 4) { s.PRO = 0 }
  // tier 4 = all except PRO; tier 5 = all families
  return s
}

function applyPostScoreRules(
  scores: Scores,
  answers: QuizAnswers
): Scores {
  const s = { ...scores }

  // New-only buyer: zero out used-specific bonuses
  const usedAnswer = answers[5] as string | undefined
  if (usedAnswer === 'I only want new equipment with a full warranty') {
    s.BAS = 0
    s.FFV = Math.max(0, s.FFV)
  }

  // Video gate: VID only wins when video intent is clear
  const primarySubjects = (answers[2] as string[] | undefined) ?? []
  const videoUse = answers[13] as string | undefined
  const videoIntentClear =
    primarySubjects.includes('Video and content creation') ||
    (videoUse && videoUse !== 'Almost none' && videoUse !== 'Family and travel clips')
  if (!videoIntentClear) s.VID = 0

  // Flagship gate: PRO only when high-stakes action AND professional intent
  const role = answers[3] as string | undefined
  const professionalIntent =
    role === 'I am preparing to launch a professional business' ||
    role === 'Photography is already part of my paid work' ||
    role === 'I intentionally want to build a side business'
  const actionLevel = answers[10]
  const highStakesAction =
    actionLevel === 'Birds, wildlife, and sports' ||
    actionLevel === 'Paid or high-stakes action photography'
  if (!professionalIntent || !highStakesAction) s.PRO = 0

  // High-resolution bonus
  const cropLevel = answers[8] as string | undefined
  const cropHigh =
    cropLevel === 'I photograph distant wildlife or make large prints' ||
    cropLevel === 'Maximum detail and aggressive cropping are major priorities'
  const resSubjects = ['Birds and wildlife', 'Landscapes and architecture', 'Macro and product photography']
  const hasResSubject = primarySubjects.some((sub) => resSubjects.includes(sub))
  if (cropHigh && hasResSubject) s.RES += 4

  // Compact bonus
  const sizeLevel = answers[6]
  const compact = sizeLevel === 'Lightweight equipment is important' || sizeLevel === 'A large camera would make me shoot less'
  const ffCompetitive = s.FFV > 0 || s.ALL > 0 || s.RES > 0
  if (compact && ffCompetitive) s.CFF += 3

  // Hiking bonus
  const carry = answers[7] as string | undefined
  const lensGrowth = answers[14] as string | undefined
  if (carry === 'Long hikes where I also want wildlife reach' && lensGrowth === 'I want one lens and the simplest possible setup') {
    s.APS += 3
    s.CFF += 2
  }

  // Lens-access bonus
  const lensAccess = answers[12] as string | undefined
  if (lensAccess === 'I can borrow or cheaply rent full-frame lenses' || lensAccess === 'I already own full-frame Sony lenses' || lensAccess === 'I plan to rent professional lenses for assignments') {
    s.FFV += 3; s.CFF += 3; s.ALL += 3; s.RES += 3; s.PRO += 3
  }

  // APS-C investment protection
  const budget = answers[4] as string | undefined
  const budgetBelow3500 = budget && ['Under $800', '$800-$1,249', '$1,250-$1,999', '$2,000-$3,499'].includes(budget)
  if (lensAccess === 'I already own several APS-C lenses' && budgetBelow3500) s.APS += 4

  // A6000 vs newer APS-C: if APS wins, decide which model
  // (handled in result selection below)

  return s
}

function selectResult(scores: Scores, answers: QuizAnswers): ResultKey {
  const sorted = (Object.entries(scores) as [ScoreKey, number][])
    .sort((a, b) => b[1] - a[1])

  const topKey = sorted[0][0]

  // Map score key to result key with disambiguation
  if (topKey === 'BAS') {
    // Decide A6000 vs A6400 based on autofocus / video intent
    const af = answers[10] as string | undefined
    const videoUse = answers[13] as string | undefined
    const budget = answers[4] as string | undefined
    const afHigh = af && af !== 'Mostly landscapes, buildings, and still subjects' && af !== 'People and pets occasionally'
    const videoMore = videoUse && videoUse !== 'Almost none'
    const budgetAboveLowest = budget && budget !== 'Under $800'
    if (afHigh || videoMore || budgetAboveLowest) return 'a6400'
    return 'a6000'
  }
  if (topKey === 'APS') {
    // Decide A6400 vs A6700 based on whether they want a current body
    const exp = answers[1] as string | undefined
    const budget = answers[4] as string | undefined
    const budgetAbove1250 = budget && ['$1,250-$1,999', '$2,000-$3,499', '$3,500-$5,999', '$6,000 or more'].includes(budget)
    const seriousHobbyist = exp === 'I am a serious hobbyist ready to improve' || exp === 'I am preparing to take on my first paying clients'
    if (budgetAbove1250 || seriousHobbyist) return 'a6700'
    return 'a6400'
  }
  if (topKey === 'FFV') return 'a7iii'
  if (topKey === 'CFF') return 'a7cii'
  if (topKey === 'ALL') return 'a7v'
  if (topKey === 'RES') {
    // Decide A7R III (used) vs A7R V/VI based on budget
    const budget = answers[4] as string | undefined
    const highBudget = budget && ['$3,500-$5,999', '$6,000 or more'].includes(budget)
    const newOnly = answers[5] === 'I only want new equipment with a full warranty'
    if (highBudget || newOnly) return 'a7r'
    return 'a7riii'
  }
  if (topKey === 'PRO') return 'a1'
  if (topKey === 'VID') return 'video'
  return 'a6400'
}

function calculateScores(answers: QuizAnswers): { scores: Scores; resultId: ResultKey } {
  let scores = emptyScores()

  for (const q of QUESTIONS) {
    const ans = answers[q.id]
    if (ans === undefined || ans === null) continue

    const selectedLabels = Array.isArray(ans) ? ans : [ans]

    for (const label of selectedLabels) {
      const match = q.answers.find((a) => a.label === label)
      if (!match) continue
      for (const [key, delta] of Object.entries(match.scores)) {
        scores[key as ScoreKey] = (scores[key as ScoreKey] ?? 0) + (delta as number)
      }
    }
  }

  const budgetAnswer = (answers[4] as string) ?? 'Under $800'
  scores = applyBudgetGates(scores, budgetAnswer)
  scores = applyPostScoreRules(scores, answers)

  const resultId = selectResult(scores, answers)
  return { scores, resultId }
}

// ---- UI helpers ----

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/40 font-sans text-xs">
          Question {current} of {total}
        </span>
        <span className="text-white/40 font-sans text-xs">{pct}%</span>
      </div>
      <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#6fcf97] rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label={`Question ${current} of ${total}`}
        />
      </div>
    </div>
  )
}

function SliderQuestion({
  labels,
  value,
  onChange,
}: {
  labels: string[]
  value: string
  onChange: (v: string) => void
}) {
  const idx = labels.indexOf(value)
  const current = idx === -1 ? 0 : idx
  return (
    <div>
      <div className="flex justify-between mb-3">
        {labels.map((label, i) => (
          <button
            key={label}
            onClick={() => onChange(label)}
            className={`flex-1 mx-0.5 py-2 px-1 rounded text-xs font-sans text-center transition-colors border ${
              i === current
                ? 'bg-[#6fcf97]/20 border-[#6fcf97] text-[#6fcf97]'
                : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white/60'
            }`}
            aria-pressed={i === current}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="relative mt-2 px-1">
        <input
          type="range"
          min={0}
          max={labels.length - 1}
          value={current}
          onChange={(e) => onChange(labels[parseInt(e.target.value)])}
          className="w-full accent-[#6fcf97] cursor-pointer"
          aria-label="Select level"
        />
      </div>
    </div>
  )
}

function AnswerCard({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded border font-sans text-sm transition-colors ${
        selected
          ? 'bg-[#6fcf97]/15 border-[#6fcf97] text-[#f5f0eb]'
          : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white/80'
      }`}
      aria-pressed={selected}
    >
      {label}
    </button>
  )
}

// ---- Result Card ----

function ResultCard({ result, isHighlighted }: { result: CameraResult; isHighlighted: boolean }) {
  return (
    <section
      id={result.anchorId}
      className={`rounded-lg border transition-all duration-500 ${
        isHighlighted
          ? 'border-[#6fcf97]/50 bg-[#6fcf97]/5'
          : 'border-white/10 bg-[#141414]'
      }`}
    >
      <div className="p-6 md:p-8">
        {isHighlighted && (
          <p className="text-[#6fcf97] font-sans text-xs font-semibold uppercase tracking-widest mb-2">
            {result.eyebrow}
          </p>
        )}
        <h2 className="text-[#f5f0eb] font-sans text-xl md:text-2xl font-bold leading-tight mb-1">
          {result.headline}
        </h2>
        <p className="text-[#888] font-sans text-sm mb-4">{result.name}</p>
        <p className="text-white/60 font-sans text-sm leading-relaxed mb-6">
          {result.shortVerdict}
        </p>

        <div className="border-t border-white/10 pt-6">
          <h3 className="text-[#f5f0eb] font-sans text-sm font-semibold mb-2">
            My perspective
          </h3>
          <p className="text-white/50 font-sans text-sm leading-relaxed italic mb-6">
            {result.myPerspective}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#f5f0eb] font-sans text-sm font-semibold mb-2">Best for</h3>
              <ul className="space-y-1">
                {result.bestFor.map((item) => (
                  <li key={item} className="text-white/55 font-sans text-sm flex gap-2">
                    <span className="text-[#6fcf97] mt-0.5 shrink-0">--</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#f5f0eb] font-sans text-sm font-semibold mb-2">
                Why your answers point here
              </h3>
              <ul className="space-y-1">
                {result.whySelected.map((item) => (
                  <li key={item} className="text-white/55 font-sans text-sm flex gap-2">
                    <span className="text-[#6fcf97] mt-0.5 shrink-0">--</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#f5f0eb] font-sans text-sm font-semibold mb-2">
                What to know before buying
              </h3>
              <ul className="space-y-1">
                {result.whatToKnow.map((item) => (
                  <li key={item} className="text-white/55 font-sans text-sm flex gap-2">
                    <span className="text-white/20 mt-0.5 shrink-0">--</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-[#f5f0eb] font-sans text-sm font-semibold mb-1">
                  First lens plan
                </h3>
                <p className="text-white/55 font-sans text-sm leading-relaxed">
                  {result.firstLensPlan}
                </p>
              </div>
              <div>
                <h3 className="text-[#f5f0eb] font-sans text-sm font-semibold mb-1">
                  Who should consider something else
                </h3>
                <p className="text-white/55 font-sans text-sm leading-relaxed">
                  {result.whoShouldSkip}
                </p>
              </div>
              <div>
                <h3 className="text-[#f5f0eb] font-sans text-sm font-semibold mb-1">
                  Long-term upgrade path
                </h3>
                <p className="text-white/55 font-sans text-sm leading-relaxed">
                  {result.upgradeNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- Main Quiz Component ----

export default function SonyQuiz({ embedMode = false }: { embedMode?: boolean }) {
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [result, setResult] = useState<CameraResult | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)
  const questionRef = useRef<HTMLDivElement>(null)
  const liveRef = useRef<HTMLDivElement>(null)

  const question = QUESTIONS[currentQ]

  const getAnswer = () => answers[question.id]

  const setAnswer = (val: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [question.id]: val }))
  }

  const toggleMulti = (label: string) => {
    const q = QUESTIONS[currentQ]
    const isExclusive = q.answers.find((a) => a.label === label && a.note === 'exclusive')
    const prev = (answers[q.id] as string[] | undefined) ?? []

    if (isExclusive) {
      setAnswer([label])
      return
    }
    // remove exclusive if present
    const withoutExclusive = prev.filter((v) => {
      const a = q.answers.find((a) => a.label === v)
      return !a?.note?.includes('exclusive')
    })
    if (withoutExclusive.includes(label)) {
      setAnswer(withoutExclusive.filter((v) => v !== label))
    } else {
      const max = q.multiMax ?? 2
      if (withoutExclusive.length < max) setAnswer([...withoutExclusive, label])
    }
  }

  const isAnswered = () => {
    const a = answers[question.id]
    if (!a) return false
    if (Array.isArray(a)) return a.length > 0
    return true
  }

  const finish = useCallback(() => {
    const { resultId } = calculateScores(answers)
    const found = CAMERA_RESULTS.find((r) => r.id === resultId) ?? CAMERA_RESULTS[1]
    setResult(found)
    setStep('result')

    // update URL with result param (no page reload)
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.searchParams.set('result', resultId)
      url.hash = found.anchorId
      window.history.replaceState({}, '', url.toString())
    }
  }, [answers])

  const next = () => {
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ((i) => i + 1)
      questionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      finish()
    }
  }

  const prev = () => {
    if (currentQ > 0) {
      setCurrentQ((i) => i - 1)
      questionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const reset = () => {
    setAnswers({})
    setCurrentQ(0)
    setResult(null)
    setStep('quiz')
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.searchParams.delete('result')
      url.hash = ''
      window.history.replaceState({}, '', url.toString())
    }
  }

  // scroll to top of page once result renders so the recommendation is visible
  useEffect(() => {
    if (step === 'result') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        if (liveRef.current) liveRef.current.textContent = `Your result: ${result?.name}`
      }, 50)
    }
  }, [step, result])

  if (step === 'intro') {
    return (
      <div className="bg-[#141414] border border-white/10 rounded-lg p-6 md:p-8">
        <p className="text-[#6fcf97] font-sans text-xs font-semibold uppercase tracking-widest mb-3">
          SONY CAMERA QUIZ
        </p>
        <h2 className="text-[#f5f0eb] font-sans text-xl md:text-2xl font-bold leading-tight mb-3 text-balance">
          15 questions. A clear starting path.
        </h2>
        <p className="text-white/55 font-sans text-sm leading-relaxed mb-2">
          Answer questions about your budget, subjects, carry preferences, video plans, and future
          goals. The scoring engine weighs your answers against each Sony camera family and selects
          the best match.
        </p>
        <p className="text-white/35 font-sans text-xs mb-6">
          No email required. Recommendations are based on transparent scoring and firsthand Sony
          experience.
        </p>
        <button
          onClick={() => setStep('quiz')}
          className="bg-[#6fcf97] hover:bg-[#9fe7b8] text-[#071a0e] font-sans font-semibold text-sm px-6 py-3 rounded transition-colors"
        >
          Start the Sony camera quiz
        </button>
      </div>
    )
  }

  if (step === 'result' && result) {
    return (
      <div>
        {/* Accessible live region */}
        <div ref={liveRef} aria-live="polite" aria-atomic="true" className="sr-only" />

        {/* Result banner */}
        <div
          ref={resultRef}
          className="bg-[#6fcf97]/10 border border-[#6fcf97]/30 rounded-lg p-5 mb-6"
        >
          <p className="text-[#6fcf97] font-sans text-xs font-semibold uppercase tracking-widest mb-1">
            YOUR BEST SONY MATCH
          </p>
          <p className="text-[#f5f0eb] font-sans text-lg font-bold mb-1">{result.name}</p>
          <p className="text-white/55 font-sans text-sm leading-relaxed mb-4">
            Your answers point toward a clear starting path. See why this Sony fits your budget and
            shooting style, what to pair with it, and which alternative is worth considering before
            you buy.
          </p>
          <div className="flex flex-wrap gap-3">
            {embedMode ? (
              <a
                href={`https://www.chrisbrenzel.com/photography/best-beginner-sony-camera#${result.anchorId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6fcf97] hover:bg-[#9fe7b8] text-[#071a0e] font-sans font-semibold text-sm px-5 py-2.5 rounded transition-colors inline-flex items-center gap-2"
              >
                See the full recommendation
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <a
                href={`#${result.anchorId}`}
                className="bg-[#6fcf97] hover:bg-[#9fe7b8] text-[#071a0e] font-sans font-semibold text-sm px-5 py-2.5 rounded transition-colors"
              >
                See the full recommendation
              </a>
            )}
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white/70 hover:text-white/90 font-sans text-sm px-5 py-2.5 rounded transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Retake the quiz
            </button>
          </div>
        </div>

        {embedMode ? (
          <div className="pb-8">
            <ResultCard result={result} isHighlighted={true} />
          </div>
        ) : (
          <p className="text-white/35 font-sans text-xs mb-6">
            Full recommendation library below. All results are shown so you can compare paths.
          </p>
        )}
      </div>
    )
  }

  // quiz step
  return (
    <div ref={questionRef} className="bg-[#141414] border border-white/10 rounded-lg p-6 md:p-8">
      <ProgressBar current={currentQ + 1} total={QUESTIONS.length} />

      <fieldset>
        <legend className="text-[#f5f0eb] font-sans text-base md:text-lg font-semibold leading-snug mb-1 text-balance">
          {question.question}
        </legend>
        {question.note && (
          <p className="text-white/35 font-sans text-xs leading-relaxed mb-4 italic">
            {question.note}
          </p>
        )}

        <div className="mt-4">
          {question.type === 'slider' && question.sliderLabels ? (
            <SliderQuestion
              labels={question.sliderLabels}
              value={(getAnswer() as string) ?? ''}
              onChange={setAnswer}
            />
          ) : question.type === 'multi' ? (
            <div className="grid sm:grid-cols-2 gap-2">
              {question.answers.map((ans) => {
                const selected = ((answers[question.id] as string[] | undefined) ?? []).includes(
                  ans.label
                )
                const maxReached =
                  ((answers[question.id] as string[] | undefined) ?? []).length >=
                    (question.multiMax ?? 2) && !selected
                return (
                  <AnswerCard
                    key={ans.label}
                    label={ans.label}
                    selected={selected}
                    onClick={() => !maxReached && toggleMulti(ans.label)}
                  />
                )
              })}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-2">
              {question.answers.map((ans) => (
                <AnswerCard
                  key={ans.label}
                  label={ans.label}
                  selected={getAnswer() === ans.label}
                  onClick={() => setAnswer(ans.label)}
                />
              ))}
            </div>
          )}
        </div>
      </fieldset>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
        <button
          onClick={prev}
          disabled={currentQ === 0}
          className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 font-sans text-sm disabled:opacity-0 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        <button
          onClick={next}
          disabled={!isAnswered()}
          className="inline-flex items-center gap-1.5 bg-[#6fcf97] hover:bg-[#9fe7b8] disabled:bg-white/10 disabled:text-white/30 text-[#071a0e] disabled:cursor-not-allowed font-sans font-semibold text-sm px-5 py-2.5 rounded transition-colors"
        >
          {currentQ === QUESTIONS.length - 1 ? 'See my result' : 'Next'}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

// Export ResultCard for use on the page
export { ResultCard }
