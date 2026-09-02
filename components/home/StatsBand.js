import Section from "@/components/shared/Section";
import Reveal from "@/components/shared/Reveal";
import StatCounter from "@/components/shared/StatCounter";
import DynamicIcon from "@/components/shared/DynamicIcon";
import { getStats } from "@/lib/content";

/* Colorlib "Videograph" counter layout, rebuilt in Tailwind:
   overlapping diamond tiles in a low / high / low / high zigzag,
   over a faint diamond-lattice backdrop. Theme colour kept (red). */

const zig = [
  "lg:translate-y-16", // 1 — low
  "lg:-translate-y-16", // 2 — high
  "lg:translate-y-16", // 3 — low
  "lg:-translate-y-16", // 4 — high
];

function Diamond({ stat }) {
  return (
    <div className="relative h-[15rem] w-[15rem] sm:h-[16rem] sm:w-[16rem] lg:h-[18rem] lg:w-[18rem]">
      {/* rotated square background */}
      <div className="absolute inset-0 rotate-45 rounded-[2rem] border border-white/12 bg-white/[0.07] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]" />
      {/* upright content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-10 text-center">
        <DynamicIcon name={stat.icon} className="h-8 w-8 text-white/90" />
        <span className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          <StatCounter value={stat.value} suffix={stat.suffix || ""} format={stat.format} />
        </span>
        <p className="text-sm font-medium text-white/85">{stat.label}</p>
        {stat.note ? <p className="text-[0.7rem] text-white/55">{stat.note}</p> : null}
      </div>
    </div>
  );
}

export default function StatsBand() {
  const stats = getStats();

  return (
    <Section tone="primary" className="relative isolate overflow-hidden">
      {/* professional red → soft-black gradient backdrop (full bleed) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <Reveal className="text-center">
        <span className="eyebrow text-white/80">The campaign in numbers</span>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl text-white sm:text-4xl">
          A focused platform for Associate members
        </h2>
      </Reveal>

      <div className="relative mt-12 lg:mt-8 lg:pb-28 lg:pt-24">
        {/* faint diamond lattice backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent 0 89px, rgba(255,255,255,0.10) 89px 90px), repeating-linear-gradient(-45deg, transparent 0 89px, rgba(255,255,255,0.10) 89px 90px)",
            maskImage:
              "radial-gradient(ellipse 70% 80% at 50% 50%, #000 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 80% at 50% 50%, #000 0%, transparent 75%)",
          }}
        />

        {/* desktop: overlapping zigzag row */}
        <ul className="relative hidden items-center justify-center lg:flex">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 0.12} className="-mx-6">
              <div className={zig[i % zig.length]}>
                <Diamond stat={s} />
              </div>
            </Reveal>
          ))}
        </ul>

        {/* mobile / tablet: 2-col grid, gentler stagger */}
        <ul className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 lg:hidden">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 0.1} className="flex justify-center">
              <div className={i % 2 === 1 ? "translate-y-6" : ""}>
                <Diamond stat={s} />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <p className="mt-16 text-center text-xs text-white/50 lg:mt-4">
        Figures are illustrative demo data.
      </p>
    </Section>
  );
}
