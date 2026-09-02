"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { nav, primaryCta } from "@/data/site";
import { candidate } from "@/data/candidate";
import Button from "@/components/shared/Button";
import MobileNav from "./MobileNav";

const sectionIds = nav
  .map((n) => n.href.split("#")[1])
  .filter((id) => id && id !== "top");

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
        else if (window.scrollY < 80) setActive("top");
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const atTop = !scrolled;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link href="/#top" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-lg text-white">
              {candidate.name.charAt(0)}
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className={`font-display text-[1.05rem] transition-colors ${
                  atTop ? "text-white" : "text-text"
                }`}
              >
                {candidate.name}
              </span>
              <span
                className={`text-[0.68rem] uppercase tracking-eyebrow transition-colors ${
                  atTop ? "text-white/50" : "text-muted"
                }`}
              >
                for {candidate.constituency.replace(" Constituency", "")}
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => {
                const id = item.href.split("#")[1];
                const isActive = active === id;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative rounded-md px-3 py-2 text-[0.9rem] transition-colors ${
                        isActive
                          ? atTop
                            ? "text-white"
                            : "text-primary"
                          : atTop
                            ? "text-white/60 hover:text-white"
                            : "text-muted hover:text-text"
                      }`}
                    >
                      {item.label}
                      {isActive ? (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href={primaryCta.href} size="sm" className="hidden sm:inline-flex">
              {primaryCta.label}
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={`rounded-md p-2 transition-colors lg:hidden ${
                atTop ? "text-white hover:bg-white/10" : "text-text hover:bg-surface-2"
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} active={active} />
    </>
  );
}
