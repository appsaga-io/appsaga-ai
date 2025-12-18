import { ButtonLink } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Products"
        path="/products"
        description="In-house products by AppSaga Solutions—built to solve real workflows with speed and quality."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="In-house products built by AppSaga"
            description="We build internal tools and commercial products—designed for reliability, speed, and real users."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.map((p) => (
              <Card key={p.slug} className="relative overflow-hidden">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted">Product</div>
                  {p.status === "coming_soon" ? (
                    <Badge className="border-primary/30 bg-primary/10 text-primary">Coming soon</Badge>
                  ) : null}
                </div>
                <h2 className="mt-3 text-xl font-semibold sm:text-2xl">{p.name}</h2>
                <div className="mt-1 text-sm font-semibold text-muted">{p.tagline}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>

                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Highlights
                  </div>
                  <ul className="mt-2 grid gap-2 text-sm text-muted">
                    {p.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary/40" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href={`/products/${p.slug}`} variant="primary" size="md">
                    View product
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="secondary" size="md">
                    Request demo
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}


