export const GET_HEADER = `*[_type == "siteHeader"][0]{
	logo,
	navLinks[]{title, href},
	contactButton{label, href}
}`

export default GET_HEADER
