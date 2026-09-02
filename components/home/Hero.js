"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { candidate } from "@/data/candidate";
import HeroBackground from "./hero/HeroBackground";
import CandidatePortrait from "./hero/CandidatePortrait";
import CampaignCredentials from "./hero/CampaignCredentials";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 50, damping: 18, mass: 0.4 });
  const my = useSpring(rawY, { stiffness: 50, damping: 18, mass: 0.4 });

  function handleMove(e) {
    if (reduce) return;
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  }
  function handleLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  const step = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative isolate -mt-16 overflow-hidden bg-[#050505] text-white lg:-mt-20"
    >
      <HeroBackground mx={mx} my={my} />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-y-12 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-8 lg:pb-28 lg:pt-36 xl:pt-40">
          {/* ------- text column ------- */}
          <div className="lg:col-start-1 lg:row-start-1 lg:self-center">
            <motion.div {...step(0)} className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
                <span className="h-px w-8 bg-primary" aria-hidden />
                CEC Election 2026
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/45 sm:text-xs">
                {candidate.constituency}
              </span>
            </motion.div>

            <motion.h1
              {...step(0.1)}
              className="mt-6 font-sans font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(3.25rem, 7vw, 7.5rem)" }}
            >
              <span className="block">Wahab</span>
              <span className="block">Yunus</span>
            </motion.h1>

            <motion.span
              {...step(0.16)}
              aria-hidden
              className="mt-6 block h-[3px] w-24 rounded-full bg-gradient-to-r from-primary to-[#7a0a1c]"
            />

            <motion.p
              {...step(0.22)}
              className="mt-6 max-w-xl text-base leading-[1.7] text-white/60 sm:text-lg"
            >
              {candidate.tagline}
            </motion.p>

            <motion.div
              {...step(0.3)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                href="/#vision"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e01235] to-[#a4161a] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(211,19,50,0.55)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_52px_-12px_rgba(211,19,50,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                Explore Our Vision
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#manifesto"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Read the Manifesto
              </Link>
            </motion.div>
          </div>

          {/* ------- portrait ------- */}
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <CandidatePortrait mx={mx} my={my} />
          </div>

          {/* ------- credentials ------- */}
          <motion.div
            {...step(0.42)}
            className="lg:col-start-1 lg:row-start-2 lg:mt-4"
          >
            <CampaignCredentials />
          </motion.div>
        </div>
      </div>

      {/* ------- scroll indicator ------- */}
      {!reduce ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center sm:flex">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-white/35">
              Scroll
            </span>
            <span className="relative block h-9 w-px overflow-hidden bg-white/15">
              <motion.span
                className="absolute inset-x-0 top-0 block h-3 bg-primary"
                animate={{ y: [-12, 36] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </div>
        </div>
      ) : null}
    </section>
  );
}
