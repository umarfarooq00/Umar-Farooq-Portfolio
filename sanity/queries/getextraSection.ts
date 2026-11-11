export const GET_EXTRA_SECTION = `*[_type == "siteExtraSection"][0]{
  sectionTitle,
  sectionSubtitle,
  description,
  primaryCta{label, href},
  contactItems[]{label}
}`

export default GET_EXTRA_SECTION
