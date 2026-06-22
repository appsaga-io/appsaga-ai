import { products } from "@/lib/products";

export const siteConfig = {
  name: "AppSaga Solutions",
  shortName: "AppSaga",
  tagline: "Your tech partner for building MVPs in 2–3 weeks.",
  description:
    "AppSaga Solutions is a tech partner for startups and teams — we design, build, and ship modern web apps in 2–3 weeks using AI-accelerated workflows.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  social: {
    twitter: "",
  },
  googleSiteVerification: "", // Add your verification code here
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

export const homepageQuickLinks: NavItem[] = [
  { label: "Process", href: "/#process" },
  { label: "Products", href: "/#products" },
  { label: "FAQ", href: "/#faq" },
];

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
      { label: "View all products", href: "/products" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Training", href: "/training" },
      { label: "Blog", href: "/blog" },
      ...homepageQuickLinks,
    ],
  },
];

export const contactInfo = {
  address: "Shop 412, Apple Business Center, Canal Rd, Kamrej, Surat, Gujarat 394180",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=21.2686749,72.9765104",
};

/** Bottom bar micro-copy (SolvSpot-style separator dots). */
export const footerMicroTagline = "Tech partner · MVPs in 2–3 weeks · Serving founders worldwide";

export const legalLinks: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company?: string;
  outcome?: string;
};

/** Empty until real client testimonials are available. */
export const testimonials: Testimonial[] = [];
