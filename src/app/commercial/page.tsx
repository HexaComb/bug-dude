import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  siteConfig,
} from "@/lib/site";

const page = siteConfig.pages.commercial;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: absoluteUrl(page.path) },
  openGraph: {
    url: absoluteUrl(page.path),
    title: `${page.title} | ${siteConfig.name}`,
    description: page.description,
  },
};

export default function CommercialPage() {
  return (
    <main className="section">
      <JsonLd
        data={[
          buildWebPageJsonLd({
            path: page.path,
            title: `${page.title} | ${siteConfig.name}`,
            description: page.description,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Commercial", path: page.path },
          ]),
        ]}
      />
      <Link className="button button-plain" href="/">
        ← Back to home
      </Link>
      <h1 style={{ marginTop: 36, fontSize: "clamp(3rem,8vw,6rem)", lineHeight: 0.9, letterSpacing: "-.06em" }}>
        Commercial pest control starts with a straightforward conversation.
      </h1>
      <p className="section-intro">
        The Bug Dude works with Fresno-area businesses, rental properties, and workspaces. Tell us about your property and issue so we can discuss the right service approach.
      </p>
      <ul className="section-intro" style={{ paddingLeft: 22, marginTop: 0 }}>
        {siteConfig.propertyTypes
          .filter((type) => type !== "Homes")
          .map((type) => (
            <li key={type} style={{ marginBottom: 8 }}>
              {type}
            </li>
          ))}
      </ul>
      <p className="section-intro">
        Call <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a> during {siteConfig.hours.display}, or request a commercial estimate online.
      </p>
      <Link className="button button-primary" href="/#estimate">
        Request a commercial estimate
      </Link>
    </main>
  );
}
