import Link from "next/link";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";

const posts = [
  {
    title: "How we ship MVPs in 2–3 weeks (without cutting corners)",
    date: "2025-12-01",
    excerpt:
      "Our delivery playbook: tight scope, fast design loops, AI-accelerated builds, and weekly demos.",
  },
  {
    title: "AI in product development: where it helps (and where it doesn’t)",
    date: "2025-11-12",
    excerpt:
      "How we use AI to move faster while keeping humans responsible for architecture and quality.",
  },
  {
    title: "Choosing the right tech stack for your MVP",
    date: "2025-10-05",
    excerpt:
      "A practical guide to picking Next.js, databases, auth, and hosting based on your product needs.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Seo title="Blog" path="/blog" description="Updates and insights from the AppSaga Solutions team." />
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            title="MVP building tips and product insights"
            description="Short notes on shipping MVPs fast, using AI responsibly, and building for real users."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Card key={p.title}>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {new Date(p.date).toLocaleDateString()}
                </div>
                <h2 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                <div className="mt-5">
                  <Link className="text-sm font-semibold text-primary hover:opacity-90" href="/contact">
                    Talk to us about your MVP →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}


