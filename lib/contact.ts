export type ContactFormPayload = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  locale: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormPayload, string>>;

export type ContactSubmissionResult =
  | { ok: true; message: string }
  | { ok: false; message: string; errors?: ContactFormErrors };

function normalizeValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseContactFormData(formData: FormData): ContactFormPayload {
  return {
    name: normalizeValue(formData.get("name")),
    email: normalizeValue(formData.get("email")),
    company: normalizeValue(formData.get("company")),
    service: normalizeValue(formData.get("service")),
    message: normalizeValue(formData.get("message")),
    locale: normalizeValue(formData.get("locale")) || "nl",
  };
}

export function validateContactForm(payload: ContactFormPayload): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!payload.name) {
    errors.name = "Name is required.";
  }

  if (!payload.email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = "Email is invalid.";
  }

  if (!payload.service) {
    errors.service = "Service is required.";
  }

  if (!payload.message) {
    errors.message = "Message is required.";
  } else if (payload.message.length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}
