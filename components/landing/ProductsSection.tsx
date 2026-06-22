import { motion } from "framer-motion";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/landing/ProductCard";
import { SectionEyebrow } from "@/components/landing/SectionEyebrow";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { defaultTransition, scaleIn, usePrefersReducedMotion } from "@/lib/motion";
import { products } from "@/lib/products";

function AnimatedProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={scaleIn}
      transition={{ ...defaultTransition, delay: index * 0.08 }}
      className="h-full"
    >
      <ProductCard product={product} variant="homepage" />
    </motion.div>
  );
}

export function ProductsSection({ id = "products" }: { id?: string }) {
  return (
    <section id={id} className="py-12 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <ScrollReveal>
            <div>
              <SectionEyebrow label="Products" />
              <h2 className="mt-3 text-2xl font-semibold text-fg sm:text-3xl">
                Products we&apos;re building in-house
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                LeadSaga, Clinic Saga, and SnapFlow AI — launching soon alongside our client work.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ButtonLink href="/products" variant="secondary" size="md" className="shrink-0">
              View all products
            </ButtonLink>
          </ScrollReveal>
        </div>

        <StaggerChildren className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <StaggerItem key={product.slug}>
              <AnimatedProductCard product={product} index={index} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
