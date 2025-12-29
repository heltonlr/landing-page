import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonRole = 'primary' | 'secondary' | 'subtle'
type ButtonVariant = 'accent' | 'success' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'
type IconPosition = 'none' | 'prefix' | 'suffix'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  role?: ButtonRole
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconPosition?: IconPosition
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1',
  md: 'px-6 py-3 text-base gap-1',
  lg: 'px-8 py-4 text-lg gap-1',
}

const sizeWithPrefixIcon: Record<ButtonSize, string> = {
  sm: 'pl-3 pr-4 py-2 text-sm gap-1',
  md: 'pl-5 pr-6 py-3 text-base gap-1',
  lg: 'pl-6 pr-8 py-4 text-lg gap-1',
}

const sizeWithSuffixIcon: Record<ButtonSize, string> = {
  sm: 'pl-4 pr-3 py-2 text-sm gap-1',
  md: 'pl-6 pr-5 py-3 text-base gap-1',
  lg: 'pl-8 pr-6 py-4 text-lg gap-1',
}

const iconSizes: Record<ButtonSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

function getVariantStyles(role: ButtonRole, variant: ButtonVariant): string {
  if (role === 'primary') {
    switch (variant) {
      case 'accent':
        return `
          bg-gradient-to-t from-btn-accent-from via-btn-accent-via1 via-10% to-btn-accent-to
          text-btn-accent-text
          border-t border-btn-accent-via2
          hover:brightness-110
          active:brightness-95
        `
      case 'success':
        return `
          bg-btn-success-bg
          text-btn-success-text
          border-t border-btn-success-hover
          hover:bg-btn-success-hover
          active:bg-btn-success-active
        `
      case 'danger':
        return `
          bg-btn-danger-bg
          text-btn-danger-text
          border-t border-btn-danger-border
          hover:bg-btn-danger-hover
          active:bg-btn-danger-active
        `
    }
  }

  if (role === 'secondary') {
    switch (variant) {
      case 'accent':
        return `
          bg-transparent
          text-btn-accent-via1
          border border-btn-accent-via1
          hover:bg-btn-accent-via1/10
          active:bg-btn-accent-via1/20
        `
      case 'success':
        return `
          bg-transparent
          text-btn-success-text
          border border-btn-success-bg
          hover:bg-btn-success-bg/10
          active:bg-btn-success-bg/20
        `
      case 'danger':
        return `
          bg-transparent
          text-btn-danger-text
          border border-btn-danger-bg
          hover:bg-btn-danger-bg/10
          active:bg-btn-danger-bg/20
        `
    }
  }

  // subtle role
  switch (variant) {
    case 'accent':
      return `
        bg-transparent
        text-btn-accent-via1
        hover:bg-btn-accent-via1/10
        active:bg-btn-accent-via1/20
      `
    case 'success':
      return `
        bg-transparent
        text-btn-success-text
        hover:bg-btn-success-bg/10
        active:bg-btn-success-bg/20
      `
    case 'danger':
      return `
        bg-transparent
        text-btn-danger-text
        hover:bg-btn-danger-bg/10
        active:bg-btn-danger-bg/20
      `
  }
}

export default function Button({
  children,
  role = 'primary',
  variant = 'accent',
  size = 'md',
  icon,
  iconPosition = 'none',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const hasIcon = icon && iconPosition !== 'none'

  const getSizeStyles = () => {
    if (!hasIcon) return sizeStyles[size]
    return iconPosition === 'prefix'
      ? sizeWithPrefixIcon[size]
      : sizeWithSuffixIcon[size]
  }

  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold tracking-tight
    rounded-lg
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btn-accent-via1
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  `

  const iconElement = icon && (
    <span className={iconSizes[size]}>{icon}</span>
  )

  return (
    <button
      className={`
        ${baseStyles}
        ${getSizeStyles()}
        ${getVariantStyles(role, variant)}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      disabled={disabled}
      {...props}
    >
      {iconPosition === 'prefix' && iconElement}
      {children}
      {iconPosition === 'suffix' && iconElement}
    </button>
  )
}
