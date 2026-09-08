import type { Metadata } from "next";
import Link from "next/link";
import { FieldPhoto } from "@/components/field-photo";
import { FieldWorkMedia } from "@/components/field-work-media";
import { JsonLd } from "@/components/json-ld";
import { ownerFieldPhotos } from "@/lib/field-media";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  openGraphSite,
  siteConfig,
} from "@/lib/site";

const page = siteConfig.pages.commercial;
const documentTitle = `${page.title} | ${siteConfig.shortName}`;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: absoluteUrl(page.path) },
  openGraph: {
    ...openGraphSite,
    url: absoluteUrl(page.path),
    title: documentTitle,
    description: page.description,
  },
  twitter: {
    card: "summary_large_image",
    title: documentTitle,
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
            title: documentTitle,
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
        Commercial pest control in Fresno.
      </h1>
      <p className="section-intro">
        The Bug Dude handles pest problems at Fresno-area businesses, rentals, restaurants, offices, and workspaces. Tell us about the property and what you saw. We&apos;ll work out an estimate and a time.
      </p>
      <p className="section-copy">
        Facilities managers, owners, and property managers call when ants, roaches, spiders, rodents, or something else hits staff, tenants, or customers. Describe the site and the problem. We take it from there.
      </p>
      <div className="field-split field-split-page">
        <FieldPhoto
          src={ownerFieldPhotos.truck.src}
          alt={ownerFieldPhotos.truck.alt}
          caption={ownerFieldPhotos.truck.caption}
          sizes="(max-width: 800px) 100vw, 46vw"
        />
        <FieldWorkMedia />
      </div>
      <h2 className="content-subhead">Properties we often hear from</h2>
      <div className="guide-list">
        {siteConfig.commercialGuides.map((guide) => (
          <article key={guide.name} className="guide-item">
            <h3>{guide.name}</h3>
            <p>{guide.summary}</p>
          </article>
        ))}
      </div>
      <h2 className="content-subhead">What happens when you request an estimate</h2>
      <p className="section-copy">
        Send the business type, the pest, and how soon you need help. If same-day matters, call{" "}
        <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a> during {siteConfig.hours.display} and we&apos;ll see what fits. One-time visits and no-contract plans are both fine.
      </p>
      <p className="section-copy">
        Prefer the form? Include property details and we&apos;ll follow up. Not happy after service? We come back at no charge.
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
