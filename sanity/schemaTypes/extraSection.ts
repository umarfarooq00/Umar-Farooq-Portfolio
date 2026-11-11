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
              name: 'label',
              title: 'Email or WhatsApp number',
              type: 'string',
              description:
                'Write an email (opens email) or a phone number like +923415168660 (opens WhatsApp). The link and icon are added automatically.',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
            },
          },
        },
      ],
    },
  ],
})
