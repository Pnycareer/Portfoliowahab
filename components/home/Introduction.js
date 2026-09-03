"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Gamepad2, Circle } from "lucide-react";
import Section from "@/components/shared/Section";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import { candidate } from "@/data/candidate";

const EASE = [0.22, 1, 0.36, 1];
const ICONS = { GraduationCap, Gamepad2 };

function formatValue(n, format) {
  if (format === "compact") {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 0,
    }).format(Math.round(n));
  }
  return new Intl.NumberFormat("en-US").format(Math.round(n));
}

export default function Introduction() {
  const bio = candidate.bio;
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // count-up metrics
      gsap.utils.toArray(".mc-num").forEach((el) => {
        const target = parseFloat(el.dataset.value);
        const suffix = el.dataset.suffix || "";
        const format = el.dataset.format || "";
        const obj = { v: 0 };
        gsap.fromTo(
          obj,
          { v: 0 },
          {
            v: target,
            duration: 1.7,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onUpdate: () => {
              el.textContent = formatValue(obj.v, format) + suffix;
            },
          }
        );
      });

      // portrait parallax
      gsap.fromTo(
        ".mc-portrait-img",
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: ".mc-portrait",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // faint background word parallax
      gsap.fromTo(
        ".mc-word",
        { yPercent: -5 },
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

      // heading rule draw-in
      gsap.fromTo(
        ".mc-rule",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".mc-rule", start: "top 90%", once: true },
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <Section id="about" tone="surface" className="relative overflow-hidden">
      {/* faint decorative type */}
      <span
        aria-hidden
        className="mc-word pointer-events-none absolute -right-6 top-6 select-none font-display text-[22vw] leading-none text-primary/[0.04] sm:text-[16vw]"
      >
        2017
        <span className="block text-right">2021</span>
      </span>

      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-16">
        {/* ---- bio ---- */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" aria-hidden />
              Meet the candidate
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.12] text-text sm:text-4xl lg:text-[2.75rem]">
              {bio.heading}
            </h2>
          </Reveal>

          <span
            className="mc-rule mt-6 block h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-primary to-[#7a0a1c]"
            aria-hidden
          />

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-text">
              {bio.lead}
            </p>
          </Reveal>

          <div className="mt-6 space-y-4">
            {bio.paragraphs.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="max-w-2xl text-[1.0625rem] leading-[1.8] text-muted">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-xs font-semibold uppercase tracking-eyebrow text-accent">
                National programmes
              </span>
              {bio.initiatives.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-text"
                >
                  {it}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex items-end justify-between gap-6 border-t border-border pt-6">
              <p className="font-display text-2xl italic text-primary">
                {candidate.signatureName}
              </p>
              <Button href="/#message" variant="ghost" withArrow>
                Read the message
              </Button>
            </div>
          </Reveal>
        </div>

        {/* ---- portrait ---- */}
        <Reveal className="order-first lg:order-last">
          <div className="mc-portrait relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-border shadow-card lg:mx-0 lg:max-w-none">
            <div className="mc-portrait-img absolute inset-x-0 -top-[8%] h-[116%]">
              <Image
                src={candidate.hero.src}
                alt={candidate.hero.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 26rem"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div>
                <p className="font-display text-base text-white">{candidate.name}</p>
                <p className="text-xs text-white/70">{candidate.roleTitle}</p>
              </div>
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                Rotary Int&rsquo;l
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---- metrics strip ---- */}
      <div className="relative mt-14 grid grid-cols-2 gap-x-8 gap-y-9 border-y border-border py-9 sm:grid-cols-3 lg:mt-20 lg:py-10">
        {bio.metrics.map((m) => (
          <div key={m.label} className="min-w-0">
            <span
              className="mc-num block font-display text-[1.9rem] leading-none text-primary tabular-nums sm:text-4xl"
              data-value={m.value}
              data-suffix={m.suffix || ""}
              data-format={m.format || ""}
            >
              {formatValue(m.value, m.format) + (m.suffix || "")}
            </span>
            <span className="mt-2.5 block text-[0.8rem] leading-snug text-muted">
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* ---- ventures ---- */}
      <div className="relative mt-10 grid gap-5 md:grid-cols-2">
        {bio.ventures.map((v, i) => {
          const Icon = ICONS[v.icon] || Circle;
          return (
          <motion.article
            key={v.name}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
            className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card sm:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs font-semibold uppercase tracking-eyebrow text-muted">
                Est. {v.since}
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl text-text">{v.name}</h3>
            <p className="mt-0.5 text-sm font-medium text-primary">{v.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{v.blurb}</p>
          </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
