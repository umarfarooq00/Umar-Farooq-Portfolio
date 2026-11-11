import type { EducationSectionProps } from '../types/type'

/**
 * Education timeline.
 * Desktop: zig-zag around a centre line; every card gets its own grid row so cards never overlap.
 * Mobile: single column with the line on the left.
 */
export default function EducationSection({ sectionTitle, cards = [] }: EducationSectionProps) {
  const items = cards.filter(Boolean)
  if (!items.length) return null

  return (
    <section className="bg-[#f1f1f1] py-16 md:py-24">
      <div className="mx-auto max-w-275 px-4">
        <div className="mb-14 flex items-center justify-center gap-4 md:mb-20">
          <span className="block h-0.5 w-14 bg-black" />
          <h2 className="text-4xl font-bold tracking-tight text-(--primary) md:text-5xl">
            {sectionTitle || 'Education'}
          </h2>
        </div>

        <ol className="relative grid gap-6 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:gap-x-0 md:gap-y-8">
          {/* Timeline line */}
          <span aria-hidden="true" className="absolute top-0 bottom-0 left-5 w-px bg-black/15 md:left-1/2" />

          {items.map((card, index) => {
            const onLeft = index % 2 === 1
            return (
              <li
                key={`${card.title ?? 'edu'}-${index}`}
                className="contents"
              >
                {/* Node */}
                <span
                  aria-hidden="true"
                  style={{ gridRow: index + 1 }}
                  className="absolute left-5 hidden -translate-x-1/2 md:static md:col-start-2 md:flex md:translate-x-0 md:items-center md:justify-center"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none bg-(--primary) text-xs font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </span>

                {/* Card */}
                <div
                  style={{ gridRow: index + 1 }}
                  className={`relative pl-14 md:pl-0 ${onLeft ? 'md:col-start-1 md:pr-8' : 'md:col-start-3 md:pl-8'}`}
                >
                  {/* Mobile node */}
                  <span
                    aria-hidden="true"
                    className="absolute top-6 left-5 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none bg-(--primary) text-[11px] font-bold text-white md:hidden"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <article className="group h-full rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-black/10 bg-white p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-(--primary) hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-7">
                    {card.yearRange ? (
                      <span className="inline-flex rounded-tl-none rounded-tr-md rounded-bl-md rounded-br-none bg-(--primary) px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                        {card.yearRange}
                      </span>
                    ) : null}
                    <h3 className="mt-5 text-xl font-bold text-(--primary) md:text-2xl">{card.title}</h3>
                    {card.subtitle ? (
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/50">{card.subtitle}</p>
                    ) : null}
                  </article>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
