import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { ButtonLink } from "@/components/Button";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
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
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: product.name,
          operatingSystem: "Web",
          applicationCategory: "BusinessApplication",
          description: product.description,
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
            <Link href="/products" className="hover-link-primary text-sm font-semibold">
              ← Back to products
            </Link>
          </div>

          <ScrollReveal>
            <SectionHeading
              as="h1"
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
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-8 max-w-2xl">
              <ProductPreview
                name={product.name}
                accent={product.previewAccent}
                iconPath={product.iconPath}
                status={product.status}
                logo={product.logo}
                logoAlt={product.logoAlt}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>{product.category}</Badge>
              {product.highlights.map((highlight) => (
                <Badge key={highlight} className="text-xs font-normal">
                  {highlight}
                </Badge>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <ScrollReveal delay={0.15}>
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
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-fit">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted">Get access</div>
                <p className="mt-3 text-sm text-muted">
                  Visit the product site or documentation for the latest details.
                </p>

                <div className="mt-6 grid gap-3">
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[rgb(var(--brand-from))] via-[rgb(var(--brand-via))] to-[rgb(var(--brand-to))] text-base font-semibold text-white shadow-[0_18px_40px_rgba(14,165,233,0.28)] transition hover:brightness-105"
                    >
                      Visit app →
                    </a>
                  ) : null}
                  {product.docsUrl ? (
                    <a
                      href={product.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border/70 bg-card/60 text-base font-semibold text-fg transition hover:bg-card"
                    >
                      Read documentation →
                    </a>
                  ) : null}
                  <ButtonLink href="/contact" variant="secondary" size="lg">
                    Request early access
                  </ButtonLink>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
