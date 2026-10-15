export const GET_OUR_SERVICES = `*[_type == "siteOurServices"][0]{
  sectionTitle,
  sectionSubtitle,
  backgroundImage{asset->{url}},
  services[]{
    title,
    description,
    link{label, href}
  }
}`

export default GET_OUR_SERVICES
