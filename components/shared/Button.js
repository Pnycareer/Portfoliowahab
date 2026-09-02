import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  solid:
    "bg-primary text-white hover:bg-primary-700 border border-transparent shadow-sm",
  accent:
    "bg-accent text-[#1c1608] hover:brightness-95 border border-transparent shadow-sm",
  outline:
    "bg-transparent text-text border border-border hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-text hover:bg-surface-2 border border-transparent",
  invert:
    "bg-white text-primary hover:bg-white/90 border border-transparent shadow-sm",
};

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-5 py-3",
  lg: "text-base px-6 py-3.5",
};

export default function Button({
  href,
  variant = "solid",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...props
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded font-medium tracking-tight transition-colors duration-200 focus-visible:outline-accent ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
      ) : null}
    </>
  );

  if (href) {
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a href={href} className={`group ${cls}`} target="_blank" rel="noreferrer" {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${cls}`} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${cls}`} {...props}>
      {content}
    </button>
  );
}
