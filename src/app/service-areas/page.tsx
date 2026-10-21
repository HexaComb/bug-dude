import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  openGraphSite,
  siteConfig,
} from "@/lib/site";

const page = siteConfig.pages.serviceAreas;
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

export default function ServiceAreasPage() {
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
            { name: "Service areas", path: page.path },
          ]),
        ]}
      />
      <Link className="button button-plain" href="/">
        ← Back to home
      </Link>
      <h1 style={{ marginTop: 36, fontSize: "clamp(3rem,8vw,6rem)", lineHeight: 0.9, letterSpacing: "-.06em" }}>
        Pest control in Fresno, Sanger, and Madera.
      </h1>
      <p className="section-intro">
        The Bug Dude serves homes, rentals, and businesses in Fresno County and Madera County. We help with spiders, ants, roaches, mosquitoes, fleas, ticks, earwigs, bed bugs, rodents, and more.
      </p>
      <h2 className="content-subhead">Areas we serve</h2>
      <div className="guide-list">
        {siteConfig.serviceCities.map((city) => (
          <article key={city.name} className="guide-item">
            <h3>{city.name}, California</h3>
            <p>{city.description}</p>
            <p>{city.county} · {siteConfig.hours.display}</p>
          </article>
        ))}
      </div>
      <h2 className="content-subhead">Request service for your address</h2>
      <p className="section-copy">
        Tell us which city you’re in, whether the property is a home, rental, or business, and what pest you’re seeing. We’ll talk through an estimate and scheduling. Same-day timing may be possible when scheduling allows.
      </p>
      <div className="action-row" style={{ marginTop: 28 }}>
        <Link className="button button-primary" href="/#estimate">Request an estimate</Link>
        <a className="button button-plain" href={siteConfig.phoneHref}>Call {siteConfig.phoneDisplay}</a>
      </div>
      <p className="section-copy" style={{ marginTop: 28 }}>
        See <Link href="/services">pests we help with</Link> or explore <Link href="/commercial">commercial pest control</Link>.
      </p>
    </main>
  );
}
