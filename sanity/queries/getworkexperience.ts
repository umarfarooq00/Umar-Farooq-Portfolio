export const GET_WORK_EXPERIENCE = `*[_type == "siteWorkExperience"][0]{
  sectionTitle,
  sectionSubtitle,
  description,
  backgroundImage{asset->{url}},
  cards[]{
    year,
    title,
    company,
    companyUrl,
    dateRange,
    description
  }
}`

export default GET_WORK_EXPERIENCE
