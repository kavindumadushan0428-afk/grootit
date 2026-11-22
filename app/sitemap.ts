import type { MetadataRoute } from "next";
import { PAGE_UPDATED, absoluteUrl } from "@/lib/site";
import { INDUSTRIES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(PAGE_UPDATED.home),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services"),
      lastModified: new Date(PAGE_UPDATED.services),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...INDUSTRIES.map((industry) => ({
      url: absoluteUrl(`/industries/${industry.slug}`),
      lastModified: new Date(PAGE_UPDATED.industries),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: absoluteUrl("/work"),
      lastModified: new Date(PAGE_UPDATED.work),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: new Date(PAGE_UPDATED.about),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: new Date(PAGE_UPDATED.contact),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
