import Link from "next/link";
import Image from "next/image";

import { FleetGallery } from "@/components/FleetGallery";
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
            <div className="eyebrow">{content.hero.eyebrow}</div>
            <h1>
              <span>{content.hero.titleLine1}</span>
              <span>{content.hero.titleLine2}</span>
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
              <Link className="button button-secondary" href={getLocalizedPath(locale, "services")}>
                {content.hero.ctaSecondary}
              </Link>
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

      <ServicesSection locale={locale} content={content} compact id="services" />
      <FleetPreview locale={locale} content={content} />
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
          <div className="eyebrow">{content.services.eyebrow}</div>
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
          <strong>{content.services.extraTitle}</strong>
          <div className="service-extra-list">
            {content.services.extras.map((item) => (
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
          <div className="eyebrow">{content.fleet.eyebrow}</div>
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
              <p>{vehicle.text}</p>
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
          <div className="eyebrow">{content.about.eyebrow}</div>
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
  return (
    <>
      <section className="slide slide-contact" id={id ?? "top"}>
        <div className="slide-inner contact-layout">
          <div className="slide-intro">
            <div className="eyebrow">{content.contact.eyebrow}</div>
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

            <form className="contact-form">
              <label>
                <span>{content.contact.form.name}</span>
                <input type="text" name="name" placeholder={content.contact.form.namePlaceholder} />
              </label>
              <label>
                <span>{content.contact.form.email}</span>
                <input type="email" name="email" placeholder={content.contact.form.emailPlaceholder} />
              </label>
              <label>
                <span>{content.contact.form.company}</span>
                <input type="text" name="company" placeholder={content.contact.form.companyPlaceholder} />
              </label>
              <label>
                <span>{content.contact.form.service}</span>
                <select name="service" defaultValue={content.contact.form.options[0]}>
                  {content.contact.form.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="form-span">
                <span>{content.contact.form.message}</span>
                <textarea name="message" rows={5} placeholder={content.contact.form.messagePlaceholder} />
              </label>
              <button className="button button-primary" type="submit">
                {content.contact.form.submit}
              </button>
            </form>
          </div>

          {compact ? (
            <div className="section-actions">
              <Link className="button button-primary" href={getLocalizedPath(locale, "contact")}>
                {content.common.getQuote}
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="slide slide-offices">
        <div className="slide-inner offices-layout">
          <div className="slide-intro">
            <div className="eyebrow">{content.offices.eyebrow}</div>
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
    </>
  );
}
