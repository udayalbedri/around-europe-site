import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const [, firstSegment] = request.nextUrl.pathname.split("/");
  const locale = locales.includes(firstSegment as (typeof locales)[number])
    ? firstSegment
    : defaultLocale;

  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
