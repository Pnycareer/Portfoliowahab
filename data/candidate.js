/* Candidate profile.
 *
 * Name, role, election, and the biography paragraph are the candidate's own
 * stated details. Items marked "(demo)" are placeholder supporting content for
 * this build and should be replaced with verified information.
 */

export const candidate = {
  name: "Wahab Yunus",
  position: "Candidate · CEC Election 2026",
  constituency: "P@SHA — Associate Members",
  organisation: "Pakistan Software Houses Association (P@SHA)",
  company: "Eraflip Tech",
  roleTitle: "Founder, Eraflip Tech",
  election: "P@SHA CEC Election 2026",
  tagline:
    "Helping Associate members scale their companies, reach global markets and grow Pakistan's IT industry.",
  campaignStatement:
    "My focus is practical support for Associate members: a real pathway to scale toward Corporate membership, better access to global markets and exports, stronger talent pipelines, and a clear voice for Associates across the industry.",
  portrait: {
    src: "/images/Sir-Wahab.png",
    alt: "Portrait of Wahab Yunus",
  },
  hero: {
    src: "/images/Sir-Wahab.png",
    alt: "Wahab Yunus",
  },
  signatureName: "Wahab Yunus",
  quickFacts: [
    { label: "Years experience", value: "10+" },
    { label: "Founder", value: "Eraflip Tech" },
    { label: "Core focus", value: "Skills · Gaming · AI" },
    { label: "Member", value: "Rotary International" },
  ],
  intro:
    "I am a technology entrepreneur, ecosystem builder and skills-development advocate with 10+ years of experience across IT, professional training, gaming and entrepreneurship.",
  personalMessage:
    "I am standing in the P@SHA CEC election because Associate members need representation that is close to their day-to-day challenges — scaling a company, winning international clients, hiring the right talent, and adopting new technology. This is my commitment to listen, represent those concerns, and work on practical outcomes members can measure.",

  /* Full biography — shown in the "Meet the candidate" section. */
  bio: {
    heading: "Technology entrepreneur. Ecosystem builder. Skills-development advocate.",
    lead: "10+ years across IT, professional training, gaming and entrepreneurship — building the pipeline from skills to industry to employment.",
    paragraphs: [
      "As CEO & Founder of PNY Trainings, established in 2017, I have focused on bridging the gap between skills, industry and employment. PNY has empowered 100,000+ learners, expanded to 7 campuses across Pakistan, built a team of 100+ professionals, and established an international presence in the UAE.",
      "In 2021, I founded Eraflip Tech, a gaming and technology studio focused on building Made-in-Pakistan digital products for global markets — including games, mobile applications, web development and digital solutions.",
      "I have signed 100+ MoUs and contributed to major government-backed initiatives — including PSEB TechLift, NAVTTC and PSDF programs — strengthening industry–academia collaboration. I have also organised large-scale IT conferences engaging 35,000+ participants and 700+ industry experts.",
    ],
    ventures: [
      {
        name: "PNY Trainings",
        since: "2017",
        role: "CEO & Founder",
        icon: "GraduationCap",
        blurb:
          "Bridging skills, industry and employment — 100,000+ learners, 7 campuses across Pakistan, a 100+ team, and an international presence in the UAE.",
      },
      {
        name: "Eraflip Tech",
        since: "2021",
        role: "Founder",
        icon: "Gamepad2",
        blurb:
          "A gaming and technology studio building Made-in-Pakistan digital products for global markets — games, mobile apps, web and digital solutions.",
      },
    ],
    metrics: [
      { value: 100000, suffix: "+", label: "Learners trained" },
      { value: 7, label: "Campuses in Pakistan" },
      { value: 100, suffix: "+", label: "Team members" },
      { value: 100, suffix: "+", label: "MoUs signed" },
      { value: 35000, suffix: "+", label: "Conference participants" },
      { value: 700, suffix: "+", label: "Industry experts engaged" },
    ],
    initiatives: ["PSEB TechLift", "NAVTTC", "PSDF"],
  },
  /* Campaign message shown as its own section, ahead of the manifesto. */
  pitch: {
    eyebrow: "A message from the candidate",
    headlineLead: "Associate today.",
    headlineAccent: "Industry leader tomorrow.",
    lead: "My vision is simple — turn Associate representation into Associate growth.",
    body: [
      "I am pleased to share my manifesto for the P@SHA CEC Elections 2026, Associate Class. I believe our Associate members have the potential to become tomorrow's leading technology companies.",
      "We need stronger pathways that help them scale their businesses, develop talent, access global markets, embrace emerging technologies, and build meaningful industry collaborations.",
    ],
    priorities: [
      { icon: "TrendingUp", label: "Associate-to-Corporate growth" },
      { icon: "Globe", label: "Global market access & IT exports" },
      { icon: "GraduationCap", label: "Talent & skills development" },
      { icon: "Cpu", label: "Gaming, AI & emerging technologies" },
      { icon: "Handshake", label: "Stronger Associate voice & industry collaboration" },
    ],
    close:
      "This is not just about securing a seat. It is about bringing an execution-focused approach to the CEC — working together to create measurable opportunities for our members and Pakistan's technology ecosystem.",
    ask: "I respectfully ask for your support and vote in the P@SHA CEC Elections 2026.",
    signature: [
      "Wahab Yunus",
      "Founder — Eraflip Tech",
      "Candidate — Associate Class, P@SHA CEC Elections 2026",
    ],
    tagline: "Turning Associate representation into Associate growth.",
  },
  /* Career milestones — (demo) placeholder, replace with verified detail. */
  journey: [
    {
      year: "2014",
      title: "Founded Eraflip Tech (demo)",
      description:
        "Building products and services across skills development, human capital and gaming.",
    },
    {
      year: "2019",
      title: "Industry engagement (demo)",
      description:
        "Active participation in industry initiatives connecting talent, technology and business opportunities.",
    },
    {
      year: "2026",
      title: "Candidate, P@SHA CEC Election 2026",
      description:
        "Standing to represent Associate members and their growth priorities.",
    },
  ],
};
