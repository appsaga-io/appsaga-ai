import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { CaseStudyPreview } from "@/components/landing/CaseStudyPreview";
import { Seo } from "@/components/Seo";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";

type Props = { slug: string };

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: caseStudies.map((c) => ({ params: { slug: c.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  return { props: { slug } };
};

export default function CaseStudyPage({ slug }: Props) {
  const study = getCaseStudyBySlug(slug);
  if (!study) return null;

  return (
    <>
      <Seo
        title={study.title}
        path={`/case-studies/${study.slug}`}
        description={study.summary}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.title,
          description: study.summary,
          author: {
            "@type": "Organization",
            name: "AppSaga Solutions",
            url: "https://appsaga.ai",
          },
        }}
      />

      <section className="py-12 sm:py-20">
        <Container>
          <div className="mb-6">
            <Link href="/case-studies" className="hover-link-primary text-sm font-semibold">
              ← Back to case studies
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge>{study.industry}</Badge>
            <Badge className="border-primary/30 bg-primary/10 text-primary">{study.timeline}</Badge>
          </div>

          <h1 className="mt-4 text-3xl font-semibold text-fg sm:text-4xl">{study.title}</h1>
          <p className="mt-2 text-sm text-muted">
            {study.client} · {study.industry}
            {study.website ? (
              <>
                {" "}
                ·{" "}
                <a
                  href={study.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-link-primary font-semibold"
                >
                  Visit live site →
                </a>
              </>
            ) : null}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">{study.summary}</p>

          <div className="mt-8 max-w-2xl">
            <CaseStudyPreview
              label={study.previewLabel}
              accent={study.previewAccent}
              timeline={study.timeline}
              logo={study.logo}
              logoAlt={study.logoAlt}
            />
          </div>

          {study.metrics && study.metrics.length > 0 ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {study.metrics.map((metric) => (
                <Card key={metric.label} className="text-center">
                  <div className="text-2xl font-bold text-fg">{metric.value}</div>
                  <div className="mt-1 text-sm text-muted">{metric.label}</div>
                </Card>
              ))}
            </div>
          ) : null}

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-10">
              <div>
                <h2 className="text-lg font-semibold text-fg">The challenge</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{study.challenge}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-fg">Our approach</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{study.solution}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-fg">The outcome</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{study.outcome}</p>
              </div>
            </div>

            <aside className="space-y-6">
              <Card className="border-primary/30 bg-primary/5">
                <div className="text-sm font-semibold text-fg">Want to work with us?</div>
                <p className="mt-2 text-sm text-muted">
                  We&apos;re looking for founders who need a hands-on technology partner.
                </p>
                <div className="mt-4">
                  <ButtonLink href="/contact" variant="primary" size="md" className="w-full">
                    Book a call
                  </ButtonLink>
                </div>
              </Card>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
