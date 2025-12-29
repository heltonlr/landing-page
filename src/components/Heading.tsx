import type { ReactNode } from 'react'

type HeadingSize = 'xl' | 'lg' | 'md'

interface HeadingProps {
  children: ReactNode
  subtitle?: string
  size?: HeadingSize
  className?: string
  align?: 'left' | 'center' | 'right'
}

const titleStyles: Record<HeadingSize, string> = {
  xl: 'text-[41px] leading-[44px] tracking-[-1px]',
  lg: 'text-[34px] leading-[36px] tracking-[-0.5px]',
  md: 'text-[28px] leading-[28px] tracking-normal',
}

const subtitleStyles: Record<HeadingSize, string> = {
  xl: 'text-lg leading-6',
  lg: 'text-base leading-6',
  md: 'text-base leading-6',
}

const gapStyles: Record<HeadingSize, string> = {
  xl: 'gap-3',
  lg: 'gap-2',
  md: 'gap-2',
}

const alignStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export default function Heading({
  children,
  subtitle,
  size = 'xl',
  className = '',
  align = 'left',
}: HeadingProps) {
  const Tag = size === 'xl' ? 'h1' : size === 'lg' ? 'h2' : 'h3'

  return (
    <div className={`flex flex-col ${gapStyles[size]} ${alignStyles[align]} ${className}`}>
      <Tag
        className={`
          font-semibold text-royal-text
          ${titleStyles[size]}
        `.trim()}
      >
        {children}
      </Tag>
      {subtitle && (
        <p
          className={`
            font-light text-royal-text-muted
            ${subtitleStyles[size]}
          `.trim()}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
