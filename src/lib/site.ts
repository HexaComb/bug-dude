/** Shared public business facts for SEO, metadata, and JSON-LD. Do not invent address, email, reviews, or credentials here. */

export const siteConfig = {
  name: "The Bug Dude Pest Control",
  shortName: "The Bug Dude",
  tagline: "Pest control for Fresno businesses and homes",
  description:
    "Local pest control in Fresno County and Madera County for businesses, rentals, and homes. Call or send a note—we’ll look at what’s going on and talk through next steps.",
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
      summary:
        "When you see webs or spiders in corners, closets, or storage, call us for help with spiders.",
    },
    {
      name: "Ants",
      summary:
        "When you see trails or ants in the kitchen or break room, call us for help with ants.",
    },
    {
      name: "Roaches",
      summary:
        "When you see them at night or notice droppings, call us for help with roaches.",
    },
    {
      name: "Mosquitoes",
      summary:
        "When you get bites outdoors or see them swarming near standing water or the yard, call us for help with mosquitoes.",
    },
    {
      name: "Fleas & ticks",
      summary:
        "When pets are scratching or you’re getting bites near yard or pet areas, call us for help with fleas & ticks.",
    },
    {
      name: "Earwigs",
      summary:
        "When you see them in the garage or around damp ground-level areas, call us for help with earwigs.",
    },
    {
      name: "Bed bugs",
      summary:
        "When you notice bites or blood spots on sheets, call us for help with bed bugs.",
    },
    {
      name: "Rodents",
      summary:
        "When you see droppings, nesting, or scratching and entry signs, call us for help with rodents.",
    },
  ] as const,
  commercialGuides: [
    {
      name: "Offices & storefronts",
      summary:
        "Ants, spiders, and other pests in customer areas and staff spaces. We’ll look at what’s going on and talk through options.",
    },
    {
      name: "Restaurants & food service",
      summary:
        "Kitchen and dining-area pest issues. Call or send details so we can discuss timing and an estimate.",
    },
    {
      name: "Rental & apartment properties",
      summary:
        "For property managers dealing with unit turnovers, tenant reports, or pests across a few buildings.",
    },
    {
      name: "Warehouses & workspaces",
      summary:
        "Pest activity around receiving, storage, and staff areas. Simple intake—no long sales pitch.",
    },
  ] as const,
  faqs: [
    {
      question: "Do you offer commercial pest control in Fresno?",
      answer:
        "Yes. We work with Fresno-area businesses, restaurants, rentals, offices, and workspaces. Tell us what you’re seeing and we’ll talk through next steps.",
    },
    {
      question: "Do you also handle residential pest control?",
      answer:
        "Yes. We help Fresno homeowners with common pests—spiders, ants, roaches, mosquitoes, fleas, ticks, earwigs, bed bugs, rodents, and more.",
    },
    {
      question: "Can I get same-day pest control service?",
      answer:
        "Sometimes, when we can make it work. Call 559-321-6230 during business hours and we’ll check timing for your place.",
    },
    {
      question: "Do I have to sign a long-term contract?",
      answer:
        "No. One-time service and no-contract options are available. You can choose what fits.",
    },
    {
      question: "What if I’m not satisfied after service?",
      answer:
        "If you’re not satisfied, we’ll come back at no charge. Call us and we’ll set up the follow-up.",
    },
    {
      question: "What are your hours?",
      answer:
        "Monday–Friday, 7:30 AM–4:30 PM. Call 559-321-6230 or request an estimate online anytime.",
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
        "Commercial pest control for Fresno offices, restaurants, rentals, and workspaces. Call or request an estimate to start the conversation.",
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
