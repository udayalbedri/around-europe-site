"use client";

import { useState } from "react";

import type { ContactSubmissionResult } from "@/lib/contact";

type Props = {
  locale: string;
  labels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    company: string;
    companyPlaceholder: string;
    service: string;
    options: string[];
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
};

export function ContactForm({ locale, labels }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<ContactSubmissionResult | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as ContactSubmissionResult;
      setStatus(result);

      if (result.ok) {
        form.reset();
      }
    } catch {
      setStatus({
        ok: false,
        message: labels.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <label>
        <span>{labels.name}</span>
        <input type="text" name="name" placeholder={labels.namePlaceholder} />
      </label>
      <label>
        <span>{labels.email}</span>
        <input type="email" name="email" placeholder={labels.emailPlaceholder} />
      </label>
      <label>
        <span>{labels.company}</span>
        <input type="text" name="company" placeholder={labels.companyPlaceholder} />
      </label>
      <label>
        <span>{labels.service}</span>
        <select name="service" defaultValue={labels.options[0]}>
          {labels.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="form-span">
        <span>{labels.message}</span>
        <textarea name="message" rows={5} placeholder={labels.messagePlaceholder} />
      </label>
      <div className="form-actions">
        <button className="button button-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? labels.sending : labels.submit}
        </button>
        {status ? (
          <p className={`form-status ${status.ok ? "is-success" : "is-error"}`}>{status.message}</p>
        ) : null}
      </div>
    </form>
  );
}
