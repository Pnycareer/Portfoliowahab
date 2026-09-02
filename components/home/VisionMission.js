import Section from "@/components/shared/Section";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import { visionStatement } from "@/data/vision";

export default function VisionMission() {
  return (
    <Section id="vision" tone="muted">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="flex flex-col">
          <span className="eyebrow">Our vision</span>
          <p className="mt-5 font-display text-2xl leading-snug text-text sm:text-[1.75rem]">
            {visionStatement.vision}
          </p>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col">
          <span className="eyebrow">Our mission</span>
          <p className="mt-5 text-[1.0625rem] leading-[1.75] text-muted">
            {visionStatement.mission}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {visionStatement.values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.06}>
            <div className="glass h-full rounded-lg p-6">
              <h3 className="text-lg text-primary">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <Button href="#manifesto" variant="outline" withArrow>
          Explore the manifesto
        </Button>
      </Reveal>
    </Section>
  );
}
