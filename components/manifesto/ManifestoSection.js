"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { manifesto, manifestoIntro } from "@/data/manifesto";
import Container from "@/components/shared/Container";
import CampaignGlow from "./CampaignGlow";
import CandidateStickyCard from "./CandidateStickyCard";
import ManifestoProgress from "./ManifestoProgress";
import ManifestoItem from "./ManifestoItem";
import CampaignCTA from "./CampaignCTA";

const EASE = [0.22, 1, 0.36, 1];

/* Background footage: muted, silent, 720p H.264, ~5.1 MB, 29s with a 1s
   cross-fade loop seam. */
const MANIFESTO_VIDEO = "/manifesto.mp4";
const MANIFESTO_SCRIM =
  "linear-gradient(180deg, rgba(8,8,10,0.82) 0%, rgba(8,8,10,0.88) 45%, rgba(10,10,12,0.94) 82%, #0a0a0c 100%)";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

export default function ManifestoSection() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const spotRef = useRef(null);
  const videoRef = useRef(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (reduce) return;
    setShowVideo(
      window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches
    );
  }, [reduce]);

  useEffect(() => {
    const el = videoRef.current;
    if (!showVideo || !el) return;
    const safePlay = () => {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    safePlay();
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? safePlay() : el.pause()),
      { threshold: 0.02 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [showVideo]);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 35%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.35,
  });

  useMotionValueEvent(progress, "change", (v) => {
    const idx = Math.max(
      0,
      Math.min(manifesto.length - 1, Math.round(v * (manifesto.length - 1)))
    );
    setActive(idx);
  });

  function handlePointer(e) {
    const el = spotRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      onMouseMove={reduce ? undefined : handlePointer}
      className="relative isolate overflow-x-clip bg-ink text-white"
    >
      {/* draft background video (desktop only, pauses off-screen) */}
      {showVideo ? (
        <>
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <video
              ref={videoRef}
              className="sticky top-0 h-screen w-full object-cover [transform:translateZ(0)]"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              tabIndex={-1}
              disablePictureInPicture
            >
              <source src={MANIFESTO_VIDEO} type="video/mp4" />
            </video>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: MANIFESTO_SCRIM }}
          />
        </>
      ) : null}

      <CampaignGlow targetRef={sectionRef} animate={!showVideo} />

      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 78% 55% at 50% 28%, #000, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 78% 55% at 50% 28%, #000, transparent 82%)",
        }}
      />
      {/* noise — plain opacity when the video is on (blend modes stutter over
          a decoding <video>) */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${
          showVideo ? "opacity-[0.05]" : "opacity-[0.12] mix-blend-overlay"
        }`}
        style={{ backgroundImage: NOISE }}
      />
      {/* cursor spotlight (desktop) */}
      {!reduce ? (
        <div
          ref={spotRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            background:
              "radial-gradient(560px circle at var(--x, 50%) var(--y, 15%), rgba(224,18,53,0.10), transparent 72%)",
          }}
        />
      ) : null}

      <Container className="relative pb-20 pt-12 sm:pb-28 sm:pt-16 lg:pb-36 lg:pt-20">
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-bright">
            <span className="h-px w-7 bg-red-bright" aria-hidden />
            Manifesto
          </span>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {manifestoIntro.title}
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.75] text-white/55">
            {manifestoIntro.body}
          </p>
        </motion.header>

        <div className="mt-14 grid gap-12 lg:mt-24 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-24">
          {/* LEFT — sticky candidate panel + progress */}
          <div>
            <div className="lg:sticky lg:top-24">
              <CandidateStickyCard />
              <div className="hidden lg:block">
                <ManifestoProgress
                  items={manifesto}
                  activeIndex={active}
                  progress={progress}
                />
              </div>
            </div>
          </div>

          {/* RIGHT — manifesto points */}
          <ol ref={listRef} className="space-y-10 sm:space-y-14 lg:space-y-24">
            {manifesto.map((item, i) => (
              <li key={item.slug}>
                <ManifestoItem item={item} index={i} isActive={active === i} />
              </li>
            ))}
          </ol>
        </div>

        <CampaignCTA />
      </Container>
    </section>
  );
}
