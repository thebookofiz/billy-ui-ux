import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const STEPS = [
  { key: 'SIGNAL_SYNC', label: 'SIGNAL_SYNC:', final: 'IN_PROGRESS' },
  { key: 'DOMAINS_MAPPED', label: 'DOMAINS_MAPPED:', final: 'TRUE' },
  { key: 'ENGINE_STATUS', label: 'ENGINE_STATUS:', final: 'OPTIMIZING...' },
]

export function PersonalizeSignal() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0) // 0-3 steps completed
  const [dots, setDots] = useState('')

  // Animate dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'))
    }, 400)
    return () => clearInterval(interval)
  }, [])

  // Animate steps
  useEffect(() => {
    const timers = [
      setTimeout(() => setProgress(1), 800),
      setTimeout(() => setProgress(2), 1800),
      setTimeout(() => setProgress(3), 2800),
    ]
    const nav = setTimeout(() => navigate('/onboarding/choose-topic'), 4200)
    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(nav)
    }
  }, [navigate])

  // Signal wave bars for the animation
  const bars = Array.from({ length: 24 }, (_, i) => {
    const center = 12
    const dist = Math.abs(i - center)
    const base = Math.max(0.15, 1 - dist * 0.08)
    return base * (0.6 + Math.random() * 0.4)
  })

  return (
    <div className="flex-1 flex flex-col px-6 pt-6 pb-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
          01_IDENTITY
        </span>
        <div className="flex-1" />
      </div>
      <div className="w-16 h-1.5 bg-accent-green mb-8" />

      {/* Processing label */}
      <p className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase mb-4">
        Processing Pipeline
      </p>

      {/* Headline */}
      <h2 className="text-[2.2rem] font-black italic uppercase leading-[1.0] tracking-tight mb-3">
        Personalizing
        <br />
        Your Signal{dots}
      </h2>

      <p className="text-sm text-gray-500 leading-relaxed mb-8">
        Building your custom discovery engine based on your selected domains.
      </p>

      {/* Signal animation card */}
      <div className="bg-black p-6 mb-4">
        {/* Signal icon */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              className="text-accent-green"
            >
              {/* Signal waves */}
              <path
                d="M28 36a4 4 0 100-8 4 4 0 000 8z"
                fill="currentColor"
                className="animate-pulse"
              />
              <path
                d="M20 24a11.3 11.3 0 0116 0"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity={progress >= 1 ? 1 : 0.3}
              />
              <path
                d="M14 18a19.8 19.8 0 0128 0"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity={progress >= 2 ? 1 : 0.3}
              />
              <path
                d="M8 12a28.3 28.3 0 0140 0"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity={progress >= 3 ? 1 : 0.3}
              />
            </svg>
          </div>
        </div>

        {/* Wave bars */}
        <div className="flex items-end justify-center gap-[2px] h-12 mb-4">
          {bars.map((h, i) => (
            <div
              key={i}
              className="w-[3px] bg-accent-green transition-all duration-500"
              style={{
                height: `${h * 100}%`,
                opacity: progress >= 1 ? 0.4 + h * 0.6 : 0.2,
              }}
            />
          ))}
        </div>

        {/* Syncing core label */}
        <div className="flex justify-center">
          <span className="bg-accent-green text-black text-[9px] font-bold tracking-[0.15em] uppercase px-4 py-1.5">
            Syncing_Core
          </span>
        </div>
      </div>

      {/* Sub-labels */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
          Parsing
        </span>
        <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
          Mapping
        </span>
      </div>
      <p className="text-[9px] font-mono text-gray-400 tracking-wider uppercase mb-8">
        Domain_Alpha · Aligned
      </p>

      {/* Status readout */}
      <div className="border-t-[2px] border-black pt-4 space-y-3 flex-1">
        {STEPS.map((step, i) => (
          <div key={step.key} className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase">
              {step.label}
            </span>
            <span
              className={`text-[10px] font-mono font-bold tracking-[0.1em] uppercase transition-all duration-300 ${
                progress > i ? 'text-accent-green' : 'text-gray-300'
              }`}
            >
              {progress > i ? step.final : '---'}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-[9px] font-mono text-gray-400 tracking-wider uppercase text-center mt-6">
        Establishing Peer-to-Peer Trust Nodes
      </p>
    </div>
  )
}
