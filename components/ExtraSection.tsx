import type { ExtraSectionProps } from '../types/type'
import ButtonLink from './ui/ButtonLink'
import SmartLink from './ui/SmartLink'

export default function ExtraSection({
  data,
}: {
  data?: ExtraSectionProps | null;
}) {
  const sectionTitle = data?.sectionTitle ?? "";
  const sectionSubtitle = data?.sectionSubtitle ?? "";
  const description = data?.description ?? "";
  const primaryCta = data?.primaryCta;
  const contactItems = data?.contactItems ?? [];
  const backgroundImage = data?.backgroundImage?.asset?.url;
  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  const getIcon = (icon?: string) => {
    switch (icon) {
      case "email":
        return "✉";
      case "phone":
        return "☎";
      case "chat":
        return "💬";
      default:
        return "•";
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-[#050505] text-white py-20 bg-center bg-cover"
      style={sectionStyle}
    >
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
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {contactItems.map((item, index) => (
              <SmartLink
                key={`${item.label ?? "item"}-${index}`}
                href={item.href ?? "#"}
                className="group flex items-center justify-center gap-3  text-sm text-white transition hover:border-white/30 "
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white">
                  {getIcon(item.icon)}
                </span>
                <span className="text-white/85 group-hover:text-white">
                  {item.label}
                </span>
              </SmartLink>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
