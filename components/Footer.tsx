"use client"

import React from 'react'
import type { FooterProps } from '../types/type'

const socialIcons: { [key: string]: React.ReactElement } = {
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0020.9 3S19.73 3 16 5.69a13.28 13.28 0 00-7 0C6.27 3 5.09 3 5.09 3a5.07 5.07 0 00.91 1.77 5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  ),
  facebook: (
    <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
     <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  ),
}

export default function Footer({
  companyName = "umar",
  logo,
  socialLinks = [],
  copyright = "© 2024 All rights reserved.",
}: FooterProps) {
  const logoUrl = logo?.asset?.url;

  const getSocialIcon = (platform: string) => {
    const name = platform.toLowerCase();
    return socialIcons[name] || socialIcons.twitter;
  };

  return (
    <footer className="relative bg-gray-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-48 mb-48" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:py-16 py-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:mb-12 mb-6 pb-8 border-b-1 border-gray-400">
          {/* Logo Section */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              {logoUrl ? (
                <div className="relative h-14 w-14 rounded-2xl bg-gray-900 p-0.5 shadow-lg">
                  <img
                    src={logoUrl}
                    alt={companyName}
                    className="h-full w-full rounded-2xl object-contain bg-white"
                  />
                </div>
              ) : (
                <div className="h-14 w-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  {companyName?.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="absolute inset-0 rounded-2xl bg-gray-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
            <div className="">
              <p className="text-md font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                {companyName}
              </p>
              <p className="text-sm text-gray-600">Portfolio</p>
            </div>
          </div>

          {/* Social Links */}
          {socialLinks && socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  aria-label={social.platform}
                >
                  <div className="absolute inset-0 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 blur  transition-all duration-500 ease-in-out " />
                  <div className="relative sm:h-13 sm:w-13 h-11 w-11 bg-white  text-[var(--primary)] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out  shadow-md hover:shadow-lg">
                    {getSocialIcon(social.platform)}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Copyright Section */}
        <div className="text-center flex flex-wrap sm:flex-row flex-col-reverse justify-center items-center gap-4">
          <p className="text-sm text-[var(--primary)] font-medium tracking-wide">
            {copyright}
          </p>
          {/* <div className="flex justify-center items-center sm:gap-6 gap-2 ">
            <a
              href="#privacy"
              className="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors duration-300 relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--primary)] group-hover:w-full transition-all duration-300" />
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="#terms"
              className="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors duration-300 relative group"
            >
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}