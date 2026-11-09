"use client"

import {useEffect, useState} from 'react'
import Link from 'next/link'
import type { HeaderProps } from '../types/type'
import Logo from './Logo'

export default function Header({
  navLinks = [],
  contactButton,
}: HeaderProps) {
  const [open, setOpen] = useState(false)
  // Smart sticky header: hide when scrolling down, slide back in on a small scroll up
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let upDistance = 0 // how far the user has scrolled up since last scrolling down
    let ticking = false

    const update = () => {
      const y = window.scrollY
      const delta = y - lastY
      lastY = y
      setScrolled(y > 10)

      if (y < 120) {
        upDistance = 0
        setHidden(false) // always visible near the top
      } else if (delta > 0) {
        upDistance = 0
        if (delta > 2) setHidden(true) // scrolling down
      } else if (delta < 0) {
        upDistance += -delta
        if (upDistance > 60) setHidden(false) // show only after a deliberate ~60px scroll up
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header
      className={`sticky top-0 z-40 w-full py-2.5! border-b bg-white/95 backdrop-blur-md will-change-transform transition-[transform,opacity,box-shadow,border-color] ${
        hidden && !open
          ? // Hide: glide up and fade out
            '-translate-y-full opacity-0 duration-700 ease-[cubic-bezier(0.7,0,0.84,0)]'
          : // Show: slide down from the top, decelerating very gently
            'translate-y-0 opacity-100 duration-1400 ease-[cubic-bezier(0.45,0,0.25,1)]'
      } ${scrolled ? 'border-transparent shadow-[0_8px_30px_rgba(0,0,0,0.06)]' : 'border-gray-200'}`}
    >
      <div className="max-w-350 mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex h-20 items-center" aria-label="Home">
              <Logo className="h-9 w-auto sm:h-11" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-15">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-(--primary) text-[18px] font-bold hover:text-black"
              >
                {link.title}
              </Link>
            ))}
            {contactButton?.label && (
              <Link
                href={contactButton.href ?? "/contact"}
                className="lg:hidden ml-2 inline-flex items-center px-4 py-2 bg-(--primary) text-white rounded-md hover:opacity-95"
              >
                {contactButton.label}
                <svg
                  className="ml-2 w-6 h-6 -rotate-45 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </Link>
            )}
          </nav>
          {contactButton?.label && (
            <Link
              href={contactButton.href ?? "/contact"}
              className="hidden text-[18px] font-semibold lg:inline-flex items-center px-5 py-2 bg-(--primary) text-white rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none hover:opacity-95"
            >
              {contactButton.label}
              <svg
                className="ml-2 w-6 h-6 -rotate-45 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          )}
          <div className="lg:hidden flex items-center">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className=" rounded-md text-(--primary) cursor-pointer"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile drawer (outside the header so the header's transform doesn't affect it) */}
      <div
        className={` fixed inset-0 z-50 flex lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`fixed top-0 right-0 h-full max-w-90 w-full bg-gray-300 shadow-xl transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-400">
            <Link href="/" onClick={() => setOpen(false)} aria-label="Home">
              <Logo className="h-8 w-auto" />
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className=" cursor-pointer text-(--primary)"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-6 flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-(--primary) text-[18px] font-bold hover:text-black"
              >
                {link.title}
              </Link>
            ))}

            {contactButton?.label && (
              <Link
                href={contactButton.href ?? "/contact"}
                onClick={() => setOpen(false)}
                className="text-[18px] font-semibold flex rounded-md justify-center items-center px-5 py-3 bg-(--primary) text-white hover:opacity-95"
              >
                {contactButton.label}
                <svg
                  className="ml-2 w-6 h-6 -rotate-45 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </Link>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
