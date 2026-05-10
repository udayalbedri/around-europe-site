import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BackToTop } from "@/components/BackToTop";
import { HomeSections, ServicesSection, FleetPageSection, AboutSection, ContactSection } from "@/components/PageSections";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getAlternateLanguages,
  getLocalizedPath,
  getPageIdFromSlug,
  isLocale,
  locales,
  localizedSlugs,
  pageIds,
  type Locale,
  type PageId,
} from "@/lib/i18n";
import { getLocaleContent } from "@/lib/site-data";

const localeMap: Record<Locale, string> = {
  nl: "nl_NL",
  en: "en_GB",
  de: "de_DE",
};

const baseUrl = "https://aroundeurope.nl";

type Props = {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    pageIds.map((pageId) => ({
      locale,
      slug: localizedSlugs[locale][pageId],
    }))
  );
}

function getResolvedRoute(locale: string, slug?: string[]) {
  if (!isLocale(locale)) {
    return null;
  }

  const pageId = getPageIdFromSlug(locale, slug);
  if (!pageId) {
    return null;
  }

  return {
    locale,
    pageId,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolved = getResolvedRoute(resolvedParams.locale, resolvedParams.slug);

  if (!resolved) {
    return {};
  }

  const content = getLocaleContent(resolved.locale);
  const pageSeo = content.seo.pages[resolved.pageId];
  const alternates = getAlternateLanguages(resolved.pageId);
  const pathname = getLocalizedPath(resolved.locale, resolved.pageId);

  return {
    title: pageSeo.title,
    description: pageSeo.description,
    alternates: {
      canonical: pathname,
      languages: alternates,
    },
    openGraph: {
      type: "website",
      locale: localeMap[resolved.locale],
      title: pageSeo.title,
      description: pageSeo.description,
      url: pathname,
      siteName: "Around Europe B.V.",
      images: [
        {
          url: "/logo.png",
          width: 926,
          height: 445,
          alt: "Around Europe B.V. logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageSeo.title,
      description: pageSeo.description,
      images: ["/logo.png"],
    },
  };
}

function getStructuredData(locale: Locale, pageId: PageId) {
  const content = getLocaleContent(locale);
  const pageSeo = content.seo.pages[pageId];
  const pathname = getLocalizedPath(locale, pageId);
  const pageUrl = `${baseUrl}${pathname}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${baseUrl}/#organization`,
        name: "Around Europe B.V.",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: `${baseUrl}/logo.png`,
        email: "info@aroundeurope.nl",
        telephone: "+31616077858",
        vatID: "NL867871556B01",
        areaServed: ["NL", "BE", "DE"],
        address: content.offices.offices.map((office) => ({
          "@type": "PostalAddress",
          name: office.city,
          streetAddress: office.address.replace(/\n/g, ", "),
          addressCountry: "NL",
        })),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+31616077858",
            email: "info@aroundeurope.nl",
            areaServed: ["NL", "BE", "DE"],
            availableLanguage: ["Dutch", "English", "German"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Around Europe B.V.",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: locale,
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageSeo.title,
        description: pageSeo.description,
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: locale,
      },
    ],
  };
}

function PageContent({ locale, pageId }: { locale: Locale; pageId: PageId }) {
  const content = getLocaleContent(locale);

  return (
    <>
      <SiteHeader locale={locale} pageId={pageId} nav={content.nav} />
      <main className="slide-deck">
        {pageId === "home" ? <HomeSections locale={locale} content={content} /> : null}
        {pageId === "services" ? <ServicesSection locale={locale} content={content} /> : null}
        {pageId === "fleet" ? <FleetPageSection content={content} /> : null}
        {pageId === "about" ? <AboutSection content={content} /> : null}
        {pageId === "contact" ? <ContactSection locale={locale} content={content} /> : null}
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData(locale, pageId)).replace(/</g, "\\u003c"),
        }}
      />
      <SiteFooter locale={locale} pageId={pageId} nav={content.nav} footer={content.footer} />
      <BackToTop label={content.common.backToTop} />
    </>
  );
}

export default async function LocalizedPage({ params }: Props) {
  const resolvedParams = await params;
  const resolved = getResolvedRoute(resolvedParams.locale, resolvedParams.slug);

  if (!resolved) {
    notFound();
  }

  return <PageContent locale={resolved.locale} pageId={resolved.pageId} />;
}
