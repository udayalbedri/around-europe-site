import type { ContactFormPayload } from "@/lib/contact";

export type EmailSendRequest = {
  to: string;
  subject: string;
  replyTo: string;
  text: string;
  html: string;
  tags?: string[];
};

export type EmailSendResult = {
  provider: string;
  messageId: string;
};

export interface EmailProvider {
  send(request: EmailSendRequest): Promise<EmailSendResult>;
}

export class MockEmailProvider implements EmailProvider {
  async send(request: EmailSendRequest): Promise<EmailSendResult> {
    const messageId = `mock-${Date.now()}`;

    console.info("[MockEmailProvider] send()", {
      ...request,
      messageId,
    });

    return {
      provider: "mock",
      messageId,
    };
  }
}

export function buildContactEmail(payload: ContactFormPayload): EmailSendRequest {
  const subject = `New transport inquiry from ${payload.name}`;
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "-"}`,
    `Service: ${payload.service}`,
    `Locale: ${payload.locale}`,
    "",
    "Message:",
    payload.message,
  ];

  return {
    to: "info@aroundeurope.nl",
    subject,
    replyTo: payload.email,
    text: lines.join("\n"),
    html: `
      <h2>New transport inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company || "-")}</p>
      <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
      <p><strong>Locale:</strong> ${escapeHtml(payload.locale)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</p>
    `,
    tags: ["contact-form", payload.locale],
  };
}

export function createEmailProvider(): EmailProvider {
  return new MockEmailProvider();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
