/* DEMO CONTENT — replace with real campaign details before publishing. */

export const site = {
  name: "Wahab Yunus — P@SHA CEC 2026",
  shortName: "Wahab Yunus",
  url: "https://example-campaign.org",
  titleDefault:
    "Wahab Yunus — Candidate, P@SHA CEC Election 2026 (Associate Members)",
  description:
    "Campaign site for Wahab Yunus, Founder of Eraflip Tech and candidate in the P@SHA CEC Election 2026 for Associate members. Read the manifesto and platform. (Demo build.)",
  defaultOgImage: "/images/og-default.jpg",
};

/* Single-page site: nav items are in-page section anchors (prefixed with "/"
   so they also work from the article sub-pages). */
export const nav = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Vision", href: "/#vision" },
  { label: "Manifesto", href: "/#manifesto" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Events", href: "/#events" },
  { label: "Contact", href: "/#contact" },
];

export const primaryCta = { label: "Join the Campaign", href: "/#contact" };

export const contact = {
  officeName: "Northgate Campaign Office",
  address: ["Unit 4, Riverside Exchange", "Northgate, NG1 2AB"],
  phone: "+44 20 7946 0000",
  email: "hello@example-campaign.org",
  hours: "Mon–Sat, 9:00–18:00",
  mapEmbed: null, // add an <iframe> src or coordinates when available
};

export const socials = [
  { label: "X / Twitter", href: "https://x.com", icon: "twitter" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];

export const footerLinks = [
  {
    title: "Campaign",
    links: [
      { label: "About Wahab", href: "/#about" },
      { label: "Our Vision", href: "/#vision" },
      { label: "Manifesto", href: "/#manifesto" },
      { label: "Achievements", href: "/#achievements" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Priorities", href: "/#priorities" },
      { label: "Events", href: "/#events" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
