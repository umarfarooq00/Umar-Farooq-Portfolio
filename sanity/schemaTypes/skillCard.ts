import {defineType} from 'sanity'

export default defineType({
  name: 'skillCard',
  title: 'Skill Card',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Card Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
  },
})
