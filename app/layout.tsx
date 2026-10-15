import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "../sanity/lib/client";
import GET_HEADER from "../sanity/queries/getheader";
import GET_FOOTER from "../sanity/queries/getfooter";
import { urlFor } from "../sanity/lib/image";

export const metadata: Metadata = {
  title: "Umar Farooq | Frontend Developer",
  description:
    "I am a Frontend Developer specializing in Next.js, Shopify, Hubspot and modern web experiences. Explore my portfolio and projects.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerData = await client.fetch(GET_HEADER);
  const footerData = await client.fetch(GET_FOOTER);
  const logoUrl = headerData?.logo
    ? urlFor(headerData.logo).width(200).url()
    : null;

  return (
    <html lang="en" className={`h-full antialiased`}>
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Syne:wght@400..800&display=swap"
        rel="stylesheet"
        precedence="default"
      />
      <body className="min-h-full flex flex-col">
        <Header
          logoUrl={logoUrl}
          navLinks={headerData?.navLinks ?? []}
          contactButton={headerData?.contactButton ?? null}
        />
        <main className="">{children}</main>
        <Footer
          companyName={footerData?.companyName}
          logo={footerData?.logo}
          socialLinks={footerData?.socialLinks ?? []}
          copyright={footerData?.copyright}
        />
      </body>
    </html>
  );
}

