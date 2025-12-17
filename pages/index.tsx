import { ButtonLink } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { Seo } from "@/components/Seo";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { TrustedBy } from "@/components/TrustedBy";

export default function HomePage() {
  return (
    <>
      <Seo title="Home" path="/" />

      <section className="relative overflow-hidden">
        <Container className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto w-fit">
              <span
                className="h-2 w-2 rounded-full bg-gradient-to-r from-[rgb(var(--brand-from))] via-[rgb(var(--brand-via))] to-[rgb(var(--brand-to))]"
                aria-hidden="true"
              />
              AI-powered IT agency • MVP in 2–3 weeks
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Turn your idea into a launch-ready MVP in 2–3 weeks.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              We design, build, and ship modern web apps using AI-accelerated workflows—so you move
              faster without sacrificing quality.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="primary" size="lg" className="gap-2">
                Book a call
                <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="/about" variant="secondary" size="lg">
                Learn more
              </ButtonLink>
            </div>

            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-border/70 bg-card/70 px-5 py-2 text-sm text-muted shadow-[0_1px_0_rgba(0,0,0,0.06)]">
              <span className="font-semibold text-fg">2.4k+ Reviews</span>
              <span className="text-muted">|</span>
              <span className="font-semibold text-fg">4.9</span>
              <div className="flex items-center gap-1 text-primary" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l2.9 6.5 7.1.6-5.4 4.6 1.7 6.8L12 17.8 5.7 20.5l1.7-6.8L2 9.1l7.1-.6L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustedBy />
      <FeatureGrid />
      <HowItWorks />
      <TestimonialCarousel />

      <section className="py-20">
        <Container>
          <div className="rounded-[2.25rem] border border-border/70 bg-card/70 p-10 shadow-soft">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Ready to ship your MVP?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Book a quick call and we’ll map scope, timeline, and the fastest path to launch.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  Talk to us
                </ButtonLink>
                <ButtonLink href="/contact" variant="primary" size="lg">
                  Book a call
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


