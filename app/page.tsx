import Banner from '@/components/Banner'
import MarqueeSection from '@/components/MarqueeSection'
import SkillSlider from '@/components/SkillSlider'
import AboutUs from '@/components/AboutUs'
import OurServices from '@/components/OurServices'
import OurProjects from '@/components/OurProjects'
import Allprojects from '@/components/Allprojects'
import ContactForm from '@/components/ContactForm'
import ExtraSection from '@/components/ExtraSection'
import TestimonialSection from '@/components/TestimonialSection'
import VideoSection from '@/components/VideoSection'
import { client } from '../sanity/lib/client'
import GET_BANNER from '../sanity/queries/getbanner'
import GET_FOOTER from '../sanity/queries/getfooter'
import GET_SKILL_SLIDER from '../sanity/queries/getskillslider'
import GET_ABOUT_US from '../sanity/queries/getaboutus'
import GET_OUR_SERVICES from '../sanity/queries/getourservices'
import GET_OUR_PROJECTS from '../sanity/queries/getourprojects'
import GET_ALL_PROJECTS from '../sanity/queries/getallprojects'
import GET_MARQUEE from '../sanity/queries/getmarquee'
import GET_EXTRA_SECTION from '../sanity/queries/getextraSection'
import GET_TESTIMONIALS from '../sanity/queries/gettestimonials'
import GET_VIDEO from '../sanity/queries/getvideo'
import type { AboutUsProps, AllProjectsProps, BannerProps, ExtraSectionProps, OurProjectsProps, OurServicesProps, SkillSliderProps, MarqueeProps, TestimonialProps, VideoProps } from '@/types/type'

export default async function Home() {
  const bannerData = await client.fetch<BannerProps>(GET_BANNER)
  const marqueeData = await client.fetch<MarqueeProps>(GET_MARQUEE)
  const footerData = await client.fetch(GET_FOOTER)
  const aboutData = await client.fetch<AboutUsProps>(GET_ABOUT_US)
  const skillSliderData = await client.fetch<SkillSliderProps>(GET_SKILL_SLIDER)
  const testimonialData = await client.fetch<TestimonialProps>(GET_TESTIMONIALS)
  const videoData = await client.fetch<VideoProps>(GET_VIDEO)
  const ourServicesData = await client.fetch<OurServicesProps>(GET_OUR_SERVICES)
  const ourProjectsData = await client.fetch<OurProjectsProps>(GET_OUR_PROJECTS)
  const allProjectsData = await client.fetch<AllProjectsProps>(GET_ALL_PROJECTS)
  const extraSectionData = await client.fetch<ExtraSectionProps>(GET_EXTRA_SECTION)

  return (
    <main>
      <Banner
        pretitle={bannerData?.pretitle}
        title={bannerData?.title}
        headingLines={bannerData?.headingLines}
        description={bannerData?.description}
        primaryCta={bannerData?.primaryCta}
        secondaryCta={bannerData?.secondaryCta}
        socialLinks={bannerData?.socialLinks || footerData?.socialLinks}
        image={bannerData?.image}
        secondaryImage={bannerData?.secondaryImage}
      />
      <SkillSlider data={skillSliderData} />
      <AboutUs
        title={aboutData?.title}
        description={aboutData?.description}
        experienceText={aboutData?.experienceText}
        image={aboutData?.image}
        link={aboutData?.link}
      />
      <OurServices data={ourServicesData} />
      <OurProjects data={ourProjectsData} />
      {/* <Allprojects data={allProjectsData} /> */}
      <MarqueeSection items={marqueeData?.items} />
      <TestimonialSection data={testimonialData ?? undefined} />
      <ContactForm />
      <VideoSection data={videoData ?? undefined} />
       <ExtraSection data={extraSectionData ?? undefined} />
    </main>
  )
}
