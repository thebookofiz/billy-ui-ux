import { useMemo } from 'react'

interface SignalWaveProps {
  label?: string
  className?: string
}

export function SignalWave({ label = 'SIGNAL_V.01', className = '' }: SignalWaveProps) {
  const bars = useMemo(() => {
    const count = 80
    return Array.from({ length: count }, (_, i) => {
      const x = i / count
      const center = Math.exp(-((x - 0.5) ** 2) / 0.02)
      const noise = Math.random() * 0.3
      return Math.max(0.05, center * 0.9 + noise * center)
    })
  }, [])

  return (
    <div className={`relative bg-black w-full overflow-hidden ${className}`}>
      <div className="flex items-center justify-center h-full gap-[1px] px-4 py-8">
        {bars.map((h, i) => (
          <div
            key={i}
            className="bg-white/90 w-[2px] shrink-0"
            style={{ height: `${h * 100}%`, maxHeight: '100%' }}
          />
        ))}
      </div>
      {label && (
        <div className="absolute bottom-2 left-2">
          <span className="inline-block border border-white/40 px-2 py-0.5 text-[10px] font-mono text-white/70 tracking-wider">
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
