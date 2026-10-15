import { urlFor } from '../sanity/lib/image'
import type { AboutUsProps } from '../types/type'

export default function AboutUs({
  title,
  description,
  experienceText,
  image,
  link,
}: AboutUsProps) {
  return (
    <section className="relative overflow-hidden bg-white py-10">
      <div className='max-w-[1400px] px-5 mx-auto'>
          <div>
            <div className="flex items-center gap-3">
                <span className="block h-0.5 w-14 bg-black" />
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#0f172a]">
                {title}
                </h2>
            </div>
            <p className="xl:text-[30px] md:text-[25px] text-[20px] leading-[1.2] text-[var(--primary)] font-[600] sm:mt-[50px] mt-[30px] mb-[35px]">
            {description}
            </p>
          </div>
            <div className='flex md:flex-row flex-col gap-10'> 
                <div className="md:w-[50%] xl:pl-30 md:pl-20 pl-[55px] relative">
                    <svg className='absolute top-0 left-0' xmlns="http://www.w3.org/2000/svg" width="45" height="339" viewBox="0 0 45 339" fill="none">
                    <path d="M1 1V338C8.90805 305.345 20 295 44 284.711" stroke="#0F0E0E" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                    <div className="lg:mb-20 mb-10">
                        <p className="lg:text-[200px] text-[140px] lg:mb-[50px] mb-[30px] leading-none font-bold text-[#000]">
                         {experienceText}
                        </p>
                        <p className='xl:text-[70px] lg:text-[60px] md:text-[43px] sm:text-[38px] text-[34px] leading-none font-bold text-[var(--primary)]'>Years Experience</p>
                    </div>
                    {link?.label && link?.href ? (
                        <a
                        href={link.href}
                        className="inline-flex items-center justify-center rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none bg-[var(--primary)] p-2 max-w-[160px] sm:h-[60px] h-[50px] w-full text-[18px] font-semibold text-white transition hover:opacity-95"
                        >
                        {link.label}
                        <span className="ml-2 text-white">↗</span>
                        </a>
                    ) : null}
                </div>
                <div className="relative h-fit md:w-[50%] overflow-hidden  bg-[var(--primary)] pt-3  rounded-tl-none rounded-tr-[40px] rounded-bl-[40px] rounded-br-none">
                {image ? (
                <div className=" overflow-hidden ">
                    <img
                    src={urlFor(image).width(960).height(960).url()}
                    alt={title || 'About image'}
                    className="h-full w-full object-cover"
                    />
                </div>
                ) : null}
            </div>

          </div>
            
      </div>
    </section>
  )
}
