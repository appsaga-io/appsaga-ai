import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/site";

export function TestimonialCarousel() {
  const items = useMemo(() => testimonials, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, [items.length]);

  const current = items[index];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by founders and product teams"
          description="A small sample of what teams say after shipping an MVP with AppSaga."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Card className="relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            <div className="flex items-center gap-1 text-primary" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l2.9 6.5 7.1.6-5.4 4.6 1.7 6.8L12 17.8 5.7 20.5l1.7-6.8L2 9.1l7.1-.6L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-5 text-lg font-semibold leading-relaxed text-fg sm:text-xl">
              “{current.quote}”
            </blockquote>
            <div className="mt-6 text-sm text-muted">
              <div className="font-semibold text-fg">{current.name}</div>
              <div>{current.title}</div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-3">
              <div className="text-xs text-muted" aria-live="polite">
                {index + 1} / {items.length}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-fg hover:bg-card"
                  aria-label="Previous testimonial"
                  onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M14 7l-5 5 5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-fg hover:bg-card"
                  aria-label="Next testimonial"
                  onClick={() => setIndex((i) => (i + 1) % items.length)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M10 7l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Card>

          <div className="grid gap-4">
            {items.map((t, i) => (
              <button
                key={t.name}
                type="button"
                className={[
                  "text-left rounded-2xl border p-5 transition",
                  i === index
                    ? "border-primary/50 bg-card"
                    : "border-border/70 bg-card/60 hover:bg-card",
                ].join(" ")}
                onClick={() => setIndex(i)}
                aria-current={i === index ? "true" : "false"}
              >
                <div className="text-sm font-semibold text-fg">{t.name}</div>
                <div className="mt-1 text-xs text-muted">{t.title}</div>
                <div className="mt-3 max-h-[2.75rem] overflow-hidden text-sm text-muted">
                  “{t.quote}”
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


