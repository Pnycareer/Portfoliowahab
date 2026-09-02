import { siteUrl } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();

  return ["/", "/privacy", "/terms"].map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "yearly",
    priority: path === "/" ? 1 : 0.3,
  }));
}
