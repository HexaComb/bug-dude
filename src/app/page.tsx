import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Bug,
  Building2,
  ClipboardCheck,
  Phone,
  Rat,
  ShieldCheck,
  Store,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";
import { EstimateForm } from "@/components/estimate-form";
import { CopyPhoneCta } from "@/components/copy-phone-cta";
import { FieldPhoto } from "@/components/field-photo";
import { FieldPhotoCarousel } from "@/components/field-photo-carousel";
import { FieldWorkMedia } from "@/components/field-work-media";
import { ScrollReveal } from "@/components/scroll-reveal";
import { JsonLd } from "@/components/json-ld";
import { ownerFieldPhotos, pestFieldPhotos, pestFieldPhotoIntro, fieldWorkVideo } from "@/lib/field-media";
import {
  absoluteUrl,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  openGraphSite,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.pages.home.title },
  description: siteConfig.pages.home.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    ...openGraphSite,
    url: absoluteUrl("/"),
    title: siteConfig.pages.home.title,
    description: siteConfig.pages.home.description,
    videos: [
      {
        url: absoluteUrl(fieldWorkVideo.src),
        type: fieldWorkVideo.type,
        width: fieldWorkVideo.width,
        height: fieldWorkVideo.height,
      },
    ],
  },
};

const phone = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;
const smsHref = `sms:${siteConfig.phoneE164}`;
const bbbProfileHref = "https://www.bbb.org/us/ca/clovis/profile/pest-control/the-bug-dude-pest-control-1126-850101818";
const bbbSealSrc = "https://m.bbb.org/brand/seals/Accredited_Business_Seal_NoRating_RGB.svg?tx=w_175";
const googleReviewsHref = "https://maps.app.goo.gl/zXtjCVFg1iEYZuoz7";
const yelpReviewsHref = "https://m.yelp.com/biz/the-bug-dude-pest-control-fresno";

const commercialPropertyTypes = [
  { label: "Storefronts", Icon: Store, image: "/commercial/storefront.webp" },
  { label: "Restaurants", Icon: UtensilsCrossed, image: "/commercial/restaurant.webp" },
  { label: "Offices", Icon: Building2, image: "/commercial/office.webp" },
  { label: "Warehouses", Icon: Warehouse, image: "/commercial/warehouse.webp" },
] as const;

const customerReviews = [
  {
    name: "Meagan Wilkerson",
    excerpt: "Quick, fast service and multiple visits to get rid of our ant problem. Affordable, dependable, and reliable service!",
    when: "Google review · 2 years ago",
  },
  {
    name: "Prany Sinarong",
    excerpt: "Quick and efficient, with great customer service. He does the job right.",
    when: "Google review · 2 years ago",
  },
  {
    name: "Brandon V",
    excerpt: "It was an easy decision to stick with him. I recommend The Bug Dude to anybody needing pest control.",
    when: "Google review · 2 years ago",
  },
  {
    name: "jovanna Tobar",
    excerpt: "Our bug problem was taken care of quickly, with great communication along the way.",
    when: "Google review · 6 months ago",
  },
  {
    name: "Linda G.",
    excerpt: "He took care of our home. The quality and price were excellent compared to the other ones.",
    when: "Yelp review · 2 years ago",
  },
  {
    name: "John N.",
    excerpt: "Very responsive and professional. He works with homeowners on how to address the problem without harming pets.",
    when: "Yelp review · 3 years ago",
  },
] as const;

const featuredPests = [
  { name: "Black widow", image: "/pests/black-widow.webp" },
  { name: "Ants", image: "/pests/ant.webp" },
  { name: "German roach", image: "/pests/german-roach.webp" },
  { name: "Mice", image: "/pests/mouse.webp" },
  { name: "Bed bugs", image: "/pests/bed-bug.webp" },
] as const;

export default function Home() {
  return (
    <div className="page-shell">
      <JsonLd
        data={[
          buildWebPageJsonLd({
            path: "/",
            title: siteConfig.pages.home.title,
            description: siteConfig.pages.home.description,
          }),
          buildFaqJsonLd(),
        ]}
      />
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="/">
            <Image src="/bug-dude-logo.png" alt="The Bug Dude Pest Control" width={1000} height={486} priority />
          </Link>
          <div className="nav-links">
            <a href="#commercial">Commercial</a>
            <a href="#from-the-field">The work</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href="#estimate">Request an estimate</a>
          </div>
          <a className="phone-link" href={phoneHref}>
            <Phone size={16} aria-hidden /> {phone}
          </a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy hero-arrival">
              <h1>
                Pest control for Fresno and Madera Counties.
              </h1>
              <p>
                Help from <a className="link-underline" href="https://maps.app.goo.gl/qN2BHRUq56qPzWq46" target="_blank" rel="noopener noreferrer">your neighbor</a> with commercial properties, rentals, and homes. Call or text with what you&apos;re seeing and we&apos;ll put together an estimate.
              </p>
              <div className="hero-conversion">
                <div className="action-row">
                  <CopyPhoneCta phoneNumber={phone} />
                  <a className="button button-alt" href="/book">
                    Book service <ArrowRight size={18} aria-hidden />
                  </a>
                </div>
                <a
                  className="bbb-mark"
                  href={bbbProfileHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See reviews on The Bug Dude Pest Control BBB profile, BBB Accredited Business with an A+ rating"
                >
                  <img src={bbbSealSrc} alt="BBB Accredited Business" width="116" height="44" />
                  <span className="bbb-rating">
                    <strong>A+</strong>
                    <small>BBB Rating</small>
                  </span>
                  <span className="bbb-profile-link">
                    See reviews <ArrowRight size={15} aria-hidden />
                  </span>
                </a>
              </div>
            </div>
            <aside className="dispatch dispatch-arrival" aria-label="Commercial service request overview">
              <p className="service-area-banner">Serving Fresno County and Madera County</p>
              <div className="dispatch-body">
                <p className="dispatch-title">Tell us what’s going on</p>
                <div className="request-line">
                  <span>Property</span>
                  <strong>Business, rental, or home</strong>
                </div>
                <div className="request-line">
                  <span>Issue</span>
                  <strong>What pests you’re seeing</strong>
                </div>
                <div className="request-line">
                  <span>Next step</span>
                  <strong>Estimate and scheduling</strong>
                </div>
                <div className="availability">
                  <span className="status-dot" />
                  Same-day when we can make it work
                </div>
              </div>
            </aside>
          </div>
        </section>
        <section className="call-strip">
          <div className="call-strip-inner">
            <span>Want to talk it through? We’re here during business hours.</span>
            <a href={phoneHref}>
              Call {phone} <ArrowRight size={17} aria-hidden />
            </a>
          </div>
        </section>
        <ScrollReveal className="commercial-reveal">
          <section className="commercial-band" id="commercial">
            <div className="section">
              <h2>For Fresno.</h2>
              <p className="section-intro">
                Offices, restaurants, rentals, warehouses. If you manage the property and pests showed up, call us. No pitch.
              </p>
              <p className="section-copy section-copy-light">
                Property managers usually call when ants hit a break room, roaches turn up in a kitchen, spiders keep coming back in a storefront, or rodents become a facilities headache. Tell us the property type and what you saw. We&apos;ll work out an estimate and a time.
              </p>
              <ul className="property-list" aria-label="Commercial property types">
                {commercialPropertyTypes.map(({ label, Icon, image }) => (
                  <li key={label}>
                    <span
                      className="property-photo"
                      style={{ backgroundImage: `url(${image})` }}
                      aria-hidden="true"
                    />
                    <span className="property-scrim" aria-hidden="true" />
                    <span className="property-label">
                      <Icon className="property-icon" size={28} strokeWidth={2} aria-hidden />
                      <span>{label}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="action-row" style={{ marginTop: 36 }}>
                <Link className="button button-alt" href="/commercial">
                  Commercial services <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="section field-band" id="from-the-field">
            <div className="field-intro">
              <p className="eyebrow">From the truck</p>
              <h2>This is the work.</h2>
              <p className="section-intro">
                You&apos;ll see the Bug Dude truck on residential streets and at the jobs people call about. The clip and photos here are from real stops.
              </p>
            </div>
            <div className="field-split">
              <FieldPhoto
                src={ownerFieldPhotos.truck.src}
                alt={ownerFieldPhotos.truck.alt}
                caption={ownerFieldPhotos.truck.caption}
                sizes="(max-width: 800px) 100vw, 46vw"
              />
              <FieldWorkMedia />
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="section" id="services">
            <div className="services-layout">
              <div>
                <h2>Get rid of common pests from the 559.</h2>
                <p className="section-intro">
                  Home or business. Ants, roaches, spiders, bed bugs, rodents, and the rest. Tell us what you&apos;re dealing with and we&apos;ll call back.
                </p>
                <p className="section-copy">
                  One-time visits are fine if you don&apos;t want a contract. A few details in the form is enough to get started.
                </p>
                <Link className="button button-plain" href="/services">
                  See pest services <ArrowRight size={18} />
                </Link>
              </div>
              <div className="service-list">
                <Service
                  icon={<Bug />}
                  title="Crawling & flying pests"
                  text="Spiders, ants, roaches, mosquitoes, fleas, ticks, earwigs, bed bugs, and more."
                />
                <Service
                  icon={<Rat />}
                  title="Rodents"
                  text="Mice and rats at homes, rentals, and commercial sites."
                />
                <Service
                  icon={<ClipboardCheck />}
                  title="No contract required"
                  text="One-time visits and no-contract plans both work."
                />
                <Service
                  icon={<ShieldCheck />}
                  title="We’ll come back if needed"
                  text="If you’re not satisfied, we’ll come back at no charge."
                />
              </div>
            </div>
            <div className="pest-keyword-block">
              <h3>What we help with in Fresno</h3>
              <p>
                Ants, roaches, spiders, mosquitoes, fleas and ticks, earwigs, bed bugs, and rodents at Fresno homes and businesses.
              </p>
              <h3 className="content-subhead">{pestFieldPhotoIntro.heading}</h3>
              <p className="section-copy">{pestFieldPhotoIntro.copy}</p>
              <FieldPhotoCarousel
                photos={pestFieldPhotos}
                ariaLabel="Pests photographed on service stops"
              />
              <ul className="pest-icon-grid" aria-label="Common pests The Bug Dude treats">
                {featuredPests.map((pest) => (
                  <li key={pest.name}>
                    <span className="pest-icon" aria-hidden="true">
                      <Image
                        src={pest.image}
                        alt=""
                        width={96}
                        height={96}
                        sizes="52px"
                      />
                    </span>
                    <span>{pest.name}</span>
                  </li>
                ))}
              </ul>
              <ul className="pest-keyword-list">
                {siteConfig.pestGuides.map((pest) => (
                  <li key={pest.name}>
                    <strong>{pest.name}</strong>
                    <span>{pest.summary}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="section content-band" id="residential">
            <h2>Homes in Fresno.</h2>
            <p className="section-intro">
              Kitchen, garage, yard, bedroom. If pests moved in, call us.
            </p>
            <div className="content-columns">
              <p className="section-copy">
                Ants on the counters, spiders in the corners, mosquitoes outside, rodent signs in the garage. Send a short estimate request. Mention the pest and whether it&apos;s inside, outside, or both.
              </p>
              <p className="section-copy">
                Prefer to talk? Call {phone} during {siteConfig.hours.display}. Same-day sometimes works if the schedule allows. One-time visits are fine if you don&apos;t want a long-term plan.
              </p>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="reviews-band" id="reviews">
            <div className="section">
              <div className="reviews-heading">
                <div>
                  <p className="eyebrow">People we’ve helped</p>
                  <h2>What your neighbors think about us.</h2>
                </div>
                <div className="review-links">
                  <a href={googleReviewsHref} target="_blank" rel="noopener noreferrer">
                    Google reviews <ArrowRight size={18} aria-hidden />
                  </a>
                  <a href={yelpReviewsHref} target="_blank" rel="noopener noreferrer">
                    Yelp reviews <ArrowRight size={18} aria-hidden />
                  </a>
                </div>
              </div>
              <div className="review-grid">
                {customerReviews.map((review) => (
                  <article key={review.name} className="review-card">
                    <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                    <blockquote>“{review.excerpt}”</blockquote>
                    <footer>
                      <strong>{review.name}</strong>
                      <span>{review.when}</span>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="process-band" id="how-it-works">
            <div className="section">
              <h2>How it works.</h2>
              <p className="section-intro section-intro-light">
                Describe the problem, ask for an estimate, pick a time. Home or business.
              </p>
              <ol className="process-list">
                <li>
                  <strong>Describe the issue</strong>
                  <span>Property type and what pests you saw.</span>
                </li>
                <li>
                  <strong>Request an estimate</strong>
                  <span>Use the form or call {phone}. We&apos;ll follow up with timing and price.</span>
                </li>
                <li>
                  <strong>Pick what works</strong>
                  <span>One-time visits and no-contract plans are both fine. Not happy? We come back at no charge.</span>
                </li>
              </ol>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="section" id="faq">
            <h2>Common questions.</h2>
            <p className="section-intro">
              Commercial and home service, same-day timing, contracts.
            </p>
            <div className="faq-list">
              {siteConfig.faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="quote-section" id="estimate">
            <div className="section">
              <div>
                <h2>Let&apos;s look at what&apos;s going on.</h2>
                <p className="section-intro" style={{ color: "#79301e" }}>
                  Call or text for a free estimate. Home, rental, restaurant, office, or workspace. Hours: {siteConfig.hours.display}.
                </p>
                <p className="section-copy" style={{ color: "#79301e" }}>
                  Name the pest if you know it. Ants, roaches, spiders, bed bugs, rodents, or something else. Say if it&apos;s a business or a home. That gets you a faster callback.
                </p>
                <div className="action-row">
                  <a className="button button-plain" href={phoneHref}>
                    <Phone size={18} /> Call for an estimate
                  </a>
                  <a className="button button-plain" href={smsHref}>
                    Text for an estimate
                  </a>
                </div>
              </div>
              <EstimateForm />
            </div>
          </section>
        </ScrollReveal>
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
            <a href={phoneHref}>{phone}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Service({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="service-item">
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
