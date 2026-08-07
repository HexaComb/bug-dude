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
