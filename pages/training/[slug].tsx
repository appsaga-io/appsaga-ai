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

  const stack = course.stack ?? [];

  const courseInfoItems: Array<{ label: string; value?: string }> = [
    { label: "Award", value: course.award },
    { label: "Eligibility", value: course.eligibility },
  ];

  const details = course.details ?? [];

  const stackIcon = (name: string) => {
    switch (name) {
      case "HTML5":
        return (
          <svg
            aria-hidden="true"
            viewBox="0 0 128 128"
            className="h-5 w-5"
            fill="none"
          >
            <path
              d="M19.6 114.6L9.6 0h108.8l-10 114.6-44.4 12.3-44.4-12.3z"
              fill="#E44D26"
            />
            <path
              d="M64 116.7l35.9-10 8.6-96.4H64v106.4z"
              fill="#F16529"
            />
            <path
              d="M64 52.3H45.9l-1.2-13.8H64V25H29.9l.3 3.2 3.4 37.6H64V52.3z"
              fill="#EBEBEB"
            />
            <path
              d="M64 87.7l-.1.1-15.1-4.1-1-11.6H34.2l2 24.8 27.7 7.7.1-.1V87.7z"
              fill="#EBEBEB"
            />
            <path
              d="M64 52.3v13.5h16.8l-1.6 17.8L64 87.7v14.8l27.7-7.7.2-2.2 3.2-36.1.3-3.2H64z"
              fill="#fff"
            />
            <path
              d="M64 25v13.5h33.7l.3-3.2.7-7.1.3-3.2H64z"
              fill="#fff"
            />
          </svg>
        );
      case "PHP":
        return (
          // Source: Simple Icons (PHP)
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            role="img"
          >
            <title>PHP</title>
            <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
          </svg>
        );
      case "MySQL":
        return (
          // Source: Simple Icons (MySQL)
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            role="img"
          >
            <title>MySQL</title>
            <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
          </svg>
        );
      default:
        return (
          <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-bg text-[10px] font-semibold">
            {name.slice(0, 2).toUpperCase()}
          </span>
        );
    }
  };

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

          {stack.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-bg/60 px-3 py-1 text-xs font-semibold text-fg"
                >
                  <span className="text-primary">{stackIcon(t)}</span>
                  <span>{t}</span>
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <Card className="relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              <div className="grid gap-3 sm:grid-cols-2">
                {courseInfoItems
                  .filter((i) => Boolean(i.value))
                  .map((i) => (
                    <div
                      key={i.label}
                      className="rounded-2xl border border-border/70 bg-bg/60 p-4"
                    >
                      <div className="text-sm font-semibold">{i.label}</div>
                      <div className="mt-1 text-sm text-muted">{i.value}</div>
                    </div>
                  ))}
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

              {details.length ? (
                <div className="mt-8">
                  <div className="text-sm font-semibold">Course details</div>

                  {/* Simple flow: single column steps with connector + arrow */}
                  <ol className="mt-4 grid gap-4">
                    {details.map((s, idx) => {
                      const isLast = idx === details.length - 1;

                      return (
                        <li key={s.title} className="relative">
                          <div className="rounded-2xl border border-border/70 bg-bg/60 p-5">
                            <div className="flex flex-wrap items-center gap-3">
                              <div className="text-sm font-semibold">{s.title}</div>
                            </div>

                            {s.paragraphs?.length ? (
                              <div className="mt-3 grid gap-2 text-sm text-muted">
                                {s.paragraphs.map((p) => (
                                  <p key={p}>{p}</p>
                                ))}
                              </div>
                            ) : null}

                            {s.bullets?.length ? (
                              <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
                                {s.bullets.map((b) => (
                                  <li key={b} className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-primary/40" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>

                          {!isLast ? (
                            <div className="relative flex items-center justify-center py-2">
                              <div aria-hidden="true" className="h-8 w-px bg-border/70" />
                              <div
                                aria-hidden="true"
                                className="absolute bottom-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/70 bg-bg/60 text-xs text-muted"
                              >
                                ↓
                              </div>
                            </div>
                          ) : null}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ) : null}

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


