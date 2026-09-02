import Link from "next/link";
import Container from "./Container";

export default function LegalPage({ title, updated, children }) {
  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-measure">
        <Link href="/" className="text-sm text-muted link-underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-4xl sm:text-5xl">{title}</h1>
        {updated ? (
          <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
        ) : null}
        <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.75] text-muted [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:text-text">
          {children}
        </div>
        <p className="mt-12 rounded-lg border border-border bg-surface-2 p-4 text-sm text-muted">
          This is placeholder legal text for a demonstration website. Replace it with
          copy reviewed by the campaign before publishing.
        </p>
      </div>
    </Container>
  );
}
