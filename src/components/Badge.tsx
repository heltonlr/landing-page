import type { ReactNode } from 'react'

type BadgeSize = 'sm' | 'md'
type BadgeAppearance = 'default' | 'strong'
type BadgeVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'brand'

interface BadgeProps {
  children: ReactNode
  size?: BadgeSize
  appearance?: BadgeAppearance
  variant?: BadgeVariant
  icon?: ReactNode
  className?: string
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-1 text-[11px] leading-3 tracking-[0.25px] gap-1',
  md: 'px-3 py-1.5 text-xs leading-4 tracking-[0.25px] gap-1.5',
}

const iconSizes: Record<BadgeSize, string> = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
}

type VariantStylesMap = Record<BadgeVariant, { default: string; strong: string }>

const variantStyles: VariantStylesMap = {
  neutral: {
    default: 'bg-royal-surface text-[#dbdcde]',
    strong: 'bg-[#383c48] text-white',
  },
  info: {
    default: 'bg-[#1a2744] text-[#cedcff]',
    strong: 'bg-[#3b82f6] text-white',
  },
  success: {
    default: 'bg-[#1a2e1a] text-[#cae3c5]',
    strong: 'bg-[#22c55e] text-[#0c0f17]',
  },
  warning: {
    default: 'bg-[#2e2a1a] text-[#ffeab2]',
    strong: 'bg-[#f59e0b] text-[#0c0f17]',
  },
  danger: {
    default: 'bg-[#2e1a1a] text-[#ffd2c9]',
    strong: 'bg-[#ef4444] text-white',
  },
  brand: {
    default: 'bg-royal-accent text-[#0c0f17]',
    strong: 'bg-[#d4ff4d] text-[#0c0f17]',
  },
}

export default function Badge({
  children,
  size = 'sm',
  appearance = 'default',
  variant = 'neutral',
  icon,
  className = '',
}: BadgeProps) {
  const variantStyle = variantStyles[variant][appearance]

  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-semibold uppercase
        rounded
        ${sizeStyles[size]}
        ${variantStyle}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {icon && <span className={iconSizes[size]}>{icon}</span>}
      {children}
    </span>
  )
}
