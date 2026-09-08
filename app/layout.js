import "./globals.css";
import { display, sans } from "@/lib/fonts";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { site } from "@/data/site";
import Header from "@/components/layout/Header";
import { candidate } from "@/data/candidate";

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({}),
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#c8102e",
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    description: site.description,
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-bg text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main id="main">{children}</main>
        <footer className="border-t border-white/10 bg-ink py-6 text-center text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {candidate.name} · {candidate.election}
          </p>
        </footer>
      </body>
    </html>
  );
}
