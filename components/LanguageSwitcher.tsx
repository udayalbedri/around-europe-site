import Link from "next/link";

import { getLocalizedPath, locales, type Locale, type PageId } from "@/lib/i18n";

type Props = {
  locale: Locale;
  pageId: PageId;
  label: string;
};

export function LanguageSwitcher({ locale, pageId, label }: Props) {
  return (
    <div className="language-switch" aria-label={label}>
      {locales.map((item) => (
        <Link
          key={item}
          href={getLocalizedPath(item, pageId)}
          lang={item}
          hrefLang={item}
          className={`language-button${item === locale ? " is-active" : ""}`}
          aria-current={item === locale ? "page" : undefined}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
