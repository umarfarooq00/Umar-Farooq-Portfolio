import type React from 'react'
import type { OurServicesProps } from '../types/type'
import SmartLink from './ui/SmartLink'

// Whole card is a link when the service has one (internal links change page without reload)
function CardWrapper({ href, className, children }: { href?: string; className: string; children: React.ReactNode }) {
  return href ? (
    <SmartLink href={href} className={className}>{children}</SmartLink>
  ) : (
    <div className={className}>{children}</div>
  )
}

export default function OurServices({
  data,
}: { data?: OurServicesProps | null } = {}) {
  const services = data?.services ?? [];
  const backgroundImage = data?.backgroundImage?.asset?.url;
  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <section
      id="our-services"
      className="bg-[#171914] text-white  py-16 md:py-25 bg-center bg-cover"
      style={sectionStyle}
    >
      <div className="max-w-350 mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block h-0.5 w-14 bg-white"></span>
            {data?.sectionSubtitle && (
              <p className=" text-base md:text-lg text-[#d8d8d8]">
                {data.sectionSubtitle}
              </p>
            )}
          </div>
          {data?.sectionTitle && (
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              {data.sectionTitle}
            </h2>
          )}
        </div>

        <div className="space-y-6">
          {services.map((service, index) => {
            const href = service.link?.href;

            return (
            <CardWrapper
              key={service.title || index}
              href={href}
              className={`group relative isolate flex flex-col gap-4 overflow-hidden rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-[#2f2f2f] bg-[#090909] p-6 transition-colors duration-500 ease-out hover:border-white/70 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_220px] lg:items-center lg:gap-10 lg:px-8 ${href ? "cursor-pointer" : ""}`}
            >
              {/* Soft light sweep on hover (purely visual, doesn't affect layout) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-linear-to-r from-white/[0.07] via-white/2 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
              />

              {/* Number + title */}
              <div className="flex items-center gap-6">
                <span className="shrink-0 text-sm font-semibold tracking-[0.2em] text-white/40 transition-colors duration-500 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
                  {service.title}
                </h3>
              </div>

              {/* Description (fixed column, never moves) */}
              <p className="section-description text-[#a8a8a8] transition-colors duration-500 group-hover:text-[#cfcfcf]">
                {service.description}
              </p>

              {/* Action: fixed-width column so hover never shifts the rest */}
              <div className="flex lg:justify-end">
                {service.link?.label && href ? (
                  <span className="inline-flex items-center font-semibold text-white">
                    {/* Arrow circle: fixed size, never shrinks */}
                    <span
                      aria-hidden="true"
                      className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full border border-white text-base leading-none text-white transition-all duration-500 ease-out group-hover:rotate-45 group-hover:bg-white group-hover:text-black"
                    >
                      ↗
                    </span>
                    {/* Label: width follows the text; on desktop it expands on hover, on mobile it's always visible */}
                    <span className="ml-3 overflow-hidden whitespace-nowrap transition-all duration-500 ease-out lg:ml-0 lg:max-w-0 lg:opacity-0 lg:group-hover:ml-3 lg:group-hover:max-w-45 lg:group-hover:opacity-100">
                      {service.link.label}
                    </span>
                  </span>
                ) : null}
              </div>
            </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
