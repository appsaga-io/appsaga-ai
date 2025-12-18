import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { ButtonLink } from "@/components/Button";
import { getProductBySlug, products } from "@/lib/products";

type Props = { slug: string };

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  return { props: { slug } };
};

export default function ProductPage({ slug }: Props) {
  const product = getProductBySlug(slug);
  if (!product) return null;

  return (
    <>
      <Seo
        title={product.name}
        path={`/products/${product.slug}`}
        description={product.description}
      />

      <section className="py-20">
        <Container>
          <div className="mb-6">
            <Link href="/products" className="text-sm font-semibold text-primary hover:opacity-90">
              ← Back to products
            </Link>
          </div>

          <SectionHeading
            eyebrow={product.status === "coming_soon" ? "Coming soon" : "Product"}
            title={
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{product.name}</span>
                {product.status === "coming_soon" ? (
                  <Badge className="border-primary/30 bg-primary/10 text-primary">Coming soon</Badge>
                ) : null}
                <span className="text-muted">— {product.tagline}</span>
              </span>
            }
            description={product.description}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <Card className="relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              <div className="text-sm font-semibold">Key features</div>
              <div className="mt-4 grid gap-4">
                {product.featureGroups.map((g) => (
                  <Card key={g.title} className="p-0">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.75rem] px-6 py-5">
                        <div className="text-sm font-semibold text-fg sm:text-base">{g.title}</div>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/60 text-fg transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-6">
                        <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
                          {g.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <span className="mt-1 h-2 w-2 rounded-full bg-primary/40" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="h-fit">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">Tech stack</div>
              <div className="mt-4 grid gap-3 text-sm text-muted">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-fg">Backend</span>
                  <span className="text-right">{product.techStack.backend}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-fg">Frontend</span>
                  <span className="text-right">{product.techStack.frontend}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-fg">Database</span>
                  <span className="text-right">{product.techStack.database}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-fg">AI</span>
                  <span className="text-right">{product.techStack.aiIntegration}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-fg">Auth</span>
                  <span className="text-right">{product.techStack.auth}</span>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <ButtonLink href="/contact" variant="primary" size="lg">
                  Request demo
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  Talk to us
                </ButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}


