const GET_PROJECT = `*[_type == "siteAllProjects" && count(projects[slug.current == $slug]) > 0][0].projects[slug.current == $slug][0]{
  title,
  description,
  image {
    asset->{_id, url},
    hotspot
  },
  link { label, href }
}`

export default GET_PROJECT