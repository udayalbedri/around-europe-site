"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { getLocalizedPath, type Locale, type PageId } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  pageId: PageId;
  nav: {
    home: string;
    services: string;
    fleet: string;
    about: string;
    contact: string;
    directContact: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
  };
};

const navOrder: PageId[] = ["home", "services", "fleet", "about", "contact"];

export function SiteHeader({ locale, pageId, nav }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const labels: Record<PageId, string> = {
    home: nav.home,
    services: nav.services,
    fleet: nav.fleet,
    about: nav.about,
    contact: nav.contact,
  };

  return (
    <>
      <div className="top-contact-bar">
        <div className="top-contact-bar-inner">
          <a className="top-contact-link" href="tel:+31616077858">
            <span>{nav.directContact}</span>
            <strong>+31 6 16077858</strong>
          </a>
        </div>
      </div>

      <header className="topbar">
        <Link className="brand" href={getLocalizedPath(locale, "home")} aria-label="Around Europe B.V.">
          <Image
            src="/logo.png"
            alt="Around Europe B.V. logo"
            width={240}
            height={94}
            className="brand-logo"
            priority
          />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          aria-label={isOpen ? nav.closeMenu : nav.openMenu}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={`site-nav${isOpen ? " is-open" : ""}`} id="site-nav">
          {navOrder.map((id) => (
            <Link key={id} href={getLocalizedPath(locale, id)} onClick={() => setIsOpen(false)}>
              {labels[id]}
            </Link>
          ))}
          <div className="language-switch-mobile">
            <LanguageSwitcher locale={locale} pageId={pageId} label={nav.languageLabel} />
          </div>
        </nav>

        <div className="language-switch-desktop">
          <LanguageSwitcher locale={locale} pageId={pageId} label={nav.languageLabel} />
        </div>
      </header>
    </>
  );
}
