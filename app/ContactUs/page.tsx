import React from 'react'
import ContactUsBanner from '../../components/ContactUsBanner'
import ContactForm from '../../components/ContactForm'

export default function Page() {
  return (
    <main>
      <ContactUsBanner />
      
      <ContactForm />
      <section>
        <div className="">
          <iframe
          className="w-full sm:h-[450px] h-[300px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212644.89173286842!2d72.92130013665992!3d33.61629289872426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1785960671108!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>
    </main>
  )
}
