// Skills catalog — the single source for the Sanity dropdown and the site.
// Pick a skill in Sanity → its icon, name, category and description come from here.
import {
  siShopify,
  siWoocommerce,
  siWordpress,
  siElementor,
  siSanity,
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siBootstrap,
  siJquery,
  siSass,
  siNodedotjs,
  siPhp,
  siMysql,
  siPython,
  siFrappe,
  siGraphql,
  siGit,
  siGithub,
  siFigma,
  siVercel,
  siNetlify,
  siPostman,
  siNpm,
  siGoogleanalytics,
  siCloudflare,
  siGooglegemini,
  siClaude,
  siZapier,
  siMake,
  siN8n,
} from 'simple-icons'

export const SKILL_CATEGORIES = [
  'E-commerce & CMS',
  'Frontend',
  'Backend & Data',
  'Tools & Workflow',
  'AI & Automation',
] as const

export type SkillCategory = (typeof SKILL_CATEGORIES)[number]

export type Skill = {
  key: string
  label: string
  category: SkillCategory
  description: string
  /** SVG path (24×24 viewBox) */
  path?: string
}

const s = (
  key: string,
  label: string,
  category: SkillCategory,
  description: string,
  icon?: { path: string },
): Skill => ({ key, label, category, description, path: icon?.path })

export const SKILLS: Skill[] = [
  // E-commerce & CMS
  s('shopify', 'Shopify', 'E-commerce & CMS', 'Custom themes, Online Store 2.0 and app integrations.', siShopify),
  s('liquid', 'Liquid', 'E-commerce & CMS', 'Dynamic Shopify sections, snippets and templates.', siShopify),
  s('woocommerce', 'WooCommerce', 'E-commerce & CMS', 'Store setup, custom checkout flows and plugins.', siWoocommerce),
  s('wordpress', 'WordPress', 'E-commerce & CMS', 'Custom themes, ACF and fast business websites.', siWordpress),
  s('elementor', 'Elementor', 'E-commerce & CMS', 'Pixel-perfect landing pages without the bloat.', siElementor),
  s('sanity', 'Sanity', 'E-commerce & CMS', 'Headless CMS with structured, editable content.', siSanity),

  // Frontend
  s('html', 'HTML5', 'Frontend', 'Semantic, accessible and SEO-friendly markup.', siHtml5),
  s('css', 'CSS3', 'Frontend', 'Responsive layouts, animations and clean styling.', siCss),
  s('javascript', 'JavaScript', 'Frontend', 'Interactive UI, DOM logic and APIs.', siJavascript),
  s('typescript', 'TypeScript', 'Frontend', 'Type-safe, maintainable front-end code.', siTypescript),
  s('react', 'React', 'Frontend', 'Reusable components and modern interfaces.', siReact),
  s('nextjs', 'Next.js', 'Frontend', 'Fast, SEO-ready React sites and apps.', siNextdotjs),
  s('tailwind', 'Tailwind CSS', 'Frontend', 'Utility-first styling for rapid, consistent UI.', siTailwindcss),
  s('bootstrap', 'Bootstrap', 'Frontend', 'Quick responsive grids and components.', siBootstrap),
  s('jquery', 'jQuery', 'Frontend', 'Lightweight interactions on legacy stores.', siJquery),
  s('sass', 'Sass', 'Frontend', 'Organised, scalable stylesheets.', siSass),

  // Backend & Data
  s('nodejs', 'Node.js', 'Backend & Data', 'APIs, scripts and server-side tooling.', siNodedotjs),
  s('php', 'PHP', 'Backend & Data', 'WordPress hooks, plugins and custom logic.', siPhp),
  s('mysql', 'MySQL', 'Backend & Data', 'Database design, queries and optimisation.', siMysql),
  s('python', 'Python', 'Backend & Data', 'Automation scripts and Frappe apps.', siPython),
  s('frappe', 'Frappe / ERPNext', 'Backend & Data', 'Business apps, ERPNext customisation and workflows.', siFrappe),
  s('graphql', 'GraphQL', 'Backend & Data', 'Shopify Storefront & Admin API integrations.', siGraphql),
  s('rest-api', 'REST APIs', 'Backend & Data', 'Connecting stores with third-party services.'),

  // Tools & Workflow
  s('git', 'Git', 'Tools & Workflow', 'Version control and clean collaboration.', siGit),
  s('github', 'GitHub', 'Tools & Workflow', 'Code reviews, CI and project hosting.', siGithub),
  s('figma', 'Figma', 'Tools & Workflow', 'Design handoff to pixel-perfect code.', siFigma),
  s('vercel', 'Vercel', 'Tools & Workflow', 'Instant deployments for Next.js projects.', siVercel),
  s('netlify', 'Netlify', 'Tools & Workflow', 'Static hosting and serverless functions.', siNetlify),
  s('postman', 'Postman', 'Tools & Workflow', 'Testing and documenting APIs.', siPostman),
  s('npm', 'npm', 'Tools & Workflow', 'Package management and build tooling.', siNpm),
  s('google-analytics', 'Google Analytics', 'Tools & Workflow', 'Tracking, conversions and store insights.', siGoogleanalytics),
  s('cloudflare', 'Cloudflare', 'Tools & Workflow', 'DNS, caching and site performance.', siCloudflare),
  s('performance', 'Core Web Vitals', 'Tools & Workflow', 'Speed audits and page-load optimisation.'),

  // AI & Automation
  // No OpenAI icon in simple-icons (brand requested removal) → shows initials
  s('openai', 'OpenAI', 'AI & Automation', 'AI features, content and chat integrations.'),
  s('gemini', 'Google Gemini', 'AI & Automation', 'Multimodal AI for content and assistants.', siGooglegemini),
  s('claude', 'Claude', 'AI & Automation', 'AI-assisted development and workflows.', siClaude),
  s('zapier', 'Zapier', 'AI & Automation', 'No-code automations between business tools.', siZapier),
  s('make', 'Make', 'AI & Automation', 'Visual automation scenarios.', siMake),
  s('n8n', 'n8n', 'AI & Automation', 'Self-hosted workflow automation.', siN8n),
]

const byKey = new Map(SKILLS.map((skill) => [skill.key, skill]))

export const getSkill = (key?: string | null) => (key ? byKey.get(key) : undefined)
