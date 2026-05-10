import type { MetadataRoute } from "next";

import { getAlternateLanguages, getLocalizedPath, locales, pageIds } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aroundeurope.nl";

  return locales.flatMap((locale) =>
    pageIds.map((pageId) => ({
      url: `${baseUrl}${getLocalizedPath(locale, pageId)}`,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(getAlternateLanguages(pageId)).map(([altLocale, pathname]) => [
            altLocale,
            `${baseUrl}${pathname}`,
          ])
        ),
      },
    }))
  );
}
