import type { MetadataRoute } from "next";

const SITE_URL = "https://www.davidreyesales.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { es: SITE_URL, en: `${SITE_URL}/?lang=en` };
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/?lang=en`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/maze_planner`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
