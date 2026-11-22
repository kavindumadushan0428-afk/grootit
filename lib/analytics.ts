type Primitive = string | number | boolean | undefined;
export type EventParams = Record<string, Primitive>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "grootit_lead_source";

export interface LeadSource {
  lead_source: string;
  lead_medium: string;
  lead_campaign: string;
  landing_page: string;
}

const DIRECT: LeadSource = {
  lead_source: "direct",
  lead_medium: "none",
  lead_campaign: "",
  landing_page: "",
};

function readStored(): LeadSource | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LeadSource) : null;
  } catch {
    return null;
  }
}

/**
 * First-touch lead source capture. Called once per page load.
 * UTM parameters (or gclid/fbclid) always win; otherwise the first external
 * referrer is kept; otherwise the visit is "direct".
 */
export function captureLeadSource(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");
    const hasClickId = params.get("gclid") || params.get("fbclid");

    let referrerHost = "";
    if (document.referrer) {
      const host = new URL(document.referrer).hostname.replace(/^www\./, "");
      if (host && host !== window.location.hostname.replace(/^www\./, "")) {
        referrerHost = host;
      }
    }

    const existing = readStored();
    const hasCampaignSignal = Boolean(utmSource || hasClickId);

    let source = utmSource || referrerHost || "direct";
    let medium = utmMedium || (referrerHost ? "referral" : "none");
    if (!utmSource && params.get("gclid")) {
      source = "google";
      medium = utmMedium || "cpc";
    } else if (!utmSource && params.get("fbclid")) {
      source = "facebook";
      medium = utmMedium || "social";
    }

    // Keep first-touch attribution. A new campaign signal always replaces it,
    // and a real source replaces an earlier "direct" visit.
    const shouldStore =
      !existing ||
      hasCampaignSignal ||
      (existing.lead_source === "direct" && source !== "direct");

    if (shouldStore) {
      const value: LeadSource = {
        lead_source: source,
        lead_medium: medium,
        lead_campaign: utmCampaign || "",
        landing_page: window.location.pathname,
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    }
  } catch {
    // Storage or URL parsing unavailable; analytics stays best-effort.
  }
}

export function getLeadSource(): LeadSource {
  if (typeof window === "undefined") return DIRECT;
  return readStored() ?? DIRECT;
}

const GTM_ACTIVE = Boolean(process.env.NEXT_PUBLIC_GTM_ID);

/**
 * Sends an event to GTM's dataLayer (when GTM is configured) or to GA4 via
 * gtag. Safe to call when no analytics is configured (no-op).
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const payload = { ...params, ...getLeadSource() };
  window.dataLayer = window.dataLayer || [];
  if (GTM_ACTIVE) {
    window.dataLayer.push({ event: name, ...payload });
  } else if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }
}
