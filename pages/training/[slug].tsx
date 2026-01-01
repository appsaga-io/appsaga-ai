import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";

import { Course, getAllCourses, getCourseBySlug } from "@/lib/training";

type Props = {
  course: Course;
};

/* -------------------------------------------------------------------------- */
/*                               STATIC PATHS                                 */
/* -------------------------------------------------------------------------- */
export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await getAllCourses();

  return {
    paths: courses.map((c) => ({
      params: { slug: c.slug },
    })),
    fallback: "blocking",
  };
};

/* -------------------------------------------------------------------------- */
/*                               STATIC PROPS                                 */
/* -------------------------------------------------------------------------- */
export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  const course = await getCourseBySlug(slug);

  if (!course) {
    return { notFound: true };
  }

  return {
    props: { course },
    revalidate: 60,
  };
};

/* -------------------------------------------------------------------------- */
/*                                PAGE                                        */
/* -------------------------------------------------------------------------- */
export default function CoursePage({ course }: Props) {
  if (!course) return null;

  const stack = course.stack ?? [];
  const details = course.details ?? [];

  const courseInfoItems = [
    { label: "Award", value: course.award },
    { label: "Eligibility", value: course.eligibility },
  ];

  const baseUrl = "https://appsaga.ai";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Training",
        item: `${baseUrl}/training`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `${baseUrl}/training/${course.slug}`,
      },
    ],
  };

  const stackIcon = (name: string) => {
    switch (name) {
      case "HTML5":
        return <span className="text-xs font-bold">HTML</span>;
      case "PHP":
        return <span className="text-xs font-bold">PHP</span>;
      case "MySQL":
        return <span className="text-xs font-bold">SQL</span>;
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
      {/* -------------------------------- SEO -------------------------------- */}
      <Seo
        title={course.title}
        path={`/training/${course.slug}`}
        description={course.descriptionShort}
        keywords={course.keywords || course.stack || []}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.title,
            description: course.descriptionShort,
            provider: {
              "@type": "Organization",
              name: "AppSaga Solutions",
              sameAs: baseUrl,
            },
            courseCode: course.courseCode || course.slug,
            educationalCredentialAwarded: course.award || "Certificate",
            offers: {
              "@type": "Offer",
              category: "Paid",
              priceCurrency: "INR",
              price: course.totalFees || "0",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: course.mode || "Blended",
              courseWorkload: course.duration,
            },
          },
          breadcrumbSchema,
        ]}
      />

      {/* ------------------------------- HEADER ------------------------------- */}
      <section className="py-20">
        <Container>
          <Link href="/training" className="text-sm font-semibold text-primary">
            ← Back to training
          </Link>

          <SectionHeading
            as="h1"
            eyebrow="Course"
            title={course.title}
            description={course.descriptionLong}
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <Badge>Verified AICTE Institute</Badge>
            <Badge>Certificate Included</Badge>
            <Badge>{course.duration}</Badge>
            <Badge>{course.mode}</Badge>
            <Badge>{course.level}</Badge>
          </div>

          {stack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
                >
                  {stackIcon(t)}
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            {/* ------------------------------ DETAILS ----------------------------- */}
            <Card>
              <div className="grid gap-3 sm:grid-cols-2">
                {courseInfoItems
                  .filter((i) => i.value)
                  .map((i) => (
                    <div key={i.label} className="rounded-xl border p-4">
                      <div className="text-sm font-semibold">{i.label}</div>
                      <div className="text-sm text-muted">{i.value}</div>
                    </div>
                  ))}
              </div>

              <div className="mt-8">
                <div className="text-sm font-semibold">Learning Outcomes</div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {course.outcomes.map((o) => (
                    <li key={o}>✓ {o}</li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* ------------------------------- ENROLL ------------------------------ */}
            <Card className="h-fit">
              <h2 className="text-lg font-semibold">Join the next batch</h2>
              <p className="mt-2 text-sm text-muted">
                Book a call to know upcoming dates & fees.
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

      {/* ------------------------------ CURRICULUM ----------------------------- */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Curriculum"
            title={`${course.title} syllabus`}
            description="Expand modules to see topics"
          />

          <div className="mt-10 grid gap-4">
            {course.curriculum.map((m) => (
              <Card key={m.title}>
                <details>
                  <summary className="cursor-pointer font-semibold">
                    {m.title}
                  </summary>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {m.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </details>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
