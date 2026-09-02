"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

/* Single source: muted, silent, 720p H.264, ~2.6 MB, 19s with a 1s
   cross-fade loop seam. (VP9/WebM gave no size win for this footage.) */
const VIDEO_SRC = "/hero.mp4";

/* Scrim over the video — keeps the near-black / burgundy identity and keeps
   the left-side text readable while the footage shows through on the right. */
const VIDEO_SCRIM =
  "linear-gradient(118deg, rgba(5,5,5,0.90) 0%, rgba(10,5,7,0.74) 32%, rgba(28,6,12,0.62) 60%, rgba(92,12,26,0.46) 100%)";

/**
 * Layered hero backdrop. On desktop a muted looping video plays behind the
 * gradient system; on mobile / reduced-motion it falls back to the static
 * `--gradient-hero`. When the video is on we drop the heavy compositing
 * (blend modes, moving blurred layers) and pause it off-screen so playback
 * stays smooth.
 */
export default function HeroBackground({ mx, my }) {
  const reduce = useReducedMotion();
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    setShowVideo(mq.matches);
  }, [reduce]);

  // play on mount, and pause while the hero is scrolled out of view
  useEffect(() => {
    const el = videoRef.current;
    if (!showVideo || !el) return;

    const safePlay = () => {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    safePlay();

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) safePlay();
        else el.pause();
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [showVideo]);

  // parallax only when there is NO video (moving blurred layers over a
  // decoding <video> is what causes the stutter)
  const parallax = !reduce && !showVideo;
  const glowX = useTransform(mx, (v) => v * -18);
  const glowY = useTransform(my, (v) => v * -18);
  const typeX = useTransform(mx, (v) => v * 12);

  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-[#050505]">
      {showVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover [transform:translateZ(0)]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
          disablePictureInPicture
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : null}

      {/* base: translucent scrim over video, or the full gradient without it */}
      <div
        className="absolute inset-0"
        style={{ background: showVideo ? VIDEO_SCRIM : "var(--gradient-hero)" }}
      />

      {/* campaign-red glow behind the candidate — expands in on load */}
      <motion.div
        className="absolute right-[6%] top-[24%] h-[38rem] w-[38rem] rounded-full blur-3xl"
        style={{
          x: parallax ? glowX : 0,
          y: parallax ? glowY : 0,
          background:
            "radial-gradient(circle, rgba(211,19,50,0.32), transparent 70%)",
        }}
        initial={reduce ? false : { opacity: 0, scale: 0.82 }}
        animate={reduce ? { opacity: 0.9 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      />

      {/* diagonal campaign lines */}
      <div className="absolute -inset-y-10 right-[30%] hidden w-px rotate-[15deg] bg-gradient-to-b from-transparent via-white/[0.07] to-transparent lg:block" />
      <div className="absolute -inset-y-10 right-[41%] hidden w-px rotate-[15deg] bg-gradient-to-b from-transparent via-[rgba(211,19,50,0.16)] to-transparent lg:block" />

      {/* faint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 92% 72% at 50% 38%, #000, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 92% 72% at 50% 38%, #000, transparent 82%)",
        }}
      />

      {/* grain — plain opacity (no blend mode) so it doesn't force a
          full-stack recomposite every video frame */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: NOISE }}
      />

      {/* oversized campaign typography, partly behind the candidate */}
      <motion.div
        style={{ x: parallax ? typeX : 0 }}
        className="absolute right-[-2%] top-1/2 hidden -translate-y-1/2 select-none text-right font-sans font-black uppercase leading-[0.8] tracking-tighter text-white/[0.035] md:block"
      >
        <span className="block text-[15vw]">Vote</span>
        <span className="block text-[19vw]">26</span>
      </motion.div>

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(132% 132% at 50% 34%, transparent 50%, rgba(0,0,0,0.62) 100%)",
        }}
      />

      {/* fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#050505]" />
    </div>
  );
}
