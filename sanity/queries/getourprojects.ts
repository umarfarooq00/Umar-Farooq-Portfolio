export const GET_OUR_PROJECTS = `*[_type == "siteOurProjects"][0]{
  sectionTitle,
  sectionSubtitle,
  tabs[] {
    _key,
    title,
    projects[] {
      title,
      "slug": slug.current,
      description,
      image {
        asset->{_id, url},
        hotspot
      },
      link { label, href }
    }
  }
}`

export default GET_OUR_PROJECTS
