import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { CaseStudyPreview } from "@/components/landing/CaseStudyPreview";
import { LandingCard } from "@/components/landing/LandingCard";
import { SectionEyebrow } from "@/components/landing/SectionEyebrow";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { caseStudies } from "@/lib/case-studies";
import { defaultTransition, scaleIn, usePrefersReducedMotion } from "@/lib/motion";

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={scaleIn}
      transition={{ ...defaultTransition, delay: index * 0.08 }}
      className="h-full"
    >
      <Link href={`/case-studies/${study.slug}`} className="group block h-full">
        <LandingCard interactive className="flex h-full flex-col p-5">
          <CaseStudyPreview
            label={study.previewLabel}
            accent={study.previewAccent}
            timeline={study.timeline}
            logo={study.logo}
            logoAlt={study.logoAlt}
          />

          <div className="flex flex-wrap items-center gap-2">
            <Badge>{study.industry}</Badge>
          </div>

          <h3 className="mt-3 text-lg font-semibold text-fg transition-colors group-hover:text-primary">
            {study.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{study.summary}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {study.stack?.slice(0, 4).map((tech) => (
              <Badge key={tech} className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {study.metrics && study.metrics.length > 0 ? (
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border/60 pt-5 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-base font-bold text-fg sm:text-lg">{metric.value}</div>
                  <div className="mt-0.5 text-xs text-muted">{metric.label}</div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-5 text-sm font-semibold text-primary">Read case study →</div>
        </LandingCard>
      </Link>
    </motion.div>
  );
}

export function CaseStudiesSection({ id = "work" }: { id?: string }) {
  return (
    <section id={id} className="py-12 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <ScrollReveal>
            <div>
              <SectionEyebrow label="Work" />
              <h2 className="mt-3 text-2xl font-semibold text-fg sm:text-3xl">
                Our first tech partner — more coming soon.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                We&apos;re a young studio growing with our clients. YAASS is our first partnership — and
                we&apos;re looking for founders who want the same hands-on tech support.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ButtonLink href="/case-studies" variant="secondary" size="md" className="shrink-0">
              View all work
            </ButtonLink>
          </ScrollReveal>
        </div>

        <StaggerChildren className="mt-10 grid gap-5 md:max-w-xl">
          {caseStudies.map((study, index) => (
            <StaggerItem key={study.slug}>
              <CaseStudyCard study={study} index={index} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
