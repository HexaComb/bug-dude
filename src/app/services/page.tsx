import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
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
        ]}
      />
      <Link className="button button-plain" href="/">
        ← Back to home
      </Link>
      <h1 style={{ marginTop: 36, fontSize: "clamp(3rem,8vw,6rem)", lineHeight: 0.9, letterSpacing: "-.06em" }}>
        Pest services for Fresno homes and properties.
      </h1>
      <p className="section-intro">
        We treat common household and property pests across Fresno. Send us the details of your issue for an estimate.
      </p>
      <ul className="section-intro" style={{ paddingLeft: 22, marginTop: 0, textTransform: "capitalize" }}>
        {siteConfig.pests.map((pest) => (
          <li key={pest} style={{ marginBottom: 8 }}>
            {pest}
          </li>
        ))}
      </ul>
      <p className="section-intro">
        Call <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a> ({siteConfig.hours.display}) or request an estimate online.
      </p>
      <Link className="button button-primary" href="/#estimate">
        Request an estimate
      </Link>
    </main>
  );
}
