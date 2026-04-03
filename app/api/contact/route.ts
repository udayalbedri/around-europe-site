import { NextResponse } from "next/server";

import {
  parseContactFormData,
  validateContactForm,
  type ContactSubmissionResult,
} from "@/lib/contact";
import { buildContactEmail, createEmailProvider } from "@/lib/email-provider";

const messages = {
  nl: {
    invalid: "Controleer de gemarkeerde velden en probeer het opnieuw.",
    success: "Uw aanvraag is ontvangen. We nemen snel contact met u op.",
  },
  en: {
    invalid: "Please correct the highlighted fields and try again.",
    success: "Your request has been received. We will contact you soon.",
  },
  de: {
    invalid: "Bitte korrigieren Sie die markierten Felder und versuchen Sie es erneut.",
    success: "Ihre Anfrage wurde erhalten. Wir melden uns in Kürze bei Ihnen.",
  },
} as const;

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = parseContactFormData(formData);
  const errors = validateContactForm(payload);
  const locale =
    payload.locale === "en" || payload.locale === "de" || payload.locale === "nl" ? payload.locale : "nl";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json<ContactSubmissionResult>(
      {
        ok: false,
        message: messages[locale].invalid,
        errors,
      },
      { status: 400 }
    );
  }

  const provider = createEmailProvider();
  await provider.send(buildContactEmail(payload));

  return NextResponse.json<ContactSubmissionResult>({
    ok: true,
    message: messages[locale].success,
  });
}
