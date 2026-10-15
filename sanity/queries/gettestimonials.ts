export const GET_TESTIMONIALS = `*[_type == "siteTestimonials"][0]{
  sectionTitle,
  sectionSubtitle,
  rating,
  reviewCount,
  testimonialCta{label, href},
  testimonials[]{
    quote,
    name,
    role,
    image{asset->{url}}
  }
}`

export default GET_TESTIMONIALS
