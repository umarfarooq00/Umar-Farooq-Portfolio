import type { ExtraSectionProps } from '../types/type'

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
      <div className="relative max-w-[1100px] mx-auto px-4 text-center">
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
          <p className="mx-auto mb-10 max-w-3xl text-base md:text-lg leading-8 text-white/70">
            {description}
          </p>
        ) : null}

        {primaryCta?.label && primaryCta?.href ? (
          <a
            href={primaryCta.href}
            className="inline-flex items-center  justify-center rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none border border-white/20 bg-white px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0f0f0f] transition hover:bg-white/90"
          >
            {primaryCta.label}
          </a>
        ) : null}

        {contactItems.length > 0 ? (
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {contactItems.map((item, index) => (
              <a
                key={`${item.label ?? "item"}-${index}`}
                href={item.href}
                className="group flex items-center justify-center gap-3  text-sm text-white transition hover:border-white/30 "
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white">
                  {getIcon(item.icon)}
                </span>
                <span className="text-white/85 group-hover:text-white">
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
