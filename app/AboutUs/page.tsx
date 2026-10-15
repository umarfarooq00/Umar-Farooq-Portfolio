'use client'

import { useEffect, useState } from 'react'
import { client } from '../../sanity/lib/client'
import GET_ABOUT_US_BANNER from '../../sanity/queries/getaboutusbanner'
import GET_ABOUT_US from '../../sanity/queries/getaboutus'
import GET_ABOUT_US_EDUCATION from '../../sanity/queries/getaboutuseducation'
import GET_WORK_EXPERIENCE from '../../sanity/queries/getworkexperience'
import AboutUsBanner from '../../components/AboutUsBanner'
import AboutUs from '../../components/AboutUs'
import EducationSection from '../../components/EducationSection'
import WorkExperience from '../../components/WorkExperience'
import type {
  AboutUsProps,
  AboutUsBannerProps,
  EducationSectionProps,
  WorkExperienceProps,
} from '../../types/type'

export default function AboutUsPage() {
  const [bannerData, setBannerData] = useState<AboutUsBannerProps | null>(null)
  const [aboutData, setAboutData] = useState<AboutUsProps | null>(null)
  const [educationData, setEducationData] = useState<EducationSectionProps | null>(null)
  const [workExperienceData, setWorkExperienceData] = useState<WorkExperienceProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true)
        const [bannerResult, aboutResult, educationResult, workExperienceResult] = await Promise.all([
          client.fetch(GET_ABOUT_US_BANNER),
          client.fetch(GET_ABOUT_US),
          client.fetch(GET_ABOUT_US_EDUCATION),
          client.fetch(GET_WORK_EXPERIENCE),
        ])

        setBannerData(bannerResult)
        setAboutData(aboutResult)
        setEducationData(educationResult)
        setWorkExperienceData(workExperienceResult)
      } catch (err) {
        console.error('Error fetching about us page data:', err)
        setError('Failed to load about us data')
      } finally {
        setLoading(false)
      }
    }

    fetchPageData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (error || !bannerData || !aboutData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-red-600">{error || 'Failed to load content'}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <AboutUsBanner {...bannerData} />
      {/* <AboutUs {...aboutData} /> */}
     
      {educationData ? <EducationSection {...educationData} /> : null}
       {workExperienceData ? <WorkExperience {...workExperienceData} /> : null}
    </>
  )
}
