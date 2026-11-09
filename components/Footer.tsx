"use client"

import React from 'react'
import Link from 'next/link'
import type { FooterProps, NavLink } from '../types/type'
import Logo from './Logo'

const socialIcons: { [key: string]: React.ReactElement } = {
  twitter: (
    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
    </svg>
  ),
  linkedin: (
    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    </svg>
  ),
  github: (
    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0020.9 3S19.73 3 16 5.69a13.28 13.28 0 00-7 0C6.27 3 5.09 3 5.09 3a5.07 5.07 0 00.91 1.77 5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  ),
  facebook: (
    <svg className="w-4.5 h-4.5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
    </svg>
  ),
  instagram: (
    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  ),
}

type Props = FooterProps & { navLinks?: NavLink[] }

export default function Footer({
  companyName = "Umar Farooq",
  socialLinks = [],
  copyright,
  navLinks = [],
}: Props) {
  const year = new Date().getFullYear()
  const copyrightText = copyright || `© ${year} ${companyName}. All rights reserved.`

  const getSocialIcon = (platform: string) =>
    socialIcons[platform?.toLowerCase()] || socialIcons.twitter

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#f1f1f1] text-(--primary)">
      <div className="mx-auto max-w-350 px-4">
        {/* Top row: brand | links | social */}
        <div className="flex flex-col items-center gap-6 py-8 text-center lg:flex-row lg:justify-between lg:text-left">
          {/* Brand */}
          <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Home">
            <Logo className="h-9 w-auto" />
          </Link>

          {/* Quick links */}
          {navLinks.length > 0 && (
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[15px] font-semibold text-black/70 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:text-black hover:after:w-full"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          )}

          {/* Social */}
          {socialLinks.length > 0 && (
            <div className="flex shrink-0 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-(--primary) transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-(--primary) hover:bg-(--primary) hover:text-white"
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-center justify-between gap-3 border-t border-black/10 py-5 sm:flex-row">
          <p className="text-sm text-black/60">{copyrightText}</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-black/70 transition-colors duration-300 hover:text-black"
          >
            Back to Top
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-(--primary) group-hover:bg-(--primary) group-hover:text-white"
            >
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
