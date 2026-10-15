export const GET_ALL_SERVICES = `*[_type == "siteAllServices"][0]{
  sectionTitle,
  sectionSubtitle,
  backgroundImage{asset->{url}},
  services[]{
    title,
    description
  }
}`

export default GET_ALL_SERVICES
