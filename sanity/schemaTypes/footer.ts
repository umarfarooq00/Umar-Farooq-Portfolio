import {defineType} from 'sanity'

export default defineType({
  name: "siteFooter",
  title: "Site Footer",
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Company/Portfolio Name",
      type: "string",
      description: "Your name or company name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      description: "Logo to display in footer (optional)",
    },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              title: "Platform",
              description:
                "e.g., Twitter, LinkedIn, GitHub, Facebook, Instagram",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "GitHub", value: "github" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                ],
              },
            },
            {
              name: "url",
              type: "string",
              title: "URL",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { title: "platform", url: "url" },
            prepare(value) {
              return {
                title: value.title,
                subtitle: value.url,
              };
            },
          },
        },
      ],
    },
    {
      name: "copyright",
      title: "Copyright Text",
      type: "string",
      description: 'e.g., "© 2024 Umar Farooq. All rights reserved."',
      validation: (Rule) => Rule.required(),
    },
  ],
});
