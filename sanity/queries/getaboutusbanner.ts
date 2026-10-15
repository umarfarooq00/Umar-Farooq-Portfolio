export const GET_ABOUT_US_BANNER = `*[_type == "siteAboutUsBanner"][0]{
  pretitle,
  title,
  description,
  image,
  resume{
    asset->{
      url,
      originalFilename
    }
  },
  resumeLabel,
  socialLinks[]{
    platform,
    url
  }
}`

export default GET_ABOUT_US_BANNER
