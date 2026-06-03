import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Los buscadores ignoran los fragmentos (#seccion), por lo que la landing
// se lista una sola vez. Se incluye además la página de privacidad.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacidad`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
