'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    country: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        city: '',
        country: '',
        subject: '',
        message: '',
      })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-gray-300 lg:py-20 py-16">
      <div className="max-w-[1400px] mx-auto px-4 ">
        <div className="flex justify-center lg:flex-row flex-col gap-10 ">
          <div className="mb-10 lg:w-[40%] flex flex-col lg:justify-start lg:items-start items-center lg:text-left text-center justify-center">
            <div className="flex items-center  gap-4 lg:mb-10 mb-4"><span className="block h-0.5 w-14 bg-black"></span><p className=" text-base md:text-lg text-black">Get in touch</p></div>
            <h2 className="text-4xl lg:text-7xl font-bold text-[#0f0e0e]">Let’s Contact!</h2>
            <p className="mt-4 text-[#0f0e0e] text-base md:text-lg max-w-[600px]">
              I am always open to discussing new projects, creative ideas, or opportunities to be a part of your vision. Feel free to reach out through.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lg:w-[60%] space-y-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-base font-bold text-[#0f0e0e] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-bold text-[#0f0e0e] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-base font-bold text-[#0f0e0e] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-base font-bold text-[#0f0e0e] mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="Your city"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-base font-bold text-[#0f0e0e] mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="Your country"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-base font-bold text-[#0f0e0e] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-bold text-[#0f0e0e] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-black rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent resize-none"
                placeholder="Your message"
              />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer w-full py-3 px-6 bg-[#0f0e0e] text-white rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none font-semibold hover:opacity-90 transition-all ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Submit Message'}
            </button>
          </form>
        </div>
      </div>
      {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106281.69750266711!2d73.08678170711156!3d33.649308804120714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1781614697432!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full md:h-[450px] h-[300px] mt-10"
        ></iframe>
      </div> */}
    </section>
  )
}
