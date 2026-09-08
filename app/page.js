import { buildMetadata } from "@/lib/seo";
import { candidate } from "@/data/candidate";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import AchievementsSection from "@/components/home/achievements/AchievementsSection";
import CandidateMessage from "@/components/home/CandidateMessage";
import ManifestoSection from "@/components/manifesto/ManifestoSection";
import EngagementsSection from "@/components/home/visits/EngagementsSection";

export const metadata = buildMetadata({
  title: null,
  description: `${candidate.name}, ${candidate.position} for ${candidate.constituency}. Read the message, manifesto and global engagements.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <AchievementsSection />
      <CandidateMessage />
      <ManifestoSection />
      <EngagementsSection />
    </>
  );
}
