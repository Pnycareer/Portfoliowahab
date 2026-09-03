"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function EngagementItem({ item, index }) {
  const reduce = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="group grid gap-4 border-t border-white/10 py-9 md:grid-cols-[3.5rem_1fr_auto] md:items-baseline md:gap-8 md:py-12"
    >
      <span
        aria-hidden
        className="font-sans text-2xl font-bold leading-none text-white/25 transition-colors duration-300 group-hover:text-red-bright md:text-[2rem]"
      >
        {num}
      </span>

      <div>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-red-bright">
          <span>{item.region}</span>
          <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
          <span className="text-white/40">{item.theme}</span>
        </p>

        <h3 className="mt-2 max-w-2xl font-display text-xl leading-snug text-white transition-colors duration-300 sm:text-2xl">
          {item.name}
        </h3>

        <motion.span
          aria-hidden
          className="mt-4 block h-[2px] w-16 origin-left rounded-full bg-gradient-to-r from-red-bright to-accent"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? {} : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        />

        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/55">
          <MapPin className="h-3.5 w-3.5 text-white/35" aria-hidden />
          {item.location}
        </p>
      </div>

      <div className="flex items-center gap-2 md:flex-col md:items-end md:gap-1">
        {item.year ? (
          <span className="font-display text-2xl text-white/30 md:text-3xl">
            {item.year}
          </span>
        ) : (
          <span className="text-xs uppercase tracking-[0.16em] text-white/25">
            Upcoming
          </span>
        )}
        <ArrowUpRight
          className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-bright"
          aria-hidden
        />
      </div>
    </motion.article>
  );
}
