import {defineType} from 'sanity'

export default defineType({
  name: 'siteAboutUsBanner',
  title: 'About Us Banner',
  type: 'document',
  fields: [
    {
      name: 'pretitle',
      title: 'Pre Title',
      type: 'string',
      description: 'Example: HI THERE!',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Example: WHO AM I',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resume',
      title: 'Resume File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx'
      },
      description: 'Upload your resume (PDF, DOC, or DOCX)',
    },
    {
      name: 'resumeLabel',
      title: 'Resume Button Label',
      type: 'string',
      initialValue: 'Resume',
      description: 'Text for the resume button',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'GitHub', value: 'github'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'Instagram', value: 'instagram'},
                ]
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ]
        }
      ],
      description: 'Add GitHub, LinkedIn, and other social links',
    },
  ],
})
