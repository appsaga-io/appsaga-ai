import { ButtonLink } from "@/components/Button";
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

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="Learn about AppSaga — a young tech partner studio building with founders and teams."
      />

      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About"
                title="We're a young tech partner studio"
                description="AppSaga helps founders and teams design, build, and ship web products — as an embedded engineering partner."
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
                  We&apos;re early-stage and motivated — our first client partnership is with{" "}
                  <a
                    href="https://yaass.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-link-primary font-semibold"
                  >
                    YAASS
                  </a>
                  , and we&apos;re also building our own products in-house.
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

      <section className="py-12 sm:py-20">
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

      <section className="py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Get in touch"
            title="Want to work with us?"
            description="We're looking for founders and teams who need a hands-on technology partner. Reach out and we'll see if we're a good fit."
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" variant="primary" size="md">
              Book a call
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}


