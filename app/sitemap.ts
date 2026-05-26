import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Sitio de una sola página: los buscadores ignoran los fragmentos (#seccion),
// por lo que el sitemap solo lista la URL canónica.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
