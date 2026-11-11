export const GET_ABOUT_US_EDUCATION = `*[_type == "siteAboutUsEducation"][0]{
  sectionTitle,
  cards[]{
    yearRange,
    title,
    subtitle
  }
}`

export default GET_ABOUT_US_EDUCATION
