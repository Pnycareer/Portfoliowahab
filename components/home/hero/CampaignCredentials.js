import { candidate } from "@/data/candidate";

/** Compact credential strip — bright values, muted uppercase labels,
 *  thin vertical separators, small red accent marks. */
export default function CampaignCredentials() {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-7 sm:grid-cols-4 sm:gap-x-0">
      {candidate.quickFacts.map((fact, i) => (
        <div
          key={fact.label}
          className={`flex min-w-0 flex-col gap-1.5 sm:px-5 sm:first:pl-0 sm:last:pr-0 ${
            i !== 0 ? "sm:border-l sm:border-white/10" : ""
          }`}
        >
          <span aria-hidden className="h-[2px] w-5 rounded-full bg-primary/80" />
          <dt className="text-[0.9rem] font-semibold leading-tight text-white">
            {fact.value}
          </dt>
          <dd className="text-[0.64rem] font-medium uppercase tracking-[0.14em] text-white/45">
            {fact.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
