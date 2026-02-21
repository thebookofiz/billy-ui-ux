import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { SignalWave } from '../components/SignalWave'

const SLIDES = [
  {
    badge: 'PHASE 01: GENESIS ACCESS',
    headline: (
      <>
        CUT
        <br />
        THROUGH
        <br />
        THE{' '}
        <span className="bg-accent-green text-black px-1">NOISE.</span>
      </>
    ),
    body: (
      <>
        <p className="font-bold text-sm uppercase tracking-wide mb-2">
          Access the raw intuition of the people you trust.
        </p>
        <p className="text-sm text-gray-500">
          no algorithms, just human signal.
        </p>
      </>
    ),
    waveLabel: 'SIGNAL_WAVE_01',
    waveBadge: 'HIGH_FIDELITY',
  },
  {
    badge: null,
    headline: (
      <>
        TURN YOUR
        <br />
        <span className="bg-accent-green text-black px-1">INTUITION</span>
        <br />
        INTO PASSIVE
        <br />
        INCOME.
      </>
    ),
    body: (
      <>
        <p className="text-sm">
          Your taste. Your judgment.
          <br />
          Your signal.{' '}
          <span className="text-accent-green font-bold">Now it compounds.</span>
        </p>
      </>
    ),
    waveLabel: 'DATA_PRIMER_V1.0',
    waveBadge: '● SIGNAL ACTIVE',
  },
  {
    badge: 'PHASE 01: GENESIS ACCESS',
    headline: (
      <>
        YOUR
        <br />
        TASTE IS
        <br />
        A{' '}
        <span className="bg-accent-green text-black px-1">SIGNAL.</span>
      </>
    ),
    body: (
      <>
        <p className="text-sm mb-4">
          Spot what matters before the world does. Build your
          reputation as a <span className="underline font-semibold">pioneer</span> in
          the things you love.
        </p>
        <div className="flex items-end gap-3 mb-4">
          <div className="flex-1" />
          <div className="w-14 h-14 border-[2px] border-black flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v4m0 12v4m-10-10h4m12 0h4" />
            </svg>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">Reputation Score</p>
          <span className="inline-block bg-accent-green text-black px-2 py-1 font-mono font-bold text-sm tracking-wider">
            EARLY_ADOPTER_001
          </span>
        </div>
        <div className="flex justify-between text-[9px] font-mono text-gray-400 mt-3">
          <span>TRUST TIER: PIONEER</span>
          <span>ID: 8829-TASTE</span>
        </div>
      </>
    ),
    waveLabel: null,
    waveBadge: null,
    customButton: { label: 'Claim Reputation', variant: 'blue' as const },
  },
  {
    badge: null,
    headline: (
      <>
        <span className="italic">OWN THE</span>
        <br />
        <span className="italic">TRUTH.</span>
      </>
    ),
    body: (
      <>
        <p className="text-sm border-l-[3px] border-black pl-3 mb-6">
          A marketplace for intuition. Discover hidden gems, rank the world, and
          earn from your accuracy.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { cat: 'MUSIC', score: '98.2', color: '' },
            { cat: 'TECH', score: '84.1', color: '' },
            { cat: 'FILM', score: '91.5', color: '' },
            { cat: 'LIVE FEEDS', score: '', color: 'bg-accent-green' },
          ].map((c) => (
            <div key={c.cat} className={`bg-black text-white p-3 aspect-square flex flex-col justify-end ${c.color ? 'relative overflow-hidden' : ''}`}>
              {c.color && (
                <div className={`absolute inset-0 ${c.color} opacity-80 flex items-center justify-center`}>
                  <span className="text-black font-black text-base uppercase tracking-wide">
                    LIVE<br />FEEDS
                  </span>
                </div>
              )}
              {!c.color && (
                <>
                  <p className="text-accent-green text-[9px] font-mono uppercase tracking-wider mb-0.5">{c.cat}</p>
                  <p className="text-white text-xs font-mono">
                    SIGNAL: {c.score}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </>
    ),
    waveLabel: null,
    waveBadge: null,
  },
]

export function ValueProps() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const slide = SLIDES[current]
  const isLast = current === SLIDES.length - 1

  return (
    <div className="flex-1 flex flex-col px-6 pt-8 pb-6">
      {/* Badge */}
      {slide.badge && (
        <div className="mb-4">
          <span className="inline-block bg-accent-green text-black text-[10px] font-bold tracking-wider px-2 py-1 uppercase">
            {slide.badge}
          </span>
        </div>
      )}

      {/* Headline */}
      <h2 className="text-[2rem] font-black uppercase leading-[1.05] tracking-tight mb-6 italic">
        {slide.headline}
      </h2>

      {/* Body */}
      <div className="mb-6">{slide.body}</div>

      {/* Signal wave */}
      {slide.waveLabel && (
        <div className="relative mb-6">
          {slide.waveBadge && (
            <div className="flex justify-between mb-1">
              <span className="text-[9px] font-mono text-gray-400 tracking-wider">{slide.waveLabel}</span>
              <span className="text-[9px] font-mono text-accent-green tracking-wider">{slide.waveBadge}</span>
            </div>
          )}
          <SignalWave label={!slide.waveBadge ? slide.waveLabel : undefined} className="h-40" />
        </div>
      )}

      {/* Footer info */}
      {!slide.waveLabel && !SLIDES[current].customButton && (
        <div className="flex-1" />
      )}

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mb-6">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 ${i === current ? 'bg-black' : 'bg-gray-200'}`}
          />
        ))}
      </div>

      {/* Button */}
      <div className="mt-auto">
        {slide.customButton ? (
          <Button variant={slide.customButton.variant} arrow onClick={() => {
            if (isLast) {
              navigate('/onboarding/intent')
            } else {
              setCurrent(current + 1)
            }
          }}>
            {slide.customButton.label}
          </Button>
        ) : (
          <Button arrow onClick={() => {
            if (isLast) {
              navigate('/onboarding/intent')
            } else {
              setCurrent(current + 1)
            }
          }}>
            Continue
          </Button>
        )}
      </div>
    </div>
  )
}
