import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Global Settings')
        .child(
          S.list()
            .title('Global Settings')
            .items([
              S.documentTypeListItem('siteHeader').title('Header'),
              S.documentTypeListItem('siteFooter').title('Footer'),
            
            ])
        ),

      // ========== HOME PAGE (ONLY FEATURED COLLECTION) ==========
      S.listItem()
        .id("home-page-sections")
        .title("Home Page")
        .child(
          S.list()
            .title("Home Page Sections")
            .items([
                 S.documentTypeListItem('siteBanner').title('Banner'),
                 S.documentTypeListItem('siteAboutUs').title('About Us'),
                 S.documentTypeListItem('siteOurServices').title('Our Services'),
                 S.documentTypeListItem('siteOurProjects').title('Our Projects'),
                 S.documentTypeListItem('siteAllProjects').title('All Projects'),
                 S.documentTypeListItem('siteSkillSlider').title('Skill Slider'),
                 S.documentTypeListItem('siteVideo').title('Video'),
                 S.documentTypeListItem('siteTestimonials').title('Testimonials'),
                 S.documentTypeListItem('siteMarquee').title('Marquee'),
                 S.documentTypeListItem('siteExtraSection').title('Extra Section'),
            ])
        ),

         // ========== ABOUT US PAGE SETTINGS ==========
         S.listItem()
        .id("about-us-page-settings")
        .title("About Us Page")
        .child(
          S.list()
            .title("About Us Page Settings")
            .items([
                 S.documentTypeListItem('siteAboutUsBanner').title('About Us Banner'),
                 S.documentTypeListItem('siteAboutUsEducation').title('Education Section'),
                 S.documentTypeListItem('siteWorkExperience').title('Work Experience'),
            ])
        ),

          // ========== Our Skills PAGE SETTINGS ==========
         S.listItem()
        .id("our-skills-page-settings")
        .title("OurSkills Page")
        .child(
          S.list()
            .title("OurSkills page Settings")
            .items([
                   S.documentTypeListItem('siteSkillSlider').title('Skill Slider'),
            ])
        ),

          // ========== Contact us  PAGE SETTINGS ==========
         S.listItem()
        .id("contact-us-page-settings")
        .title("Contact Us Page")
        .child(
          S.list()
            .title("Contact Us page Settings")
            .items([
              S.documentTypeListItem('siteContactUsBanner').title('Contact Us Banner'),
            ])
        ),

         // ========== Projects  PAGE SETTINGS ==========
         S.listItem()
        .id("projects-page-settings")
        .title("Projects Page")
        .child(
          S.list()
            .title("Projects page Settings")
            .items([
              S.documentTypeListItem('siteAllProjects').title('All Projects'),
            ])
        ),
      
           // ========== AllServices  PAGE SETTINGS ==========
         S.listItem()
        .id("all-services-page-settings")
        .title("All Services Page")
        .child(
          S.list()
            .title("All Services page Settings")
            .items([
              S.documentTypeListItem('siteAllServices').title('All Services'),
            ])
        ),

          // ========== DownloadCV  PAGE SETTINGS ==========
         S.listItem()
        .id("download-cv-page-settings")
        .title("Download CV Page")
        .child(
          S.list()
            .title("Download CV page Settings")
            .items([
              S.documentTypeListItem('siteDownloadCvBanner').title('Download CV Banner'),
            ])
        ),
    ])
