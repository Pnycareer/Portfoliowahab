import { ventures } from "@/data/achievements";

/**
 * Animated backdrop for the Track Record section. Ambient drifting red glows,
 * a faint grid, and two slow marquee rows of the venture names — all driven
 * by the section's GSAP context via the `ab-*` classes. Presentational only.
 */
const MARQUEE = ventures.map((v) => v.name).join("   ·   ");

export default function AchievementsBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ambient glows */}
      <div
        className="ab-glow-a absolute left-[-12%] top-[6%] h-[38rem] w-[38rem] rounded-full blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(211,19,50,0.24), transparent 70%)",
        }}
      />
      <div
        className="ab-glow-b absolute right-[-14%] bottom-[4%] h-[40rem] w-[40rem] rounded-full blur-[150px]"
        style={{
          background: "radial-gradient(circle, rgba(122,10,28,0.30), transparent 72%)",
        }}
      />

      {/* faint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 85% 70% at 50% 40%, #000, transparent 82%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 40%, #000, transparent 82%)",
        }}
      />

      {/* marquee rows */}
      <div className="pointer-events-none absolute inset-x-0 top-[16%] select-none">
        <div className="ab-marquee flex whitespace-nowrap font-display text-[7vw] uppercase leading-none tracking-tight text-white/[0.035]">
          <span className="pr-16">{MARQUEE}</span>
          <span className="pr-16" aria-hidden>{MARQUEE}</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-[14%] select-none">
        <div className="ab-marquee-2 flex whitespace-nowrap font-display text-[7vw] uppercase leading-none tracking-tight text-white/[0.03]">
          <span className="pr-16">{MARQUEE}</span>
          <span className="pr-16" aria-hidden>{MARQUEE}</span>
        </div>
      </div>

      {/* edge fades */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
