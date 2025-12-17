import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useId, useState } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dialogTitleId = useId();

  useEffect(() => {
    // Close mobile menu on route change
    setOpen(false);
  }, [router.asPath]);

  return (
    <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-[rgb(var(--brand-from))] after:via-[rgb(var(--brand-via))] after:to-[rgb(var(--brand-to))] after:opacity-25">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.shortName} home`}>
          {/* Full wordmark (swaps for dark mode so it stays readable) */}
          <span className="inline-flex items-center overflow-visible">
            <Image
              src="/logo-wordmark.png"
              alt={`${siteConfig.name} logo`}
              width={176}
              height={45}
              priority
              className="block dark:hidden"
            />
            <Image
              src="/logo-wordmark-light.png"
              alt={`${siteConfig.name} logo`}
              width={176}
              height={45}
              priority
              className="hidden dark:block"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-muted transition hover:text-fg",
                  active && "text-fg"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <ButtonLink href="/contact" variant="primary" size="sm">
            Book a call
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/60 text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border/60 bg-bg/90 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
        >
          <h2 id={dialogTitleId} className="sr-only">
            Mobile navigation
          </h2>
          <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-muted hover:bg-card hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="flex items-center justify-center">
                <ThemeToggle />
              </div>
              <div className="col-span-2">
                <ButtonLink href="/contact" variant="primary" size="md" className="w-full">
                Book a call
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}


