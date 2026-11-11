// Each card only stores the selected skill key; icon/name/category come from lib/skills.ts
export const GET_SKILL_SLIDER = `*[_type == "siteSkillSlider"][0]{
  cards[]{ skill }
}`

export default GET_SKILL_SLIDER
