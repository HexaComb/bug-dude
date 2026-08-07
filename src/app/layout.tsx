import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  absoluteUrl,
  buildLocalBusinessJsonLd,
  buildWebSiteJsonLd,
  getSiteUrl,
  siteConfig,
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.name} | ${siteConfig.pages.home.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.pages.home.description,
  applicationName: siteConfig.name,
  keywords: [
    "Fresno pest control",
    "commercial pest control Fresno",
    "residential pest control Fresno",
    "The Bug Dude Pest Control",
    "ant control Fresno",
    "roach control Fresno",
    "spider control Fresno",
    "rodent control Fresno",
    "bedbug control Fresno",
    "apartment pest control Fresno",
    "restaurant pest control Fresno",
    "property manager pest control",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Pest control",
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  icons: {
    icon: [{ url: "/bug-dude-logo.png", type: "image/png" }],
    shortcut: "/bug-dude-logo.png",
    apple: "/bug-dude-logo.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.pages.home.title}`,
    description: siteConfig.pages.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.pages.home.title}`,
    description: siteConfig.pages.home.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": siteConfig.locality,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {/* THESIS: A local service site that reads like a capable field-dispatch partner, not a generic contractor page. OWN-WORLD: electric blue, red and yellow pulled from the supplied vehicle mark; crisp route-board geometry. STORY: A visitor sees commercial relevance, clear pest coverage, and a direct estimate path. FIRST VIEWPORT: oversized commercial headline left; structured request board and primary action right. FORM: Fresno field-service dispatch board, direction seed 289e9860. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
        <JsonLd data={[buildLocalBusinessJsonLd(), buildWebSiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
