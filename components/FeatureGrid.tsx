import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const features = [
  {
    title: "AI-accelerated MVP delivery",
    desc: "Ship a real product in 2–3 weeks using proven templates, components, and AI-assisted development.",
    icon: (
      <path
        d="M7 7h10M7 12h7M7 17h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Product design that converts",
    desc: "Clean UX, fast iterations, and landing pages built to explain your value and drive demos.",
    icon: (
      <path
        d="M7 17l4-4 3 3 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Modern engineering",
    desc: "Next.js, APIs, databases, auth—built with maintainable code and production-ready foundations.",
    icon: (
      <path
        d="M8 7h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
    ),
  },
  {
    title: "AI features & automations",
    desc: "GPT/Claude integrations, agents, workflows, and automation that actually saves time.",
    icon: (
      <path
        d="M12 6v12M6 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Deploy & scale",
    desc: "CI/CD, monitoring, and a clean handoff so you can keep shipping after launch.",
    icon: (
      <path
        d="M12 20a8 8 0 100-16 8 8 0 000 16z"
        stroke="currentColor"
        strokeWidth="2"
      />
    ),
  },
  {
    title: "Security & reliability",
    desc: "Best-practice auth, validation, and sensible defaults—built for real users and real data.",
    icon: (
      <path
        d="M12 11v4M9 11V9a3 3 0 016 0v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
  },
];

export function FeatureGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Why us"
          title="Build fast. Launch confidently."
          description="A focused delivery process for founders and teams who want a high-quality MVP—quickly."
          align="center"
        />

        <div className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="group h-full">
              <div className="flex h-full items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-muted transition group-hover:border-primary/40 group-hover:bg-card group-hover:text-primary">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {f.icon}
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-fg">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}


