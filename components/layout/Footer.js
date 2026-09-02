import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { site, footerLinks, legalLinks, socials, contact } from "@/data/site";
import { candidate } from "@/data/candidate";
import Container from "@/components/shared/Container";
import SocialIcon from "@/components/shared/SocialIcon";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_repeat(2,1fr)]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded bg-white font-display text-lg text-primary">
                {candidate.name.charAt(0)}
              </span>
              <span className="font-display text-lg">{candidate.name}</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {candidate.tagline}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="link-underline">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                <a href={`mailto:${contact.email}`} className="link-underline">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>{contact.address.join(", ")}</span>
              </li>
            </ul>
          </div>

          {footerLinks.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-white/50">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/80 hover:text-white link-underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-lg">Campaign updates by email</h2>
            <p className="mt-1 text-sm text-white/65">
              Occasional updates on events and progress. No spam, unsubscribe any time.
            </p>
          </div>
          <div className="md:justify-self-end">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              © {year} {site.name}. Demo content.
            </span>
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white link-underline">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-white/40">
          This is a demonstration website. All names, figures, quotes and events are
          placeholder content and should not be treated as factual.
        </p>
      </Container>
    </footer>
  );
}
