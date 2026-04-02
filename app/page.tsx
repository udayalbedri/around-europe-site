import type { Route } from "next";
import { redirect } from "next/navigation";

import { defaultLocale } from "@/lib/i18n";

export default function RootPage() {
  redirect(`/${defaultLocale}` as Route);
}
