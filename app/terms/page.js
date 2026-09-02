import { buildMetadata } from "@/lib/seo";
import LegalPage from "@/components/shared/LegalPage";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Terms of use for this website.",
  path: "/terms",
});

export default function Page() {
  return (
    <LegalPage title="Terms of Use" updated="1 September 2026">
      <p>
        By using this website you agree to these terms. The site is provided for
        information about the campaign.
      </p>
      <h2>Content</h2>
      <p>
        We try to keep information accurate and up to date, but the site is provided
        &ldquo;as is&rdquo; without warranties. All names, figures and events on this
        demonstration site are placeholder content.
      </p>
      <h2>Acceptable use</h2>
      <p>
        Do not use the site unlawfully, attempt to disrupt it, or misrepresent your
        identity when contacting the campaign.
      </p>
      <h2>External links</h2>
      <p>
        We are not responsible for the content of external websites linked from this
        site.
      </p>
    </LegalPage>
  );
}
