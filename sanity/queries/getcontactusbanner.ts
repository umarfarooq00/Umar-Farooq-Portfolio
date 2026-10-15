export const GET_CONTACT_US_BANNER = `*[_type == "siteContactUsBanner"][0]{
  sectionHeading,
  sectionSubtitle,
  cards[]{
    heading,
    description,
    image{
      asset->,
      hotspot
    }
  }
}`

export default GET_CONTACT_US_BANNER
