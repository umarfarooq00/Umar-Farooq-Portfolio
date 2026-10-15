import {defineType} from 'sanity'

export default defineType({
  name: 'contactUsCard',
  title: 'Contact Us Card',
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
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
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
