import {defineType} from 'sanity'

export default defineType({
  name: 'siteOurProjects',
  title: 'Site Our Projects',
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
      name: 'tabs',
      title: 'Project Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Tab Title',
              type: 'string',
              validation: (Rule) => Rule.required().min(2),
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
                        {name: 'label', title: 'Label', type: 'string'},
                        {name: 'href', title: 'URL', type: 'string'},
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
