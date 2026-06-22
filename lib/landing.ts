export type LandingFeature = {
  title: string;
  desc: string;
  iconPath: string;
  iconType?: "path" | "paths";
  bentoClass: string;
};

export type LandingStep = {
  step: string;
  title: string;
  desc: string;
};

export type PainPoint = {
  title: string;
  desc: string;
  iconPath: string;
  iconColor: string;
};

export const painPoints: PainPoint[] = [
  {
    title: "Months of waiting",
    desc: "Traditional agencies take 3–6 months. Your market window doesn't wait.",
    iconPath: "M12 8v4l3 3M12 2a10 10 0 100 20A10 10 0 0012 2z",
    iconColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
  },
  {
    title: "Scope creep chaos",
    desc: "Vague estimates balloon into endless revisions and budget overruns.",
    iconPath: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    iconColor: "text-red-500 bg-red-500/10 border-red-500/20",
  },
  {
    title: "No clear launch path",
    desc: "You get a prototype, not a product you can ship, sell, and iterate on.",
    iconPath: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    iconColor: "text-primary bg-primary/10 border-primary/20",
  },
];

export const features: LandingFeature[] = [
  {
    title: "AI-accelerated MVP delivery",
    desc: "Ship a real product in 2–3 weeks using proven templates, components, and AI-assisted development.",
    iconPath: "M7 7h10M7 12h7M7 17h10",
    bentoClass: "sm:col-span-2 lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Product design that converts",
    desc: "Clean UX, fast iterations, and landing pages built to explain your value and drive demos.",
    iconPath: "M7 17l4-4 3 3 6-6",
    bentoClass: "sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Modern engineering",
    desc: "Next.js, APIs, databases, auth—built with maintainable code and production-ready foundations.",
    iconPath: "M8 7h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2z",
    bentoClass: "sm:col-span-1",
  },
  {
    title: "AI features & automations",
    desc: "GPT/Claude integrations, agents, workflows, and automation that actually saves time.",
    iconPath: "M12 6v12M6 12h12",
    bentoClass: "sm:col-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Deploy & scale",
    desc: "CI/CD, monitoring, and a clean handoff so you can keep shipping after launch.",
    iconPath: "M12 20a8 8 0 100-16 8 8 0 000 16z",
    bentoClass: "sm:col-span-1",
  },
  {
    title: "Security & reliability",
    desc: "Best-practice auth, validation, and sensible defaults—built for real users and real data.",
    iconPath: "M12 11v4M9 11V9a3 3 0 016 0v2",
    bentoClass: "sm:col-span-1",
  },
];

export const processSteps: LandingStep[] = [
  {
    step: "01",
    title: "Define the MVP",
    desc: "We align on users, scope, and success metrics—then lock a realistic 2–3 week plan.",
  },
  {
    step: "02",
    title: "Design & prototype",
    desc: "Conversion-friendly UI + clickable flows so you can validate quickly before we build.",
  },
  {
    step: "03",
    title: "Build with AI acceleration",
    desc: "Rapid development using proven components, AI-assisted coding, and tight review loops.",
  },
  {
    step: "04",
    title: "Launch & iterate",
    desc: "Deploy, test, and ship. Then iterate based on real user feedback and metrics.",
  },
];

export const processBadges = [
  { label: "Plan", text: "Scope the MVP and lock the timeline." },
  { label: "Build", text: "Design + develop with AI acceleration." },
  { label: "Launch", text: "Deploy, test, and iterate with confidence." },
];

export const trustItems = [
  "2–3 week delivery",
  "Full code ownership",
  "Weekly demos",
  "Fixed scope before build",
];

export type ComparisonRow = {
  label: string;
  traditional: string;
  appsaga: string;
};

export const comparisonRows: ComparisonRow[] = [
  { label: "Timeline", traditional: "3–6 months", appsaga: "2–3 weeks" },
  { label: "Pricing", traditional: "Hourly / unclear", appsaga: "Fixed scope, quoted upfront" },
  { label: "Code ownership", traditional: "Often unclear", appsaga: "Yours from day one" },
  { label: "AI workflow", traditional: "Bolted on", appsaga: "AI-accelerated from start" },
  { label: "Post-launch", traditional: "Extra cost", appsaga: "Support included" },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Who owns the code?",
    answer:
      "You do. We deliver the full source code, documentation, and deployment access. Your repo lives in your GitHub org from day one—no lock-in.",
  },
  {
    question: "What's included in a 2–3 week MVP?",
    answer:
      "A scoped build with UI/UX design, frontend and backend development, auth, core features, deployment, and a handoff package. Exact scope is locked in a written proposal before we start.",
  },
  {
    question: "What stack do you use?",
    answer:
      "We default to Next.js, TypeScript, PostgreSQL or Supabase, and Vercel for deployment. For AI features we integrate Claude, OpenAI, or LangChain depending on your needs.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We're happy to sign an NDA before the first scoping call. Your idea and IP are protected from the start.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every engagement includes post-launch support (14–30 days depending on scope) for bug fixes. After that, you can take the codebase in-house or engage us for ongoing feature work.",
  },
  {
    question: "How do payments work?",
    answer:
      "We use milestone-based payments—typically 30% upfront, 40% at mid-build, and 30% on delivery. All amounts are fixed and agreed in writing before development begins.",
  },
  {
    question: "Can you rescue a vibe-coded prototype?",
    answer:
      "Yes. If you've shipped a quick prototype with Cursor, Bolt, or Lovable and need production-grade architecture, we can rebuild the foundation without throwing away your product.",
  },
];
