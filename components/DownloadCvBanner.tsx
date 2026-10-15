'use client'

import { useEffect, useState } from 'react'
import { urlFor } from '../sanity/lib/image'
import type { DownloadCvBannerProps } from '../types/type'

export default function DownloadCvBanner({
  eyebrow = 'My Resume',
  headingLines = ['Build something', 'worth remembering.'],
  description = 'Download my latest CV and learn more about my experience, skills, and the work I love to do.',
  buttonLabel = 'Download CV',
  backgroundImage,
  overlayOpacity = 0.62,
  cvFile,
}: DownloadCvBannerProps) {
  const lines = headingLines.filter(Boolean)
  const [lineIndex, setLineIndex] = useState(0)
  const [visibleLength, setVisibleLength] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    if (!lines.length) return

    const currentLine = lines[lineIndex % lines.length]
    const isComplete = visibleLength === currentLine.length
    const delay = isComplete && !isDeleting ? 1800 : isDeleting ? 45 : 85

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setVisibleLength((length) => length + 1)
      } else if (!isDeleting && isComplete) {
        setIsDeleting(true)
      } else if (isDeleting && visibleLength > 0) {
        setVisibleLength((length) => length - 1)
      } else {
        setIsDeleting(false)
        setLineIndex((index) => (index + 1) % lines.length)
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [isDeleting, lineIndex, lines, visibleLength])

  const handleDownload = async () => {
    if (!cvFile?.asset?.url || isDownloading) return

    setIsDownloading(true)
    try {
      const response = await fetch(cvFile.asset.url)
      if (!response.ok) throw new Error('Unable to download CV')

      const blobUrl = URL.createObjectURL(await response.blob())
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = cvFile.asset.originalFilename || 'cv.pdf'
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(blobUrl)
    } catch (error) {
      console.error('Error downloading CV:', error)
      window.open(cvFile.asset.url, '_blank', 'noopener,noreferrer')
    } finally {
      setIsDownloading(false)
    }
  }

  const imageUrl = backgroundImage ? urlFor(backgroundImage).width(1800).height(900).url() : undefined
  const currentLine = lines[lineIndex % lines.length] || ''

  return (
    <section
      className="relative isolate flex items-center overflow-hidden bg-[#191817] md:py-[150px] py-[100px] text-white"
      style={imageUrl ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      <div className="absolute inset-0 -z-10 bg-black" style={{ opacity: overlayOpacity }} aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,14,14,.88),rgba(15,14,14,.38),rgba(15,14,14,.6))]" aria-hidden="true" />

      <div className="page-width w-full">
        <div className="max-w-full text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#f05a3c]">{eyebrow}</p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-7xl lg:text-[80px]">
            {currentLine.slice(0, visibleLength)}
            <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-pulse bg-[#f05a3c]" aria-hidden="true" />
          </h1>
          <p className="mt-16 max-w-2xl m-auto text-center text-base leading-7 text-white/80 sm:text-xl">{description}</p>
          <button
            type="button"
            onClick={handleDownload}
            disabled={!cvFile?.asset?.url || isDownloading}
            className="mt-9 cursor-pointer inline-flex items-center gap-3 rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none bg-[#f05a3c] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#191817] disabled:cursor-not-allowed disabled:opacity-50 transition-all ease-in-out duration-300"
          >
            {isDownloading ? 'Preparing CV...' : buttonLabel}
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      </div>
    </section>
  )
}