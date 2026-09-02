import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, intro, children }) {
  return (
    <header className="border-b border-border bg-surface">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-current opacity-60" aria-hidden />
                {eyebrow}
              </span>
            </Reveal>
          ) : null}
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          </Reveal>
          {intro ? (
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-[1.7] text-muted">{intro}</p>
            </Reveal>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </header>
  );
}
