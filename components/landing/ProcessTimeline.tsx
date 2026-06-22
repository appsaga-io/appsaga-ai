import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { LandingCard } from "@/components/landing/LandingCard";
import { SectionEyebrow } from "@/components/landing/SectionEyebrow";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { springTransition, usePrefersReducedMotion } from "@/lib/motion";
import { processBadges, processSteps } from "@/lib/landing";
import { cn } from "@/lib/utils";

export function ProcessTimeline({ id = "process" }: { id?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (reduced) return;
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const step = Math.min(processSteps.length - 1, Math.floor(v * processSteps.length));
      setActiveStep(step);
    });
    return () => unsubscribe();
  }, [scrollYProgress, reduced]);

  return (
    <section id={id} ref={containerRef} className="chapter-tint-medium py-12 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ScrollReveal>
              <SectionEyebrow label="Process" />
              <h2 className="mt-3 text-2xl font-semibold text-fg sm:text-3xl">
                A simple process to launch in weeks
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                A smooth, founder-friendly delivery flow designed to ship a real MVP fast—without
                chaos.
              </p>
            </ScrollReveal>

            <div className="mt-6 space-y-3 text-sm text-muted">
              {processBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <Badge>{b.label}</Badge>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>

            <ScrollReveal className="mt-8 hidden lg:block" delay={0.1}>
              <ButtonLink href="/contact" variant="primary" size="md">
                Book a call
              </ButtonLink>
            </ScrollReveal>

            <div className="relative mt-8 hidden h-48 w-px bg-border/70 lg:block">
              <motion.div
                className="absolute left-0 top-0 w-full origin-top bg-gradient-to-b from-[rgb(var(--brand-from))] to-[rgb(var(--brand-to))]"
                style={reduced ? { height: "100%" } : { height: lineHeight }}
              />
            </div>
          </div>

          <StaggerChildren className="grid gap-4">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.step}>
                <motion.div
                  animate={
                    reduced
                      ? { opacity: 1, scale: 1 }
                      : {
                          opacity: i <= activeStep ? 1 : 0.45,
                          scale: i === activeStep ? 1 : 0.98,
                        }
                  }
                  transition={springTransition}
                >
                  <LandingCard
                    interactive
                    className={cn(
                      "relative overflow-hidden",
                      i === activeStep && "border-primary/50 shadow-[0_18px_60px_rgba(14,165,233,0.15)]"
                    )}
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/15 blur-2xl" />
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-xs font-bold text-muted"
                        initial={reduced ? false : { scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={springTransition}
                      >
                        {step.step}
                      </motion.div>
                      <div>
                        <h3 className="text-base font-semibold text-fg">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                      </div>
                    </div>
                  </LandingCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <div className="mt-8 lg:hidden">
          <ButtonLink href="/contact" variant="primary" size="md" className="w-full sm:w-auto">
            Book a call
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
