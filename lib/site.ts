/**
 * Central site constants. The canonical origin is environment-driven so that
 * canonicals, sitemap, robots and schema all follow the real production domain.
 *
 * Set NEXT_PUBLIC_SITE_URL (e.g. https://www.yourdomain.com) before launch.
 */
export const SITE_NAME = "GROOTIT";
export const SITE_TAGLINE = "Creativity Meets Intelligence";

const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  fromEnv ||
  (vercelProd ? `https://${vercelProd}` : "https://grootit.studio")
).replace(/\/+$/, "");

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/grootit04",
  instagram: "https://www.instagram.com/grootit04/",
};

export function absoluteUrl(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p === "/" ? "" : p}` || SITE_URL;
}

/** Update these when a page's content meaningfully changes (used in sitemap). */
export const PAGE_UPDATED = {
  home: "2026-11-22",
  services: "2026-11-22",
  work: "2026-11-21",
  about: "2026-11-21",
  contact: "2026-11-22",
  industries: "2026-11-22",
} as const;
