import {defineType} from 'sanity'

export default defineType({
  name: 'siteVideo',
  title: 'Site Video',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      description: 'Upload an mp4/webm file. It plays muted on loop.',
      options: {accept: 'video/*'},
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
  },
})
