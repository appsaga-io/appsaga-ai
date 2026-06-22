import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useId, useRef, useState } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(active: boolean) {
  return cn(
    "cursor-pointer px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-interactive ease-interactive sm:text-base",
    active ? "text-fg" : "text-muted hover:text-fg"
  );
}

function CtaArrow({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("ml-1.5", className)}
    >
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialogTitleId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useFocusTrap(mobileMenuRef, open);

  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="pointer-events-none sticky top-0 z-50">
      <div
        className={cn(
          "pointer-events-auto mx-auto max-w-6xl px-4 transition-[margin] duration-200 sm:px-6 lg:px-8",
          scrolled ? "mt-4" : "mt-5 sm:mt-6"
        )}
      >
        <div
          className={cn(
            "flex min-h-14 items-center justify-between gap-4 rounded-full border border-border/60 bg-card/80 px-4 py-3 backdrop-blur-xl sm:min-h-[4.25rem] sm:gap-6 sm:px-6 sm:py-3.5",
            scrolled
              ? "shadow-[0_12px_40px_rgba(0,0,0,0.10)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.40)]"
              : "shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.30)]"
          )}
        >
          <Link href="/" className="inline-flex shrink-0 items-center" aria-label={`${siteConfig.shortName} home`}>
            <span className="inline-flex items-center overflow-visible">
              <Image
                src="/logo-wordmark.png"
                alt={`${siteConfig.name} logo`}
                width={168}
                height={44}
                priority
                className="block h-9 w-auto dark:hidden sm:h-10"
              />
              <Image
                src="/logo-wordmark-light.png"
                alt={`${siteConfig.name} logo`}
                width={168}
                height={44}
                priority
                className="hidden h-9 w-auto dark:block sm:h-10"
              />
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1" aria-label="Primary">
            {navItems.map((item) => {
              const active = isNavActive(router.pathname, item.href);
              return (
                <Link key={item.href} href={item.href} className={navLinkClass(active)}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="mr-1 h-6 w-px bg-border/70" aria-hidden="true" />
            <ThemeToggle className="h-11 w-11" />
            <ButtonLink href="/contact" variant="primary" size="md" className="gap-1 px-5">
              Book a call
              <CtaArrow />
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2.5 lg:hidden">
            <ButtonLink
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden gap-1 px-4 text-sm min-[420px]:inline-flex"
            >
              Book a call
              <CtaArrow className="ml-1" />
            </ButtonLink>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border/70 bg-card/60 text-fg transition duration-interactive ease-interactive hover:bg-card/80"
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
        </div>

        {open ? (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="mt-2.5 rounded-[1.25rem] border border-border/60 bg-card/95 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.10)] backdrop-blur-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
          >
            <h2 id={dialogTitleId} className="sr-only">
              Mobile navigation
            </h2>
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => {
                const active = isNavActive(router.pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition-colors duration-interactive ease-interactive",
                      active ? "text-fg" : "text-muted hover:bg-card hover:text-fg"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
              <span className="text-sm text-muted">Theme</span>
              <ThemeToggle className="h-11 w-11" />
            </div>
            <div className="mt-3">
              <ButtonLink href="/contact" variant="primary" size="md" className="w-full gap-1">
                Book a call
                <CtaArrow />
              </ButtonLink>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
