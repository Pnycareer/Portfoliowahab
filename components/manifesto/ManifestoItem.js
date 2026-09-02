"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Globe,
  GraduationCap,
  Cpu,
  Users,
  Circle,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

/* Explicit map — keeps the client bundle from importing all of lucide. */
const ICONS = { TrendingUp, Globe, GraduationCap, Cpu, Users };

export default function ManifestoItem({ item, index, isActive }) {
  const reduce = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");
  const Icon = ICONS[item.icon] || Circle;

  return (
    <motion.article
      id={`manifesto-0${index + 1}`}
      className="scroll-mt-28"
      animate={{ opacity: reduce ? 1 : isActive ? 1 : 0.42 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 44 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`group relative overflow-hidden rounded-2xl border bg-white/[0.02] p-8 transition-[transform,border-color,background-color,box-shadow] duration-[400ms] hover:-translate-y-1 hover:border-red-bright/45 hover:bg-white/[0.045] hover:shadow-[0_0_70px_-18px_rgba(224,18,53,0.45)] sm:p-10 lg:p-12 ${
          isActive ? "border-white/15" : "border-white/[0.06]"
        }`}
      >
        <div className="flex items-start justify-between gap-6">
          <span
            aria-hidden
            className="pointer-events-none select-none font-display font-semibold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.15)]"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
          >
            {num}
          </span>
          <span className="mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-primary/12 text-red-bright transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
        </div>

        <h3 className="mt-1 max-w-xl font-display text-2xl uppercase leading-[1.15] tracking-tight text-white sm:text-[1.7rem]">
          {item.title}
        </h3>

        {/* decorative red line — animates in from the left */}
        <motion.span
          aria-hidden
          className="mt-5 block h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-red-bright to-accent"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? {} : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
        />

        <p className="mt-6 max-w-xl text-[0.975rem] leading-[1.8] text-white/55">
          {item.detail}
        </p>

        <span className="mt-7 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/40 transition-colors duration-300 group-hover:text-red-bright">
          {item.category}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </motion.div>
    </motion.article>
  );
}
