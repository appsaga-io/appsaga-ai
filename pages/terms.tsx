import { Container } from "@/components/Container";
import { Seo } from "@/components/Seo";

export default function TermsPage() {
  return (
    <>
      <Seo title="Terms" path="/terms" />
      <section className="py-20">
        <Container>
          <h1 className="text-3xl font-semibold">Terms of Service</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            This is a starter terms page for the website clone. Replace with your official terms
            before production use.
          </p>

          <div className="mt-10 space-y-6 max-w-3xl">
            <div>
              <h2 className="text-lg font-semibold">Use of service</h2>
              <p className="mt-2 text-sm text-muted">
                Do not use the service for illegal activity or to violate the rights of others.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Billing</h2>
              <p className="mt-2 text-sm text-muted">
                If enabled, payments are processed by Stripe and subject to Stripe’s terms.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Disclaimer</h2>
              <p className="mt-2 text-sm text-muted">
                The service is provided “as is” without warranties. In production, add your full
                legal language here.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


