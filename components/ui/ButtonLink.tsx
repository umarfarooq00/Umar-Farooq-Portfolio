import type { ReactNode } from 'react'
import SmartLink from './SmartLink'

export type ButtonVariant = 'primary' | 'outline' | 'light'

/*
 * Shared button look for the whole homepage:
 * - same height, padding, font, corners; min width 150px, grows with the text, always one line
 * - hover: a fill sweeps in from the left and inverts the colours, arrow turns to point right
 */
const base =
  'group/btn relative isolate inline-flex h-13 min-w-37.5 shrink-0 cursor-pointer items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none border px-7 text-[15px] font-semibold tracking-[0.05em] transition-colors duration-500 ease-out ' +
  "before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-out before:content-[''] hover:before:scale-x-100"

const variants: Record<ButtonVariant, string> = {
  // Black button on light backgrounds → turns white with black text
  primary: 'border-(--primary) bg-(--primary) text-white before:bg-white hover:text-(--primary)',
  // Outlined button on light backgrounds → fills black with white text
  outline: 'border-(--primary) bg-transparent text-(--primary) before:bg-(--primary) hover:text-white',
  // White button on dark backgrounds → fills black with white text
  light: 'border-white bg-white text-(--primary) before:bg-(--primary) hover:text-white',
}

export function buttonClass(variant: ButtonVariant = 'primary', extra = '') {
  return `${base} ${variants[variant]} ${extra}`.trim()
}

/** Same arrow on every button; rotates to point right on hover. */
export function ButtonArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 transition-transform duration-500 ease-out group-hover/btn:rotate-45"
    >
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
    </svg>
  )
}

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  newTab?: boolean
  className?: string
}

export default function ButtonLink({ href, children, variant = 'primary', newTab, className = '' }: ButtonLinkProps) {
  return (
    <SmartLink href={href} newTab={newTab} className={buttonClass(variant, className)}>
      <span>{children}</span>
      <ButtonArrow />
    </SmartLink>
  )
}
