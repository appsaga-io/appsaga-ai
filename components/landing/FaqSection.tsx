import { Container } from "@/components/Container";
import { LandingCard } from "@/components/landing/LandingCard";
import { SectionEyebrow } from "@/components/landing/SectionEyebrow";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { faqItems } from "@/lib/landing";

export function FaqSection({ id = "faq" }: { id?: string }) {
  return (
    <section id={id} className="chapter-tint-light py-12 sm:py-20">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow label="FAQ" className="text-center" />
            <h2 className="mt-3 text-2xl font-semibold text-fg sm:text-3xl">
              Questions founders ask
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Straight answers—no discovery-call gatekeeping.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqItems.map((item, i) => (
            <ScrollReveal key={item.question} delay={i * 0.04}>
              <LandingCard className="p-0">
                <details className="group hover-row rounded-[1.75rem]">
                  <summary className="cursor-pointer list-none px-6 py-4 text-sm font-semibold text-fg transition-colors duration-interactive ease-interactive marker:content-none hover:bg-primary/[0.04] [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {item.question}
                      <span
                        className="shrink-0 text-muted transition-transform duration-interactive ease-interactive group-hover:scale-110 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <div className="border-t border-border/60 px-6 pb-4 pt-3 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </div>
                </details>
              </LandingCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
