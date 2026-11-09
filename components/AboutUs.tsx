import { urlFor } from '../sanity/lib/image'
import type { AboutUsProps } from '../types/type'
import ButtonLink from './ui/ButtonLink'

export default function AboutUs({
  title,
  description,
  experienceText,
  image,
  link,
}: AboutUsProps) {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-350 px-4">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Portrait with offset outline frame + floating experience badge */}
          {image ? (
            <div className="relative mx-auto w-full max-w-110 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-tl-none rounded-tr-[40px] rounded-bl-[40px] rounded-br-none border border-(--primary) md:translate-x-5 md:translate-y-5"
              />
              <div className="group relative aspect-4/5 overflow-hidden rounded-tl-none rounded-tr-[40px] rounded-bl-[40px] rounded-br-none bg-(--primary)">
                <img
                  src={urlFor(image).width(880).height(1100).url()}
                  alt={title || 'About image'}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {experienceText ? (
                <div className="absolute -bottom-8 right-4 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-(--primary) bg-white px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:-right-6 md:px-7 md:py-6">
                  <p className="text-5xl font-bold leading-none text-(--primary) md:text-6xl">
                    {experienceText}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/60">
                    Years Experience
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Content */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="block h-0.5 w-14 bg-black" />
              <p className="text-base font-semibold text-black md:text-lg">About Me</p>
            </div>
            {title ? (
              <h2 className="text-4xl font-bold tracking-tight text-(--primary) md:text-5xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="section-description mt-6 text-black/75">{description}</p>
            ) : null}
            {link?.label && link?.href ? (
              <div className="mt-10">
                <ButtonLink href={link.href} variant="primary">
                  {link.label}
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
