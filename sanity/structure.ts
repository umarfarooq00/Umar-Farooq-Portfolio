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

      // ========== HOME PAGE ==========
      // Order here matches the order sections appear on the homepage (app/page.tsx)
      S.listItem()
        .id("home-page-sections")
        .title("Home Page")
        .child(
          S.list()
            .title("Home Page Sections")
            .items([
                 S.documentTypeListItem('siteBanner').title('Hero Banner'),
                 S.documentTypeListItem('siteSkillSlider').title('Skills Slider'),
                 S.documentTypeListItem('siteOurServices').title('What I Can Do'),
                 S.documentTypeListItem('siteAboutUs').title("Who's Umar"),
                 S.documentTypeListItem('siteTestimonials').title('Client Testimonials'),
                 S.documentTypeListItem('siteOurProjects').title('Latest Projects'),
                 S.documentTypeListItem('siteVideo').title('Video Showcase'),
                 S.documentTypeListItem('siteMarquee').title('Scrolling Text Strip'),
                 S.documentTypeListItem('siteExtraSection').title("Let's Talk CTA"),
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
