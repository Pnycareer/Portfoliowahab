"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { nav, primaryCta, socials } from "@/data/site";
import SocialIcon from "@/components/shared/SocialIcon";

export default function MobileNav({ open, onClose, active }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial="closed"
          animate="open"
          exit="closed"
        >
          <motion.button
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
            variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
            transition={{ duration: 0.25 }}
          />
          <motion.nav
            className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-surface shadow-2xl"
            variants={{ open: { x: 0 }, closed: { x: "100%" } }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <span className="font-display text-lg">Menu</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-md p-1.5 text-muted hover:bg-surface-2 hover:text-text"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="flex flex-col">
                {nav.map((item, i) => {
                  const id = item.href.split("#")[1];
                  const isActive = active === id;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isActive ? "true" : undefined}
                        className={`block rounded-md px-3 py-3 text-lg ${
                          isActive ? "bg-surface-2 text-primary" : "text-text hover:bg-surface-2"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-border px-6 py-5">
              <Link
                href={primaryCta.href}
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 font-medium text-white hover:bg-primary-700"
              >
                {primaryCta.label}
              </Link>
              <div className="mt-5 flex items-center gap-4 text-muted">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
