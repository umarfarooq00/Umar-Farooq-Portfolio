export const GET_SKILL_SLIDER = `*[_type == "siteSkillSlider"][0]{
  sectionTitle,
  sectionSubtitle,
  cards[]{
    heading,
    percent,
    image{
      asset->,
      hotspot
    }
  }
}`

export default GET_SKILL_SLIDER
