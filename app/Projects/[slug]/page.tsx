import { notFound } from 'next/navigation'
import { urlFor } from '../../../sanity/lib/image'
import { client } from '../../../sanity/lib/client'
import GET_PROJECT from '../../../sanity/queries/getproject'
import GET_OUR_PROJECT from '../../../sanity/queries/getourproject'
import type { AllProjectsProject } from '../../../types/type'

type ProjectPageProps = {
	params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params
	const project = await client.fetch<AllProjectsProject | null>(GET_PROJECT, { slug })
		?? await client.fetch<AllProjectsProject | null>(GET_OUR_PROJECT, { slug })

	if (!project) {
		notFound()
	}

	return (
		<main className="min-h-screen bg-gwhite  text-black">
            
			<article className="mt-10">
				{project.image ? (
					<img
						src={urlFor(project.image).url()}
						alt={project.title || 'Project image'}
						className="max-h-[70vh] w-full  object-cover object-top"
					/>
				) : null}
                <div>
                 <div className='h-[100px] [clip-path:polygon(0_0,100%_0,100%_45%,0_100%)] bg-black '></div>
				<div className="max-w-[1400px] mx-auto px-4 py-12">
					<h1 className="text-black text-4xl font-bold tracking-tight sm:text-6xl">{project.title}</h1>
					{project.description ? (
						<p className="mt-8 whitespace-pre-line text-lg leading-8 text-black">
							{project.description}
						</p>
					) : null}
					{project.link?.href && project.link.label ? (
						<a
							href={project.link.href}
							target={/^(https?:|mailto:|tel:)/.test(project.link.href) ? '_blank' : undefined}
							rel={/^(https?:|mailto:|tel:)/.test(project.link.href) ? 'noreferrer noopener' : undefined}
							className="rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none mt-8 inline-flex rounded-full bg-black px-6 py-3 font-bold text-white transition-all ease-in-out hover:bg-black/80"
						>
							{project.link.label}
							<span className="ml-2">↗</span>
						</a>
					) : null}
                     
				</div>
                   <div className='h-[100px] [clip-path:polygon(0_55%,100%_0,100%_100%,0_100%)] bg-black'></div>
                </div>
			</article>
		</main>
	)
}
