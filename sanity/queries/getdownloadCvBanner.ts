export const GET_DOWNLOAD_CV_BANNER = `*[_type == "siteDownloadCvBanner"][0]{
  eyebrow,
  headingLines,
  description,
  buttonLabel,
  backgroundImage,
  overlayOpacity,
  cvFile{
    asset->{url, originalFilename}
  }
}`

export default GET_DOWNLOAD_CV_BANNER