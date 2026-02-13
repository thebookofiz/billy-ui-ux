import { type HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean
  interactive?: boolean
  thick?: boolean
}

export function Card({
  selected = false,
  interactive = false,
  thick = true,
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`
        bg-white transition-all duration-150
        ${thick ? 'border-[2.5px]' : 'border-[1.5px]'}
        ${selected
          ? 'border-accent-blue shadow-[4px_4px_0px_0px_#3B5BFF]'
          : 'border-black'
        }
        ${interactive ? 'cursor-pointer active:scale-[0.98]' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
