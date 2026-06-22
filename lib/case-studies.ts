export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  timeline: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics?: CaseStudyMetric[];
  stack?: string[];
  highlights?: string[];
  previewLabel: string;
  previewAccent: string;
  website?: string;
  logo?: string;
  logoAlt?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "yaass",
    title: "YAASS — mental healthcare platform",
    client: "YAASS (Therapeutic Tapestry Pvt. Ltd.)",
    industry: "HealthTech",
    timeline: "Ongoing partnership",
    website: "https://yaass.in/",
    logo: "/clients/yaass-logo.png",
    logoAlt: "YAASS logo",
    summary:
      "AppSaga is the technology partner for yaass.in — YAASS's platform for expressive arts mental healthcare.",
    challenge:
      "YAASS needed a technology partner to help build and maintain their web platform.",
    solution:
      "We work as an embedded engineering partner alongside the YAASS team.",
    outcome:
      "The platform is live at yaass.in.",
    metrics: [
      { label: "Role", value: "Tech partner" },
      { label: "Platform", value: "Live" },
    ],
    previewLabel: "YAASS",
    previewAccent: "from-rose-500/20 to-violet-700/20",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
