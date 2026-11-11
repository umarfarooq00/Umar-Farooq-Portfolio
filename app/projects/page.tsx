import Allprojects from "@/components/Allprojects"
import { client } from "../../sanity/lib/client"
import GET_ALL_PROJECTS from "../../sanity/queries/getallprojects"
import type { AllProjectsProps } from "@/types/type"

export default async function ProjectsPage() {
  const allProjectsData = await client.fetch<AllProjectsProps>(GET_ALL_PROJECTS)

  return <Allprojects data={allProjectsData} />
}

