export const siteConfig = {
  name: "AppSaga Solutions",
  shortName: "AppSaga",
  tagline: "AI-powered MVPs shipped in 2–3 weeks.",
  description:
    "AppSaga Solutions is an IT agency that helps founders and teams design, build, and launch MVPs in 2–3 weeks using AI-accelerated workflows.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  social: {
    twitter: "https://twitter.com/",
  },
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We went from idea to a working MVP in 3 weeks. Weekly demos, clear scope, and a polished product we could sell.",
    name: "Aarav S.",
    title: "Founder, B2B SaaS",
  },
  {
    quote:
      "Their AI-assisted workflow is fast without feeling rushed. Design, build, and deployment were handled end-to-end.",
    name: "Maya R.",
    title: "Product Lead",
  },
  {
    quote:
      "We replaced a messy prototype with a real, scalable app. The handoff was clean and the codebase is maintainable.",
    name: "Jordan K.",
    title: "CTO, Startup",
  },
  {
    quote:
      "From onboarding to launch, everything was smooth. We shipped faster and started onboarding customers immediately.",
    name: "Nina P.",
    title: "Ops Manager",
  },
];

