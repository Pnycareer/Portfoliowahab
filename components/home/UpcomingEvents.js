import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import EventCard from "@/components/shared/EventCard";
import { getUpcomingEvents, getPastEvents } from "@/lib/content";

export default function UpcomingEvents() {
  const upcoming = getUpcomingEvents(3);
  const past = getPastEvents(3);

  return (
    <Section id="events" tone="surface">
      <SectionHeading
        eyebrow="Diary"
        title="Come and meet us"
        intro="Public meetings, stalls and community sessions across the constituency. Everyone is welcome."
      />

      {upcoming.length ? (
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {upcoming.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.07}>
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      ) : null}

      {past.length ? (
        <>
          <h3 className="mt-16 text-xs font-semibold uppercase tracking-eyebrow text-muted">
            Recent events
          </h3>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {past.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.07}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
        </>
      ) : null}
    </Section>
  );
}
