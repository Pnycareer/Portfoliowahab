import { site } from "@/data/site";

export const siteUrl = site.url;

/**
 * Build Next.js Metadata objects from a small, page-level config.
 * Keeps Open Graph / Twitter / canonical consistent across every route.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = site.defaultOgImage,
  type = "website",
  publishedTime,
  authors,
} = {}) {
  const url = new URL(path, siteUrl).toString();
  const fullTitle = title ? `${title} — ${site.name}` : site.titleDefault;

  return {
    title: title || site.titleDefault,
    description: description || site.description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description: description || site.description,
      siteName: site.name,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || site.description,
      images: [image],
    },
  };
}
