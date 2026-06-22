import { Container } from "@/components/Container";
import { LandingCard } from "@/components/landing/LandingCard";
import { SectionEyebrow } from "@/components/landing/SectionEyebrow";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { comparisonRows } from "@/lib/landing";
import { cn } from "@/lib/utils";

export function ComparisonSection() {
  return (
    <section className="chapter-tint-medium py-12 sm:py-20">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow label="Why AppSaga" className="text-center" />
            <h2 className="mt-3 text-2xl font-semibold text-fg sm:text-3xl">
              AppSaga vs traditional agency
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Same quality output—without the six-month timeline or hourly billing surprises.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop table */}
        <ScrollReveal className="mt-10 hidden md:block">
          <LandingCard className="overflow-hidden p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="px-6 py-4 text-left font-semibold text-muted" scope="col" />
                  <th className="px-6 py-4 text-left font-semibold text-muted" scope="col">
                    Traditional agency
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-primary" scope="col">
                    AppSaga
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "hover-row",
                      i < comparisonRows.length - 1 && "border-b border-border/40"
                    )}
                  >
                    <th className="px-6 py-4 text-left font-semibold text-fg" scope="row">
                      {row.label}
                    </th>
                    <td className="px-6 py-4 text-muted">{row.traditional}</td>
                    <td className="px-6 py-4 font-medium text-fg">{row.appsaga}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </LandingCard>
        </ScrollReveal>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-4 md:hidden">
          {comparisonRows.map((row) => (
            <ScrollReveal key={row.label}>
              <LandingCard interactive>
                <div className="text-sm font-semibold text-fg">{row.label}</div>
                <div className="mt-3 grid gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                      Traditional agency
                    </div>
                    <div className="mt-1 text-sm text-muted">{row.traditional}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                      AppSaga
                    </div>
                    <div className="mt-1 text-sm font-medium text-fg">{row.appsaga}</div>
                  </div>
                </div>
              </LandingCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
