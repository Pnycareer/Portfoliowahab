import Link from "next/link";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-4 text-4xl sm:text-5xl">This page could not be found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page may have moved or never existed. Try the homepage or the news section.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/#manifesto" variant="outline">
          Read the manifesto
        </Button>
      </div>
    </Container>
  );
}
