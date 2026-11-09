export const GET_BANNER = `*[_type == "siteBanner"][0]{
  pretitle,
  title,
  headingLines,
  description,
  image,
  secondaryImage,
  primaryCta{label, href},
  cvButton{label, "fileUrl": file.asset->url}
}`

export default GET_BANNER
