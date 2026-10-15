import React from 'react'
import { client } from '../sanity/lib/client'
import GET_CONTACT_US_BANNER from '../sanity/queries/getcontactusbanner'
import { urlFor } from '../sanity/lib/image'

type ContactCard = {
  heading?: string
  description?: string
  image?: any
}

export default async function ContactUsBanner() {
  const data = await client.fetch(GET_CONTACT_US_BANNER)
  const sectionHeading = data?.sectionHeading || 'GET IN TOUCH'
  const sectionSubtitle = data?.sectionSubtitle || 'Contact Me'
  const cards: ContactCard[] = data?.cards || []

  return (
    <section className="text-black py-20">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="text-center mb-12 flex items-center justify-center gap-3">
            <span className="block h-0.5 w-14 bg-black"></span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight capitalize">{sectionHeading}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const imageUrl = card?.image ? urlFor(card.image).width(140).height(140).auto('format').url() : null
            return (
              <div
                key={`${card.heading ?? 'card'}-${index}`}
                className="rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl"
              >
                {imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={imageUrl} alt={card.heading ?? 'Contact card image'} className=" object-cover w-full h-[200px]" />
                ) : (
                  <div className="mx-auto mb-6 flex w-full  items-center justify-center rounded-full bg-white/10 text-xl text-black">?</div>
                )}

                <div className="text-center text-white m-auto absolute bottom-0 z-[2] left-0 right-0 top-0 h-fit px-6 pb-6 ">
                    <h3 className="text-2xl font-semibold mb-1">{card.heading}</h3>
                    <p className="text-base leading-6 ">{card.description}</p>
                 </div>
                 <div className='absolute top-0 w-full h-full bg-[#000000b0] z-[1]'> </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
