import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { EstimateForm } from "@/components/estimate-form";
import { FieldPhotoCarousel } from "@/components/field-photo-carousel";
import { JsonLd } from "@/components/json-ld";
import type { FresnoServicePage } from "@/lib/fresno-service-pages";
import { relatedFresnoServicePages } from "@/lib/fresno-service-pages";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
  buildWebPageJsonLd,
  openGraphSite,
  siteConfig,
} from "@/lib/site";

export function fresnoServiceMetadata(page: FresnoServicePage): Metadata {
  const documentTitle = `${page.title} | ${siteConfig.shortName}`;
  const image = {
    url: absoluteUrl(page.identificationPhoto.src),
    alt: page.identificationPhoto.alt,
  };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: absoluteUrl(page.path) },
    openGraph: {
      ...openGraphSite,
      url: absoluteUrl(page.path),
      title: documentTitle,
      description: page.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description: page.description,
      images: [image.url],
    },
  };
}

export function FresnoServiceLanding({ page }: { page: FresnoServicePage }) {
  const documentTitle = `${page.title} | ${siteConfig.shortName}`;
  const related = relatedFresnoServicePages(page.path);

  return (
    <div className="page-shell">
      <JsonLd
        data={[
          buildWebPageJsonLd({
            path: page.path,
            title: documentTitle,
            description: page.description,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: siteConfig.pages.services.path },
            { name: page.breadcrumbName, path: page.path },
          ]),
          buildServiceJsonLd({
            path: page.path,
            name: page.serviceName,
            description: page.description,
            serviceType: page.serviceType,
            image: page.identificationPhoto.src,
          }),
          buildFaqJsonLd(page.faqs),
        ]}
      />
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="/">
            <Image src="/bug-dude-logo.png" alt="The Bug Dude Pest Control" width={1000} height={486} />
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <a href="#estimate">Request an estimate</a>
          </div>
          <a className="phone-link" href={siteConfig.phoneHref}>
            <Phone size={16} aria-hidden /> {siteConfig.phoneDisplay}
          </a>
        </nav>
      </header>
      <main>
        <section className="section">
          <Link className="button button-plain" href="/services">
            ← All pest services
          </Link>
          <h1
            style={{
              marginTop: 36,
              fontSize: "clamp(3rem,8vw,6rem)",
              lineHeight: 0.9,
              letterSpacing: "-.06em",
            }}
          >
            {page.heading}
          </h1>
          <p className="section-intro">{page.intro}</p>
          <p className="section-copy">{page.overview}</p>
          <FieldPhotoCarousel
            photos={page.photos}
            ariaLabel={`${page.pestLabel} reference and job photos`}
          />
          <h2 className="content-subhead">{page.signsHeading}</h2>
          <div className="guide-list">
            {page.signs.map((sign) => (
              <article key={sign.name} className="guide-item">
                <h3>{sign.name}</h3>
                <p>{sign.summary}</p>
              </article>
            ))}
          </div>
          <h2 className="content-subhead">{page.localHeading}</h2>
          {page.localCopy.map((paragraph) => (
            <p key={paragraph} className="section-copy">
              {paragraph}
            </p>
          ))}
          <h2 className="content-subhead">{page.visitHeading}</h2>
          <p className="section-copy">{page.visitIntro}</p>
          <div className="guide-list">
            {page.visitSteps.map((step) => (
              <article key={step.name} className="guide-item">
                <h3>{step.name}</h3>
                <p>{step.summary}</p>
              </article>
            ))}
          </div>
          <h2 className="content-subhead">Common questions</h2>
          <div className="faq-list">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="section-copy" style={{ marginTop: 28 }}>
            Also in Fresno:{" "}
            {related.map((other, index) => (
              <span key={other.path}>
                <Link href={other.path}>{other.breadcrumbName.toLowerCase()}</Link>
                {index < related.length - 1 ? ", " : "."}
              </span>
            ))}{" "}
            Or see{" "}
            <Link href="/services">all pest services</Link>
            {" / "}
            <Link href="/">home</Link>.
          </p>
          <div className="action-row" style={{ marginTop: 36 }}>
            <a className="button button-primary" href="#estimate">
              Request an estimate
            </a>
            <a className="button button-plain" href={siteConfig.phoneHref}>
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </section>
        <section className="call-strip">
          <div className="call-strip-inner">
            <span>Want to talk it through? We&apos;re here during business hours.</span>
            <a href={siteConfig.phoneHref}>
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </section>
        <section className="quote-section" id="estimate">
          <div className="section">
            <div>
              <h2>Let&apos;s look at what&apos;s going on.</h2>
              <p className="section-intro" style={{ color: "#79301e" }}>
                Call or send the form. Name the pest and whether it is a home, rental, or business. Hours: {siteConfig.hours.display}.
              </p>
              <p className="section-copy" style={{ color: "#79301e" }}>
                Same-day sometimes works if the schedule allows. One-time visits are fine. Not happy after service? We come back at no charge.
              </p>
              <div className="action-row">
                <a className="button button-plain" href={siteConfig.phoneHref}>
                  <Phone size={18} /> Call for an estimate
                </a>
                <a className="button button-plain" href={`sms:${siteConfig.phoneE164}`}>
                  Text for an estimate
                </a>
              </div>
            </div>
            <EstimateForm defaultPestIssue={page.defaultPestIssue} />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image src="/bug-dude-logo.png" alt="The Bug Dude Pest Control" width={1000} height={486} />
          </div>
          <div className="footer-meta">
            Serving Fresno County and Madera County
            <br />
            Commercial and residential pest control
            <br />
            {siteConfig.hours.display}
            <br />
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
