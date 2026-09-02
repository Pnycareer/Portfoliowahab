export default function Badge({ children, tone = "neutral", className = "" }) {
  const tones = {
    neutral: "bg-surface-2 text-muted border-border",
    accent: "bg-accent/15 text-[color:var(--color-primary)] border-accent/30",
    primary: "bg-primary/10 text-primary border-primary/20",
    success: "bg-secondary/10 text-secondary border-secondary/25",
    outline: "bg-transparent text-muted border-border",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
