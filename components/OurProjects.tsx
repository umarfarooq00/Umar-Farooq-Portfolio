'use client'

import { useMemo, useState } from 'react'
import { urlFor } from '../sanity/lib/image'
import type { OurProjectsProps } from '../types/type'
import ButtonLink, { ButtonArrow, buttonClass } from './ui/ButtonLink'

export default function OurProjects({ data }: { data?: OurProjectsProps } = {}) {
  const [activeTab, setActiveTab] = useState(0)

  const normalizedTabs = useMemo(() => (data?.tabs ?? []).filter(Boolean), [data?.tabs])
  const safeActiveIndex = activeTab >= normalizedTabs.length ? 0 : activeTab
  const activeTabData = normalizedTabs[safeActiveIndex]
  const projects = activeTabData?.projects ?? []

  if (!normalizedTabs.length) {
    return null
  }

  return (
    <section className="bg-[#d3d3d345] py-10 md:py-20 text-[#111111]">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="mb-18 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {data?.sectionSubtitle ? (
              <p className="mb-3 text-base md:text-lg flex gap-2 items-center font-semibold capitalize text-black">
                <span className="block h-0.5 w-14 bg-black"></span>
                {data.sectionSubtitle}
              </p>
            ) : null}
            {data?.sectionTitle ? (
              <h2 className="text-4xl md:text-5xl  font-bold tracking-tight text-black">
                {data.sectionTitle}
              </h2>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
          {normalizedTabs.map((tab, index) => {
            const isActive = index === safeActiveIndex
            return (
              <button
                key={tab.title || index}
                type="button"
                onClick={() => setActiveTab(index)}
                aria-pressed={isActive}
                className={buttonClass(
                  isActive ? 'primary' : 'outline',
                  // Active tab stays solid black (no hover inversion)
                  isActive ? 'pointer-events-none shadow-lg' : 'bg-white'
                )}
              >
                <span>{tab.title}</span>
                <ButtonArrow />
              </button>
            )
          })}
        </div>
        </div>

        

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={`${project.title || 'project'}-${index}`}
              className="relative group overflow-hidden rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none border border-black bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition duration-300  hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            >
              {project.image ? (
                <div className="h-120 relative overflow-hidden group">
  <img
    src={urlFor(project.image).url()}
    alt={project.title || 'Project image'}
    className="h-full w-full object-cover object-top group-hover:object-bottom
               transition-all duration-2500 ease-in"
    loading="lazy"
  />
</div>
              ) : null}

              <div className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-3 bg-transparent p-4 opacity-0 transition-all duration-600 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                {project.link?.href ? (
                  <ButtonLink href={project.link.href} variant="primary" className="hidden lg:inline-flex">
                    View Demo
                  </ButtonLink>
                ) : null}

                {project.slug ? (
                  <ButtonLink href={`/Projects/${project.slug}`} variant="primary">
                    View Detail
                  </ButtonLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
