import {defineType} from 'sanity'

export default defineType({
  name: 'siteMarquee',
  title: 'Site Marquee',
  type: 'document',
  fields: [
    {
      name: 'items',
      title: 'Marquee Items',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      description: 'Add marquee text items shown in the homepage marquee section',
      validation: (Rule) => Rule.unique(),
    },
  ],
})
