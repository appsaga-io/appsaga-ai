import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { courses, getCourseBySlug } from "@/lib/training";
import Image from "next/image";

type Props = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: courses.map((c) => ({ params: { slug: c.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  return { props: { slug } };
};

export default function CoursePage({ slug }: Props) {
  const course = getCourseBySlug(slug);
  if (!course) return null;

  return (
    <>
      <Seo
        title={course.title}
        path={`/training/${course.slug}`}
        description={course.descriptionShort}
      />

      <section className="py-20">
        <Container>
          <div className="mb-6">
            <Link href="/training" className="text-sm font-semibold text-primary hover:opacity-90">
              ← Back to training
            </Link>
          </div>

          <SectionHeading
            eyebrow="Course"
            title={course.title}
            description={course.descriptionLong}
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <Badge className="border-white/10 bg-ink-950 text-white hover:border-primary/60">
              <Image
                src="/aicte-logo.png"
                alt="AICPE logo"
                width={54}
                height={14}
                className="h-3.5 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
              />
            </Badge>
            <Badge>Verified AICTE Institute</Badge>
            <Badge>Certificate Included</Badge>
            <Badge>{course.duration}</Badge>
            <Badge>{course.mode}</Badge>
            <Badge>{course.level}</Badge>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <Card className="relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-bg/60 p-4">
                  <div className="text-sm font-semibold">Duration</div>
                  <div className="mt-1 text-sm text-muted">{course.duration}</div>
                </div>
                <div className="rounded-2xl border border-border/70 bg-bg/60 p-4">
                  <div className="text-sm font-semibold">Mode</div>
                  <div className="mt-1 text-sm text-muted">{course.mode}</div>
                </div>
                <div className="rounded-2xl border border-border/70 bg-bg/60 p-4">
                  <div className="text-sm font-semibold">Level</div>
                  <div className="mt-1 text-sm text-muted">{course.level}</div>
                </div>
                <div className="rounded-2xl border border-border/70 bg-bg/60 p-4">
                  <div className="text-sm font-semibold">Prerequisites</div>
                  <div className="mt-1 text-sm text-muted">{course.prerequisites}</div>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-sm font-semibold">Learning outcomes</div>
                <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
                  {course.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        ✓
                      </span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <div className="text-sm font-semibold">Why join this course</div>
                <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
                  {course.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/40" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border border-border/70 bg-card/60 p-5">
                <div className="text-sm font-semibold">Certification</div>
                <div className="mt-2 text-sm text-muted">{course.certification}</div>
              </div>

              <div className="mt-6 rounded-2xl border border-border/70 bg-bg/60 p-5">
                <div className="text-sm font-semibold">Included with this course</div>
                <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
                  {course.includes.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/40" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="h-fit">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                Enroll
              </div>
              <h2 className="mt-3 text-lg font-semibold">Join the next batch</h2>
              <p className="mt-2 text-sm text-muted">
                Book a call and we’ll share upcoming dates, fees, and the best track for your goals.
              </p>
              <div className="mt-6 grid gap-3">
                <ButtonLink href="/contact" variant="primary" size="lg">
                  Book a call
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  Ask a question
                </ButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Curriculum"
            title={`${course.title} syllabus`}
            description="Expand each module to view the topics covered."
          />

          <div className="mt-10 grid gap-4">
            {course.curriculum.map((m) => (
              <Card key={m.title} className="p-0">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.75rem] px-6 py-5">
                    <div className="text-sm font-semibold text-fg sm:text-base">{m.title}</div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/60 text-fg transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
                      {m.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-0.5 h-2 w-2 rounded-full bg-primary/40" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Dedicated verification section (at the end) */}
      <section className="pb-24">
        <Container>
          <Card className="relative overflow-hidden">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div className="flex items-center justify-center rounded-2xl border border-border/70 bg-ink-950 p-6 shadow-[0_18px_60px_rgba(14,165,233,0.10)]">
                <Image
                  src="/aicte-logo.png"
                  alt="AICPE (AICTE) verification logo"
                  width={260}
                  height={56}
                  className="h-14 w-auto object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]"
                  priority={false}
                />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest brand-gradient-text">
                  Verification & Certificate
                </div>
                <h2 className="mt-3 text-2xl font-semibold">
                  Verified AICTE institute • Certificate provided
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  We are a verified AICTE institute and provide certification for this course upon
                  successful completion.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
                  <span className="rounded-full border border-border/70 bg-bg/60 px-3 py-1">
                    Verified Institute
                  </span>
                  <span className="rounded-full border border-border/70 bg-bg/60 px-3 py-1">
                    Certificate Included
                  </span>
                  <span className="rounded-full border border-border/70 bg-bg/60 px-3 py-1">
                    1‑Month Program
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}


