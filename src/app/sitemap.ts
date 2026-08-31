import type { MetadataRoute } from "next";
import { fieldWorkVideo } from "@/lib/field-media";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl(siteConfig.pages.home.path),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      videos: [
        {
          title: fieldWorkVideo.title,
          thumbnail_loc: absoluteUrl(fieldWorkVideo.poster),
          description: fieldWorkVideo.description,
          content_loc: absoluteUrl(fieldWorkVideo.src),
        },
      ],
    },
    {
      url: absoluteUrl(siteConfig.pages.commercial.path),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(siteConfig.pages.services.path),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
