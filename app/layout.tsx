import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "../sanity/lib/client";
import GET_HEADER from "../sanity/queries/getheader";
import GET_FOOTER from "../sanity/queries/getfooter";

// Site fonts, self-hosted by Next.js and exposed as CSS variables (used in globals.css)
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

// Favicon comes from app/icon.svg, app/apple-icon.png and app/favicon.ico (Next.js file convention)
export const metadata: Metadata = {
  title: "Umar Farooq Yousafzai | Full-Stack Developer",
  description:
    "Full-stack developer building fast websites, web apps, e-commerce stores and AI-powered automation with React, Next.js, Shopify, WordPress and more. Explore my portfolio and projects.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerData = await client.fetch(GET_HEADER);
  const footerData = await client.fetch(GET_FOOTER);

  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} h-full antialiased`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) add attributes to <body> */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header
          navLinks={headerData?.navLinks ?? []}
          contactButton={headerData?.contactButton ?? null}
        />
        <main className="">{children}</main>
        <Footer
          companyName={footerData?.companyName}
          socialLinks={footerData?.socialLinks ?? []}
          copyright={footerData?.copyright}
          navLinks={headerData?.navLinks ?? []}
        />
      </body>
    </html>
  );
}

