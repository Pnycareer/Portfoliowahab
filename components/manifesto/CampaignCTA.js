"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function CampaignCTA() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-24 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent px-8 py-16 text-center sm:px-12 sm:py-20 lg:mt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-full h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[130px]"
      />

      <motion.h3
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative font-display text-[2.5rem] leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]"
      >
        Your voice.
        <br />
        <span className="text-white/35">Our industry.</span>
        <br />
        <span className="bg-gradient-to-r from-red-bright to-accent bg-clip-text text-transparent">
          Our future.
        </span>
      </motion.h3>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
      >
        <Link
          href="/#contact"
          className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-red-bright to-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_44px_-12px_rgba(224,18,53,0.6)] transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-bright focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          />
          <span className="relative">Vote Wahab Yunus</span>
          <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
}
