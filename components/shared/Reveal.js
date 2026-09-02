"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle scroll-reveal wrapper. Fades + lifts children into view once.
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  as = "div",
  delay = 0,
  y = 16,
  once = true,
  amount = 0.25,
  className = "",
  children,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
