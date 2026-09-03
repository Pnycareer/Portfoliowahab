"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { engagements, engagementsIntro } from "@/data/engagements";
import Container from "@/components/shared/Container";
import EngagementBackdrop from "./EngagementBackdrop";
import EngagementItem from "./EngagementItem";

const EASE = [0.22, 1, 0.36, 1];

export default function EngagementsSection() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const scrub = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      };

      // slow globe drift + parallax
      gsap.fromTo(
        ".eb-globe",
        { rotate: -12, scale: 0.94 },
        { rotate: 12, scale: 1.04, ease: "none", scrollTrigger: scrub }
      );
      gsap.fromTo(
        ".eb-word",
        { yPercent: -6 },
        { yPercent: 10, ease: "none", scrollTrigger: scrub }
      );
      gsap.fromTo(
        ".eb-glow",
        { scale: 0.85, opacity: 0.22 },
        { scale: 1.15, opacity: 0.42, ease: "none", scrollTrigger: scrub }
      );

      // vertical progress rail fills across the section
      gsap.fromTo(
        ".eb-progress",
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: scrub }
      );

      // stops light up in sequence as you scroll through the list
      gsap.set(".eb-dot", { scale: 0, opacity: 0 });
      gsap.to(".eb-dot", {
        scale: 1,
        opacity: 1,
        stagger: 0.5,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // connecting arcs draw on
      const arcs = gsap.utils.toArray(".eb-arc");
      arcs.forEach((arc) => {
        const len = arc.getTotalLength();
        gsap.set(arc, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.to(".eb-arc", {
        strokeDashoffset: 0,
        stagger: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="engagements"
      className="relative isolate overflow-x-clip bg-ink text-white"
    >
      {/* fixed / sticky backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 h-screen">
          <EngagementBackdrop />
        </div>
      </div>

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
            {engagementsIntro.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-4xl leading-[1.06] text-white sm:text-5xl lg:text-[3.25rem]">
            {engagementsIntro.title}
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.75] text-white/55">
            {engagementsIntro.body}
          </p>
        </motion.header>

        <ol className="mt-12 border-b border-white/10 lg:mt-20 lg:pl-16">
          {engagements.map((item, i) => (
            <li key={item.id}>
              <EngagementItem item={item} index={i} />
            </li>
          ))}
        </ol>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-sm text-white/40 lg:pl-16"
        >
          {engagements.length} international engagements across {new Set(engagements.map((e) => e.region)).size} regions and {new Set(engagements.map((e) => e.country)).size} countries.
        </motion.p>
      </Container>
    </section>
  );
}
