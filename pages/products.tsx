import { motion } from "framer-motion";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/landing/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { LandingCard } from "@/components/landing/LandingCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { Seo } from "@/components/Seo";
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
      <ProductCard product={product} variant="listing" />
    </motion.div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Products"
        path="/products"
        description="LeadSaga, Clinic Saga, and SnapFlow AI — in-house products by AppSaga Solutions, launching soon."
      />

      <section className="py-12 sm:py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Products"
              title="Products launching soon"
              description="In-house products we're building alongside client work — LeadSaga, Clinic Saga, and SnapFlow AI."
            />
          </ScrollReveal>

          <StaggerChildren className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <StaggerItem key={product.slug}>
                <AnimatedProductCard product={product} index={index} />
              </StaggerItem>
            ))}
          </StaggerChildren>

          <ScrollReveal delay={0.1}>
            <LandingCard interactive className="mt-14 p-8 text-center">
              <h2 className="text-xl font-semibold text-fg">Want early access?</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
                We&apos;re launching these products soon. Get in touch if you&apos;d like to try them
                early or need something similar built for your team.
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="primary" size="md">
                  Request early access
                </ButtonLink>
              </div>
            </LandingCard>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
