export const GET_VIDEO = `*[_type == "siteVideo"][0]{
  sectionTitle,
  videoFile{asset->{url}}
}`

export default GET_VIDEO
