import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";

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
    <footer className="mt-20 bg-bg relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-[rgb(var(--brand-from))] before:via-[rgb(var(--brand-via))] before:to-[rgb(var(--brand-to))] before:opacity-25">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.shortName} home`}>
              <span className="inline-flex items-center overflow-visible">
                <Image
                  src="/logo-wordmark.png"
                  alt={`${siteConfig.name} logo`}
                  width={190}
                  height={48}
                  className="block dark:hidden"
                />
                <Image
                  src="/logo-wordmark-light.png"
                  alt={`${siteConfig.name} logo`}
                  width={190}
                  height={48}
                  className="hidden dark:block"
                />
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-1 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                Product
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="text-muted hover:text-fg" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-fg" href="/products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-fg" href="/training">
                    Training
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-fg" href="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                Legal
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="text-muted hover:text-fg" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-fg" href="/terms">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-fg" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted">
              Newsletter
            </div>
            <p className="mt-3 text-sm text-muted">
              Get product updates, MVP tips, and launch playbooks. No spam.
            </p>
            <form className="mt-4 flex gap-3" onSubmit={onSubmit}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email
              </label>
              {/* Honeypot */}
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
                className="h-11 w-full rounded-xl border border-border/70 bg-card/60 px-4 text-sm text-fg placeholder:text-muted focus:border-primary focus:outline-none"
              />
              <Button type="submit" variant="primary" disabled={status === "loading"}>
                {status === "loading" ? "…" : "Subscribe"}
              </Button>
            </form>
            <div className="mt-2 min-h-[1.25rem]" aria-live="polite">
              {message ? (
                <p className={status === "error" ? "text-sm text-red-600 dark:text-red-300" : "text-sm text-muted"}>
                  {message}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <Link className="hover:text-fg" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-fg" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


