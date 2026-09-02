import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: TitleTag = "h2",
  className = "",
  invert = false,
}) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left";
  return (
    <Reveal
      className={`flex flex-col gap-4 ${alignment} ${
        align === "center" ? "max-w-2xl" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow ? (
        <span className={`eyebrow ${invert ? "text-accent" : ""}`}>
          <span className="h-px w-6 bg-current opacity-60" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <TitleTag
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] ${
          invert ? "text-white" : "text-text"
        }`}
      >
        {title}
      </TitleTag>
      {intro ? (
        <p className={`text-[1.0625rem] leading-[1.7] ${invert ? "text-white/75" : "text-muted"}`}>
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
