"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [state, setState] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    // Stub: wire to /api/subscribe or a provider later.
    setState("done");
  }

  if (state === "done") {
    return (
      <p className="flex items-center gap-2 text-sm text-white/80">
        <Check className="h-4 w-4 text-accent" aria-hidden />
        Thanks — you are on the list. (Demo form.)
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm items-center gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email address"
        className="h-11 w-full rounded border border-white/20 bg-white/10 px-3 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-11 shrink-0 items-center gap-1.5 rounded bg-accent px-4 text-sm font-medium text-[#1c1608] hover:brightness-95"
      >
        Sign up
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
