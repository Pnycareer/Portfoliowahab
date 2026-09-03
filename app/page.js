import { buildMetadata } from "@/lib/seo";
import { candidate } from "@/data/candidate";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import CandidateMessage from "@/components/home/CandidateMessage";
import ManifestoSection from "@/components/manifesto/ManifestoSection";
import EngagementsSection from "@/components/home/visits/EngagementsSection";
import Priorities from "@/components/home/Priorities";
import VisionMission from "@/components/home/VisionMission";
import AchievementsPreview from "@/components/home/AchievementsPreview";
import StatsBand from "@/components/home/StatsBand";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = buildMetadata({
  title: null,
  description: `${candidate.name}, ${candidate.position} for ${candidate.constituency}. Explore the vision, manifesto, achievements and how to get involved.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <CandidateMessage />
      <ManifestoSection />
      <EngagementsSection />
      <Priorities />
      <VisionMission />
      <AchievementsPreview />
      <StatsBand />
      <UpcomingEvents />
      <FinalCTA />
    </>
  );
}
