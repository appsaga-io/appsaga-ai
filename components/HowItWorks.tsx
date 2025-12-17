import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
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

export function HowItWorks() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="A simple process to launch in weeks"
              description="A smooth, founder-friendly delivery flow designed to ship a real MVP fast—without chaos."
            />
            <div className="mt-6 space-y-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Badge>Plan</Badge>
                <span>Scope the MVP and lock the timeline.</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge>Build</Badge>
                <span>Design + develop with AI acceleration.</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge>Launch</Badge>
                <span>Deploy, test, and iterate with confidence.</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {steps.map((s) => (
              <Card key={s.step} className="relative overflow-hidden">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/15 blur-2xl" />
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-xs font-bold text-muted">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


