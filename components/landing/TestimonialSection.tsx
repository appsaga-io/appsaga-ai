import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { defaultTransition, scaleIn, usePrefersReducedMotion } from "@/lib/motion";
import { testimonials } from "@/lib/site";

const StarRating = () => (
  <div className="flex items-center gap-1 text-amber-400" aria-label="Five star rating">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l2.9 6.5 7.1.6-5.4 4.6 1.7 6.8L12 17.8 5.7 20.5l1.7-6.8L2 9.1l7.1-.6L12 2z" />
      </svg>
    ))}
  </div>
);

export function TestimonialSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="py-12 sm:py-20">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-widest brand-gradient-text">
              Testimonials
            </div>
            <h2 className="mt-3 text-2xl font-bold text-fg sm:text-3xl">
              Trusted by founders and product teams
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              A small sample of what teams say after shipping an MVP with AppSaga.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="mt-10 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="hover-lift hover-glow hover-border-brand relative h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
                initial={reduced ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn}
                transition={{ ...defaultTransition, delay: i * 0.07 }}
              >
                {/* Subtle glow accent */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative">
                  <StarRating />

                  <blockquote className="mt-4 text-sm leading-relaxed text-fg sm:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-5 flex items-center gap-3">
                    {/* Avatar initials */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--brand-from))] to-[rgb(var(--brand-to))] text-xs font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-fg">{t.name}</div>
                      <div className="text-xs text-muted">{t.title}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
