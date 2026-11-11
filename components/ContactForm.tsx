'use client'

import { useState } from 'react'
import { buttonClass, ButtonArrow } from './ui/ButtonLink'

const EMAIL = 'umarfarooq6618@gmail.com'
const PHONE_DISPLAY = '+92 341 5168660'
const PHONE_E164 = '+923415168660'

const contactItems = [
  {
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <path d="M4 6h16v12H4zM4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    label: 'Call',
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
    icon: (
      <path
        d="M6.6 3.5h3l1.5 4-2 1.3a11 11 0 0 0 6.1 6.1l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: 'WhatsApp',
    value: PHONE_DISPLAY,
    href: `https://wa.me/${PHONE_E164.replace('+', '')}`,
    icon: (
      <>
        <path
          d="M4.5 19.5l1.1-3.9A8 8 0 1 1 8.6 18.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 8.6c.2-.4.5-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .4-.1.6l-.4.5c.5 1 1.3 1.8 2.3 2.3l.5-.4c.2-.1.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .2 0 .5-.4.7-.5.3-1.2.5-2 .2a8 8 0 0 1-4.4-4.4c-.3-.8-.1-1.5.2-2Z"
          fill="currentColor"
        />
      </>
    ),
  },
  {
    label: 'Location',
    value: 'Islamabad, Pakistan',
    href: 'https://maps.google.com/?q=Islamabad,Pakistan',
    icon: (
      <>
        <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
]

const emptyForm = { fullName: '', email: '', phoneNumber: '', message: '' }

const inputClass =
  'w-full rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none border border-black/15 bg-white px-4 py-3.5 text-(--primary) placeholder:text-black/35 transition-colors duration-300 focus:border-(--primary) focus:outline-none'
const labelClass = 'mb-2 block text-sm font-semibold text-(--primary)'

export default function ContactForm() {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.error || 'Failed to send message')

      setStatus('sent')
      setFormData(emptyForm)
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="mx-auto grid max-w-350 gap-10 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* Contact details */}
        <div className="flex flex-col gap-4">
          {contactItems.map((item) => {
            const external = item.href.startsWith('http')
            return (
              <a
                key={item.label}
                href={item.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group relative isolate flex items-center gap-5 overflow-hidden rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-black/10 bg-[#f6f6f6] p-5 transition-colors duration-500 ease-out before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-(--primary) before:transition-transform before:duration-500 before:ease-out before:content-[''] hover:border-(--primary) hover:before:scale-x-100 md:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/15 bg-white text-(--primary) transition-colors duration-500">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    {item.icon}
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-black/45 transition-colors duration-500 group-hover:text-white/60">
                    {item.label}
                  </span>
                  <span className="mt-1 block truncate text-base font-semibold text-(--primary) transition-colors duration-500 group-hover:text-white md:text-lg">
                    {item.value}
                  </span>
                </span>
                <span className="text-(--primary) transition-all duration-500 group-hover:rotate-45 group-hover:text-white">
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
                  </svg>
                </span>
              </a>
            )
          })}

          <p className="section-description mt-2 text-black/60">
            Usually replies within 24 hours, Monday to Saturday.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-tl-none rounded-tr-4xl rounded-bl-4xl rounded-br-none border border-black/10 bg-[#f6f6f6] p-6 md:p-10"
        >
          <h2 className="text-2xl font-bold text-(--primary) md:text-3xl">Send a message</h2>
          <p className="section-description mt-2 text-black/60">Tell me a little about your project.</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={labelClass}>Full Name *</label>
              <input id="fullName" name="fullName" type="text" required autoComplete="name" value={formData.fullName} onChange={handleChange} className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email *</label>
              <input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="phoneNumber" className={labelClass}>
                Phone / WhatsApp <span className="font-normal text-black/40">(optional)</span>
              </label>
              <input id="phoneNumber" name="phoneNumber" type="tel" autoComplete="tel" value={formData.phoneNumber} onChange={handleChange} className={inputClass} placeholder="+92 300 1234567" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className={labelClass}>Message *</label>
              <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="What are you looking to build?" />
            </div>
          </div>

          {status === 'error' && (
            <p role="alert" className="mt-5 text-sm font-medium text-red-600">{error}</p>
          )}
          {status === 'sent' && (
            <p role="status" className="mt-5 rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none border border-(--primary) bg-white px-4 py-3 text-sm font-semibold text-(--primary)">
              Thanks! Your message has been sent. I&apos;ll get back to you soon.
            </p>
          )}

          <button type="submit" disabled={status === 'sending'} className={buttonClass('primary', 'mt-8 w-full disabled:cursor-not-allowed disabled:opacity-60')}>
            <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
            <ButtonArrow />
          </button>
        </form>
      </div>
    </section>
  )
}
