"use client"

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { getSkill, type Skill } from '../lib/skills'
import type { SkillSliderProps } from '../types/type'
import SkillIcon from './ui/SkillIcon'

export default function SkillSlider({ data }: { data?: SkillSliderProps | null } = {}) {
  // Skills picked in Sanity → icon, name and category from the catalog
  const skills = (data?.cards ?? [])
    .map((card) => getSkill(card?.skill))
    .filter((skill): skill is Skill => Boolean(skill))

  if (!skills.length) return null

  return (
    <section className="bg-white py-10">
      <div className="mx-auto px-4">
        <Splide
          options={{
            type: 'loop',
            perPage: 8,
            perMove: 1,
            gap: '20px',
            autoplay: true,
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
          aria-label="Skills"
        >
          {skills.map((skill, index) => (
            <SplideSlide key={`${skill.key}-${index}`} className="flex">
              {/* Fixed height so every card is the same size, whatever the text length */}
              <div className="group flex h-64 w-full flex-col items-center rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none border border-slate-200 bg-white px-4 pt-8 text-center transition-colors duration-500 hover:border-(--primary) sm:h-72 sm:pt-10">
                <div className="mx-auto mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#f3f3f3] text-(--primary) transition-colors duration-500 group-hover:bg-(--primary) group-hover:text-white sm:h-24 sm:w-24">
                  <SkillIcon skill={skill} className="h-9 w-9 sm:h-10 sm:w-10" />
                </div>
                <p className="line-clamp-2 text-lg leading-tight font-bold text-(--primary) sm:text-xl">{skill.label}</p>
                <p className="mt-2 line-clamp-2 text-[11px] font-semibold tracking-[0.15em] text-black/45 uppercase">
                  {skill.category}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}
