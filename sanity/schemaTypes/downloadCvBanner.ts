import {defineType} from 'sanity'

export default defineType({
  name: 'siteDownloadCvBanner',
  title: 'Download CV Banner',
  type: 'document',
  fields: [
    {name: 'eyebrow', title: 'Eyebrow', type: 'string'},
    {
      name: 'headingLines',
      title: 'Animated Heading Lines',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Add each sentence as a separate line. They will type, erase, and repeat in order.',
      validation: (Rule) => Rule.required().min(1),
    },
    {name: 'description', title: 'Description', type: 'text', rows: 4},
    {name: 'buttonLabel', title: 'Button Label', type: 'string', initialValue: 'Download CV'},
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'overlayOpacity',
      title: 'Overlay Opacity',
      type: 'number',
      initialValue: 0.62,
      validation: (Rule) => Rule.min(0).max(1),
    },
    {
      name: 'cvFile',
      title: 'CV PDF',
      type: 'file',
      options: {accept: '.pdf'},
      validation: (Rule) => Rule.required(),
    },
  ],
})