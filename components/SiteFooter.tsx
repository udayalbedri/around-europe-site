import Link from "next/link";

import { getLocalizedPath, type Locale, type PageId } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type FooterProps = {
  locale: Locale;
  pageId: PageId;
  nav: {
    home: string;
    services: string;
    fleet: string;
    about: string;
    contact: string;
    languageLabel: string;
  };
  footer: {
    kicker: string;
    title: string;
  };
};

const navOrder: PageId[] = ["home", "services", "fleet", "about", "contact"];

export function SiteFooter({ locale, pageId, nav, footer }: FooterProps) {
  const labels: Record<PageId, string> = {
    home: nav.home,
    services: nav.services,
    fleet: nav.fleet,
    about: nav.about,
    contact: nav.contact,
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <p className="footer-kicker">{footer.kicker}</p>
          <h2 className="footer-title">{footer.title}</h2>
        </div>

        <div className="footer-meta">
          <nav className="footer-nav" aria-label="Footer navigation">
            {navOrder.map((id) => (
              <Link key={id} href={getLocalizedPath(locale, id)}>
                {labels[id]}
              </Link>
            ))}
          </nav>
          <div className="language-switch-footer">
            <LanguageSwitcher locale={locale} pageId={pageId} label={nav.languageLabel} />
          </div>
          <a href="mailto:info@aroundeurope.nl">info@aroundeurope.nl</a>
        </div>
      </div>
    </footer>
  );
}
