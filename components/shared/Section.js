import Container from "./Container";

/**
 * Consistent vertical rhythm for every page section.
 * With the fixed CrystalBackground behind everything, most sections are
 * transparent so the backdrop shows through; use tones sparingly for contrast.
 *
 * tone: "default" (transparent) | "surface" | "muted" | "primary"
 */
export default function Section({
  id,
  tone = "default",
  className = "",
  containerClassName = "",
  bleed = false,
  children,
}) {
  const tones = {
    default: "bg-bg text-text",
    surface: "bg-surface text-text",
    muted: "bg-surface-2 text-text",
    primary:
      "bg-primary text-white [--color-border:rgba(255,255,255,0.18)] [--color-muted:rgba(255,255,255,0.72)]",
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-28 ${tones[tone]} ${className}`}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
