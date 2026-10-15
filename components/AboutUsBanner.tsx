'use client'

import { urlFor } from '../sanity/lib/image'
import type { AboutUsBannerProps } from '../types/type'

export default function AboutUsBanner({
  pretitle,
  title,
  description,
  image,
  resume,
  resumeLabel = 'Resume',
  socialLinks,
}: AboutUsBannerProps) {
  const handleResumeDownload = () => {
    if (resume?.asset?.url) {
      const link = document.createElement('a')
      link.href = resume.asset.url
      link.download = resume.originalFilename || 'resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const getSocialIcon = (platform?: string) => {
    switch (platform?.toLowerCase()) {
      case 'github':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.733 0-9.633h3.554v1.364c.429-.66 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.506zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.768-1.71 1.959-1.71 1.19 0 1.916.759 1.932 1.71 0 .951-.742 1.71-1.976 1.71zm1.946 11.019H3.391V9.819h3.892v10.633zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        )
      case 'twitter':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z" />
          </svg>
        )
      case 'instagram':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="relative overflow-hidden !bg-white py-16 md:py-24">
      <div className="max-w-[1400px] px-5 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          
          <div className="lg:order-1 order-2">
            <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              {pretitle}
            </p>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="block h-1 w-12 md:w-16 bg-[var(--primary)] inline-block" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a]">
                {title}
              </h1>
              
            </div>

            <p className="text-base md:text-lg text-black leading-relaxed mb-8 whitespace-pre-wrap break-words">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {resume?.asset?.url && (
                <button
                  onClick={handleResumeDownload}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-6 py-3 rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none font-semibold transition-all ease-in-out duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {resumeLabel}
                </button>
              )}

              {socialLinks && socialLinks.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-6 py-3 rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none font-semibold transition-all ease-in-out duration-300"
                      title={link.platform}
                    >
                      {getSocialIcon(link.platform)}
                      <span className="capitalize">{link.platform}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Image */}   
          {image && (
            <div className="relative h-full rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none overflow-hidden">
              <img
                src={urlFor(image).width(600).height(600).url()}
                alt={title || 'Profile'}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
