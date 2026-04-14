import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();
  const englishHomepage = new URL("/en", siteUrl).toString();

  return [
    {
      url: englishHomepage,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}
