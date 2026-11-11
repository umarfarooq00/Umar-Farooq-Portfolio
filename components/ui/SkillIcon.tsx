import type { Skill } from '../../lib/skills'

/** Brand icon from the skills catalog; falls back to the skill's initials. */
export default function SkillIcon({ skill, className = 'h-7 w-7' }: { skill: Skill; className?: string }) {
  if (skill.path) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" role="img" aria-label={skill.label}>
        <path d={skill.path} />
      </svg>
    )
  }
  const initials = skill.label
    .split(/[\s/]+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <span className={`${className} flex items-center justify-center text-sm font-bold`} aria-label={skill.label}>
      {initials}
    </span>
  )
}
