/** Shared public business facts for SEO, metadata, and JSON-LD. Do not invent address, email, reviews, or credentials here. */

import { fieldWorkVideo } from "@/lib/field-media";

export const siteConfig = {
  name: "The Bug Dude Pest Control",
  shortName: "The Bug Dude",
  tagline: "Pest control for Fresno businesses and homes",
  description:
    "Pest control in Fresno and Madera counties for businesses, rentals, and homes. Call or leave a note about what you're seeing.",
  phoneDisplay: "559-321-6230",
  phoneE164: "+15593216230",
  phoneHref: "tel:+15593216230",
  locale: "en_US",
  locality: "Fresno",
  region: "CA",
  country: "US",
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "07:30",
    closes: "16:30",
    display: "Monday through Friday, 7:30 AM to 4:30 PM",
  },
  pests: [
    "spiders",
    "ants",
    "roaches",
    "mosquitoes",
    "fleas",
    "ticks",
    "earwigs",
    "bed bugs",
    "rodents",
  ] as const,
  propertyTypes: [
    "Offices & storefronts",
    "Restaurants & food service",
    "Rental & apartment properties",
    "Warehouses & workspaces",
    "Homes",
  ] as const,
  pestGuides: [
    {
      name: "Spiders",
      summary: "Webs in corners, closets, or storage usually mean spiders.",
    },
    {
      name: "Ants",
      summary: "Trails in the kitchen or break room usually mean ants.",
    },
    {
      name: "Roaches",
      summary: "Night sightings or droppings behind appliances often mean roaches.",
    },
    {
      name: "Mosquitoes",
      summary: "Bites outside, or swarms near standing water or the yard, usually mean mosquitoes.",
    },
    {
      name: "Fleas & ticks",
      summary: "A scratching pet or bites near the yard often mean fleas or ticks.",
    },
    {
      name: "Earwigs",
      summary: "Earwigs often show up in the garage or other damp spots near the ground.",
    },
    {
      name: "Bed bugs",
      summary: "Bites or blood spots on sheets can mean bed bugs.",
    },
    {
      name: "Rodents",
      summary: "Droppings, nesting material, scratching, or chew marks often mean rodents.",
    },
  ] as const,
  commercialGuides: [
    {
      name: "Offices & storefronts",
      summary:
        "Ants, spiders, and other pests in customer areas or back rooms. Tell us what you saw and where.",
    },
    {
      name: "Restaurants & food service",
      summary:
        "Kitchen or dining-area pests. Call or send details so we can talk timing and price.",
    },
    {
      name: "Rental & apartment properties",
      summary:
        "Unit turnovers, tenant complaints, or pests across a few buildings.",
    },
    {
      name: "Warehouses & workspaces",
      summary:
        "Pests near receiving docks, storage, or break areas. Short intake, no pitch.",
    },
  ] as const,
  faqs: [
    {
      question: "Do you offer commercial pest control in Fresno?",
      answer:
        "Yes. Restaurants, rentals, offices, and other Fresno-area businesses. Tell us what you're seeing.",
    },
    {
      question: "Do you also handle residential pest control?",
      answer:
        "Yes. Spiders, ants, roaches, mosquitoes, fleas, ticks, earwigs, bed bugs, rodents, and the usual suspects around Fresno homes.",
    },
    {
      question: "Can I get same-day pest control service?",
      answer:
        "Sometimes, if the schedule allows. Call 559-321-6230 during business hours and we'll check.",
    },
    {
      question: "Do I have to sign a long-term contract?",
      answer:
        "No. One-time visits and no-contract options are both fine.",
    },
    {
      question: "What if I’m not satisfied after service?",
      answer:
        "If you’re not satisfied, we’ll come back at no charge. Call us and we’ll set up the follow-up.",
    },
    {
      question: "What are your hours?",
      answer:
        "Monday through Friday, 7:30 AM to 4:30 PM. Call 559-321-6230 or request an estimate online anytime.",
    },
  ] as const,
  logoPath: "/bug-dude-logo.png",
  pages: {
    home: {
      path: "/",
      title: "Fresno Commercial & Residential Pest Control",
      description:
        "The Bug Dude Pest Control helps Fresno businesses, rentals, and homes with common pests. Call 559-321-6230 or request an estimate.",
    },
    commercial: {
      path: "/commercial",
      title: "Commercial Pest Control in Fresno",
      description:
        "Commercial pest control for Fresno offices, restaurants, rentals, and workspaces. Call or request an estimate.",
    },
    services: {
      path: "/services",
      title: "Pest Control Services in Fresno",
      description:
        "Fresno pest control for spiders, ants, roaches, mosquitoes, fleas, ticks, earwigs, bed bugs, rodents, and more. Call or request an estimate.",
    },
  },
} as const;

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/\/$/, "")}`;

  const preview = process.env.VERCEL_URL?.trim();
  if (preview) return `https://${preview.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type JsonLd = Record<string, unknown>;

export function buildLocalBusinessJsonLd(): JsonLd {
  const url = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url,
    telephone: siteConfig.phoneE164,
    image: [
      absoluteUrl(siteConfig.logoPath),
      absoluteUrl("/field/owner-truck.webp"),
      absoluteUrl("/field/owner-at-work.webp"),
      absoluteUrl("/field/owner-yard-work-poster.webp"),
    ],
    video: { "@id": `${url}/#field-video` },
    logo: absoluteUrl(siteConfig.logoPath),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.locality,
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    },
    openingHoursSpecification: siteConfig.hours.days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    })),
    knowsAbout: [...siteConfig.pests, "commercial pest control", "residential pest control"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pest control services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial pest control",
            areaServed: siteConfig.locality,
            provider: { "@id": `${url}/#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential pest control",
            areaServed: siteConfig.locality,
            provider: { "@id": `${url}/#business` },
          },
        },
        ...siteConfig.pests.map((pest) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${pest.charAt(0).toUpperCase()}${pest.slice(1)} control`,
            areaServed: siteConfig.locality,
            provider: { "@id": `${url}/#business` },
          },
        })),
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneE164,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...siteConfig.hours.days],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    },
  };
}

export function buildWebSiteJsonLd(): JsonLd {
  const url = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: siteConfig.name,
    url,
    description: siteConfig.description,
    publisher: { "@id": `${url}/#business` },
    inLanguage: "en-US",
  };
}

export function buildWebPageJsonLd(input: {
  path: string;
  title: string;
  description: string;
}): JsonLd {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": `${absoluteUrl("/")}/#website` },
    about: { "@id": `${absoluteUrl("/")}/#business` },
    inLanguage: "en-US",
  };
}

export function buildBreadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; path: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqJsonLd(
  faqs: ReadonlyArray<{ question: string; answer: string }> = siteConfig.faqs,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildFieldVideoJsonLd(): JsonLd {
  const url = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${url}/#field-video`,
    name: fieldWorkVideo.title,
    description: fieldWorkVideo.description,
    thumbnailUrl: absoluteUrl(fieldWorkVideo.poster),
    contentUrl: absoluteUrl(fieldWorkVideo.src),
    embedUrl: `${url}#from-the-field`,
    uploadDate: fieldWorkVideo.uploadDate,
    duration: fieldWorkVideo.durationIso,
    width: fieldWorkVideo.width,
    height: fieldWorkVideo.height,
    inLanguage: "en-US",
    publisher: { "@id": `${url}/#business` },
  };
}
