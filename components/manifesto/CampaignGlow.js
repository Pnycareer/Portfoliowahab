"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Scroll-reactive red radial glows that drift as the manifesto is explored.
 * Purely decorative. Kept behind content, ignores pointer events.
 */
export default function CampaignGlow({ targetRef, animate = true }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const still = reduce || !animate;
  const y1 = useTransform(scrollYProgress, [0, 1], ["-8%", "22%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["18%", "-16%"]);
  const o1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.28, 0.5, 0.24]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[-14%] top-[4%] h-[42rem] w-[42rem] rounded-full blur-[140px]"
        style={{
          y: still ? 0 : y1,
          opacity: still ? 0.3 : o1,
          background: "radial-gradient(circle, #e01235, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute right-[-16%] top-[38%] h-[46rem] w-[46rem] rounded-full opacity-40 blur-[160px]"
        style={{
          y: still ? 0 : y2,
          background: "radial-gradient(circle, #7a0a1c, transparent 72%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-25 blur-[150px]"
        style={{ background: "radial-gradient(circle, #e01235, transparent 70%)" }}
      />
    </div>
  );
}
