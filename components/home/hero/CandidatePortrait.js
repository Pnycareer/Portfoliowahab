"use client";

import Image from "next/image";
import { motion, useReducedMotion, useTransform } from "framer-motion";
import { candidate } from "@/data/candidate";

const EASE = [0.22, 1, 0.36, 1];

export default function CandidatePortrait({ mx, my }) {
  const reduce = useReducedMotion();
  const x = useTransform(mx, (v) => v * 6);
  const y = useTransform(my, (v) => v * 6);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      animate={reduce ? {} : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
      style={reduce ? undefined : { x, y }}
      className="relative isolate mx-auto w-full max-w-[22rem] sm:max-w-[24rem] lg:mx-0 lg:ml-auto lg:max-w-[25rem] xl:max-w-[30rem]"
    >
      {/* soft red radial glow + halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[3rem] blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(211,19,50,0.38), transparent 70%)",
        }}
      />

      {/* gentle float */}
      <motion.div
        animate={reduce ? {} : { y: [0, -6, 0] }}
        transition={
          reduce ? {} : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_50px_120px_-40px_rgba(211,19,50,0.5)]">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src={candidate.portrait.src}
              alt={candidate.portrait.alt}
              fill
              priority
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 34vw"
              className="object-cover"
            />
            {/* bottom fade into the hero background */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#120609] to-transparent"
            />
            {/* restrained red rim */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-xl ring-1 ring-inset ring-[rgba(211,19,50,0.16)]"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
