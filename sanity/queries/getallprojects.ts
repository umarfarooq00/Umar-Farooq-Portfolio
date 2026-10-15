export const GET_ALL_PROJECTS = `*[_type == "siteAllProjects"][0]{
  sectionTitle,
  sectionSubtitle,
  backgroundImage {
    asset->{_id, url},
    hotspot
  },
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
}`

export default GET_ALL_PROJECTS
