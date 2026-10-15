import type { WorkExperienceProps } from '../types/type'
import { urlFor } from '../sanity/lib/image'

export default function WorkExperience({ sectionTitle, sectionSubtitle, description, cards = [], backgroundImage }: WorkExperienceProps) {
  const bgUrl = backgroundImage?.asset?.url ?? (backgroundImage ? urlFor(backgroundImage as any).width(1600).url() : undefined)

  return (
    <section
      className="relative overflow-hidden bg-[#020202] py-20"
      style={
        bgUrl
          ? {
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="relative z-10 xl:max-w-[1400px] max-w-[900px] mx-auto px-5">
        <div className="text-center mb-16">
          {sectionSubtitle ? (
            <p className="text-sm font-semibold tracking-[0.35em] uppercase text-[#ff2f2f]">
              {sectionSubtitle}
            </p>
          ) : null}
          <div className="inline-flex items-center gap-3">
            <span className="block h-0.5 w-14 bg-white"></span>
            <h2 className="text-[26px] md:text-4xl lg:text-5xl font-bold text-[#fff]">
            {sectionTitle ?? 'Experience'}
          </h2>
          </div>
          {description ? (
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 sm:gap-x-8 sm:gap-y-12 grid-cols-1 xl:grid-cols-2">
          {cards.map((card, index) => (
            <article
              key={index}
              className="relative overflow-hidden sm:px-8 px-5 sm:py-10 py-8 group cursor-pointer "
            >
              <div className="flex h-full sm:ml-auto rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none absolute w-[85%] sm:w-[70%] inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300 ease-in-out " />
              <div className="relative flex  gap-5 h-full sm:flex-row flex-col sm:items-center">
                <div>
                  <p className="sm:text-right font-black leading-none text-slate-500 opacity-20 sm:text-[70px] text-[55px] gorup-hover:text-white group-hover:opacity-100 transition-all ease-in-out duration-300">
                   {card.year}
                  </p>
                  <p className="mt-2 text-base uppercase tracking-[0.32em] sm:text-right text-white">{card.dateRange}</p>
                </div>
                <div className="text-left flex flex-1 flex-col justify-center">
                  <p className="text-2xl font-semibold text-white">{card.title}</p>
                  <div className="mt-3">
                    <p className="text-base font-semibold text-slate-300">{card.company}</p>
                    {card.companyUrl ? (
                      <a
                        href={card.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block text-sm text-slate-400 hover:text-white"
                      >
                        {card.companyUrl.replace(/^https?:\/\//, '')}
                      </a>
                    ) : null}
                  </div>
                  
                  {card.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {card.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
