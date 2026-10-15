export const GET_VIDEO = `*[_type == "siteVideo"][0]{
  sectionTitle,
  sectionSubtitle,
  poster{asset->{url}},
  backgroundImage{asset->{url}},
  videoUrl,
  videoFile{asset->{url}}
}`

export default GET_VIDEO
