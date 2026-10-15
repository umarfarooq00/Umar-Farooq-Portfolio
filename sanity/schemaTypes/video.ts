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
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'text',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Optional background/cover image for the section',
      options: {hotspot: true},
    },
    {
      name: 'videoUrl',
      title: 'Video URL (embed src)',
      type: 'string',
      description: 'Use the embed src (e.g. https://www.youtube.com/embed/xxx) or a hosted video URL',
    },
    {
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      description: 'Upload an mp4/webm file to host the video directly (optional).',
      options: {accept: 'video/*'},
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      subtitle: 'sectionSubtitle',
      media: 'poster',
    },
  },
})
