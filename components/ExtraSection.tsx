import type { ExtraSectionProps } from '../types/type'
import ButtonLink from './ui/ButtonLink'

/** Turns the text from Sanity into a link + icon: an email → mailto, a number → WhatsApp chat. */
function contactFromText(text: string) {
  const value = text.trim()
  if (value.includes('@')) return { kind: 'email' as const, href: `mailto:${value}` }
  const digits = value.replace(/\D/g, '')
  if (digits.length >= 7) return { kind: 'whatsapp' as const, href: `https://wa.me/${digits}` }
  return null
}

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
    <path d="M4 7l8 6 8-6" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
    <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.2 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.9 2c0 1.2.9 2.3 1 2.5.1.2 1.7 2.7 4.2 3.7 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.5-.3Z" />
  </svg>
)

export default function ExtraSection({
  data,
}: {
  data?: ExtraSectionProps | null;
}) {
  const sectionTitle = data?.sectionTitle ?? "";
  const sectionSubtitle = data?.sectionSubtitle ?? "";
  const description = data?.description ?? "";
  const primaryCta = data?.primaryCta;
  const contactItems = (data?.contactItems ?? [])
    .map((item) => {
      const label = item?.label?.trim()
      const contact = label ? contactFromText(label) : null
      return label && contact ? { label, ...contact } : null
    })
    .filter((item) => item !== null);

  return (
    <section className="relative overflow-hidden bg-[#050505] text-white py-20">
      <div className="relative max-w-275 mx-auto px-4 text-center">
        {sectionSubtitle ? (
          <p className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">
            {sectionSubtitle}
          </p>
        ) : null}
        {sectionTitle ? (
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            {sectionTitle}
          </h2>
        ) : null}
        {description ? (
          <p className="section-description mx-auto mb-10 max-w-3xl text-white/70">
            {description}
          </p>
        ) : null}

        {primaryCta?.label && primaryCta?.href ? (
          <ButtonLink href={primaryCta.href} variant="light">
            {primaryCta.label}
          </ButtonLink>
        ) : null}

        {contactItems.length > 0 ? (
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {contactItems.map((item, index) => (
              <a
                key={`${item.label}-${index}`}
                href={item.href}
                target={item.kind === "whatsapp" ? "_blank" : undefined}
                rel={item.kind === "whatsapp" ? "noopener noreferrer" : undefined}
                aria-label={item.kind === "whatsapp" ? `WhatsApp ${item.label}` : `Email ${item.label}`}
                className="group flex items-center justify-center gap-3 text-sm text-white"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-(--primary)">
                  {item.kind === "whatsapp" ? <WhatsAppIcon /> : <EmailIcon />}
                </span>
                <span className="text-white/85 transition-colors duration-300 group-hover:text-white">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
