import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { ProgressBar } from '../components/ProgressBar'

const PEOPLE = [
  { id: 'james', initials: 'JD', name: 'James D.', taste: 'Sci-Fi, Philosophy' },
  { id: 'sarah', initials: 'SL', name: 'Sarah L.', taste: 'Non-Fiction, Science' },
  { id: 'marcus', initials: 'MK', name: 'Marcus K.', taste: 'Classic Lit, History' },
  { id: 'elena', initials: 'ET', name: 'Elena T.', taste: 'Modern Fiction, Poetry' },
]

export function CurateCouncil() {
  const navigate = useNavigate()
  const [vouched, setVouched] = useState<Record<string, boolean>>({})

  const toggleVouch = (id: string) => {
    setVouched((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const vouchedCount = Object.values(vouched).filter(Boolean).length

  return (
    <div className="flex-1 flex flex-col px-6 pt-6 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
          Social Graph: Group Complete
        </span>
      </div>
      <ProgressBar current={5} total={5} color="green" />

      <div className="flex justify-end mt-1 mb-4">
        <span className="text-[9px] font-mono text-gray-400 tracking-wider">DIRECT</span>
      </div>

      {/* Headline */}
      <h2 className="text-[1.9rem] font-black uppercase leading-[1.05] tracking-tight mb-2">
        Curate your
        <br />
        <span className="text-accent-green">Council</span>
      </h2>

      <p className="text-xs text-gray-500 mb-6">
        Select the people whose book taste you trust to build your private perspective.
      </p>

      {/* People list */}
      <div className="space-y-3 flex-1">
        {PEOPLE.map((person) => {
          const isVouched = vouched[person.id]
          return (
            <div
              key={person.id}
              className={`flex items-center gap-3 border-[2.5px] p-3 transition-all
                ${isVouched ? 'border-accent-green' : 'border-black'}
              `}
            >
              {/* Avatar */}
              <div className={`w-10 h-10 flex items-center justify-center font-bold text-xs shrink-0
                ${isVouched ? 'bg-accent-green text-black' : 'bg-black text-white'}
              `}>
                {person.initials}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm tracking-wide uppercase">{person.name}</p>
                <p className="text-[9px] font-mono text-gray-400 tracking-wider">{person.taste}</p>
              </div>

              {/* Vouch button */}
              <button
                onClick={() => toggleVouch(person.id)}
                className={`px-3 py-1.5 text-[10px] font-bold tracking-[0.1em] uppercase border-[2px] cursor-pointer transition-all
                  ${isVouched
                    ? 'bg-accent-green text-black border-accent-green'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                  }
                `}
              >
                {isVouched ? '✓ VOUCHED' : 'VOUCH'}
              </button>
            </div>
          )
        })}
      </div>

      {/* Status */}
      <div className="mt-4 mb-2">
        <p className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
          SELECTION: {vouchedCount} VOUCHED
        </p>
      </div>

      {/* Signal wave preview */}
      <div className="bg-black h-16 mb-4 flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-[1px]">
          {Array.from({ length: 60 }, (_, i) => {
            const h = Math.random() * (vouchedCount > 0 ? 80 : 20) + 10
            return (
              <div
                key={i}
                className="w-[2px] bg-accent-green/70 shrink-0"
                style={{ height: `${h}%` }}
              />
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <Button
        variant="blue"
        disabled={vouchedCount === 0}
        onClick={() => navigate('/onboarding/circle-results')}
      >
        Invite to Your Book Circle →
      </Button>
    </div>
  )
}
