export const GET_ABOUT_US_EDUCATION = `*[_type == "siteAboutUsEducation"][0]{
  sectionTitle,
  sectionSubtitle,
  description,
  cards[]{
    yearRange,
    title,
    subtitle,
    description
  }
}`

export default GET_ABOUT_US_EDUCATION
