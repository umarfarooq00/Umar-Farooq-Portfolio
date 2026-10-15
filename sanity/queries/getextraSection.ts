export const GET_EXTRA_SECTION = `*[_type == "siteExtraSection"][0]{
  sectionTitle,
  sectionSubtitle,
  description,
  backgroundImage{asset->{url}},
  primaryCta{label, href},
  contactItems[]{icon, label, href}
}`

export default GET_EXTRA_SECTION
