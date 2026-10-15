const GET_OUR_PROJECT = `*[_type == "siteOurProjects" && count(tabs[].projects[slug.current == $slug]) > 0][0].tabs[].projects[slug.current == $slug][0]{
  title,
  description,
  image {
    asset->{_id, url},
    hotspot
  },
  link { label, href }
}`

export default GET_OUR_PROJECT