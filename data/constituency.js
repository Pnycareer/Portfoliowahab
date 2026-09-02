/* DEMO CONTENT — placeholder constituency profile. */

import { constituencyStats } from "@/data/stats";

export const constituency = {
  name: "Northgate",
  intro:
    "Northgate is a mixed urban and suburban constituency on the northern edge of the region, made up of 24 distinct neighbourhoods. It combines a historic town centre and two riverside high streets with newer housing estates, light-industrial areas and a growing university quarter.",
  areaFacts: [
    "Two rivers and a protected wetland run through the eastern wards",
    "The rail interchange connects to the regional capital in 28 minutes",
    "A third of residents work in health, education or public administration",
    "The constituency has grown by roughly 9% in the last decade",
  ],
  stats: constituencyStats,
  keyIssues: [
    { title: "Cost of living", body: "Energy and housing costs are the top concern in every ward." },
    { title: "Health access", body: "Uneven GP coverage and long diagnostic waits in the east." },
    { title: "Transport", body: "Reduced evening bus services and unfinished junction upgrades." },
    { title: "High streets", body: "Empty units and reduced footfall on the older parades." },
    { title: "Youth provision", body: "Pressure on youth centres and limited evening activities." },
    { title: "Flooding", body: "Recurring surface-water flooding in three low-lying wards." },
  ],
  developmentPriorities: [
    "Finish the Elm Road and eastern bypass junction works",
    "Deliver flood resilience for the three most at-risk wards",
    "Restore evening bus services on the 12, 27 and 40 routes",
    "Complete the river corridor clean-up and riverside path",
    "Bring two new GP practices to the eastern wards",
  ],
  previousWork: [
    "Riverside high-street regeneration (2022)",
    "Eastern wards flood defence scheme (2017)",
    "Cycle network phase one — 9 km of protected lanes (2019)",
    "Reopening of the Northgate hospital outpatient wing (2021)",
  ],
  map: {
    // Replace with a real embed URL or coordinates when available.
    placeholder: true,
    caption: "Northgate constituency — 24 neighbourhoods (map placeholder)",
  },
};
