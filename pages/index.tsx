import { BentoFeatures } from "@/components/landing/BentoFeatures";
import { CaseStudiesSection } from "@/components/landing/CaseStudiesSection";
import { ProductsSection } from "@/components/landing/ProductsSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessTimeline } from "@/components/landing/ProcessTimeline";
import { TrainingCallout } from "@/components/landing/TrainingCallout";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Seo } from "@/components/Seo";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Home"
        path="/"
        keywords={["AI development agency", "MVP development", "web app development", "startup MVP", "rapid prototyping"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AppSaga Solutions",
          url: "https://appsaga.ai",
          logo: "https://appsaga.ai/logo-wordmark.png",
          description:
            "A young tech partner studio helping founders design, build, and ship modern web apps.",
        }}
      />

      <ScrollProgress />
      <HeroSection />
      <ProblemSection />
      <BentoFeatures />
      <ComparisonSection />
      <ProcessTimeline id="process" />
      <CaseStudiesSection id="work" />
      <ProductsSection id="products" />
      <TrainingCallout />
      <FaqSection id="faq" />
      <FinalCta />
    </>
  );
}
