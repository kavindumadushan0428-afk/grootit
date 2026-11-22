"use client";

import { useEffect } from "react";
import {
  captureLeadSource,
  getLeadSource,
  trackEvent,
} from "@/lib/analytics";

function placementOf(anchor: HTMLAnchorElement): string {
  const section = anchor.closest("[data-section]")?.getAttribute("data-section");
  if (section) return section;
  if (anchor.closest("footer")) return "footer";
  if (anchor.closest("header")) return "header";
  if (anchor.closest("main")) return "main";
  return "other";
}

/**
 * Sitewide click delegation: one listener tracks WhatsApp, email, phone,
 * social and contact-CTA clicks without touching individual components.
 */
export function ClickTracker() {
  useEffect(() => {
    captureLeadSource();

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const base = {
        link_text: (anchor.textContent || "").trim().slice(0, 80),
        placement: placementOf(anchor),
        page_path: window.location.pathname,
      };

      if (href.includes("wa.me/")) {
        const number = href.split("wa.me/")[1]?.split(/[?#]/)[0] ?? "";
        trackEvent("whatsapp_click", { ...base, whatsapp_number: number });
        trackEvent("generate_lead", { ...base, method: "whatsapp" });

        // Attribute WhatsApp chats to their source inside the chat itself.
        try {
          const source = getLeadSource().lead_source;
          const url = new URL(anchor.href);
          const text = url.searchParams.get("text");
          if (text && source !== "direct" && !text.includes("Source:")) {
            url.searchParams.set("text", `${text}\n\nSource: ${source}`);
            anchor.href = url.toString();
          }
        } catch {
          // Leave the original link untouched.
        }
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", base);
        trackEvent("generate_lead", { ...base, method: "email" });
        return;
      }

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", base);
        trackEvent("generate_lead", { ...base, method: "phone" });
        return;
      }

      if (href.includes("facebook.com") || href.includes("instagram.com")) {
        trackEvent("social_click", {
          ...base,
          network: href.includes("facebook.com") ? "facebook" : "instagram",
        });
        return;
      }

      if (href === "/contact" || href.startsWith("/contact?")) {
        trackEvent("contact_cta_click", base);
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
