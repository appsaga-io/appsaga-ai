import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";

const values = [
  {
    title: "Speed with standards",
    desc: "We move fast, but we don’t ship shortcuts. Clean code and clear UX are non‑negotiable.",
  },
  {
    title: "Scope that ships",
    desc: "We define the smallest lovable MVP, then deliver it end‑to‑end in 2–3 weeks.",
  },
  {
    title: "AI as leverage",
    desc: "AI accelerates delivery—humans own decisions, quality, and the final product.",
  },
  {
    title: "Partner mindset",
    desc: "We communicate clearly, demo weekly, and optimize for your business outcomes.",
  },
];

const team = [
  { name: "Deepa K.", role: "Founder / Product" },
  { name: "Sam T.", role: "Engineering" },
  { name: "Riley M.", role: "Design" },
  { name: "Noah P.", role: "Customer success" },
];

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-bg/60 text-sm font-semibold text-fg">
      {initials}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="Learn about our mission, values, and the team behind AppSaga Solutions."
      />

      <section className="py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About"
                title="We’re an AI-powered product studio"
                description="AppSaga Solutions helps founders and teams design, build, and launch MVPs in 2–3 weeks."
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                <p>
                  Building a product is hard because speed and quality often trade off. Most teams
                  either move fast with shaky foundations—or build perfectly and launch late.
                </p>
                <p>
                  We use AI to accelerate the boring parts, and we keep humans in the loop for
                  architecture, product thinking, and quality. The result: faster delivery, fewer
                  regressions, and cleaner systems.
                </p>
                <p>
                  Our goal is to help startups and teams launch faster and scale confidently—without
                  over-engineering or complicated handoffs.
                </p>
              </div>
            </div>

            <Card className="relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                Mission
              </div>
              <h2 className="mt-3 text-2xl font-semibold leading-tight">
                Help teams ship products that people love—fast.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                We believe speed is a competitive advantage. Our job is to turn your idea into a
                launch-ready product with a repeatable, stress-free delivery process.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-bg/60 p-4">
                  <div className="text-sm font-semibold">MVP in 2–3 weeks</div>
                  <div className="mt-1 text-sm text-muted">From scope → build → launch.</div>
                </div>
                <div className="rounded-2xl border border-border/70 bg-bg/60 p-4">
                  <div className="text-sm font-semibold">Weekly demos</div>
                  <div className="mt-1 text-sm text-muted">Stay aligned, reduce risk.</div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="What we optimize for"
            description="These principles guide how we build products and work with clients."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Team"
            title="Small team, high standards"
            description="We’re a focused group building tooling we’d use ourselves."
            align="center"
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <Card key={m.name}>
                <div className="flex items-center gap-4">
                  <Initials name={m.name} />
                  <div>
                    <div className="text-sm font-semibold">{m.name}</div>
                    <div className="mt-1 text-xs text-muted">{m.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted">
                  We care deeply about UX, reliability, and shipping improvements that matter.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}


