import { client } from '../sanity/lib/client'
import GET_SKILL_SLIDER from '../sanity/queries/getskillslider'
import { SKILL_CATEGORIES, getSkill, type Skill } from '../lib/skills'
import type { SkillSliderProps } from '../types/type'
import SkillIcon from './ui/SkillIcon'

export default async function OurSkills() {
  const data = await client.fetch<SkillSliderProps | null>(GET_SKILL_SLIDER)

  // Skills picked in Sanity (keeps your order, drops duplicates/unknown keys)
  const seen = new Set<string>()
  const skills: Skill[] = []
  for (const card of data?.cards ?? []) {
    const skill = getSkill(card?.skill)
    if (skill && !seen.has(skill.key)) {
      seen.add(skill.key)
      skills.push(skill)
    }
  }

  const groups = SKILL_CATEGORIES.map((category) => ({
    category,
    items: skills.filter((s) => s.category === category),
  })).filter((g) => g.items.length)

  return (
    <>
      {/* Intro */}
      <section className="bg-white pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-350 px-4">
          <div className="mb-5 flex items-center gap-4">
            <span className="block h-0.5 w-14 bg-black" />
            <p className="text-base font-semibold text-black md:text-lg">Tech &amp; Tools</p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-(--primary) sm:text-5xl lg:text-6xl">
                The stack behind everything I build.
              </h1>
              <p className="section-description mt-6 max-w-2xl text-black/70">
                Websites, web apps, online stores and AI-powered automation. These are the tools I use to design,
                build and ship fast, reliable products, and I keep adding new ones as technology moves forward.
              </p>
            </div>
            {skills.length ? (
              <div className="flex shrink-0 gap-4">
                {[
                  { value: skills.length, label: 'Tools' },
                  { value: groups.length, label: 'Areas' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-32 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-black/10 px-6 py-5"
                  >
                    <p className="text-4xl leading-none font-bold text-(--primary)">
                      {String(stat.value).padStart(2, '0')}
                    </p>
                    <p className="mt-2 text-xs font-semibold tracking-[0.25em] text-black/50 uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Skills grouped by category */}
      {groups.length ? (
        <section className="bg-[#f1f1f1] py-16 md:py-24">
          <div className="mx-auto flex max-w-350 flex-col gap-16 px-4 md:gap-20">
            {groups.map((group, gi) => (
              <div key={group.category} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-12">
                {/* Category label (sticks while scrolling on desktop) */}
                <div className="lg:sticky lg:top-32 lg:self-start">
                  <span
                    aria-hidden="true"
                    className="block text-6xl leading-none font-bold tracking-tighter text-transparent md:text-7xl"
                    style={{ WebkitTextStroke: '1px rgba(15,14,14,0.35)' }}
                  >
                    {String(gi + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-(--primary) md:text-3xl">{group.category}</h2>
                  <p className="mt-2 text-xs font-semibold tracking-[0.25em] text-black/45 uppercase">
                    {group.items.length} {group.items.length === 1 ? 'tool' : 'tools'}
                  </p>
                </div>

                {/* Skill tiles */}
                <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((skill) => (
                    <li
                      key={skill.key}
                      className="group relative isolate flex h-full flex-col overflow-hidden rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border border-black/10 bg-white p-6 transition-colors duration-500 ease-out before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-(--primary) before:transition-transform before:duration-500 before:ease-out before:content-[''] hover:border-(--primary) hover:before:scale-y-100"
                    >
                      <span className="flex h-13 w-13 items-center justify-center rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none bg-[#f1f1f1] text-(--primary) transition-colors duration-500 group-hover:bg-white">
                        <SkillIcon skill={skill} className="h-6 w-6" />
                      </span>
                      <h3 className="mt-6 text-lg font-bold text-(--primary) transition-colors duration-500 group-hover:text-white">
                        {skill.label}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-black/60 transition-colors duration-500 group-hover:text-white/70">
                        {skill.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}
