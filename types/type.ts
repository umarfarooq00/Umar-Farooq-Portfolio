export interface NavLink {
  title: string
  href: string
}

export interface ContactButton {
  label?: string
  href?: string
}

export interface SiteHeader {
  navLinks?: NavLink[]
  contactButton?: ContactButton | null
}

export type { SiteHeader as HeaderProps }

// Footer Types
export interface SocialLink {
  platform: string
  url: string
}

export interface SiteFooter {
  companyName?: string
  socialLinks?: SocialLink[]
  copyright?: string
}

export type { SiteFooter as FooterProps }

export interface BannerCta {
  label: string
  href: string
}

export interface BannerProps {
  pretitle?: string
  title?: string
  headingLines?: string[]
  description?: string
  primaryCta?: BannerCta
  cvButton?: {
    label?: string
    fileUrl?: string
  }
  image?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
  secondaryImage?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
}

export interface TestimonialCta {
  label?: string
  href?: string
}

export interface TestimonialImage {
  asset?: {
    url?: string
    _id?: string
  }
}

export interface TestimonialItem {
  quote?: string
  name?: string
  role?: string
  image?: TestimonialImage
}

export interface TestimonialProps {
  sectionTitle?: string
  sectionSubtitle?: string
  rating?: number
  reviewCount?: number
  testimonialCta?: TestimonialCta
  testimonials?: TestimonialItem[]
}

export interface MarqueeProps {
  items?: string[] | null
}

export interface SkillSlideCard {
  /** Key of a skill in lib/skills.ts (picked from the Sanity dropdown) */
  skill?: string
}

export interface SkillSliderProps {
  cards?: SkillSlideCard[]
}

export interface WorkExperienceCard {
  year?: string
  title?: string
  company?: string
  companyUrl?: string
  dateRange?: string
}

export interface WorkExperienceProps {
  sectionTitle?: string
  cards?: WorkExperienceCard[]
}

export interface AboutUsLink {
  label?: string
  href?: string
}

export interface AboutUsProps {
  title?: string
  description?: string
  experienceText?: string
  image?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
  link?: AboutUsLink
}

export interface EducationCard {
  yearRange?: string
  title?: string
  subtitle?: string
}

export interface EducationSectionProps {
  sectionTitle?: string
  cards?: EducationCard[]
}

export interface ResumeFile {
  asset?: {
    url?: string
    _id?: string
    originalFilename?: string
  }
  originalFilename?: string
}

export interface AboutUsBannerProps {
  pretitle?: string
  title?: string
  description?: string
  image?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
  resume?: ResumeFile
  resumeLabel?: string
  socialLinks?: SocialLink[]
}

export interface ServiceLink {
  label?: string
  href?: string
}

export interface ServiceCard {
  title?: string
  description?: string
  link?: ServiceLink
}

export interface OurServicesProps {
  sectionTitle?: string
  sectionSubtitle?: string
  backgroundImage?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
  services?: ServiceCard[]
}

export interface OurProjectsProjectLink {
  label?: string
  href?: string
}

export interface OurProjectsProject {
  title?: string
  slug?: string
  description?: string
  image?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
  link?: OurProjectsProjectLink
}

export interface OurProjectsTab {
  title?: string
  projects?: OurProjectsProject[]
}

export interface OurProjectsProps {
  sectionTitle?: string
  sectionSubtitle?: string
  tabs?: OurProjectsTab[]
}

export interface AllProjectsProjectLink {
  label?: string
  href?: string
}

export interface AllProjectsProject {
  title?: string
  slug?: string
  description?: string
  image?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
  link?: AllProjectsProjectLink
}

export interface AllProjectsProps {
  sectionTitle?: string
  sectionSubtitle?: string
  backgroundImage?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
  projects?: AllProjectsProject[]
}

export interface ContactItem {
  label?: string
}

export interface ExtraSectionProps {
  sectionTitle?: string
  sectionSubtitle?: string
  description?: string
  primaryCta?: BannerCta
  contactItems?: ContactItem[]
}

export interface VideoProps {
  sectionTitle?: string
  videoFile?: { asset?: { url?: string } }
}

