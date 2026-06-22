import { motion } from "framer-motion";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { LandingCard } from "@/components/landing/LandingCard";
import { fadeUp, defaultTransition, staggerContainer, usePrefersReducedMotion } from "@/lib/motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FinalCta() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-[rgb(var(--brand-to))]/10 blur-[100px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <LandingCard className="relative mx-auto max-w-3xl overflow-hidden border-primary/25 bg-card/70 p-8 text-center backdrop-blur sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />

            <motion.div variants={itemVariants} transition={defaultTransition}>
              <span className="inline-block rounded-full border border-border/70 bg-bg/60 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-muted">
                Ready to launch?
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              transition={{ ...defaultTransition, delay: 0.08 }}
              className="mt-6 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl lg:text-5xl"
            >
              Ship your MVP in{" "}
              <span className="brand-gradient-text">2–3 weeks.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              transition={{ ...defaultTransition, delay: 0.16 }}
              className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
            >
              Book a quick call and we&apos;ll map scope, timeline, and the fastest path to launch.
              No pressure, just a conversation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              transition={{ ...defaultTransition, delay: 0.24 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <ButtonLink href="/contact" variant="cta" size="lg" className="min-w-[160px] gap-2">
                Book a call →
              </ButtonLink>
              <ButtonLink href="/about" variant="secondary" size="lg" className="min-w-[140px]">
                Learn more
              </ButtonLink>
            </motion.div>

            <motion.p
              variants={itemVariants}
              transition={{ ...defaultTransition, delay: 0.32 }}
              className="mt-8 text-xs text-muted"
            >
              No commitment required · Typical call is 30 minutes · Response within 24 hours
            </motion.p>
          </LandingCard>
        </motion.div>
      </Container>
    </section>
  );
}
