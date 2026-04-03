import Link from "next/link";
import Image from "next/image";

import { FleetGallery } from "@/components/FleetGallery";
import { ContactForm } from "@/components/ContactForm";
import { OfficeMap } from "@/components/OfficeMap";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import type { siteContent } from "@/lib/site-data";

type Content = (typeof siteContent)[Locale];

export function HomeSections({ locale, content }: { locale: Locale; content: Content }) {
  return (
    <>
      <section className="slide slide-hero" id="top">
        <div className="slide-inner hero-layout">
          <div className="hero-copy">
            <h1>
              {content.hero.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="lead">{content.hero.lead}</p>
            <ul className="hero-points">
              {content.hero.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link className="button button-primary" href={getLocalizedPath(locale, "contact")}>
                {content.hero.ctaPrimary}
              </Link>
              <Link className="button button-secondary" href={getLocalizedPath(locale, "contact")}>
                {content.hero.ctaSecondary}
              </Link>
              <a className="button button-whatsapp" href="https://wa.me/31616077858" target="_blank" rel="noreferrer">
                {content.hero.ctaTertiary}
              </a>
            </div>
          </div>

          <div className="hero-stage" aria-hidden="true">
            <div className="hero-cutout">
              <Image src="/hero-truck-cutout.png" alt="" width={1240} height={760} priority />
            </div>
            <div className="hero-transaction-strip">
              {content.hero.cards.map((card, index) => (
                <article
                  key={card.title}
                  className={`stage-card ${
                    index === 0 ? "stage-card-main" : index === 1 ? "stage-card-side" : "stage-card-accent"
                  }`}
                >
                  <strong>{card.title}</strong>
                  <span>{card.text}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hero-trust-bar" aria-label="Trust bar">
        <div className="hero-trust-inner">
          {content.hero.trustItems.map((item) => (
            <span key={item} className="hero-trust-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="slide slide-intro-overview">
        <div className="slide-inner intro-overview-layout">
          <div className="slide-intro">
            <h2>{content.hero.introTitle}</h2>
          </div>
          <div className="intro-overview-copy">
            <p>{content.hero.introText}</p>
          </div>
        </div>
      </section>

      <ServicesSection locale={locale} content={content} compact id="services" />
      <FleetPreview locale={locale} content={content} />
      <CoverageSection content={content} />
      <AboutSection content={content} compact id="about" />
      <ContactSection content={content} locale={locale} compact id="contact" />
    </>
  );
}

export function ServicesSection({
  locale,
  content,
  compact = false,
  id,
}: {
  locale: Locale;
  content: Content;
  compact?: boolean;
  id?: string;
}) {
  return (
    <section className="slide slide-services" id={id ?? "top"}>
      <div className="slide-inner">
        <div className="slide-intro">
          <h2>{content.services.title}</h2>
          <p className="lead">{content.services.lead}</p>
        </div>

        <div className="service-grid">
          {content.services.items.map((item, index) => (
            <article key={item.title} className="service-card">
              <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="service-extra">
          <strong>{content.services.whyTitle}</strong>
          <div className="service-extra-list">
            {content.services.whyItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FleetPageSection({ content }: { content: Content }) {
  return (
    <FleetGallery
      eyebrow={content.fleet.eyebrow}
      title={content.fleet.title}
      lead={content.fleet.lead}
      vehicles={content.fleet.vehicles}
      viewPhotoLabel={content.fleet.viewPhoto}
      summary={content.fleet.summary}
      closeLabel={content.common.closeGallery}
    />
  );
}

function FleetPreview({ locale, content }: { locale: Locale; content: Content }) {
  return (
    <section className="slide slide-fleet-preview" id="fleet">
      <div className="slide-inner">
        <div className="slide-intro">
          <h2>{content.fleet.title}</h2>
          <p className="lead">{content.fleet.lead}</p>
        </div>

        <div className="vehicle-grid">
          {content.fleet.vehicles.map((vehicle, index) => (
            <article key={vehicle.title} className="vehicle-card">
              <div className="vehicle-media is-static">
                <Image src={vehicle.image.src} alt={vehicle.image.alt} width={960} height={640} />
              </div>
              <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{vehicle.title}</h3>
              {vehicle.text ? <p>{vehicle.text}</p> : null}
            </article>
          ))}
        </div>

        <div className="section-actions">
          <Link className="button button-primary" href={getLocalizedPath(locale, "fleet")}>
            {content.common.allVehicles}
          </Link>
        </div>
      </div>
    </section>
  );
}

function CoverageSection({ content }: { content: Content }) {
  return (
    <section className="slide slide-coverage">
      <div className="slide-inner coverage-layout">
        <div className="slide-intro">
          <h2>{content.coverage.title}</h2>
        </div>

        <div className="coverage-grid">
          {content.coverage.countries.map((country) => (
            <article key={country} className="coverage-card">
              <strong>{country}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection({
  content,
  compact = false,
  id,
}: {
  content: Content;
  compact?: boolean;
  id?: string;
}) {
  return (
    <section className="slide slide-about" id={id ?? "top"}>
      <div className="slide-inner about-layout">
        <div className="slide-intro">
          <h2>{content.about.title}</h2>
        </div>

        <div className="about-grid">
          <p>{content.about.text}</p>
          <blockquote>{content.about.quote}</blockquote>
        </div>

        {compact ? null : null}
      </div>
    </section>
  );
}

export function ContactSection({
  locale,
  content,
  compact = false,
  id,
}: {
  locale: Locale;
  content: Content;
  compact?: boolean;
  id?: string;
}) {
  const officesSection = (
    <section className="slide slide-offices">
      <div className="slide-inner offices-layout">
        <div className="slide-intro">
          <h2>{content.offices.title}</h2>
        </div>

        <div className="office-map-card">
          <OfficeMap offices={content.offices.offices} label={content.offices.mapLabel} />
          <div className="office-band">
            {content.offices.offices.map((office) => (
              <article key={office.key}>
                <strong>{office.role}</strong>
                <span>{office.address}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  if (compact) {
    return (
      <>
        <section className="slide slide-contact" id={id ?? "top"}>
          <div className="slide-inner contact-layout">
            <div className="slide-intro">
              <h2>{content.contact.title}</h2>
            </div>

            <div className="contact-home-card">
              <p className="lead">{content.contact.homeText}</p>
              <div className="contact-home-details">
                <span>{content.contact.phone}</span>
                <span>{content.contact.email}</span>
              </div>
              <div className="contact-actions">
                <Link className="button button-primary" href={getLocalizedPath(locale, "contact")}>
                  {content.contact.quoteCta}
                </Link>
                <Link className="button button-secondary" href={getLocalizedPath(locale, "contact")}>
                  {content.contact.contactCta}
                </Link>
                <a className="button button-whatsapp" href="https://wa.me/31616077858" target="_blank" rel="noreferrer">
                  {content.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </section>
        {officesSection}
      </>
    );
  }

  return (
    <>
      <section className="slide slide-contact" id={id ?? "top"}>
        <div className="slide-inner contact-layout">
          <div className="slide-intro">
            <h2>{content.contact.title}</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <p>{content.contact.text}</p>
              <div className="contact-points">
                <span>{content.contact.companyName}</span>
                <span>{content.contact.kvk}</span>
                <span>{content.contact.vat}</span>
                <span className="contact-address-title">{content.contact.addressTitle}</span>
                {content.contact.addresses.map((address) => (
                  <span key={address} className="contact-address-item">
                    {address}
                  </span>
                ))}
                <span>{content.contact.email}</span>
                <span>{content.contact.phone}</span>
              </div>
              <div className="contact-actions">
                <a className="button button-whatsapp" href="https://wa.me/31616077858" target="_blank" rel="noreferrer">
                  {content.contact.whatsapp}
                </a>
                <a className="button button-secondary" href="tel:+31616077858">
                  {content.contact.call}
                </a>
              </div>
            </div>

            <ContactForm locale={locale} labels={content.contact.form} />
          </div>
        </div>
      </section>

      {officesSection}
    </>
  );
}
