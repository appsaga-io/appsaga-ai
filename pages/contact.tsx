import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  interest?: string;
  message: string;
  website?: string; // honeypot
};

type ContactResponse = { ok: true } | { ok: false; error: string };

export default function ContactPage() {
  const interests = useMemo(
    () => ["MVP in 2–3 weeks", "Training (AI 360)", "Website / Landing page", "AI integration", "Automation", "Other"],
    []
  );
  const officeAddress = "Shop 412, Apple Business Center, Canal Rd, Kamrej, Surat, Gujarat 394180";
  // Use coordinates to avoid Google Maps geocoding the address to an imprecise nearby location.
  const officeLatLng = "21.2686749,72.9765104";
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    company: "",
    interest: "Demo",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as ContactResponse;
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(!data.ok ? data.error : "Something went wrong.");
        return;
      }
      setStatus("success");
      setMessage("Thanks — we’ll get back to you shortly.");
      setForm({ name: "", email: "", company: "", interest: "Demo", message: "" });
    } catch {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  }

  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact AppSaga Solutions to build an AI-powered MVP in 2–3 weeks. Book a call or send your requirements."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-14">
            {/* Row 1: consistent 2-column grid */}
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="flex flex-col">
                <SectionHeading
                  eyebrow="Contact"
                  title="Talk to our team"
                  description="Send a note or book a call. We’ll reply with timeline, scope, and a clear plan to ship your MVP fast."
                />

                <Card className="mt-8 flex flex-col lg:h-[720px]">
                  <form onSubmit={onSubmit} className="grid flex-1 gap-4 overflow-auto">
                    {/* Honeypot: bots will often fill this. Humans never see it. */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.website || ""}
                        onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium text-fg" htmlFor="name">
                          Name
                        </label>
                        <input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                          className="mt-2 h-11 w-full rounded-2xl border border-border/70 bg-bg px-4 text-sm text-fg placeholder:text-muted/70 focus:border-ring focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-fg" htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                          className="mt-2 h-11 w-full rounded-2xl border border-border/70 bg-bg px-4 text-sm text-fg placeholder:text-muted/70 focus:border-ring focus:outline-none"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium text-fg" htmlFor="company">
                          Company (optional)
                        </label>
                        <input
                          id="company"
                          value={form.company || ""}
                          onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                          className="mt-2 h-11 w-full rounded-2xl border border-border/70 bg-bg px-4 text-sm text-fg placeholder:text-muted/70 focus:border-ring focus:outline-none"
                          placeholder="Company"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-fg" htmlFor="interest">
                          I’m interested in
                        </label>
                        <select
                          id="interest"
                          value={form.interest || "Demo"}
                          onChange={(e) => setForm((p) => ({ ...p, interest: e.target.value }))}
                          className="mt-2 h-11 w-full rounded-2xl border border-border/70 bg-bg px-4 text-sm text-fg focus:border-ring focus:outline-none"
                        >
                          {interests.map((i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-fg" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        value={form.message}
                        onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                        className="mt-2 min-h-[140px] w-full resize-y rounded-2xl border border-border/70 bg-bg px-4 py-3 text-sm text-fg placeholder:text-muted/70 focus:border-ring focus:outline-none"
                        placeholder="Tell us what you’re trying to build…"
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <Button type="submit" variant="primary" disabled={status === "loading"}>
                        {status === "loading" ? "Sending…" : "Send message"}
                      </Button>
                      <p className="text-xs text-muted">
                        By submitting, you agree to our{" "}
                        <Link className="underline underline-offset-4 hover:text-fg" href="/privacy">
                          privacy policy
                        </Link>
                        .
                      </p>
                    </div>

                    <div aria-live="polite" className="min-h-[1.25rem]">
                      {message ? (
                        <p
                          className={
                            status === "error" ? "text-sm text-red-600 dark:text-red-200" : "text-sm text-primary"
                          }
                        >
                          {message}
                        </p>
                      ) : null}
                    </div>
                  </form>
                </Card>
              </div>

              <div className="flex flex-col">
                <SectionHeading
                  eyebrow="Book a call"
                  title="Prefer a quick meeting?"
                  description="Pick a 30‑minute slot that works for you — we’ll discuss scope, timeline, and next steps."
                />
                <div className="mt-8">
                  <CalendlyEmbed className="lg:h-[720px]" iframeClassName="h-full" />
                </div>
              </div>
            </div>

            {/* Row 2: full-width map */}
            <div>
              <SectionHeading
                eyebrow="Location"
                title="Visit our office"
                description={officeAddress}
              />
              <Card className="mt-6 overflow-hidden p-0">
                <iframe
                  title="AppSaga Solutions location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[420px] w-full"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(officeLatLng)}&z=16&output=embed`}
                />
              </Card>
              <div className="mt-3">
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeLatLng)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-primary hover:opacity-90"
                >
                  Open in Google Maps →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


