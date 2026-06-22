import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { LandingCard } from "@/components/landing/LandingCard";
import { defaultTransition, staggerContainer, usePrefersReducedMotion } from "@/lib/motion";
import { trustItems } from "@/lib/landing";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProductMockup() {
  return (
    <LandingCard className="relative z-0 h-[360px] w-full max-w-lg overflow-hidden p-0 sm:h-[420px] lg:max-w-xl">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[rgb(var(--brand-to))]/15 blur-3xl" />

      <div className="relative flex h-full flex-col p-5">
        <div className="flex items-center gap-2 rounded-xl border border-border/50 bg-card px-3 py-2 shadow-sm">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
          <div className="ml-2 flex-1 rounded-md bg-muted/10 px-2 py-0.5 text-[10px] text-muted">
            appsaga-mvp.app
          </div>
        </div>

        <div className="mt-4 flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-5 w-2/5 rounded-lg bg-gradient-to-r from-primary/30 to-[rgb(var(--brand-to))]/20" />
            <div className="h-7 w-20 rounded-full bg-gradient-to-r from-[rgb(var(--brand-from))] to-[rgb(var(--brand-to))] opacity-75" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {["bg-primary/15", "bg-[rgb(var(--brand-to))]/15", "bg-cta/10"].map((c, i) => (
              <div
                key={i}
                className={`flex h-16 flex-col items-center justify-center gap-1 rounded-xl border border-border/50 ${c}`}
              >
                <div className="h-3 w-8 rounded bg-current opacity-30" />
                <div className="h-2 w-12 rounded bg-current opacity-20" />
              </div>
            ))}
          </div>

          <div className="h-20 rounded-xl border border-primary/20 bg-primary/5 p-3">
            <div className="h-2.5 w-3/4 rounded bg-primary/20" />
            <div className="mt-2 h-2 w-full rounded bg-border/40" />
            <div className="mt-1.5 h-2 w-5/6 rounded bg-border/30" />
          </div>

          <div className="flex gap-2">
            <div className="h-9 flex-1 rounded-full bg-gradient-to-r from-[rgb(var(--brand-from))] to-[rgb(var(--brand-to))] opacity-85 shadow-sm" />
            <div className="h-9 w-24 rounded-full border border-border/70 bg-card/60" />
          </div>

          <div className="space-y-2">
            {[0.9, 0.7, 0.8].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg border border-border/40 bg-primary/10" />
                <div className="h-2 rounded bg-border/50" style={{ width: `${w * 100}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </LandingCard>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.55]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <Container className="py-12 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduced ? false : "hidden"}
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={itemVariants} transition={defaultTransition}>
              <Badge className="w-fit">
                <span
                  className="h-2 w-2 rounded-full bg-gradient-to-r from-[rgb(var(--brand-from))] via-[rgb(var(--brand-via))] to-[rgb(var(--brand-to))]"
                  aria-hidden="true"
                />
                AI-powered IT agency • MVP in 2–3 weeks
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              transition={{ ...defaultTransition, delay: 0.08 }}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              Turn your idea into a{" "}
              <span className="brand-gradient-text">launch-ready MVP</span>{" "}
              in 2–3 weeks.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              transition={{ ...defaultTransition, delay: 0.16 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              We design, build, and ship as your tech partner — using AI-accelerated
              workflows so you move faster without sacrificing quality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              transition={{ ...defaultTransition, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <ButtonLink href="/contact" variant="cta" size="lg" className="gap-2">
                Start My MVP in 2 Weeks
                <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="/#process" variant="secondary" size="lg">
                See How We Build It
              </ButtonLink>
            </motion.div>

            <motion.div
              variants={itemVariants}
              transition={{ ...defaultTransition, delay: 0.32 }}
              className="mt-10 flex flex-wrap gap-2 border-t border-border/50 pt-8"
            >
              {trustItems.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto lg:max-w-xl"
            style={reduced ? undefined : { scale: mockupScale, opacity: mockupOpacity }}
          >
            <ProductMockup />
            <ParallaxLayer offset={24} className="absolute -left-6 -top-6 z-10 hidden md:block">
              <div className="h-20 w-20 rounded-2xl border border-primary/20 bg-primary/10 blur-[1px]" />
            </ParallaxLayer>
            <ParallaxLayer offset={32} className="absolute -bottom-4 -right-4 z-10 hidden md:block">
              <div className="rounded-xl border border-border/70 bg-card/80 px-3 py-2 text-xs text-muted shadow-soft backdrop-blur-sm">
                Ship in weeks, not months
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={16} className="absolute -right-8 top-1/4 z-10 hidden lg:block">
              <div className="h-14 w-14 rounded-full bg-cta/15 blur-sm" />
            </ParallaxLayer>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
