import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { ProgressBar } from '../components/ProgressBar'
import { SignalWave } from '../components/SignalWave'

const TOPICS = [
  {
    id: 'favorite-books',
    title: 'MY FAVORITE BOOKS',
    subtitle: '27 SUPPORTERS',
    tag: 'ESSENTIAL READS',
  },
  {
    id: 'scifi',
    title: 'MUST-READ SCI-FI',
    subtitle: '84 SUPPORTERS',
    tag: null,
  },
  {
    id: 'nonfiction',
    title: 'BEST NON-FICTION 2024',
    subtitle: '56 READERS',
    tag: null,
  },
]

export function ChooseTopic() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="flex-1 flex flex-col px-6 pt-6 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
          Onboarding Progress
        </span>
        <span className="text-accent-green text-[9px] font-mono font-bold tracking-wider">
          STEP 02 / 04
        </span>
      </div>
      <ProgressBar current={2} total={5} color="green" />

      <div className="mt-1 mb-6 flex justify-end">
        <span className="text-[9px] font-mono text-gray-400 tracking-wider">
          RETURN TO: BUILDING YOUR LIBRARY
        </span>
      </div>

      {/* Step label */}
      <p className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-2">
        STEP 2: START YOUR FIRST COLLECTION
      </p>

      {/* Headline */}
      <h2 className="text-[2.2rem] font-black uppercase leading-[1.0] tracking-tight mb-2">
        Choose a
        <br />
        topic<span className="text-accent-green">.</span>
      </h2>

      <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">
        Select a genre or theme to begin curating your digital library.
      </p>

      {/* Topic cards */}
      <div className="space-y-3 flex-1">
        {TOPICS.map((topic) => {
          const isSelected = selected === topic.id
          return (
            <button
              key={topic.id}
              onClick={() => setSelected(topic.id)}
              className={`w-full text-left border-[2.5px] p-0 cursor-pointer transition-all duration-150 ${
                isSelected
                  ? 'border-accent-green shadow-[4px_4px_0px_0px_#39FF14]'
                  : 'border-black'
              }`}
            >
              {/* Signal wave mini */}
              <SignalWave className="h-20" label={undefined} />

              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-sm tracking-wide uppercase">{topic.title}</h3>
                  <div className="flex items-center gap-2">
                    {topic.tag && (
                      <span className="text-[8px] font-mono text-gray-400 tracking-wider border border-gray-300 px-1.5 py-0.5">
                        {topic.tag}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-[9px] font-mono text-gray-400 tracking-wider mt-1">
                  {topic.subtitle}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* CTA */}
      <Button
        arrow
        disabled={!selected}
        onClick={() => navigate('/onboarding/add-favorites')}
        className="mt-6"
      >
        Start Collection
      </Button>
    </div>
  )
}
