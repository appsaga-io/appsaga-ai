import Link from "next/link";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { CaseStudyPreview } from "@/components/landing/CaseStudyPreview";
import { LandingCard } from "@/components/landing/LandingCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesPage() {
  return (
    <>
      <Seo
        title="Case Studies"
        path="/case-studies"
        description="AppSaga's tech partnerships — starting with YAASS, a mental healthcare platform at yaass.in."
        keywords={["MVP case studies", "startup development", "AI MVP examples", "rapid product development"]}
      />

      <section className="py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Case studies"
            title="Tech partnerships"
            description="We're a new studio building with motivated founders. Our first partner is YAASS — and we're actively looking for the next."
          />

          <div className="mt-10 grid gap-5 md:max-w-xl">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block h-full">
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
                    <span className="text-xs font-medium text-muted">{study.timeline}</span>
                  </div>

                  <h2 className="mt-4 text-lg font-semibold text-fg transition-colors group-hover:text-primary">
                    {study.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{study.summary}</p>

                  {study.metrics && study.metrics.length > 0 ? (
                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border/60 pt-5 sm:grid-cols-3">
                      {study.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="text-base font-bold text-fg">{metric.value}</div>
                          <div className="mt-0.5 text-xs text-muted">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 text-sm font-semibold text-primary">Read case study →</div>
                </LandingCard>
              </Link>
            ))}
          </div>

          <LandingCard interactive className="mt-14 p-8 text-center">
            <h2 className="text-xl font-semibold text-fg">Want to be our next tech partner?</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
              We&apos;re a motivated young studio looking for founders and teams who need a hands-on
              engineering partner. Book a call and let&apos;s see if we&apos;re a fit.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact" variant="primary" size="md">
                Book a call
              </ButtonLink>
            </div>
          </LandingCard>
        </Container>
      </section>
    </>
  );
}
