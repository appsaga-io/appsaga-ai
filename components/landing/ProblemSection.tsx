import Link from "next/link";
import { Container } from "@/components/Container";
import { LandingCard } from "@/components/landing/LandingCard";
import { SectionEyebrow } from "@/components/landing/SectionEyebrow";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { painPoints } from "@/lib/landing";

export function ProblemSection() {
  return (
    <section className="chapter-tint-light py-12 sm:py-20">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow label="The problem" className="text-center" />
            <h2 className="mt-3 text-2xl font-bold text-fg sm:text-3xl">
              Founders lose months before they ever launch
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Most teams get stuck between idea and product. AppSaga removes the friction so you can
              ship fast.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <StaggerItem key={point.title}>
              <LandingCard interactive className="h-full">
                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${point.iconColor} transition-colors duration-200`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d={point.iconPath}
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-fg">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.desc}</p>
              </LandingCard>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <ScrollReveal className="mt-10 text-center" delay={0.15}>
          <Link
            href="#process"
            className="hover-link-primary cursor-pointer text-sm font-semibold"
          >
            See how we ship in weeks ↓
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
