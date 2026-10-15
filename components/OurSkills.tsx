import React from 'react'
import { client } from '../sanity/lib/client'
import GET_SKILL_SLIDER from '../sanity/queries/getskillslider'
import { urlFor } from '../sanity/lib/image'

type Card = {
  heading?: string
  percent?: number
  image?: any
}

export default async function OurSkills() {
  const data = await client.fetch(GET_SKILL_SLIDER)
  const title = data?.sectionTitle || 'MY SKILLS'
  const subtitle = data?.sectionSubtitle || 'EXPERT IN'
  const cards: Card[] = data?.cards || []

  return (
    <section className="text-white bg-gradient-to-b from-[#000000] to-[#000000cf]">
      <div className='h-[100px] [clip-path:polygon(0_0,100%_0,100%_45%,0_100%)] bg-gray-300 '></div>
      <div className=" py-20">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{title}</h2>
          <div className="mt-2 flex items-center justify-center gap-3">
            <div className="w-20 h-0.5 bg-white/60" />
            <span className="text-sm text-amber-400 font-semibold">{subtitle}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 gap-4">
          {cards.map((c, i) => {
            const imgUrl = c?.image ? urlFor(c.image.asset).width(120).auto('format').url() : null
            const label = c?.heading || `Skill ${i + 1}`
            return (
              <div
                key={label + i}
                className="flex flex-col items-center justify-center group bg-black/40 border border-gray-700 rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none p-6 shadow-lg hover:scale-105 transform transition-all ease-in-out duration-400 cursor-pointer">
                <div className="sm:w-16 w-14 sm:h-16 h-14 mb-4 flex items-center justify-center">
                  {imgUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={imgUrl} alt={label} className=" max-w-full w-full max-h-full object-contain" />
                    // grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300
                  ) : (
                    <div className="w-12 h-12 bg-gray-800 rounded" />
                  )}
                </div>
                <div className="sm:text-xl text-base text-center tracking-widest uppercase">{label}</div>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </section>
  )
}
