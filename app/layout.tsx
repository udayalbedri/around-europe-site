import type { ReactNode } from "react";
import { headers } from "next/headers";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import type { Metadata } from "next";

import { defaultLocale, isLocale } from "@/lib/i18n";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aroundeurope.nl"),
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const localeHeader = (await headers()).get("x-locale");
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html lang={locale}>
      <body className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}>{children}</body>
    </html>
  );
}
