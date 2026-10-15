export const GET_ABOUT_US = `*[_type == "siteAboutUs"][0]{
  title,
  description,
  experienceText,
  image,
  link{label, href}
}`

export default GET_ABOUT_US
