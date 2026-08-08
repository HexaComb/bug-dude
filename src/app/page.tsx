import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Bug, ClipboardCheck, Phone, Rat, ShieldCheck } from "lucide-react";
import { EstimateForm } from "@/components/estimate-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { JsonLd } from "@/components/json-ld";
import {
  absoluteUrl,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} | ${siteConfig.pages.home.title}` },
  description: siteConfig.pages.home.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    url: absoluteUrl("/"),
    title: `${siteConfig.name} | ${siteConfig.pages.home.title}`,
    description: siteConfig.pages.home.description,
  },
};

const phone = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;
const smsHref = `sms:${siteConfig.phoneE164}`;

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
            title: `${siteConfig.name} | ${siteConfig.pages.home.title}`,
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
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href="#estimate">Request estimate</a>
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
                Pest control that keeps <em>business</em> moving.
              </h1>
              <p>
                Local Fresno pest control for commercial properties, rentals, and homes. Call or text us for a free estimate and tell us what’s happening.
              </p>
              <div className="action-row">
                <a className="button button-primary" href={phoneHref}>
                  <Phone size={18} /> Call for a free estimate
                </a>
                <a className="button button-alt" href={smsHref}>
                  Text for a free estimate
                </a>
                <a className="button button-plain" href="/book">
                  Book service <ArrowRight size={18} />
                </a>
              </div>
              <div className="bbb-mark" aria-label="Better Business Bureau">
                <strong>BBB</strong>
                <span>Better Business Bureau</span>
              </div>
            </div>
            <aside className="dispatch dispatch-arrival" aria-label="Commercial service request overview">
              <span className="paint-mark">
                LOCAL
                <br />
                TO
                <br />
                FRESNO
              </span>
              <div className="dispatch-body">
                <p className="dispatch-title">Start a service request</p>
                <div className="request-line">
                  <span>Property</span>
                  <strong>Business or rental</strong>
                </div>
                <div className="request-line">
                  <span>Issue</span>
                  <strong>Tell us what you’re seeing</strong>
                </div>
                <div className="request-line">
                  <span>Next step</span>
                  <strong>Estimate & scheduling</strong>
                </div>
                <div className="availability">
                  <span className="status-dot" />
                  Same-day service when we can make it work
                </div>
              </div>
            </aside>
          </div>
        </section>
        <section className="call-strip">
          <div className="call-strip-inner">
            <span>Need to talk through a pest problem right now?</span>
            <a href={phoneHref}>
              Call {phone} <ArrowRight size={17} aria-hidden />
            </a>
          </div>
        </section>
        <ScrollReveal className="commercial-reveal">
          <section className="commercial-band" id="commercial">
            <div className="section">
              <h2>Built for the places Fresno works.</h2>
              <p className="section-intro">
                Commercial pest control in Fresno should feel practical, not corporate. Whether you manage an office, restaurant, rental portfolio, or warehouse, The Bug Dude is a local partner for active pest issues and recurring service conversations.
              </p>
              <p className="section-copy section-copy-light">
                Property managers and business owners call us when ants show up in a break room, roaches pressure a kitchen, spiders keep reappearing in a storefront, or rodents become a facilities problem. We keep the process simple: tell us the property type, describe what you’re seeing, and we’ll help you decide on an estimate and schedule.
              </p>
              <div className="property-list">
                <div>
                  <span>01</span>Offices & storefronts
                </div>
                <div>
                  <span>02</span>Restaurants & food service
                </div>
                <div>
                  <span>03</span>Rental & apartment properties
                </div>
                <div>
                  <span>04</span>Warehouses & workspaces
                </div>
              </div>
              <div className="action-row" style={{ marginTop: 36 }}>
                <Link className="button button-alt" href="/commercial">
                  Explore commercial service <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="section" id="services">
            <div className="services-layout">
              <div>
                <h2>One local call for the pests you don’t want around.</h2>
                <p className="section-intro">
                  Looking for residential pest control in Fresno or help with a commercial property? We handle common household and business pests and follow up on the issue you report—no fluff, no mystery process.
                </p>
                <p className="section-copy">
                  Searchers often need a clear answer fast: Can you treat ants, roaches, spiders, bedbugs, or rodents in Fresno? Can you come out for a one-time service? Do you offer flexible options without a long contract? Yes—share the details and we’ll respond with next steps.
                </p>
                <Link className="button button-plain" href="/services">
                  View pest services <ArrowRight size={18} />
                </Link>
              </div>
              <div className="service-list">
                <Service
                  icon={<Bug />}
                  title="Crawling & flying pests"
                  text="Spiders, ants, roaches, mosquitoes, fleas, ticks, earwigs, bedbugs, and more."
                />
                <Service
                  icon={<Rat />}
                  title="Rodent concerns"
                  text="Tell us what you’re seeing around your home, rental, or commercial property."
                />
                <Service
                  icon={<ClipboardCheck />}
                  title="Flexible service options"
                  text="One-time service and no-contract options are available to fit your needs."
                />
                <Service
                  icon={<ShieldCheck />}
                  title="Follow-up support"
                  text="If you’re not satisfied, we’ll come back at no charge."
                />
              </div>
            </div>
            <div className="pest-keyword-block">
              <h3>Fresno pest control coverage</h3>
              <p>
                Common requests include ant control, roach control, spider control, mosquito concerns, flea and tick activity, earwig problems, bedbug service, and rodent control for Fresno homes and businesses.
              </p>
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
            <h2>Residential pest control for Fresno homes too.</h2>
            <p className="section-intro">
              Homeowners call The Bug Dude when pests stop being a minor annoyance and start taking over kitchens, garages, yards, or bedrooms. We keep the conversation neighborly and direct so you know what to do next.
            </p>
            <div className="content-columns">
              <p className="section-copy">
                If you’re dealing with ants on the counters, spiders in the corners, mosquitoes outside, or signs of rodents, start with a quick estimate request. Include the pest you’re seeing and where it’s showing up—inside the house, around the yard, or both.
              </p>
              <p className="section-copy">
                Prefer to talk it through? Call {phone} during {siteConfig.hours.display}. Same-day pest control service may be possible when scheduling allows, and one-time service options are available when you don’t want a long-term plan.
              </p>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="process-band" id="how-it-works">
            <div className="section">
              <h2>A straightforward Fresno pest control process.</h2>
              <p className="section-intro section-intro-light">
                No runaround. Tell us what’s happening at the property, request an estimate, and we’ll help you move toward service—commercial or residential.
              </p>
              <ol className="process-list">
                <li>
                  <strong>Describe the issue</strong>
                  <span>Share the property type and the pests you’re seeing around your Fresno home or business.</span>
                </li>
                <li>
                  <strong>Request an estimate</strong>
                  <span>Use the online form or call {phone}. We’ll follow up on timing and service options.</span>
                </li>
                <li>
                  <strong>Choose what fits</strong>
                  <span>One-time service and no-contract options are available. If you’re not satisfied, we’ll come back at no charge.</span>
                </li>
              </ol>
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="section" id="faq">
            <h2>Fresno pest control questions, answered.</h2>
            <p className="section-intro">
              Quick answers for local searches about commercial pest control, residential service, same-day timing, and flexible options.
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
                <h2>Let’s get a look at the problem.</h2>
                <p className="section-intro" style={{ color: "#79301e" }}>
                  Call or text for a free Fresno pest control estimate for your home, rental, restaurant, office, or workspace. We’re available during business hours: {siteConfig.hours.display}.
                </p>
                <p className="section-copy" style={{ color: "#79301e" }}>
                  Include the pest type if you know it—ants, roaches, spiders, bedbugs, rodents, or something else—and whether the property is commercial or residential. That helps us respond faster.
                </p>
                <div className="action-row">
                  <a className="button button-plain" href={phoneHref}>
                    <Phone size={18} /> Call for a free estimate
                  </a>
                  <a className="button button-plain" href={smsHref}>
                    Text for a free estimate
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
            Serving {siteConfig.locality}, {siteConfig.region}
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
