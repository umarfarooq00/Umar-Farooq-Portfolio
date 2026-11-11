import { client } from '../../sanity/lib/client'
import GET_ABOUT_US_BANNER from '../../sanity/queries/getaboutusbanner'
import GET_ABOUT_US_EDUCATION from '../../sanity/queries/getaboutuseducation'
import GET_WORK_EXPERIENCE from '../../sanity/queries/getworkexperience'
import AboutUsBanner from '../../components/AboutUsBanner'
import EducationSection from '../../components/EducationSection'
import WorkExperience from '../../components/WorkExperience'
import type { AboutUsBannerProps, EducationSectionProps, WorkExperienceProps } from '../../types/type'

// Server component: data is fetched on the server, so there is no "Loading..." flash.
export default async function AboutUsPage() {
  const [bannerData, educationData, workExperienceData, experienceText] = await Promise.all([
    client.fetch<AboutUsBannerProps | null>(GET_ABOUT_US_BANNER),
    client.fetch<EducationSectionProps | null>(GET_ABOUT_US_EDUCATION),
    client.fetch<WorkExperienceProps | null>(GET_WORK_EXPERIENCE),
    // Same "07+" value as the homepage "Who's Umar" section, so both stay in sync
    client.fetch<string | null>(`*[_type == "siteAboutUs"][0].experienceText`),
  ])

  return (
    <>
      {bannerData ? <AboutUsBanner {...bannerData} experienceText={experienceText ?? undefined} /> : null}
      {educationData ? <EducationSection {...educationData} /> : null}
      {workExperienceData ? <WorkExperience {...workExperienceData} /> : null}
    </>
  )
}
