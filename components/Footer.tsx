import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Container } from "@/components/Container";
import { Button, ButtonLink } from "@/components/Button";
import { SectionEyebrow } from "@/components/landing/SectionEyebrow";
import {
  contactInfo,
  footerColumns,
  footerMicroTagline,
  legalLinks,
  siteConfig,
} from "@/lib/site";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <SectionEyebrow label={title} />
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="hover-link text-muted transition-colors hover:text-fg" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error || "Subscription failed. Try again.");
        return;
      }
      setStatus("success");
      setMessage("Thanks! You’re subscribed.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Subscription failed. Try again.");
    }
  }

  return (
    <footer className="relative">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-[rgb(var(--brand-from))]/25 to-transparent"
        aria-hidden="true"
      />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-0 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))] lg:gap-10">
          <div className="max-w-md border-b border-border/50 pb-12 lg:border-b-0 lg:pb-0">
            <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.shortName} home`}>
              <span className="inline-flex items-center overflow-visible">
                <Image
                  src="/logo-wordmark.png"
                  alt={`${siteConfig.name} logo`}
                  width={190}
                  height={48}
                  className="block h-9 w-auto max-w-[160px] dark:hidden sm:h-10 sm:max-w-none"
                />
                <Image
                  src="/logo-wordmark-light.png"
                  alt={`${siteConfig.name} logo`}
                  width={190}
                  height={48}
                  className="hidden h-9 w-auto max-w-[160px] dark:block sm:h-10 sm:max-w-none"
                />
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">{siteConfig.description}</p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-muted">
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fg"
              >
                {contactInfo.address}
              </a>
            </address>
            <div className="mt-6">
              <ButtonLink href="/contact" variant="primary" size="sm" className="gap-1">
                Book a call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 17L17 7M17 7H9M17 7v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonLink>
            </div>

            <div className="mt-8 border-t border-border/50 pt-8">
              <SectionEyebrow label="Newsletter" />
              <p className="mt-3 text-sm text-muted">Product updates and MVP tips. No spam.</p>
              <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
                <label className="sr-only" htmlFor="newsletter-email">
                  Email
                </label>
                <input
                  className="hidden"
                  aria-hidden="true"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <input
                  id="newsletter-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="hover-input h-11 w-full rounded-full border border-border/70 bg-card/60 px-4 text-sm text-fg placeholder:text-muted focus:border-primary focus:outline-none"
                />
                <Button type="submit" variant="secondary" disabled={status === "loading"} className="w-full shrink-0 sm:w-auto">
                  {status === "loading" ? "…" : "Subscribe"}
                </Button>
              </form>
              <div className="mt-2 min-h-[1.25rem]" aria-live="polite">
                {message ? (
                  <p
                    className={
                      status === "error" ? "text-sm text-red-600 dark:text-red-300" : "text-sm text-muted"
                    }
                  >
                    {message}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="border-b border-border/50 py-12 last:border-b-0 lg:border-b-0 lg:border-l lg:border-border/50 lg:py-0 lg:pl-10"
            >
              <FooterColumn title={column.title} links={column.links} />
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border/50 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} className="hover-link transition-colors hover:text-fg" href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="hover-link transition-colors hover:text-fg" href="/contact">
              Contact
            </Link>
          </div>
          <p className="text-muted sm:text-right">{footerMicroTagline}</p>
        </div>
      </Container>
    </footer>
  );
}
