import {defineType} from 'sanity'

export default defineType({
  name: 'siteContactUsBanner',
  title: 'Contact Us Banner',
  type: 'document',
  fields: [
    {
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'contactUsCard'}],
    },
  ],
})
