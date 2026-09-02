import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { formatDateParts, formatDate } from "@/lib/format";
import Badge from "./Badge";

export default function EventCard({ event, compact = false }) {
  const { day, month } = formatDateParts(event.date);
  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(event.date));

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      {!compact ? (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute left-4 top-4 flex flex-col items-center rounded bg-surface px-3 py-1.5 text-center shadow-sm">
            <span className="font-display text-xl leading-none text-primary">{day}</span>
            <span className="text-[0.7rem] font-semibold uppercase tracking-eyebrow text-muted">
              {month}
            </span>
          </div>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={event.status === "upcoming" ? "success" : "neutral"}>
            {event.status === "upcoming" ? "Upcoming" : "Past event"}
          </Badge>
          <Badge tone="outline">{event.type}</Badge>
        </div>
        <h3 className="text-lg leading-snug">{event.title}</h3>
        <p className="text-sm leading-relaxed text-muted line-clamp-2">{event.excerpt}</p>
        <dl className="mt-auto space-y-1.5 pt-2 text-sm text-muted">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            <dd>
              {compact ? `${formatDate(event.date)}, ` : ""}
              {time}{event.endTime ? `–${event.endTime}` : ""}
            </dd>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <dd>{event.location}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
