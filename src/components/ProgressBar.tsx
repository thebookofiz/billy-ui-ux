interface ProgressBarProps {
  current: number
  total: number
  color?: 'blue' | 'green' | 'orange'
}

export function ProgressBar({ current, total, color = 'blue' }: ProgressBarProps) {
  const colorMap = {
    blue: 'bg-accent-blue',
    green: 'bg-accent-green',
    orange: 'bg-accent-orange',
  }

  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-[4px] flex-1 ${i < current ? colorMap[color] : 'bg-gray-200'}`}
        />
      ))}
    </div>
  )
}
