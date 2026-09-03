import Section from "@/components/shared/Section";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import DynamicIcon from "@/components/shared/DynamicIcon";
import { candidate } from "@/data/candidate";

export default function CandidateMessage() {
  const p = candidate.pitch;

  return (
    <Section id="message" tone="muted">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="eyebrow">{p.eyebrow}</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-text sm:text-5xl lg:text-[3.5rem]">
            {p.headlineLead}{" "}
            <span className="text-primary">{p.headlineAccent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-xl leading-[1.5] text-text">
            {p.lead}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
          <Reveal className="space-y-4">
            {p.body.map((para) => (
              <p key={para} className="text-[1.0625rem] leading-[1.8] text-muted">
                {para}
              </p>
            ))}
            <p className="text-[1.0625rem] leading-[1.8] text-muted">{p.close}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-lg border border-border bg-surface p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-eyebrow text-accent">
                Key priorities
              </p>
              <ul className="mt-4 space-y-3.5">
                {p.priorities.map((pr) => (
                  <li key={pr.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <DynamicIcon name={pr.icon} className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium leading-tight text-text">
                      {pr.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 border-t border-border pt-8">
          <p className="max-w-2xl text-[1.0625rem] leading-[1.8] text-text">
            {p.ask}
          </p>

          <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-2xl italic text-primary">
                {p.signature[0]}
              </p>
              <p className="mt-1.5 text-sm text-muted">{p.signature[1]}</p>
              <p className="text-sm text-muted">{p.signature[2]}</p>
            </div>
            <Button href="/#manifesto" withArrow className="shrink-0">
              Read the full manifesto
            </Button>
          </div>

          <p className="mt-9 font-display text-lg italic text-text/70">
            {p.tagline}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
