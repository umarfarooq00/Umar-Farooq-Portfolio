import Banner from '@/components/Banner'
import MarqueeSection from '@/components/MarqueeSection'
import SkillSlider from '@/components/SkillSlider'
import AboutUs from '@/components/AboutUs'
import OurServices from '@/components/OurServices'
import OurProjects from '@/components/OurProjects'
import ExtraSection from '@/components/ExtraSection'
import TestimonialSection from '@/components/TestimonialSection'
import VideoSection from '@/components/VideoSection'
import { client } from '../sanity/lib/client'
import GET_BANNER from '../sanity/queries/getbanner'
import GET_SKILL_SLIDER from '../sanity/queries/getskillslider'
import GET_ABOUT_US from '../sanity/queries/getaboutus'
import GET_OUR_SERVICES from '../sanity/queries/getourservices'
import GET_OUR_PROJECTS from '../sanity/queries/getourprojects'
import GET_MARQUEE from '../sanity/queries/getmarquee'
import GET_EXTRA_SECTION from '../sanity/queries/getextraSection'
import GET_TESTIMONIALS from '../sanity/queries/gettestimonials'
import GET_VIDEO from '../sanity/queries/getvideo'
import type { AboutUsProps, BannerProps, ExtraSectionProps, OurProjectsProps, OurServicesProps, SkillSliderProps, MarqueeProps, TestimonialProps, VideoProps } from '@/types/type'

export default async function Home() {
  const bannerData = await client.fetch<BannerProps>(GET_BANNER)
  const marqueeData = await client.fetch<MarqueeProps>(GET_MARQUEE)
  const aboutData = await client.fetch<AboutUsProps>(GET_ABOUT_US)
  const skillSliderData = await client.fetch<SkillSliderProps>(GET_SKILL_SLIDER)
  const testimonialData = await client.fetch<TestimonialProps>(GET_TESTIMONIALS)
  const videoData = await client.fetch<VideoProps>(GET_VIDEO)
  const ourServicesData = await client.fetch<OurServicesProps>(GET_OUR_SERVICES)
  const ourProjectsData = await client.fetch<OurProjectsProps>(GET_OUR_PROJECTS)
  const extraSectionData = await client.fetch<ExtraSectionProps>(GET_EXTRA_SECTION)

  return (
    <main>
      <Banner
        pretitle={bannerData?.pretitle}
        title={bannerData?.title}
        headingLines={bannerData?.headingLines}
        description={bannerData?.description}
        primaryCta={bannerData?.primaryCta}
        cvButton={bannerData?.cvButton}
        image={bannerData?.image}
        secondaryImage={bannerData?.secondaryImage}
      />
      {/* Order alternates light / dark backgrounds.
          Keep it in sync with sanity/structure.ts → Home Page. */}
      <SkillSlider data={skillSliderData} />{/* light */}
      <OurServices data={ourServicesData} />{/* dark */}
      <AboutUs
        title={aboutData?.title}
        description={aboutData?.description}
        experienceText={aboutData?.experienceText}
        image={aboutData?.image}
        link={aboutData?.link}
      />{/* light */}
      <TestimonialSection data={testimonialData ?? undefined} />{/* dark */}
      <OurProjects data={ourProjectsData} />{/* light grey */}
      <VideoSection data={videoData ?? undefined} />{/* dark image */}
      <MarqueeSection items={marqueeData?.items} />{/* light strip */}
      <ExtraSection data={extraSectionData ?? undefined} />{/* dark */}
    </main>
  )
}
