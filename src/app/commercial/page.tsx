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
        Commercial pest control that starts with a real conversation.
      </h1>
      <p className="section-intro">
        The Bug Dude helps Fresno-area businesses, rentals, restaurants, offices, and workspaces with active pest problems. Tell us about the property and what you’re seeing. We’ll talk through an estimate and scheduling.
      </p>
      <p className="section-copy">
        Facilities managers, owners, and property managers usually call when ants, roaches, spiders, rodents, or other pests affect staff, tenants, or customers. Keep it simple: describe the site and the issue, and we’ll take it from there.
      </p>
      <h2 className="content-subhead">Properties we often hear from</h2>
      <div className="guide-list">
        {siteConfig.commercialGuides.map((guide) => (
          <article key={guide.name} className="guide-item">
            <h3>{guide.name}</h3>
            <p>{guide.summary}</p>
          </article>
        ))}
      </div>
      <h2 className="content-subhead">What to expect when you request an estimate</h2>
      <p className="section-copy">
        Share the business type, pest concern, and how soon you need help. If same-day timing matters, call{" "}
        <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a> during {siteConfig.hours.display} and we’ll check what we can make work. One-time and no-contract options are available when you need flexibility.
      </p>
      <p className="section-copy">
        Prefer to start online? Send an estimate request with the property details and we’ll follow up. If you’re not satisfied after service, we’ll come back at no charge.
      </p>
      <div className="action-row" style={{ marginTop: 28 }}>
        <Link className="button button-primary" href="/#estimate">
          Request a commercial estimate
        </Link>
        <a className="button button-plain" href={siteConfig.phoneHref}>
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    </main>
  );
}
