import Link from 'next/link'
import type { ReactNode } from 'react'

/** True for links that leave the site (http, mailto, tel). */
export function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:|\/\/)/i.test(href)
}

type SmartLinkProps = {
  href: string
  children: ReactNode
  className?: string
  /** Force opening in a new tab (e.g. a CV PDF). External http links open in a new tab by default. */
  newTab?: boolean
  ariaLabel?: string
}

/**
 * Internal links ("/page", "#section") use Next.js <Link> so the page changes
 * without a full reload. External links fall back to a normal <a>.
 */
export default function SmartLink({ href, children, className, newTab, ariaLabel }: SmartLinkProps) {
  const external = isExternalHref(href)
  const openInNewTab = newTab ?? /^(https?:|\/\/)/i.test(href)

  if (!external && !newTab) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}
