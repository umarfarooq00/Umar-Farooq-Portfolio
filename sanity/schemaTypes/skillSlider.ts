import {defineType} from 'sanity'

export default defineType({
  name: 'siteSkillSlider',
  title: 'Site Skill Slider',
  type: 'document',
  fields: [
    {
      name: 'cards',
      title: 'Slider Cards',
      type: 'array',
      of: [
        { type: 'skillCard' }
      ],
    },
  ],
})
