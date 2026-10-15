export interface NavLink {
  title: string
  href: string
}

export interface ContactButton {
  label?: string
  href?: string
}

export interface SiteHeader {
  logoUrl?: string | null
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
  logo?: {
    asset?: {
      url?: string
    }
  }
  socialLinks?: SocialLink[]
  copyright?: string
}

export type { SiteFooter as FooterProps }

export interface BannerCta {
  label: string
  href: string
}

export interface BannerSocialLink {
  platform: string
  href: string
}

export interface BannerProps {
  pretitle?: string
  title?: string
  headingLines?: string[]
  description?: string
  primaryCta?: BannerCta
  secondaryCta?: BannerCta
  socialLinks?: BannerSocialLink[]
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
  heading?: string
  percent?: string
  image?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
}

export interface SkillSliderProps {
  sectionTitle?: string
  sectionSubtitle?: string
  cards?: SkillSlideCard[]
}

export interface WorkExperienceCard {
  year?: string
  title?: string
  company?: string
  companyUrl?: string
  dateRange?: string
  description?: string
}

export interface WorkExperienceProps {
  sectionTitle?: string
  sectionSubtitle?: string
  description?: string
  cards?: WorkExperienceCard[]
  backgroundImage?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
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
  description?: string
}

export interface EducationSectionProps {
  sectionTitle?: string
  sectionSubtitle?: string
  description?: string
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

export interface DownloadCvBannerProps {
  eyebrow?: string
  headingLines?: string[]
  description?: string
  buttonLabel?: string
  backgroundImage?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
  overlayOpacity?: number
  cvFile?: {
    asset?: {
      url?: string
      originalFilename?: string
    }
  }
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
  icon?: string
  label?: string
  href?: string
}

export interface ExtraSectionProps {
  sectionTitle?: string
  sectionSubtitle?: string
  description?: string
  backgroundImage?: {
    asset?: {
      url?: string
      _id?: string
    }
    hotspot?: unknown
  }
  primaryCta?: BannerCta
  contactItems?: ContactItem[]
}

export interface ExtraSectionCard {
  title?: string
  subtitle?: string
  description?: string
}

export interface ExtraSectionProps {
  sectionTitle?: string
  sectionSubtitle?: string
  description?: string
  cards?: ExtraSectionCard[]
}

export interface VideoProps {
  sectionTitle?: string
  sectionSubtitle?: string
  poster?: { asset?: { url?: string } }
  videoUrl?: string
  videoFile?: { asset?: { url?: string } }
}

