import type { Metadata } from "next";
import { DIMENSIONS } from "@/components/data";
import { LEAD_CONFIG } from "./leads";
import {
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  absoluteUrl,
} from "./site";
import type { Faq } from "./content";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

interface PageMetaInput {
  /** Short page title; the root template appends "| GROOTIT". */
  title?: string;
  /** Use for the home page where the full title is written out. */
  absoluteTitle?: string;
  description: string;
  path: string;
}

export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ?? `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_LK",
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: "GROOTIT — Creativity Meets Intelligence",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

const toPhone = (raw: string) => `+${raw.replace(/\D/g, "")}`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "Grootit",
    url: SITE_URL,
    logo: absoluteUrl("/grootit-logo.png"),
    image: absoluteUrl("/grootit-logo.png"),
    description:
      "GROOTIT is a hybrid Creative + AI agency based in Sri Lanka, offering brand identity, web design and development, AI automation and digital growth services to businesses in Sri Lanka and internationally.",
    slogan: "Creativity Meets Intelligence",
    email: LEAD_CONFIG.businessEmail,
    telephone: toPhone(LEAD_CONFIG.whatsappPrimary.raw),
    areaServed: [{ "@type": "Country", name: "Sri Lanka" }],
    knowsAbout: [
      "Brand identity design",
      "Web design and development",
      "E-commerce websites",
      "AI chatbots and automation",
      "Digital marketing",
      "SEO",
    ],
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: toPhone(LEAD_CONFIG.whatsappPrimary.raw),
        email: LEAD_CONFIG.businessEmail,
        areaServed: "LK",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: toPhone(LEAD_CONFIG.whatsappSecondary.raw),
        areaServed: "LK",
        availableLanguage: ["English"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "GROOTIT services",
      itemListElement: DIMENSIONS.map((d) => ({
        "@type": "OfferCatalog",
        name: d.title,
        itemListElement: d.services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s },
        })),
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function servicesSchema() {
  return DIMENSIONS.map((d) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: d.title,
    serviceType: d.title,
    description: d.description,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    url: absoluteUrl(`/services#${d.id}`),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: d.title,
      itemListElement: d.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
  }));
}

export function industryServiceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Web design, branding and digital growth for ${input.name}`,
    serviceType: "Web design, branding and digital marketing",
    description: input.description,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    audience: { "@type": "BusinessAudience", audienceType: input.name },
    url: absoluteUrl(input.path),
  };
}
