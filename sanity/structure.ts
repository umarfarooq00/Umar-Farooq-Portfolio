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

      // ========== WHO'S UMAR PAGE (/about) ==========
      S.listItem()
        .id("about-us-page-settings")
        .title("Who's Umar Page")
        .child(
          S.list()
            .title("Who's Umar Page · /about")
            .items([
              S.documentTypeListItem('siteAboutUsBanner').title('Meet Umar Banner'),
              S.documentTypeListItem('siteAboutUsEducation').title('Education'),
              S.documentTypeListItem('siteWorkExperience').title('Work Experience'),
            ])
        ),

      // ========== TECH & TOOLS PAGE (/skills) ==========
      S.listItem()
        .id("our-skills-page-settings")
        .title("Tech & Tools Page")
        .child(
          S.list()
            .title("Tech & Tools Page · /skills")
            .items([
              S.documentTypeListItem('siteSkillSlider').title('Skills'),
            ])
        ),

      // ========== PROOF OF WORK PAGE (/projects) ==========
      S.listItem()
        .id("projects-page-settings")
        .title("Proof of Work Page")
        .child(
          S.list()
            .title("Proof of Work Page · /projects")
            .items([
              S.documentTypeListItem('siteAllProjects').title('All Projects'),
            ])
        ),
    ])
