import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import DynamicIcon from "@/components/shared/DynamicIcon";
import { getPriorities } from "@/lib/content";

export default function Priorities() {
  const priorities = getPriorities();

  return (
    <Section id="priorities">
      <SectionHeading
        eyebrow="Campaign priorities"
        title="Ten areas where Northgate needs progress"
        intro="Each priority has a costed plan with measurable objectives and an honest note on expected impact."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {priorities.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={(i % 3) * 0.05}>
            <div className="glass group flex h-full flex-col gap-3 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                <DynamicIcon name={p.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-1 text-lg text-primary">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.summary}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
