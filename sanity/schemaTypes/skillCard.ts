import {defineType} from 'sanity'
import {SKILLS, SKILL_CATEGORIES} from '../../lib/skills'

// Dropdown grouped by category, e.g. "Frontend — React"
const options = SKILL_CATEGORIES.flatMap((category) =>
  SKILLS.filter((s) => s.category === category).map((s) => ({title: `${category} — ${s.label}`, value: s.key})),
)

export default defineType({
  name: 'skillCard',
  title: 'Skill',
  type: 'object',
  fields: [
    {
      name: 'skill',
      title: 'Skill',
      type: 'string',
      description: 'Pick a skill. Its icon, name, category and short description are added automatically.',
      options: {list: options, layout: 'dropdown'},
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {skill: 'skill'},
    prepare({skill}) {
      const s = SKILLS.find((x) => x.key === skill)
      return {title: s?.label ?? 'Pick a skill', subtitle: s?.category}
    },
  },
})
