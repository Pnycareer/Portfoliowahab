import { buildMetadata } from "@/lib/seo";
import { candidate } from "@/data/candidate";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import AchievementsSection from "@/components/home/achievements/AchievementsSection";
import CandidateMessage from "@/components/home/CandidateMessage";
import ManifestoSection from "@/components/manifesto/ManifestoSection";
import EngagementsSection from "@/components/home/visits/EngagementsSection";
import HowToVote from "@/components/home/HowToVote";

export const metadata = buildMetadata({
  title: null,
  description: `${candidate.name}, ${candidate.position} for ${candidate.constituency}. Read the message, manifesto, global engagements and how to vote.`,
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
      <HowToVote />
    </>
  );
}
