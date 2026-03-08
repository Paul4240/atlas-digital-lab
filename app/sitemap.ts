import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.atlasdigitallab.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.atlasdigitallab.com/demo/home-styling",
      lastModified: new Date(),
    },
    {
      url: "https://www.atlasdigitallab.com/demo/roofing",
      lastModified: new Date(),
    },
    {
      url: "https://www.atlasdigitallab.com/demo/metal-cards",
      lastModified: new Date(),
    },
  ];
}