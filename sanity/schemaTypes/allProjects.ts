import {defineType} from 'sanity'

export default defineType({
  name: 'siteAllProjects',
  title: 'Site All Projects',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Project Title',
              type: 'string',
              validation: (Rule) => Rule.required().min(2),
            },
            {
              name: 'slug',
              title: 'Project Slug',
              type: 'slug',
              options: {source: 'title', maxLength: 96},
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Project Image',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Project Description',
              type: 'text',
              rows: 8,
            },
            {
              name: 'link',
              title: 'Project Link',
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Button Label',
                  type: 'string',
                },
                {
                  name: 'href',
                  title: 'URL',
                  type: 'url',
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
})
