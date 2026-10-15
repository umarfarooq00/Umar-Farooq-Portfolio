export const GET_FOOTER = `*[_type == "siteFooter"][0]{
	companyName,
	logo,
	socialLinks[]{platform, url},
	copyright
}`

export default GET_FOOTER
