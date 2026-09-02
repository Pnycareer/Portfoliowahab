import Image from "next/image";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Badge from "@/components/shared/Badge";
import { getAchievements } from "@/lib/content";

export default function AchievementsPreview() {
  const items = getAchievements().slice(0, 3);

  return (
    <Section id="achievements" tone="surface">
      <SectionHeading
        eyebrow="Track record"
        title="Work already delivered in Northgate"
        intro="A record you can check. These are demonstration projects — replace with verified detail before publishing."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((a, i) => (
          <Reveal as="article" key={a.slug} delay={i * 0.07}>
            <div
              className="group flex h-full flex-col overflow-hidden rounded-lg glass transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center gap-2">
                  <Badge tone="primary">{a.category}</Badge>
                  <span className="text-xs text-muted">{a.year}</span>
                </div>
                <h3 className="text-lg leading-snug">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted line-clamp-3">{a.summary}</p>
                <dl className="mt-auto flex gap-5 border-t border-border pt-4">
                  {a.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <dt className="font-display text-xl text-primary">{m.value}</dt>
                      <dd className="text-[0.7rem] uppercase tracking-wide text-muted">
                        {m.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
