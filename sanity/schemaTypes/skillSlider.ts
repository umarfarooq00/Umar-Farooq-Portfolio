import {defineType} from 'sanity'

export default defineType({
  name: 'siteSkillSlider',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'cards',
      title: 'Skills',
      description:
        'Add a skill and pick it from the dropdown. Used by the homepage Skills Slider and the Tech & Tools page.',
      type: 'array',
      of: [{type: 'skillCard'}],
    },
  ],
  preview: {
    prepare: () => ({title: 'Skills'}),
  },
})
