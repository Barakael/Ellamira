import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { company } from "@/content/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name}`,
    template: `%s · ${company.shortName} Trading`,
  },
  description: company.positioning,
  openGraph: {
    type: "website",
    locale: "en_TZ",
    siteName: company.name,
    title: company.name,
    description: company.positioning,
    images: [
      {
        url: "/images/hero.jpg",
        width: 2000,
        height: 1181,
        alt: "Dark showroom of vehicles with headlights on",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: company.name,
  url: company.siteUrl,
  email: company.email,
  telephone: ["+255753103533", "+255677084461"],
  image: `${company.siteUrl}/images/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    addressLocality: company.locality,
    addressCountry: "TZ",
  },
  areaServed: ["Tanzania", "East Africa"],
  description: company.positioning,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:bg-paper focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Suspense fallback={<div className="fixed inset-x-0 top-0 z-50 h-[4.5rem] bg-navy-deep" />}>
          <SiteHeader />
        </Suspense>
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
