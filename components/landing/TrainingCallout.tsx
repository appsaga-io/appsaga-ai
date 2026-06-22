import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { LandingCard } from "@/components/landing/LandingCard";
import { SectionEyebrow } from "@/components/landing/SectionEyebrow";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function TrainingCallout() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <ScrollReveal>
          <LandingCard interactive className="relative overflow-hidden border-primary/30 bg-primary/5">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1.4fr_auto] lg:items-center">
              <div>
                <SectionEyebrow label="Training" />
                <h2 className="mt-3 text-xl font-semibold text-fg sm:text-2xl">
                  We don&apos;t just build your MVP—we train teams to ship with AI.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  Industry-ready courses with hands-on programs and certification. Learn the same
                  AI-accelerated workflows we use to deliver MVPs in weeks.
                </p>
              </div>
              <ButtonLink href="/training" variant="primary" size="md" className="w-full shrink-0 sm:w-auto">
                Explore training
              </ButtonLink>
            </div>
          </LandingCard>
        </ScrollReveal>
      </Container>
    </section>
  );
}
