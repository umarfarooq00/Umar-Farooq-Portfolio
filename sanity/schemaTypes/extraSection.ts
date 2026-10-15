import {defineType} from 'sanity'

export default defineType({
  name: 'siteExtraSection',
  title: 'Site Extra Section',
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
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Optional section background image',
      options: {hotspot: true},
    },
    {
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        {name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'href', title: 'Href', type: 'string', validation: (Rule) => Rule.required()},
      ],
    },
    {
      name: 'contactItems',
      title: 'Contact Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Email', value: 'email'},
                  {title: 'Phone', value: 'phone'},
                  {title: 'Chat', value: 'chat'},
                ],
              },
            },
            {name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()},
            {name: 'href', title: 'Href', type: 'string', validation: (Rule) => Rule.required()},
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
    },
  ],
})
