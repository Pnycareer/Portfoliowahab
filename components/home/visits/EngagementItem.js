"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function EngagementItem({ item, index }) {
  const reduce = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: EASE }}
      className="group grid gap-4 border-t border-white/10 py-8 md:grid-cols-[3rem_9rem_1fr_auto] md:items-baseline md:gap-8 md:py-10"
    >
      <span
        aria-hidden
        className="font-sans text-xl font-bold leading-none text-white/25 transition-colors duration-300 group-hover:text-red-bright md:text-2xl"
      >
        {num}
      </span>

      <p className="flex items-center gap-2.5 text-sm font-medium text-white/80">
        <span className="text-lg leading-none" aria-hidden>
          {item.flag}
        </span>
        {item.country}
      </p>

      <div>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-red-bright">
          <span>{item.region}</span>
          {item.theme ? (
            <>
              <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
              <span className="text-white/40">{item.theme}</span>
            </>
          ) : null}
        </p>

        <h3 className="mt-2 max-w-2xl font-display text-lg leading-snug text-white sm:text-xl">
          {item.name}
        </h3>

        <motion.span
          aria-hidden
          className="mt-3.5 block h-[2px] w-14 origin-left rounded-full bg-gradient-to-r from-red-bright to-accent"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? {} : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
        />

        {item.location && item.location !== item.country ? (
          <p className="mt-3.5 inline-flex items-center gap-1.5 text-sm text-white/50">
            <MapPin className="h-3.5 w-3.5 text-white/30" aria-hidden />
            {item.location}
          </p>
        ) : null}
      </div>

      <ArrowUpRight
        className="hidden h-4 w-4 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-bright md:block"
        aria-hidden
      />
    </motion.article>
  );
}
