import { type ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'blue' | 'orange' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  fullWidth?: boolean
  arrow?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-black text-white hover:bg-gray-600',
  blue: 'bg-accent-blue text-white hover:bg-accent-blue/90',
  orange: 'bg-accent-orange text-white hover:bg-accent-orange/90',
  outline: 'bg-white text-black border-[2.5px] border-black hover:bg-gray-100',
  ghost: 'text-gray-500 hover:text-black hover:bg-gray-100',
}

export function Button({
  variant = 'primary',
  fullWidth = true,
  arrow = false,
  className = '',
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-3
        px-6 py-4 font-bold text-sm tracking-[0.15em] uppercase
        transition-all duration-150
        focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2
        disabled:opacity-40 disabled:cursor-not-allowed
        cursor-pointer
        ${fullWidth ? 'w-full' : ''}
        ${variantClasses[variant]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      <span className="flex-1 text-center">{children}</span>
      {arrow && <span className="text-lg">→</span>}
    </button>
  )
}
