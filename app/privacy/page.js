import { buildMetadata } from "@/lib/seo";
import LegalPage from "@/components/shared/LegalPage";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How the campaign handles personal data.",
  path: "/privacy",
});

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" updated="1 September 2026">
      <p>
        This policy explains what personal information the campaign collects, why we
        collect it, and the choices you have. We only collect what we need to run the
        campaign and respond to residents.
      </p>
      <h2>Information we collect</h2>
      <p>
        Contact details you give us when you volunteer, sign up for updates, or get in
        touch — such as your name, email address, postcode and any message you send.
      </p>
      <h2>How we use it</h2>
      <p>
        To reply to you, to send campaign updates you have asked for, and to organise
        local volunteering. We do not sell your data or share it with third parties for
        marketing.
      </p>
      <h2>Your choices</h2>
      <p>
        You can unsubscribe from updates at any time using the link in each email, and
        you can ask us to correct or delete your information by contacting the campaign
        office.
      </p>
      <h2>Contact</h2>
      <p>Email the campaign office for any privacy question or request.</p>
    </LegalPage>
  );
}
