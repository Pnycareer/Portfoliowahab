import Image from "next/image";
import { candidate } from "@/data/candidate";

export default function CandidateStickyCard() {
  return (
    <div className="mx-auto max-w-sm lg:mx-0 lg:max-w-none">
      <div className="relative">
        {/* red diagonal accent — nod to the poster geometry */}
        <div
          aria-hidden
          className="absolute -right-2 -top-2 h-20 w-20 [clip-path:polygon(100%_0,100%_100%,0_0)] bg-gradient-to-br from-red-bright to-accent"
        />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="relative aspect-[4/5]">
            <Image
              src={candidate.portrait.src}
              alt={candidate.portrait.alt}
              fill
              sizes="(max-width: 1024px) 24rem, 24rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          </div>

          <div className="p-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-red-bright">
              CEC Election 2026
            </p>
            <h3 className="mt-2 font-display text-2xl leading-tight text-white">
              Wahab Yunus
            </h3>
            <p className="mt-1 text-sm text-white/50">Founder — Eraflip Tech</p>

            <div className="mt-5 flex items-center gap-2.5 rounded-lg border border-white/10 bg-primary/10 px-4 py-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-bright opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-bright" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-white">
                Vote Wahab Yunus
              </span>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-white/35">
              P@SHA · Pakistan IT Industry Association — Associate Members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
