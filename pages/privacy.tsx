import { Container } from "@/components/Container";
import { Seo } from "@/components/Seo";

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" path="/privacy" />
      <section className="py-20">
        <Container>
          <h1 className="text-3xl font-semibold">Privacy Policy</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            This is a starter privacy policy page for the website. Replace this with your
            official policy before production use.
          </p>

          <div className="mt-10 space-y-6 max-w-3xl">
            <div>
              <h2 className="text-lg font-semibold">What we collect</h2>
              <p className="mt-2 text-sm text-muted">
                If you submit the contact form or newsletter, we collect the data you provide (name,
                email, company, message). If you enable Stripe checkout, Stripe may collect billing
                details.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">How we use it</h2>
              <p className="mt-2 text-sm text-muted">
                We use information to respond to inquiries, deliver updates, and improve product
                experience.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Contact</h2>
              <p className="mt-2 text-sm text-muted">
                Questions? Email your team at <span className="text-fg">support@yourdomain.com</span>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


