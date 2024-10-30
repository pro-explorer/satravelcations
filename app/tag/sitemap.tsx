import { config } from "config";
import { wisp } from "lib/wisp";
import type { MetadataRoute } from "next";
import urlJoin from "url-join";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const result = await wisp.getTags();
  return [
    {
      url: urlJoin(config.baseUrl, "tag"),
      lastModified: new Date(),
      priority: 0.8,
    },
    ...result.tags.map((tag) => {
      return {
        url: urlJoin(config.baseUrl, "tag", tag.name),
        lastModified: new Date(),
        priority: 0.8,
      };
    }),
  ];
}
