"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Users, Circle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/shared/Container";
import AchievementsBackdrop from "./AchievementsBackdrop";
import {
  achievementsIntro,
  ventures,
  achievementStats,
} from "@/data/achievements";

const EASE = [0.22, 1, 0.36, 1];
const STAT_ICONS = { Users };

function fmt(n) {
  return new Intl.NumberFormat("en-US").format(Math.round(n));
}

export default function AchievementsSection() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ambient drifting glows (continuous)
      gsap.to(".ab-glow-a", {
        x: 60,
        y: 40,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".ab-glow-b", {
        x: -70,
        y: -30,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // marquee rows (continuous, opposite directions)
      gsap.to(".ab-marquee", {
        xPercent: -50,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
      gsap.fromTo(
        ".ab-marquee-2",
        { xPercent: -50 },
        { xPercent: 0, duration: 46, repeat: -1, ease: "none" }
      );

      // parallax on the marquees as the section scrolls
      gsap.fromTo(
        ".ab-marquee",
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // count-up figures
      gsap.utils.toArray(".ac-num").forEach((el) => {
        const target = parseFloat(el.dataset.value);
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.fromTo(
          obj,
          { v: 0 },
          {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = fmt(obj.v) + suffix;
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative isolate overflow-x-clip bg-ink text-white"
    >
      <AchievementsBackdrop />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-bright">
            <span className="h-px w-7 bg-red-bright" aria-hidden />
            {achievementsIntro.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-4xl leading-[1.06] text-white sm:text-5xl lg:text-[3.25rem]">
            {achievementsIntro.title}
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.75] text-white/55">
            {achievementsIntro.body}
          </p>
        </motion.header>

        {/* ventures */}
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {ventures.map((v, i) => (
            <motion.li
              key={v.name}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: EASE, delay: (i % 3) * 0.06 }}
            >
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-bright/40 hover:bg-white/[0.045] hover:shadow-[0_0_60px_-18px_rgba(224,18,53,0.4)]">
                <div className="flex items-start justify-between">
                  <span className="font-sans text-sm font-bold text-white/25 transition-colors group-hover:text-red-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-bright"
                    aria-hidden
                  />
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-xl leading-snug text-white">
                    {v.name}
                  </h3>
                  <p className="mt-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-red-bright">
                    {v.kind}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* figures */}
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-9 border-t border-white/10 pt-10 sm:grid-cols-4 lg:mt-16">
          {achievementStats.map((s) => {
            const Icon = s.icon ? STAT_ICONS[s.icon] || Circle : null;
            return (
              <div key={s.label} className="min-w-0">
                {s.value != null ? (
                  <span
                    className="ac-num block font-display text-[2rem] leading-none text-white tabular-nums sm:text-[2.5rem]"
                    data-value={s.value}
                    data-suffix={s.suffix || ""}
                  >
                    {fmt(s.value) + (s.suffix || "")}
                  </span>
                ) : (
                  <span className="flex h-8 items-center text-red-bright sm:h-10">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
                  </span>
                )}
                <span className="mt-2.5 block text-[0.8rem] leading-snug text-white/55">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
