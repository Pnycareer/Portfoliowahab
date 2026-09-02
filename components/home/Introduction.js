import Image from "next/image";
import Section from "@/components/shared/Section";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import { candidate } from "@/data/candidate";

export default function Introduction() {
  return (
    <Section id="about" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-lg border border-border">
            <Image
              src={candidate.hero.src}
              alt={candidate.hero.alt}
              fill
              sizes="(max-width: 1024px) 80vw, 35vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" aria-hidden />
              Meet the candidate
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Fifteen years of practical service to Northgate
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-measure text-[1.0625rem] leading-[1.75] text-muted">
              {candidate.intro}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-measure text-[1.0625rem] leading-[1.75] text-muted">
              {candidate.personalMessage}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex items-end justify-between gap-6 border-t border-border pt-6">
              <p className="font-display text-2xl italic text-primary">
                {candidate.signatureName}
              </p>
              <Button href="/#priorities" variant="ghost" withArrow>
                See the priorities
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
