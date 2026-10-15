import type { OurServicesProps } from '../types/type'

export default function Allservices({ data }: { data?: OurServicesProps } = {}) {
  const services = data?.services ?? []
  const backgroundImage = (data as any).backgroundImage?.asset?.url
  const sectionStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined

  if (!services.length) return null

  return (
    <section id="all-services" className="bg-[#171914] text-white py-16 md:py-25 bg-center bg-cover" style={sectionStyle}>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12 flex items-center justify-center gap-4">
            <span className="block h-0.5 w-14 bg-white"></span>
          {data?.sectionTitle && (
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              {data.sectionTitle}
            </h2>
          )}
        </div>

        <div className="space-y-3">
          {services.map((service, index) => (
            <div
              key={service.title || index}
              className="group flex flex-col lg:flex-row lg:items-center justify-between lg:gap-6 gap-3 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-[#2f2f2f] bg-[#090909] p-6 transition-all ease-in-out duration-400 hover:border-[#fff] overflow-hidden"
            >
              <div className="flex items-center gap-[30px] lg:max-w-[350px] w-full">
                <div className="shrink-0 text-[#fff] font-semibold text-[20px]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="xl:text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              <p className="text-[18px] leading-7 text-[#a8a8a8] lg:max-w-[700px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
