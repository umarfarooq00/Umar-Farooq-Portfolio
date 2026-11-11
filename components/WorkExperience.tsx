import type { WorkExperienceProps } from '../types/type'

/** Work experience: equal-height cards in a 2-column grid, dark section. */
export default function WorkExperience({ sectionTitle, cards = [] }: WorkExperienceProps) {
  const items = cards.filter(Boolean)
  if (!items.length) return null

  return (
    <section className="bg-[#0a0a0a] py-16 text-white md:py-24">
      <div className="mx-auto max-w-350 px-4">
        <div className="mb-14 text-center md:mb-16">
          <div className="flex items-center justify-center gap-4">
            <span className="block h-0.5 w-14 bg-white" />
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">{sectionTitle || 'Experience'}</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((card, index) => (
            <article
              key={`${card.title ?? 'job'}-${index}`}
              className="group relative isolate flex h-full flex-col overflow-hidden rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-white/10 bg-white/3 p-6 transition-colors duration-500 ease-out hover:border-white/60 md:p-8"
            >
              {/* Soft light sweep on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-linear-to-r from-white/8 via-white/2 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
              />

              {/* Top row: date + outlined year */}
              <div className="flex items-start justify-between gap-4">
                {card.dateRange ? (
                  <span className="mt-1 inline-flex rounded-tl-none rounded-tr-md rounded-bl-md rounded-br-none border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    {card.dateRange}
                  </span>
                ) : (
                  <span />
                )}
                {card.year ? (
                  <span
                    aria-hidden="true"
                    className="text-4xl leading-none font-bold tracking-tighter text-transparent transition-all duration-500 md:text-5xl"
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}
                  >
                    {card.year}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-8 text-xl font-bold text-white md:text-2xl">{card.title}</h3>
              {card.company ? <p className="mt-2 text-base font-semibold text-white/70">{card.company}</p> : null}

              {card.companyUrl ? (
                <a
                  href={card.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {card.companyUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
                  </svg>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
