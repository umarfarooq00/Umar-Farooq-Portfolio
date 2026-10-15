"use client"

import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { urlFor } from '../sanity/lib/image'
import { client } from '../sanity/lib/client'
import { GET_SKILL_SLIDER } from '../sanity/queries/getskillslider'
import type { SkillSliderProps, SkillSlideCard } from '../types/type'

const initialsFromText = (text?: string) => {
  if (!text) return 'SK'
  return text
    .split(' ')
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')
    .slice(0, 2)
}

export default function SkillSlider({ data }: { data?: SkillSliderProps } = {}) {
  const [sanityData, setSanityData] = useState<SkillSliderProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const result = await client.fetch(GET_SKILL_SLIDER)
        setSanityData(result)
        setError(null)
      } catch (err) {
        console.error('Error fetching skill slider data:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch data')
        setSanityData(null)
      } finally {
        setIsLoading(false)
      }
    }
    if (!data) {
      fetchData()
    }
  }, [data])
  const displayData = data || sanityData
  const sectionTitle = displayData?.sectionTitle ?? ''
  const sectionSubtitle = displayData?.sectionSubtitle ?? ''
  const cards = displayData?.cards ?? []

  return (
    <section className="bg-[#fff] py-10">
      <div className=" mx-auto px-4">
      
        <Splide
          options={{
            type: 'loop',
            perPage: 8,
            perMove: 1,
            gap: '20px',
            autoplay:true,
            easing: 'linear',
            interval: 1800,
            speed: 3000,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: true,
            drag: 'free',
            snap: true,
            arrows: false,
            pagination: false,
            breakpoints: {
              1500: { perPage: 6 },
              1280: { perPage: 5 },
              900: { perPage: 3 },
              640: { perPage: 2 },
            },
          }}
          aria-label="Skill card slider"
        >
          {cards.map((card: SkillSlideCard, index: number) => (
            <SplideSlide key={`${card.heading ?? 'card'}-${index}`}>
              <div className=" rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none border border-slate-200 bg-white px-5 sm:pt-10 pt-5 sm:pb-10 pb-10 transition-all ease-in-out duration-300 flex items-center justify-center flex-col text-center">
                <div className="mx-auto mb-5 sm:h-[100px] h-[80px] sm:max-w-[100px] max-w-[80px] w-full overflow-hidden rounded-full bg-[#f3f3f3] flex items-center justify-center">
                  {card.image?.asset?.url ? (
                    <img
                      src={urlFor(card.image).width(73).height(73).url()}
                      alt={card.heading ?? 'Skill image'}
                      className="sm:h-[55px] h-[40px] sm:w-[55px] w-[40px] object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[var(--primary)] text-white text-2xl font-bold">
                      {initialsFromText(card.heading)}
                    </div>
                  )}
                </div>
                <p className="text-[32px] font-[700] leading-none text-[var(--primary)]">
                  {card.percent ?? '100%'}
                </p>
                <p className="mt-1 text-xl font-[400] text-gray-500">
                  {card.heading ?? 'Skill'}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}
