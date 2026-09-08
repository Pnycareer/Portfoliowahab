import { CalendarDays, Vote } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import { voteIntro, voteSteps, voteNote } from "@/data/vote";

export default function HowToVote() {
  return (
    <Section id="vote" tone="muted">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow={voteIntro.eyebrow}
          title={voteIntro.title}
          intro={voteIntro.body}
        />
        <Reveal delay={0.05}>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <CalendarDays className="h-4 w-4" aria-hidden />
            Polling day — {voteIntro.pollingDay}
          </span>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {voteSteps.map((step, i) => (
          <Reveal as="li" key={step.n} delay={(i % 3) * 0.06}>
            <div className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {step.n}
                <span className="mx-2 text-border">/</span>
                {step.label}
              </p>
              <h3 className="mt-3 font-display text-xl text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-muted">{voteNote}</p>
          <Button href="/#manifesto" variant="outline" withArrow className="shrink-0">
            <Vote className="mr-1 h-4 w-4" aria-hidden />
            Read the manifesto first
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
