export const GET_WORK_EXPERIENCE = `*[_type == "siteWorkExperience"][0]{
  sectionTitle,
  cards[]{
    year,
    title,
    company,
    companyUrl,
    dateRange
  }
}`

export default GET_WORK_EXPERIENCE
