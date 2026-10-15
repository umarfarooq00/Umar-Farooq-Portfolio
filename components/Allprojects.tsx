import { urlFor } from '../sanity/lib/image'
import type { AllProjectsProps } from '../types/type'
import Link from 'next/link'

export default function Allprojects({ data }: { data?: AllProjectsProps } = {}) {
  const projects = data?.projects ?? []
  const sectionStyle = data?.backgroundImage ? {
    backgroundImage: `url(${urlFor(data.backgroundImage).url()})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  } : undefined

  if (!projects.length) {
    return null
  }

  return (
    <section className="relative  py-20 text-white" style={sectionStyle}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 mb-20 text-center flex gap-4 items-center justify-center">
            <span className="block h-1 w-12 md:w-16 bg-white inline-block"></span>
          {data?.sectionTitle ? (
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {data.sectionTitle}
            </h1>
          ) : null}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={`${project.title || 'project'}-${index}`}
              className="cursor-pointer relative group overflow-hidden rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none border border-black bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            >
              {project.image ? (
                <div className="block h-110 relative overflow-hidden group">
                  <img
                    src={urlFor(project.image).url()}
                    alt={project.title || 'Project image'}
                    className="h-full w-full object-cover object-top group-hover:object-bottom transition-all duration-[2500ms] ease-in"
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-3 bg-transparent p-4 opacity-0 transition-all duration-600 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                {project.link?.href ? (
                  <a
                    href={project.link.href}
                    target={/^(https?:|mailto:|tel:)/.test(project.link.href) ? '_blank' : undefined}
                    rel={/^(https?:|mailto:|tel:)/.test(project.link.href) ? 'noreferrer noopener' : undefined}
                    className="hidden items-center rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none bg-[var(--primary)] px-5 py-2 text-[18px] font-[600] text-white hover:opacity-95 lg:inline-flex"
                  >
                    View Demo
                    <span className="ml-2">↗</span>
                  </a>
                ) : null}

                {project.slug ? (
                  <Link
                    href={`/Projects/${project.slug}`}
                    className="inline-flex items-center rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none bg-[var(--primary)] px-5 py-2 text-[18px] font-[600] text-white hover:opacity-95"
                  >
                    View Detail
                     <span className="ml-2">↗</span>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
