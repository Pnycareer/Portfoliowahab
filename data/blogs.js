/* DEMO CONTENT — placeholder articles.
 *
 * `body` is a structured block array so it maps cleanly onto any CMS
 * rich-text / portable-text model later. Supported block types:
 *   { type: "paragraph", text }
 *   { type: "heading", level: 2|3, text }
 *   { type: "quote", text, cite }
 *   { type: "list", ordered: boolean, items: [] }
 *   { type: "image", src, alt, caption }
 */

export const blogCategories = [
  "Campaign Updates",
  "Candidate Statements",
  "Development",
  "Community",
  "Events",
  "Policy",
  "Press Releases",
];

export const authors = {
  "wahab-yunus": { name: "Wahab Yunus", role: "Candidate for Northgate" },
  "campaign-team": { name: "Northgate Campaign Team", role: "Campaign Office" },
};

export const posts = [
  {
    slug: "listening-survey-results-2026",
    title: "What 4,000 households told us: the listening survey results",
    excerpt:
      "We delivered a survey to every home in Northgate and more than 4,000 came back. Here is what residents said matters most — and what we will do about it.",
    category: "Campaign Updates",
    tags: ["listening", "cost of living", "healthcare", "transport"],
    author: "wahab-yunus",
    publishedAt: "2026-08-20",
    updatedAt: "2026-08-21",
    readingTime: 6,
    featured: true,
    hero: {
      src: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1600&q=80",
      alt: "Volunteers sorting survey responses at a table (placeholder image)",
    },
    body: [
      { type: "paragraph", text: "Over eight weeks this summer, volunteers hand-delivered a short survey to every household in the constituency. We asked one open question — what should your representative focus on — and three quick rankings. More than 4,000 responses came back, from every one of the 24 neighbourhoods." },
      { type: "heading", level: 2, text: "The three clear priorities" },
      { type: "paragraph", text: "The results were consistent across the constituency. Cost of living came first in 19 of 24 neighbourhoods. Health access and public transport followed close behind, swapping second and third place depending on the ward." },
      { type: "list", ordered: true, items: [
        "Cost of living — energy bills, rent and childcare named most often",
        "Health access — GP appointments and diagnostic waits, especially in the east",
        "Public transport — evening and weekend bus services",
      ] },
      { type: "quote", text: "I don't want promises. I want to know the bus will be there when my shift ends.", cite: "Resident, Elmfield Ward" },
      { type: "heading", level: 2, text: "What we will do" },
      { type: "paragraph", text: "Each of these now has a costed commitment in our manifesto, which we publish in full next month. On transport specifically, we have already handed in 3,100 signatures calling for the restoration of evening services on the 12, 27 and 40 routes." },
      { type: "image", src: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=1400&q=80", alt: "A local bus at a stop in the evening (placeholder image)", caption: "Evening bus services were the single most requested transport change." },
      { type: "heading", level: 3, text: "Full data" },
      { type: "paragraph", text: "A ward-by-ward breakdown, including the raw counts and the anonymised open comments, is available at the campaign office and will be posted here as a download." },
    ],
  },
  {
    slug: "why-i-am-standing",
    title: "Why I am standing for Northgate",
    excerpt:
      "A personal statement from Wahab Yunus on what brought this campaign about and the kind of representation Wahab wants to offer.",
    category: "Candidate Statements",
    tags: ["statement", "values", "public service"],
    author: "wahab-yunus",
    publishedAt: "2026-05-10",
    updatedAt: "2026-05-10",
    readingTime: 4,
    featured: false,
    hero: {
      src: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1600&q=80",
      alt: "Candidate talking with residents on a street (placeholder image)",
    },
    body: [
      { type: "paragraph", text: "I have lived and worked in Northgate for most of my life. I trained as an engineer here, raised a family here, and spent a decade in local government trying to make the basics work a little better." },
      { type: "paragraph", text: "I am standing because I think representation should be close and accountable. Not a name you see once every few years, but someone whose surgery is in your ward, whose record you can read, and whose promises are specific enough to check." },
      { type: "quote", text: "Politics works best when it is small, practical and honest about what it can do.", cite: "Wahab Yunus" },
      { type: "heading", level: 2, text: "Three commitments" },
      { type: "list", ordered: false, items: [
        "A doorstep conversation in every one of the 24 neighbourhoods",
        "A costed plan, published and reported against every quarter",
        "A positive campaign about Northgate, not about personalities",
      ] },
      { type: "paragraph", text: "If that is the kind of representation you want, I would be glad of your support — and your time, if you have a few hours to give." },
    ],
  },
  {
    slug: "eastern-wards-bus-petition",
    title: "3,100 signatures: the eastern wards bus petition",
    excerpt:
      "We handed in a petition calling for evening bus services to be restored on three routes serving the eastern wards.",
    category: "Development",
    tags: ["transport", "buses", "petition", "eastern wards"],
    author: "campaign-team",
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-06",
    readingTime: 3,
    featured: false,
    hero: {
      src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&q=80",
      alt: "A bus on an evening street (placeholder image)",
    },
    body: [
      { type: "paragraph", text: "When evening services on the 12, 27 and 40 were cut, shift workers, students and carers in the eastern wards lost a reliable way home after 7pm. Over six weeks, volunteers collected 3,100 signatures asking for them back." },
      { type: "heading", level: 2, text: "What happens next" },
      { type: "paragraph", text: "The petition has been submitted to the regional transport authority. We have asked for a formal response and a meeting, and we will publish both here." },
      { type: "list", ordered: false, items: [
        "Restore the 12, 27 and 40 evening services to a 30-minute frequency",
        "Guarantee the last departure no earlier than 23:00",
        "Review weekend timetables on the same routes",
      ] },
    ],
  },
  {
    slug: "northgate-high-streets-plan",
    title: "A plan for Northgate's high streets",
    excerpt:
      "Empty units and falling footfall are hurting our older parades. Here is a practical, four-part plan to turn them around.",
    category: "Policy",
    tags: ["high streets", "economy", "regeneration", "business"],
    author: "wahab-yunus",
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-03",
    readingTime: 5,
    featured: false,
    hero: {
      src: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1600&q=80",
      alt: "A high street with independent shops (placeholder image)",
    },
    body: [
      { type: "paragraph", text: "The Riverside regeneration in 2022 showed what is possible: eighteen empty units filled and footfall up more than a quarter within a year. The same approach can work on Market Street and the northern parade." },
      { type: "heading", level: 2, text: "Four parts" },
      { type: "heading", level: 3, text: "1. Shopfront grants" },
      { type: "paragraph", text: "Small match-funded grants for signage, frontage and access improvements, prioritised for independent traders." },
      { type: "heading", level: 3, text: "2. An empty-unit incentive" },
      { type: "paragraph", text: "A landlord incentive to bring long-term vacant units back into use, paired with a register so the scale of the problem is public." },
      { type: "heading", level: 3, text: "3. A business advice desk" },
      { type: "paragraph", text: "Weekly free clinics at the constituency office covering rates, licensing and planning." },
      { type: "heading", level: 3, text: "4. The public realm" },
      { type: "paragraph", text: "Wider pavements, better lighting and street trees — the things that make people want to linger." },
      { type: "quote", text: "You cannot subsidise your way to a good high street, but you can remove the obstacles.", cite: "Wahab Yunus" },
    ],
  },
  {
    slug: "twelfth-neighbourhood-meeting",
    title: "Halfway through the ward meeting rota",
    excerpt:
      "Twelve of twenty-four neighbourhood meetings done. A short note on what we are hearing and how the notes are published.",
    category: "Events",
    tags: ["meetings", "listening", "transparency"],
    author: "campaign-team",
    publishedAt: "2026-07-18",
    updatedAt: "2026-07-18",
    readingTime: 3,
    featured: false,
    hero: {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80",
      alt: "People seated at a community meeting (placeholder image)",
    },
    body: [
      { type: "paragraph", text: "We committed to holding an open public meeting in every one of Northgate's 24 neighbourhoods before the election. As of this week we are halfway there." },
      { type: "paragraph", text: "The format stays the same everywhere: a five-minute update, then the floor is open. Every meeting produces a short set of notes and actions, published within 48 hours." },
      { type: "list", ordered: false, items: [
        "Recurring themes: buses, GP access, potholes, and youth provision",
        "Local specifics: a dangerous crossing in Elmfield, drainage on Mill Lane",
        "Every action item has a named owner and a review date",
      ] },
    ],
  },
  {
    slug: "press-release-manifesto-date",
    title: "Press release: Northgate manifesto to be published in September",
    excerpt:
      "The campaign confirms it will publish a full, costed manifesto for public scrutiny four weeks before polling day.",
    category: "Press Releases",
    tags: ["manifesto", "press", "transparency"],
    author: "campaign-team",
    publishedAt: "2026-08-25",
    updatedAt: "2026-08-25",
    readingTime: 2,
    featured: false,
    hero: {
      src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80",
      alt: "Newspapers on a table (placeholder image)",
    },
    body: [
      { type: "paragraph", text: "FOR IMMEDIATE RELEASE — The campaign to elect Wahab Yunus as Member of the Legislative Assembly for Northgate today confirmed that its full manifesto will be published in September, four weeks ahead of polling day." },
      { type: "paragraph", text: "The document will set out costed commitments across seven policy areas, each with measurable objectives, and will be accompanied by a commitment to publish quarterly progress reports if the candidate is elected." },
      { type: "paragraph", text: "Media enquiries: press@example-campaign.org" },
    ],
  },
];
