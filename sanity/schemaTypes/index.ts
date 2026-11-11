import { type SchemaTypeDefinition } from 'sanity'
import header from './header'
import footer from './footer'
import banner from './banner'
import aboutUs from './aboutUs'
import aboutUsBanner from './aboutUsBanner'
import aboutUsEducation from './aboutUsEducation'
import workExperience from './workExperience'
import ourServices from './ourServices'
import ourProjects from './ourProjects'
import allProjects from './allProjects'
import skillSlider from './skillSlider'
import skillCard from './skillCard'
import marquee from './marquee'
import extraSection from './extraSection'
import testimonial from './testimonial'
import video from './video'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, footer, banner, aboutUs, aboutUsBanner, aboutUsEducation, workExperience, ourServices, ourProjects, allProjects, skillSlider, skillCard, marquee, extraSection, testimonial, video],
}
