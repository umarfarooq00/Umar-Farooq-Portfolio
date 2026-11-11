'use client'

import { useEffect, useMemo, useState } from 'react'
import type { BannerProps } from '../types/type'
import { urlFor } from '../sanity/lib/image'
import ButtonLink from './ui/ButtonLink'

export default function Banner({
  pretitle = "Hi there! 👋 I’m",
  title = "Umar Farooq",
  headingLines,
  description = "I believe that collaboration and creativity are the essence of progress. And I am dedicated to bringing a fresh perspective to every project undertake.",
  primaryCta,
  cvButton,
  image,
  secondaryImage,
}: BannerProps) {
  const lines = useMemo(() => headingLines?.filter(Boolean) ?? [], [headingLines]);
  const [lineIndex, setLineIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!lines.length) return;

    const currentLine = lines[lineIndex % lines.length];
    const isComplete = visibleLength === currentLine.length;
    const delay = isComplete && !isDeleting ? 1800 : isDeleting ? 45 : 85;

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setVisibleLength((length) => length + 1);
      } else if (!isDeleting && isComplete) {
        setIsDeleting(true);
      } else if (isDeleting && visibleLength > 0) {
        setVisibleLength((length) => length - 1);
      } else {
        setIsDeleting(false);
        setLineIndex((index) => (index + 1) % lines.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, lineIndex, lines, visibleLength]);

  const animatedTitle = lines.length
    ? lines[lineIndex % lines.length].slice(0, visibleLength)
    : title;

  const safePrimaryCta = primaryCta?.href && primaryCta?.label
    ? primaryCta
    : { label: "Let's Talk", href: "/contact" };
  // CV button: opens the CV file uploaded in Sanity (Banner → CV Button) in a new tab.
  // Hidden until a file is uploaded.
  const cvFileUrl = cvButton?.fileUrl;
  const cvLabel = cvButton?.label || "View CV";

  return (
    <section className="relative overflow-hidden bg-white md:pt-10 pt-7 2xl:pb-32 lg:pb-32 sm:pb-72 pb-60 mb-6">
      {(image || secondaryImage) && (
        <div className="flex items-center justify-center absolute bottom-0 lg:bottom-24 2xl:bottom-12 left-0">
          <div className="relative lg:min-w-96.25 2xl:min-w-125 sm:min-w-76.25 min-w-62.5 w-full 2xl:h-110 lg:h-85 sm:h-67.5 h-55">
            {image && (
              <div className="absolute right-0 bottom-0 w-[92%] z-9 ">
                <img
                  src={urlFor(image).width(597).height(653).url()}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {secondaryImage && (
              <div className="absolute left-0 bottom-0 lg:min-w-96.25 2xl:min-w-125 sm:min-w-76.25 min-w-62.5 w-full 2xl:h-113 lg:h-87.5 sm:h-69.5 h-56 z-8">
                <img
                  src={urlFor(secondaryImage).width(652).height(594).url()}
                  alt="Banner secondary"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      )}

      <div className="max-w-350 mx-auto px-4 relative z-10">
        <div className="">
          <p className="text-sm uppercase tracking-[0.2em] mb-4 text-(--primary) font-semibold">
            {pretitle}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-[70px] xl:text-[85px] sm:mb-6 mb-4    font-bold tracking-widest text-(--primary)">
            {animatedTitle}
            {lines.length ? (
              <span
                className="ml-1 inline-block h-[0.85em] w-0.75 translate-y-[0.08em] animate-pulse bg-(--primary)"
                aria-hidden="true"
              />
            ) : null}
          </h1>
          <div className="xl:w-[67%] lg:w-[65%] ml-auto">
            <p className="section-description lg:max-w-212.5 text-black mb-8">
              {description}
            </p>
            <div className="flex md:gap-4 gap-8 items-center flex-wrap ">
              <div className="flex flex-wrap items-start gap-4">
                <ButtonLink href={safePrimaryCta.href} variant="primary">
                  {safePrimaryCta.label}
                </ButtonLink>
                {cvFileUrl ? (
                  <ButtonLink href={cvFileUrl} variant="outline" newTab>
                    {cvLabel}
                  </ButtonLink>
                ) : null}
              </div>
            </div>
            <div className=" relative hidden lg:flex flex-col items-start mt-5">
              <h2
                className="2xl:text-[98px] xl:text-[80px] lg:text-[63px] text-[50px] font-bold tracking-tighter text-transparent"
                style={{ WebkitTextStroke: "1px #333" }}
              >
                {/* UI UX DESIGNER */}
                FULL STACK DEV
              </h2>
              <h2
                className="2xl:text-[98px] xl:text-[80px]  lg:text-[63px] text-[50px] font-bold tracking-tighter text-transparent select-none"
                style={{
                  WebkitTextStroke: "1px #ccc",
                  transform: "scaleY(-1)",
                  maskImage:
                    "linear-gradient(transparent, rgb(18 15 37 / 96%))",
                  marginTop: "-40px",
                }}
              >
                FULL STACK DEV
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
