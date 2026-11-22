export const LEAD_CONFIG = {
  businessEmail:
    process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "grootit04@gmail.com",
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
    (process.env.NEXT_PUBLIC_FORMSPREE_ID
      ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
      : ""),
  whatsappPrimary: {
    raw: process.env.NEXT_PUBLIC_WHATSAPP_PRIMARY || "94787431328",
    display: "078 743 1328",
    label: "WhatsApp 1 (078 743 1328)",
  },
  whatsappSecondary: {
    raw: process.env.NEXT_PUBLIC_WHATSAPP_SECONDARY || "94725076038",
    display: "072 507 6038",
    label: "WhatsApp 2 (072 507 6038)",
  },
};

export interface WhatsAppMessageParams {
  account?: "primary" | "secondary";
  division?: string;
  service?: string;
  /** Fully custom first line (e.g. industry- or intent-specific message). */
  message?: string;
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  details?: string;
  budget?: string;
  timeline?: string;
}

/**
 * Generates a pre-filled WhatsApp click-to-chat URL based on selected service
 * and optional lead form fields.
 */
export function buildWhatsAppUrl(params: WhatsAppMessageParams = {}): string {
  const targetNumber =
    params.account === "secondary"
      ? LEAD_CONFIG.whatsappSecondary.raw
      : LEAD_CONFIG.whatsappPrimary.raw;

  const lines: string[] = [];

  if (params.message) {
    lines.push(params.message);
  } else if (params.service && params.division) {
    lines.push(
      `Hi GROOTIT! I'm interested in *${params.service}* (${params.division}).`
    );
  } else if (params.service) {
    lines.push(`Hi GROOTIT! I'm interested in *${params.service}*.`);
  } else if (params.division) {
    lines.push(
      `Hi GROOTIT! I'm interested in your *${params.division}* services.`
    );
  } else {
    lines.push(
      "Hi GROOTIT! I'd love to discuss a project with your team."
    );
  }

  const meta: string[] = [];
  if (params.name?.trim()) meta.push(`Name: ${params.name.trim()}`);
  if (params.company?.trim()) meta.push(`Company: ${params.company.trim()}`);
  if (params.email?.trim()) meta.push(`Email: ${params.email.trim()}`);
  if (params.phone?.trim()) meta.push(`Phone: ${params.phone.trim()}`);
  if (
    params.budget &&
    params.budget !== "Prefer not to say"
  ) {
    meta.push(`Budget: ${params.budget}`);
  }
  if (
    params.timeline &&
    params.timeline !== "Prefer not to say"
  ) {
    meta.push(`Timeline: ${params.timeline}`);
  }

  if (meta.length > 0) {
    lines.push("");
    lines.push(...meta);
  }

  if (params.details?.trim()) {
    lines.push("");
    lines.push(`Project Details:\n${params.details.trim()}`);
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${targetNumber}?text=${text}`;
}
