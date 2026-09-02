"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Vertical 01–05 progress rail. `progress` is a MotionValue (0–1) driven by
 * scroll; `activeIndex` highlights the current manifesto point.
 */
export default function ManifestoProgress({ items, activeIndex, progress }) {
  const reduce = useReducedMotion();

  return (
    <ol className="relative mt-10 flex flex-col gap-6 pl-7">
      {/* track */}
      <span
        aria-hidden
        className="absolute left-[5px] top-1 bottom-1 w-px bg-white/12"
      />
      {/* animated fill */}
      <motion.span
        aria-hidden
        className="absolute left-[5px] top-1 h-[calc(100%-8px)] w-px origin-top bg-red-bright"
        style={{ scaleY: reduce ? 1 : progress }}
      />

      {items.map((item, i) => {
        const current = i === activeIndex;
        const done = i <= activeIndex;
        return (
          <li key={item.slug} className="relative flex items-center gap-3">
            <span
              aria-hidden
              className={`absolute -left-7 top-1/2 h-[11px] w-[11px] -translate-y-1/2 rounded-full border transition-colors duration-300 ${
                current
                  ? "border-red-bright bg-red-bright"
                  : done
                    ? "border-red-bright/60 bg-red-bright/30"
                    : "border-white/25 bg-ink"
              }`}
            />
            <a
              href={`#manifesto-0${i + 1}`}
              className="flex items-center gap-3 outline-none"
            >
              <span
                className={`text-sm font-semibold tabular-nums transition-colors duration-300 ${
                  current ? "text-red-bright" : "text-white/35"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`hidden text-xs transition-colors duration-300 xl:block ${
                  current ? "text-white/75" : "text-white/25"
                }`}
              >
                {item.title}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
