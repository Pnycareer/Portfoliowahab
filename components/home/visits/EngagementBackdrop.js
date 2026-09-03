/**
 * Sticky decorative backdrop for the Global Engagements section: a wireframe
 * globe with plotted stops, faint grid, red glow and oversized type.
 * All animated pieces carry `eb-*` classes that the section's GSAP context
 * targets on scroll. Purely presentational.
 */

const DOTS = [
  { cx: 196, cy: 120 }, // London
  { cx: 186, cy: 134 }, // London (BETT)
  { cx: 238, cy: 176 }, // Doha
  { cx: 252, cy: 148 }, // Uzbekistan
  { cx: 300, cy: 172 }, // Hong Kong
  { cx: 322, cy: 158 }, // Japan
  { cx: 92, cy: 156 }, //  Silicon Valley
];

const ARCS = [
  "M92,156 Q150,60 186,134",
  "M186,134 Q210,90 196,120",
  "M196,120 Q230,150 238,176",
  "M238,176 Q250,140 252,148",
  "M252,148 Q280,150 300,172",
  "M300,172 Q315,150 322,158",
];

export default function EngagementBackdrop() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* red glow */}
      <div
        className="eb-glow absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(211,19,50,0.30), transparent 70%)",
        }}
      />

      {/* faint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 45%, #000, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 45%, #000, transparent 82%)",
        }}
      />

      {/* oversized type */}
      <span className="eb-word pointer-events-none absolute right-[-1%] top-[8%] select-none font-sans text-[13vw] font-black uppercase leading-[0.82] tracking-tighter text-white/[0.035]">
        Global
        <span className="block text-right">2026</span>
      </span>

      {/* wireframe globe */}
      <div className="absolute left-1/2 top-1/2 h-[min(78vh,40rem)] w-[min(78vh,40rem)] -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          fill="none"
          aria-hidden
        >
          <circle cx="200" cy="200" r="150" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <g className="eb-globe" style={{ transformOrigin: "200px 200px" }}>
            <ellipse cx="200" cy="200" rx="150" ry="52" stroke="rgba(255,255,255,0.09)" />
            <ellipse cx="200" cy="200" rx="150" ry="104" stroke="rgba(255,255,255,0.07)" />
            <ellipse cx="200" cy="200" rx="52" ry="150" stroke="rgba(255,255,255,0.09)" />
            <ellipse cx="200" cy="200" rx="104" ry="150" stroke="rgba(255,255,255,0.07)" />
            <line x1="50" y1="200" x2="350" y2="200" stroke="rgba(255,255,255,0.10)" />
          </g>

          {ARCS.map((d, i) => (
            <path
              key={i}
              className="eb-arc"
              d={d}
              stroke="rgba(211,19,50,0.45)"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          ))}

          {DOTS.map((dot, i) => (
            <g key={i} className="eb-dot" style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}>
              <circle cx={dot.cx} cy={dot.cy} r="8" fill="rgba(211,19,50,0.18)" />
              <circle cx={dot.cx} cy={dot.cy} r="3.2" fill="#ff3b54" />
            </g>
          ))}
        </svg>
      </div>

      {/* progress rail */}
      <div className="absolute bottom-[12%] left-8 top-[12%] hidden w-px bg-white/10 lg:block">
        <div className="eb-progress absolute inset-x-0 top-0 h-full origin-top bg-red-bright" />
      </div>

      {/* base wash + edge fades */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
    </div>
  );
}
