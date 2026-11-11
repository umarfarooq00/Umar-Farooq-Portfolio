import type { Skill } from '../../lib/skills'

/** Brand icon from the skills catalog; falls back to the skill's initials (scales like an icon). */
export default function SkillIcon({ skill, className = 'h-7 w-7' }: { skill: Skill; className?: string }) {
  if (skill.path) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" role="img" aria-label={skill.label}>
        <path d={skill.path} />
      </svg>
    )
  }

  const words = skill.label.split(/[\s/]+/).filter(Boolean)
  const initials = (words.length > 1 ? words.map((w) => w[0]).join('') : skill.label.slice(0, 2)).slice(0, 2).toUpperCase()

  // Drawn as SVG text so it grows/shrinks exactly like the brand icons
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label={skill.label}>
      <text
        x="12"
        y="12"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize="11"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        {initials}
      </text>
    </svg>
  )
}
