import type { MetadataRoute } from "next";

import { getLocalizedPath, locales, pageIds } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aroundeurope.nl";

  return locales.flatMap((locale) =>
    pageIds.map((pageId) => ({
      url: `${baseUrl}${getLocalizedPath(locale, pageId)}`,
      alternates: {
        languages: Object.fromEntries(
          locales.map((altLocale) => [altLocale, `${baseUrl}${getLocalizedPath(altLocale, pageId)}`])
        ),
      },
    }))
  );
}
