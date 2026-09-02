import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import { contact } from "@/data/site";

export default function FinalCTA() {
  const items = [
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: contact.officeName, value: contact.address.join(", ") },
    { icon: Clock, label: "Opening hours", value: contact.hours },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="glass-strong overflow-hidden rounded-lg">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
            <Reveal>
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] text-primary">
                Let&rsquo;s grow the Associate community together
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                If you are an Associate member with a challenge, an idea, or want to help
                shape this platform, I would like to hear from you before the vote.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${contact.email}`} variant="solid" size="lg" withArrow>
                  Contact the campaign
                </Button>
                <Button href="/#manifesto" variant="outline" size="lg">
                  Read the manifesto
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="grid gap-5 rounded-lg border border-border bg-surface-2 p-6">
                {items.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-eyebrow text-muted">
                        {label}
                      </dt>
                      <dd className="mt-0.5 text-sm text-text">
                        {href ? (
                          <a href={href} className="link-underline">
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
