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
        Commercial pest control in Fresno starts with a straightforward conversation.
      </h1>
      <p className="section-intro">
        The Bug Dude Pest Control helps Fresno-area businesses, rental properties, restaurants, offices, and workspaces deal with active pest problems without a hard sell. Tell us about the property and the issue so we can discuss estimate and scheduling options.
      </p>
      <p className="section-copy">
        Commercial pest control searches in Fresno often come from facilities managers, owners, and property managers who need a reliable local call for ants, roaches, spiders, rodents, or other pests affecting staff, tenants, or customers. We keep the intake simple and focused on what you’re seeing on site.
      </p>
      <h2 className="content-subhead">Properties we commonly discuss</h2>
      <div className="guide-list">
        {siteConfig.commercialGuides.map((guide) => (
          <article key={guide.name} className="guide-item">
            <h3>{guide.name}</h3>
            <p>{guide.summary}</p>
          </article>
        ))}
      </div>
      <h2 className="content-subhead">What to expect from a commercial estimate request</h2>
      <p className="section-copy">
        Share the business type, pest concern, and urgency. If same-day service timing matters, call{" "}
        <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a> during {siteConfig.hours.display} and we’ll check what we can make work. One-time service and no-contract options are available when you need flexibility.
      </p>
      <p className="section-copy">
        Prefer to start online? Send a commercial estimate request with the property details and we’ll follow up. If you’re not satisfied after service, we’ll come back at no charge.
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
