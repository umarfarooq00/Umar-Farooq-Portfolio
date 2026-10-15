import {defineType} from 'sanity'

export default defineType({
  name: 'siteAboutUs',
  title: 'Site About Us',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'experienceText',
      title: 'Experience Text',
      type: 'string',
      description: 'Example: 15+ or 10+ years',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Link Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'href',
          title: 'Link URL',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
})
