import {defineType} from 'sanity'

export default defineType({
  name: 'siteAboutUsEducation',
  title: 'About Us Education',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'cards',
      title: 'Education Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'yearRange',
              title: 'Year Range',
              type: 'string',
              description: 'Example: 2021 - 2025',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
})
