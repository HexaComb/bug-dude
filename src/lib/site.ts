/** Shared public business facts for SEO, metadata, and JSON-LD. Do not invent address, email, reviews, or credentials here. */

export const siteConfig = {
  name: "The Bug Dude Pest Control",
  shortName: "The Bug Dude",
  tagline: "Fresno commercial and residential pest control",
  description:
    "Local Fresno pest control for commercial properties, rentals, and homes. Same-day service when we can make it work, flexible options, and a no-charge follow-up if you’re not satisfied.",
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
    display: "Monday–Friday, 7:30 AM–4:30 PM",
  },
  pests: [
    "spiders",
    "ants",
    "roaches",
    "mosquitoes",
    "fleas",
    "ticks",
    "earwigs",
    "bedbugs",
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
      summary:
        "Fresno spider control for homes, offices, and storage areas where webs and activity keep showing up.",
    },
    {
      name: "Ants",
      summary:
        "Ant control around kitchens, break rooms, storefronts, and rental units when trails become a daily nuisance.",
    },
    {
      name: "Roaches",
      summary:
        "Roach control for restaurants, food service, apartments, and homes where sanitation and guest experience matter.",
    },
    {
      name: "Mosquitoes",
      summary:
        "Mosquito concerns around outdoor workspaces, property grounds, and residential yards during warmer Fresno months.",
    },
    {
      name: "Fleas & ticks",
      summary:
        "Flea and tick help for properties dealing with pet areas, landscaping edges, and recurring outdoor activity.",
    },
    {
      name: "Earwigs",
      summary:
        "Earwig control when moisture-loving pests turn up in garages, warehouses, and ground-level rooms.",
    },
    {
      name: "Bedbugs",
      summary:
        "Bedbug service conversations for rentals, multi-unit housing, and homes that need a clear next step fast.",
    },
    {
      name: "Rodents",
      summary:
        "Rodent control for Fresno businesses and homes noticing droppings, nesting, or entry around the building.",
    },
  ] as const,
  commercialGuides: [
    {
      name: "Offices & storefronts",
      summary:
        "Keep customer-facing spaces and staff areas free from ants, spiders, and other pests that hurt first impressions.",
    },
    {
      name: "Restaurants & food service",
      summary:
        "Talk through kitchen and dining-area pest pressure with a local Fresno partner who understands food-service urgency.",
    },
    {
      name: "Rental & apartment properties",
      summary:
        "Support property managers handling unit turnovers, tenant reports, and recurring pest issues across a portfolio.",
    },
    {
      name: "Warehouses & workspaces",
      summary:
        "Address pest activity around receiving areas, storage, and staff spaces without a complicated sales pitch.",
    },
  ] as const,
  faqs: [
    {
      question: "Do you offer commercial pest control in Fresno?",
      answer:
        "Yes. The Bug Dude Pest Control works with Fresno-area businesses, restaurants, rental properties, offices, and workspaces. Tell us what you’re seeing and we’ll discuss the right next step.",
    },
    {
      question: "Do you also handle residential pest control?",
      answer:
        "Yes. We help Fresno homeowners with common household pests, including spiders, ants, roaches, mosquitoes, fleas, ticks, earwigs, bedbugs, rodents, and more.",
    },
    {
      question: "Can I get same-day pest control service?",
      answer:
        "Same-day service is available when we can make it work. Call 559-321-6230 during business hours and we’ll check timing for your property.",
    },
    {
      question: "Do I have to sign a long-term contract?",
      answer:
        "No. One-time service and no-contract options are available so you can choose what fits your property and budget.",
    },
    {
      question: "What if I’m not satisfied after service?",
      answer:
        "If you’re not satisfied, we’ll come back at no charge. Call us and we’ll schedule the follow-up.",
    },
    {
      question: "What are your hours?",
      answer:
        "We’re available Monday–Friday, 7:30 AM–4:30 PM. Call 559-321-6230 or request an estimate online any time.",
    },
  ] as const,
  logoPath: "/bug-dude-logo.svg",
  pages: {
    home: {
      path: "/",
      title: "Fresno Commercial & Residential Pest Control",
      description:
        "The Bug Dude Pest Control serves Fresno businesses, rentals, and homes. Call 559-321-6230 or request an estimate for local pest control.",
    },
    commercial: {
      path: "/commercial",
      title: "Commercial Pest Control in Fresno",
      description:
        "Commercial pest control for Fresno offices, restaurants, rentals, and workspaces. Start with a straightforward estimate conversation.",
    },
    services: {
      path: "/services",
      title: "Pest Control Services in Fresno",
      description:
        "Fresno pest control for spiders, ants, roaches, mosquitoes, fleas, ticks, earwigs, bedbugs, rodents, and more. Request an estimate today.",
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
    image: absoluteUrl(siteConfig.logoPath),
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
