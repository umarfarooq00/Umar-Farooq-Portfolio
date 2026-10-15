import React from 'react'
import type { EducationSectionProps } from '../types/type'

export default function EducationSection({
  sectionTitle,
  sectionSubtitle,
  description,
  cards,
}: EducationSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#000000] to-[#000000cf] py-16 text-white">
      <div className="max-w-[1150px] px-5 mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3">
            <span className="block h-0.5 w-14 bg-white" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff]">
              {sectionTitle}
            </h2>
          </div>
          {/* {sectionSubtitle ? (
            <span className="mt-4 inline-flex items-center rounded-full bg-[#ef4444] px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-white">
              {sectionSubtitle}
            </span>
          ) : null} */}
          {/* {description ? (
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300">
              {description}
            </p>
          ) : null} */}
        </div>

        <div className="relative">
          <div className=" absolute inset-y-0 left-1/2 w-px bg-white/10" />
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr]">
            {cards?.map((card, index) => {
              const isRight = index % 2 === 0
              const key = `${card?.title ?? 'card'}-${card?.yearRange ?? 'yr'}-${index}`
              return (
                <React.Fragment key={key}>
                  {isRight ? <div className="hidden lg:block" /> : null}

                  <div className="flex items-center justify-center">
                    <div className="relative flex h-full items-center">
                      <span className="relative z-10 flex h-17 w-17 items-center justify-center rounded-full bg-[#fff] shadow-lg shadow-[#ef4444]/30 text-2xl">
                        🎓
                      </span>
                    </div>
                  </div>

                  <div className={`w-full ${isRight ? 'lg:col-start-3 lg:row-start-1' : 'lg:col-start-1 lg:row-start-2'} ${!isRight ? 'lg:mt-10' : ''}`}>
                    <div className="relative overflow-hidden rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur hover:bg-white/10 transition-all duration-300 ease-in-out">
                      <span className="inline-flex rounded-full  text-sm font-semibold uppercase tracking-[0.18em] text-[#f87171]">
                        {card.yearRange}
                      </span>
                      <h3 className="mt-6 text-2xl font-semibold text-white">
                        {card.title}
                      </h3>
                      {card.subtitle ? (
                        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-300">
                          {card.subtitle}
                        </p>
                      ) : null}
                      {/* {card.description ? (
                        <p className="mt-4 text-base leading-7 text-slate-200">
                          {card.description}
                        </p>
                      ) : null} */}
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
