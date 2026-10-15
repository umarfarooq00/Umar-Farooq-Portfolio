import type { OurServicesProps } from '../types/type'

export default function OurServices({ data }: { data?: OurServicesProps } = {}) {
  const services = data?.services ?? []
  const backgroundImage = (data as any).backgroundImage?.asset?.url
  const sectionStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined

  return (
    <section id="our-services" className="bg-[#171914] text-white  py-16 md:py-25 bg-center bg-cover" style={sectionStyle}>
      <div className="max-w-[1400px] mx-auto px-4">
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
          {services.map((service, index) => (
            <div
              key={service.title || index}
              className="group flex flex-col lg:flex-row lg:items-center justify-between lg:gap-6 gap-3 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-[#2f2f2f] bg-[#090909] p-6 transition-all ease-in-out duration-400 hover:border-[#fff] group overflow-hidden"
            >
             
                <div className="flex items-center gap-[30px] lg:max-w-[350px]  w-full">
                    <div className="shrink-0 text-[#fff] font-semibold text-[20px]">
                    {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="xl:text-2xl font-bold text-white">
                        {service.title}
                    </h3>
                </div>
                  <p className="text-base leading-7 text-[#a8a8a8] lg:max-w-[400px] xl:max-w-[500px] ">
                    {service.description}
                  </p>
                 <div className="w-[137px] ">
                    {service.link?.label && service.link?.href ? (
                        <a
                        href={service.link.href}
                        className="inline-flex items-center gap-4  text-[#000]  font-semibold text-[#fff] lg:translate-x-[105px] group-hover:translate-x-0 transition-all ease-in-out duration-400  "
                        target={/^(https?:|mailto:|tel:)/.test(service.link.href) ? '_blank' : undefined}
                        rel={/^(https?:|mailto:|tel:)/.test(service.link.href) ? 'noreferrer noopener' : undefined}
                        >
                        <span aria-hidden="true" className=" transition-all ease-in-out duration-400 group-hover:text-[#000] text-[#fff] group-hover:bg-[#fff] rounded-full border border-[#fff] w-[30px] h-[30px] flex items-center justify-center text-md">
                            ↗
                        </span>
                        <span className="md:translate-x-0  translate-x-[105px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 group-hover:visibility visible  transition-all ease-in-out duration-400">
                            {service.link.label}
                        </span>
                        
                        </a>
                    ) : null}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
