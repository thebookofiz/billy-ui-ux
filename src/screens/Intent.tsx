import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { ProgressBar } from '../components/ProgressBar'
import { Card } from '../components/Card'

const INTENTS = [
  {
    id: 'ranker',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M14 4l4 8h-8l4-8z" />
        <path d="M10 14h8v10H10z" />
      </svg>
    ),
    title: 'I WANT TO RANK THINGS',
    subtitle: null,
  },
  {
    id: 'earn',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 20l6-6 4 4 10-10" />
        <path d="M18 8h6v6" />
      </svg>
    ),
    title: 'EARN FROM OPINIONS',
    subtitle: 'PASSIVE YIELD ACTIVE',
  },
  {
    id: 'discover',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="10" cy="10" r="4" />
        <circle cx="18" cy="10" r="4" />
        <path d="M6 24c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6" />
      </svg>
    ),
    title: 'DISCOVER EXPERTS',
    subtitle: null,
  },
  {
    id: 'explore',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="4" y="6" width="12" height="16" rx="0" />
        <path d="M8 14h4m-2-2v4" />
        <circle cx="21" cy="11" r="4" />
        <path d="M21 15v3" />
      </svg>
    ),
    title: 'JUST EXPLORING',
    subtitle: null,
  },
]

export function Intent() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Step indicators on left + content */}
      <div className="flex flex-1">
        {/* Left step bar */}
        <div className="flex flex-col items-center py-8 pl-3 pr-2 gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-10 h-10 flex items-center justify-center text-xs font-bold border-[2px]
                ${step === 1
                  ? 'bg-accent-blue text-white border-accent-blue'
                  : 'bg-white text-gray-400 border-gray-200'
                }
              `}
            >
              {String(step).padStart(2, '0')}
            </div>
          ))}
          <div className="flex-1 w-[2px] bg-gray-200 mt-1" />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col px-4 pt-8 pb-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-accent-orange text-[10px] font-bold tracking-[0.2em] uppercase">
              Current Phase: Intent
            </span>
            <div className="flex-1" />
            <ProgressBar current={2} total={4} color="blue" />
          </div>

          {/* Headline */}
          <h2 className="text-[1.9rem] font-black uppercase leading-[1.05] tracking-tight mb-3">
            Why are
            <br />
            you here?
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Define your primary directive to optimize your yield profile.
          </p>

          {/* Intent options */}
          <div className="space-y-3 flex-1">
            {INTENTS.map((intent) => {
              const isSelected = selected.includes(intent.id)
              return (
                <Card
                  key={intent.id}
                  interactive
                  selected={isSelected}
                  onClick={() => toggle(intent.id)}
                  className="p-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-accent-blue text-white' : 'bg-gray-100 text-black'
                      }`}
                    >
                      {intent.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm tracking-wide">{intent.title}</p>
                      {intent.subtitle && (
                        <p className={`text-[10px] font-mono tracking-wider mt-0.5 ${
                          isSelected ? 'text-accent-blue' : 'text-gray-400'
                        }`}>
                          {intent.subtitle}
                        </p>
                      )}
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center ${
                        isSelected ? 'border-accent-blue bg-accent-blue' : 'border-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* CTA */}
          <Button
            variant="blue"
            arrow
            disabled={selected.length === 0}
            onClick={() => navigate('/onboarding/domains')}
            className="mt-6"
          >
            Next Step
          </Button>

          {/* Footer */}
          <div className="flex justify-between text-[9px] font-mono text-gray-400 mt-4">
            <span>V.4.0.2 / STABLE</span>
            <span>SECURE SESSION</span>
          </div>
        </div>
      </div>
    </div>
  )
}
