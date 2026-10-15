import Allservices from '@/components/Allservices'
import { client } from '../../sanity/lib/client'
import GET_ALL_SERVICES from '../../sanity/queries/getallservices'
import type { OurServicesProps } from '@/types/type'

export default async function AllServicesPage() {
  const data = await client.fetch<OurServicesProps>(GET_ALL_SERVICES)
  return <Allservices data={data} />
}
