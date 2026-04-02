export const locales = ["nl", "en", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

export const pageIds = ["home", "services", "fleet", "about", "contact"] as const;
export type PageId = (typeof pageIds)[number];

export const localizedSlugs: Record<Locale, Record<PageId, string[]>> = {
  nl: {
    home: [],
    services: ["diensten"],
    fleet: ["voertuigen"],
    about: ["over-ons"],
    contact: ["contact"],
  },
  en: {
    home: [],
    services: ["services"],
    fleet: ["fleet"],
    about: ["about"],
    contact: ["contact"],
  },
  de: {
    home: [],
    services: ["leistungen"],
    fleet: ["fahrzeuge"],
    about: ["ueber-uns"],
    contact: ["kontakt"],
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPageIdFromSlug(locale: Locale, slug?: string[]): PageId | null {
  const normalized = slug ?? [];
  const entry = Object.entries(localizedSlugs[locale]).find(([, value]) => {
    if (value.length !== normalized.length) return false;
    return value.every((segment, index) => segment === normalized[index]);
  });

  return (entry?.[0] as PageId | undefined) ?? null;
}

export function getLocalizedPath(locale: Locale, pageId: PageId) {
  const slug = localizedSlugs[locale][pageId];
  return slug.length ? `/${locale}/${slug.join("/")}` : `/${locale}`;
}

export function getAlternateLanguages(pageId: PageId) {
  return Object.fromEntries(
    locales.map((locale) => [locale, getLocalizedPath(locale, pageId)])
  ) as Record<Locale, string>;
}
