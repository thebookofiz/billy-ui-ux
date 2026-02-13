import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

const DOMAINS = [
  'TECH', 'DESIGN', 'MUSIC', 'BOOKS',
  'FILM', 'COFFEE', 'FINANCE', 'GAMING', 'ART',
]

export function ChooseDomains() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (domain: string) => {
    setSelected((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain],
    )
  }

  return (
    <div className="flex-1 flex flex-col px-6 pt-6 pb-6">
      {/* Header */}
      <div className="flex flex-col items-center mb-1">
        <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">Section 02</span>
        <div className="w-12 h-1.5 bg-black mt-1.5" />
      </div>

      <p className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mt-4 mb-6">
        Step 2: Choose your domains
      </p>

      {/* Headline */}
      <h2 className="text-[2.4rem] font-black uppercase leading-[1.0] tracking-tight mb-4">
        What
        <br />
        do you
        <br />
        <span className="bg-black text-white px-1">know?</span>
      </h2>

      {/* Description */}
      <p className="text-xs font-bold uppercase tracking-wider leading-relaxed border-l-[3px] border-black pl-3 mb-8">
        Pick at least 3 categories
        <br />
        where you have the
        <br />
        strongest intuition.
      </p>

      {/* Domain grid */}
      <div className="grid grid-cols-2 gap-2.5 mb-6 flex-1">
        {DOMAINS.map((domain) => {
          const isSelected = selected.includes(domain)
          return (
            <button
              key={domain}
              onClick={() => toggle(domain)}
              className={`py-3.5 px-4 text-left font-bold text-sm tracking-[0.1em] uppercase
                border-[2.5px] cursor-pointer transition-all duration-150 flex items-center justify-between
                ${isSelected
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black hover:bg-gray-100'
                }
                ${domain === 'ART' ? 'col-span-2' : ''}
              `}
            >
              <span>{domain}</span>
              {isSelected && (
                <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* CTA */}
      <Button
        arrow
        disabled={selected.length < 3}
        onClick={() => navigate('/onboarding/personalize')}
      >
        Continue
      </Button>

      {/* Home bar */}
      <div className="flex justify-center mt-4">
        <div className="w-32 h-1 bg-black/20 rounded-full" />
      </div>
    </div>
  )
}
