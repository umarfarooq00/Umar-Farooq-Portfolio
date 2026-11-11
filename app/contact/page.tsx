import ContactForm from '../../components/ContactForm'

export default function Page() {
  return (
    <main>
      {/* Intro */}
      <section className="bg-white pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-350 px-4">
          <div className="mb-5 flex items-center gap-4">
            <span className="block h-0.5 w-14 bg-black" />
            <p className="text-base font-semibold text-black md:text-lg">Get in touch</p>
          </div>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-(--primary) sm:text-5xl lg:text-6xl">
            Let&apos;s build something great together.
          </h1>
          <p className="section-description mt-6 max-w-2xl text-black/70">
            A new website, a web app, an online store, or an idea you want to automate with AI? Send a message, call
            or WhatsApp me. I&apos;m always open to new projects and long-term partnerships.
          </p>
        </div>
      </section>

      <ContactForm />

      {/* Map */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-350 px-4">
          <div className="overflow-hidden rounded-tl-none rounded-tr-4xl rounded-bl-4xl rounded-br-none border border-black/10">
            <iframe
              title="Islamabad, Pakistan"
              className="block h-75 w-full grayscale transition-[filter] duration-700 hover:grayscale-0 sm:h-105"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212644.89173286842!2d72.92130013665992!3d33.61629289872426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1785960671108!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
