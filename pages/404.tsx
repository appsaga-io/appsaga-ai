import Link from "next/link";
import { Container } from "@/components/Container";
import { Seo } from "@/components/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Not Found" path="/404" />
      <section className="py-20">
        <Container>
          <h1 className="text-3xl font-semibold">Page not found</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            The page you’re looking for doesn’t exist. Check the URL or go back home.
          </p>
          <div className="mt-8">
            <Link className="rounded-full border border-border/70 bg-card/70 px-5 py-2 text-sm font-semibold hover:bg-card" href="/">
              Go home
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}


