"use client"

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import type { TestimonialProps } from '@/types/type'

type TestimonialSectionProps = {
  data?: TestimonialProps
}

export default function TestimonialSection({ data }: TestimonialSectionProps) {
  if (!data?.testimonials?.length) {
    return null
  }

  const testimonialItems = data.testimonials
  const title = data.sectionTitle ?? 'Client reviews that build trust'
  const subtitle = data.sectionSubtitle ??
    'Explore real feedback from clients who have experienced my work and trusted my process. Each testimonial reflects my commitment to quality.'
  const rating = data.rating ?? 4.9
  const reviewCount = data.reviewCount ?? 3000
  const formattedReviewCount = reviewCount?.toLocaleString ? reviewCount.toLocaleString('en-US') : String(reviewCount)

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-350 mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block h-0.5 w-14 bg-white"></span>
            <p className=" text-base md:text-lg text-[#d8d8d8]">
              Our Testimonials
            </p>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl  font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="section-description mx-auto mt-4 max-w-3xl text-slate-300">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          <Splide
            options={{
              type: 'loop',
              perPage: 3,
              perMove: 1,
              gap: '32px',
              pagination: false,
              arrows: false,
              autoplay: true,
              interval: 4500,
              pauseOnHover: true,
              pauseOnFocus: true,
              resetProgress: false,
              // Smooth, gentle slide transition
              speed: 1200,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              rewindSpeed: 1200,
              waitForTransition: true,
              drag: true,
              flickPower: 300,
              updateOnMove: true,
              breakpoints: {
                1280: { perPage: 2 },
                900: { perPage: 1 },
              },
            }}
            aria-label="Client testimonials"
          >
            {testimonialItems.map((item, index) => (
              <SplideSlide key={`${item.name}-${index}`}>
                <div className="flex h-full flex-col rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-white/10 bg-white/5 p-6 md:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.3)] transition-colors duration-500 hover:border-white/25">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 24"
                    className="mb-4 h-6 w-8 shrink-0 text-white/30"
                    fill="currentColor"
                  >
                    <path d="M0 24V14.4C0 6.4 4.4 1.6 12.4 0l1.2 2.8C9.2 4.2 7 6.8 6.8 10.4H12V24H0Zm18 0V14.4C18 6.4 22.4 1.6 30.4 0l1.2 2.8C27.2 4.2 25 6.8 24.8 10.4H30V24H18Z" />
                  </svg>
                  <p className="mb-5 text-lg font-normal leading-relaxed text-white/90 md:text-xl">
                    {/* Strip surrounding quotes from CMS text so they don't double up with the icon */}
                    {item.quote?.trim().replace(/^["“”']+|["“”']+$/g, '')}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-white md:text-lg">{item.name}</p>
                      <p className="mt-0.5 text-sm text-slate-400">{item.role}</p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 overflow-hidden">
                      {item.image?.asset?.url ? (
                        <img
                          src={item.image.asset.url}
                          alt={item.name ?? 'testimonial image'}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-xl">“</span>
                      )}
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row items-center justify-center">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <div className="inline-flex items-center gap-2 text-sm text-slate-300">
              <span className="font-semibold text-white">{rating?.toFixed ? rating.toFixed(1) : rating}</span>
              <span className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className="h-4 w-4 text-[#ff5722]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.374 2.453a1 1 0 00-.364 1.118l1.287 3.947c.3.921-.755 1.688-1.538 1.118l-3.375-2.453a1 1 0 00-1.175 0l-3.374 2.453c-.782.57-1.838-.197-1.538-1.118l1.287-3.947a1 1 0 00-.364-1.118L2.39 9.375c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.948z" />
                  </svg>
                ))}
              </span>
            </div>
            <p className="text-sm font-semibold text-white">Over {formattedReviewCount} Reviews</p>
          </div>
        </div>
      </div>
    </section>
  )
}
