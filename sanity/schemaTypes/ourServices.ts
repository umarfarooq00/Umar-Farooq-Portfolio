import {defineType} from 'sanity'

export default defineType({
  name: 'siteOurServices',
  title: 'Site Our Services',
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
      type: 'text',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Optional section background image',
      options: {hotspot: true},
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Service Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Service Link',
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Link Label',
                  type: 'string',
                },
                {
                  name: 'href',
                  title: 'Link URL or Anchor',
                  type: 'string',
                  description: 'Use an external URL (https://...) or an internal anchor/path (#section or /page).',
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    },
  ],
})
