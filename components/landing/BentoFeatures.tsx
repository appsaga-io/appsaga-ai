import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { LandingCard } from "@/components/landing/LandingCard";
import { SectionEyebrow } from "@/components/landing/SectionEyebrow";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { defaultTransition, scaleIn, usePrefersReducedMotion } from "@/lib/motion";
import { features } from "@/lib/landing";
import { cn } from "@/lib/utils";

function FeatureIcon({ path }: { path: string }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-muted transition-all duration-interactive ease-interactive group-hover:scale-110 group-hover:border-primary/40 group-hover:text-primary">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function BentoCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn("group", feature.bentoClass)}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={scaleIn}
      transition={{ ...defaultTransition, delay: index * 0.06 }}
    >
      <LandingCard interactive className="h-full">
        <div className="flex h-full items-start gap-4">
          <FeatureIcon path={feature.iconPath} />
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-fg">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{feature.desc}</p>
          </div>
        </div>
      </LandingCard>
    </motion.div>
  );
}

export function BentoFeatures() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow label="Why us" className="text-center" />
            <h2 className="mt-3 text-2xl font-semibold text-fg sm:text-3xl">
              Build fast. Launch confidently.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              A focused delivery process for founders and teams who want a high-quality MVP—quickly.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <BentoCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
