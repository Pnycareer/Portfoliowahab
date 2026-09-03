/**
 * Sticky decorative backdrop for the Global Exposure section: a wireframe
 * globe with plotted stops and curved routes between them, faint grid,
 * red glow and oversized type. All animated pieces carry `eb-*` classes
 * that the section's GSAP context targets on scroll. Purely presentational.
 */

// 12 plotted stops, scattered across the sphere (decorative, not a real map)
const DOTS = [
  [88, 152],  // USA
  [196, 118], // UK
  [206, 134], // Switzerland
  [320, 158], // Japan
  [206, 96],  // Norway
  [240, 178], // Qatar
  [232, 190], // Saudi Arabia
  [250, 182], // UAE
  [300, 210], // Malaysia
  [222, 148], // Turkey
  [258, 144], // Uzbekistan
  [302, 174], // Hong Kong
];

// curved routes between consecutive stops (control point pulled toward centre)
const ARCS = DOTS.slice(0, -1).map(([x1, y1], i) => {
  const [x2, y2] = DOTS[i + 1];
  const mx = (x1 + x2) / 2 + (200 - (x1 + x2) / 2) * 0.28;
  const my = (y1 + y2) / 2 + (200 - (y1 + y2) / 2) * 0.28;
  return `M${x1},${y1} Q${mx.toFixed(1)},${my.toFixed(1)} ${x2},${y2}`;
});

export default function EngagementBackdrop() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="eb-glow absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(211,19,50,0.30), transparent 70%)",
        }}
      />

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

      <span className="eb-word pointer-events-none absolute right-[-1%] top-[8%] select-none font-sans text-[13vw] font-black uppercase leading-[0.82] tracking-tighter text-white/[0.035]">
        Global
        <span className="block text-right">2026</span>
      </span>

      <div className="absolute left-1/2 top-1/2 h-[min(78vh,40rem)] w-[min(78vh,40rem)] -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 400 400" className="h-full w-full" fill="none" aria-hidden>
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
              stroke="rgba(211,19,50,0.42)"
              strokeWidth="1.15"
              strokeLinecap="round"
            />
          ))}

          {DOTS.map(([cx, cy], i) => (
            <g key={i} className="eb-dot" style={{ transformOrigin: `${cx}px ${cy}px` }}>
              <circle cx={cx} cy={cy} r="7" fill="rgba(211,19,50,0.16)" />
              <circle cx={cx} cy={cy} r="2.8" fill="#ff3b54" />
            </g>
          ))}
        </svg>
      </div>

      <div className="absolute bottom-[12%] left-8 top-[12%] hidden w-px bg-white/10 lg:block">
        <div className="eb-progress absolute inset-x-0 top-0 h-full origin-top bg-red-bright" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
    </div>
  );
}
