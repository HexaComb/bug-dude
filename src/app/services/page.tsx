import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  siteConfig,
} from "@/lib/site";

const page = siteConfig.pages.services;

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

export default function ServicesPage() {
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
            { name: "Services", path: page.path },
          ]),
          buildFaqJsonLd(siteConfig.faqs.slice(0, 4)),
        ]}
      />
      <Link className="button button-plain" href="/">
        ← Back to home
      </Link>
      <h1 style={{ marginTop: 36, fontSize: "clamp(3rem,8vw,6rem)", lineHeight: 0.9, letterSpacing: "-.06em" }}>
        Pest control services for Fresno homes and properties.
      </h1>
      <p className="section-intro">
        The Bug Dude Pest Control treats common household and commercial pests across Fresno. Whether you need residential pest control or help at a business property, tell us what you’re seeing and we’ll follow up with estimate options.
      </p>
      <p className="section-copy">
        Local searches for ant control, roach control, spider control, bed bug service, and rodent control in Fresno usually mean someone wants a clear path to service—not a long brochure. Use this page to confirm we cover the pest you’re dealing with, then request an estimate or call{" "}
        <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>.
      </p>
      <h2 className="content-subhead">Pests we help with in Fresno</h2>
      <div className="guide-list">
        {siteConfig.pestGuides.map((pest) => (
          <article key={pest.name} className="guide-item">
            <h3>{pest.name} control</h3>
            <p>{pest.summary}</p>
          </article>
        ))}
      </div>
      <h2 className="content-subhead">Service options that stay flexible</h2>
      <p className="section-copy">
        One-time service and no-contract options are available. Same-day pest control may be possible when scheduling allows. If you’re not satisfied, we’ll come back at no charge. Hours are {siteConfig.hours.display}.
      </p>
      <h2 className="content-subhead">Common questions</h2>
      <div className="faq-list">
        {siteConfig.faqs.slice(0, 4).map((faq) => (
          <details key={faq.question} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
      <div className="action-row" style={{ marginTop: 36 }}>
        <Link className="button button-primary" href="/#estimate">
          Request an estimate
        </Link>
        <Link className="button button-plain" href="/commercial">
          Commercial pest control
        </Link>
      </div>
    </main>
  );
}
