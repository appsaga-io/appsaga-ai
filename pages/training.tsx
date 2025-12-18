import { ButtonLink } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { courses } from "@/lib/training";
import Image from "next/image";

export default function TrainingPage() {
  return (
    <>
      <Seo
        title="Training"
        path="/training"
        description="AI training programs by AppSaga Solutions. Verified AICTE institute with certification."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Training"
            title="Industry-ready courses with certification"
            description="We train students and professionals with practical, hands-on programs. We are a verified AICTE institute and provide certification."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {courses.map((c) => (
              <Card key={c.slug} className="relative overflow-hidden">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Course
                </div>
                <h2 className="mt-3 text-xl font-semibold sm:text-2xl">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {c.descriptionShort}
                </p>
                <div className="mt-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Benefits
                  </div>
                  <ul className="mt-2 grid gap-2 text-sm text-muted">
                    {c.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary/40" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge className="border-white/10 bg-ink-950 text-white hover:border-primary/60">
                    <Image
                      src="/aicte-logo.png"
                      alt="AICPE logo"
                      width={54}
                      height={14}
                      className="h-3.5 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
                    />
                  </Badge>
                  {c.includes.slice(0, 2).map((t) => (
                    <Badge key={t} className="bg-bg/60">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
                  <span className="rounded-full border border-border/70 bg-bg/60 px-3 py-1">{c.duration}</span>
                  <span className="rounded-full border border-border/70 bg-bg/60 px-3 py-1">{c.mode}</span>
                  <span className="rounded-full border border-border/70 bg-bg/60 px-3 py-1">{c.level}</span>
                  <span className="rounded-full border border-border/70 bg-bg/60 px-3 py-1">Certificate</span>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href={`/training/${c.slug}`} variant="primary" size="md">
                    View course
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="secondary" size="md">
                    Enquire
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>

          {/* Dedicated verification section (at the end) */}
          <div className="mt-14">
            <Card className="relative overflow-hidden">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
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
                    We are a verified AICTE institute and provide certification for enrolled courses
                    upon successful completion.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}


