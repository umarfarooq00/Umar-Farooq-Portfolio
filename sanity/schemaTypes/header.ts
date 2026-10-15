import {defineType} from 'sanity'

export default defineType({
  name: 'siteHeader',
  title: 'Site Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'href', type: 'string', title: 'Href'},
          ],
          preview: {
            select: {title: 'title'},
          },
        },
      ],
    },
    {
      name: 'contactButton',
      title: 'Contact Button',
      type: 'object',
      fields: [
        {name: 'label', type: 'string', title: 'Label'},
        {name: 'href', type: 'string', title: 'Href'},
      ],
    },
  ],
})
