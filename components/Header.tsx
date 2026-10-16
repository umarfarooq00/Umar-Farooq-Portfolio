"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import type { HeaderProps, NavLink, ContactButton } from '../types/type'

export default function Header({
  logoUrl,
  navLinks = [],
  contactButton,
}: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full !py-[10px] border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className=" h-[80px] rounded overflow-hidden flex items-center justify-center">
                {logoUrl ? (
                  // use plain img to avoid external image config issues
                  <img
                    src={logoUrl}
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-sm ">Logo</span>
                )}
              </div>
              {/* <span className="hidden sm:inline-block text-[18px] font-[700]">Umar Farooq</span> */}
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-15">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--primary)] text-[18px] font-[700] hover:text-black"
              >
                {link.title}
              </Link>
            ))}
            {contactButton?.label && (
              <Link
                href={contactButton.href ?? "/contact"}
                className="lg:hidden ml-2 inline-flex items-center px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:opacity-95"
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
              className="hidden text-[18px] font-[600] lg:inline-flex items-center px-5 py-2 bg-[var(--primary)] text-white rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none hover:opacity-95"
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
              className=" rounded-md text-[var(--primary)] cursor-pointer"
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

      {/* Mobile drawer */}
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
            <div className="flex items-center gap-3">
              <div className=" h-12 rounded overflow-hidden flex items-center justify-center">
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span>Logo</span>
                )}
              </div>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className=" cursor-pointer text-[var(--primary)]"
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
                className="text-[var(--primary)] text-[18px] font-[700] hover:text-black"
              >
                {link.title}
              </Link>
            ))}

            {contactButton?.label && (
              <Link
                href={contactButton.href ?? "/contact"}
                onClick={() => setOpen(false)}
                className="text-[18px] font-[600] flex rounded-md justify-center items-center px-5 py-3 bg-[var(--primary)] text-white hover:opacity-95"
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
    </header>
  );
}
