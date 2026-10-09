import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Seo } from "@/components/Seo";
import { LandingCard } from "@/components/landing/LandingCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  billingLabel,
  Currency,
  formatRange,
  getRange,
  internationalPricingNote,
  pricingGroups,
  pricingMeta,
  pricingNotes,
  PricingTier,
} from "@/lib/pricing";

const currencies: { value: Currency; label: string; hint: string }[] = [
  { value: "INR", label: "₹ INR", hint: "India" },
  { value: "USD", label: "$ USD", hint: "International" },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TierCard({ tier, currency }: { tier: PricingTier; currency: Currency }) {
  const range = getRange(tier, currency);

  return (
    <LandingCard
      interactive
      className={cn(
        "flex h-full flex-col",
        tier.featured && "border-primary/40 shadow-[0_18px_60px_rgba(14,165,233,0.12)]"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-fg">{tier.name}</h3>
        {tier.featured ? (
          <Badge className="border-primary/40 bg-primary/10 text-primary">Most picked</Badge>
        ) : null}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">{tier.summary}</p>

      <div className="mt-6">
        {range ? (
          <>
            <div className="text-2xl font-semibold tracking-tight text-fg sm:text-[1.75rem]">
              {formatRange(range, currency)}
            </div>
            <div className="mt-1 text-xs text-muted">{billingLabel(tier)}</div>
          </>
        ) : (
          <>
            <div className="text-2xl font-semibold tracking-tight text-fg sm:text-[1.75rem]">
              On request
            </div>
            <div className="mt-1 text-xs text-muted">Quoted after a scoping call</div>
          </>
        )}
      </div>

      <ul className="mt-6 grid gap-2.5 text-sm text-muted">
        {tier.duration ? (
          <li className="flex items-start gap-2">
            <CheckIcon />
            <span>
              Delivery window: <span className="text-fg">{tier.duration}</span>
            </span>
          </li>
        ) : null}
        {tier.includedHours ? (
          <li className="flex items-start gap-2">
            <CheckIcon />
            <span>
              <span className="text-fg">{tier.includedHours} hours</span> of work included each
              month
            </span>
          </li>
        ) : null}
        <li className="flex items-start gap-2">
          <CheckIcon />
          <span>Scope, timeline, and acceptance criteria fixed in writing</span>
        </li>
      </ul>

      <div className="mt-auto pt-6">
        <ButtonLink
          href="/contact"
          variant={tier.featured ? "primary" : "secondary"}
          size="md"
          className="w-full"
        >
          Get a quote
        </ButtonLink>
      </div>
    </LandingCard>
  );
}

export default function PricingPage() {
  const [currency, setCurrency] = useState<Currency>("INR");

  return (
    <>
      <Seo
        title="Pricing"
        path="/pricing"
        description="Transparent starting prices for Laravel web development, AI automation, and monthly support retainers—in INR for India and USD for international enquiries."
        keywords={[
          "Laravel development pricing",
          "AI automation pricing India",
          "MVP development cost",
          "web development packages India",
          "monthly maintenance retainer",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "AppSaga Solutions pricing",
          itemListElement: pricingGroups.map((group) => ({
            "@type": "OfferCatalog",
            name: group.title,
            itemListElement: group.tiers.map((tier) => ({
              "@type": "Offer",
              name: tier.name,
              description: tier.summary,
              priceCurrency: "INR",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "INR",
                minPrice: tier.inr.min,
                ...(tier.inr.max !== null ? { maxPrice: tier.inr.max } : {}),
              },
            })),
          })),
        }}
      />

      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <SectionHeading
              eyebrow="Pricing"
              as="h1"
              title="Clear starting prices, fixed before we build"
              description={`${pricingMeta.pricingType} for ${pricingMeta.market}. Every engagement is quoted against a written scope—so the number you see here is where the conversation starts, not where it drifts.`}
            />

            <ScrollReveal>
              <div
                className="flex items-center gap-1 rounded-full border border-border/70 bg-card/70 p-1 lg:justify-self-end"
                role="group"
                aria-label="Select currency"
              >
                {currencies.map((c) => {
                  const active = currency === c.value;
                  return (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => setCurrency(c.value)}
                      aria-pressed={active}
                      className={cn(
                        "flex-1 cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition duration-interactive ease-interactive focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        active
                          ? "bg-primary text-primaryFg shadow-[0_8px_24px_rgba(14,165,233,0.25)]"
                          : "text-muted hover:text-fg"
                      )}
                    >
                      {c.label}
                      <span className="ml-2 hidden text-xs font-medium opacity-70 sm:inline">
                        {c.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {currency === "USD" ? (
            <ScrollReveal className="mt-6">
              <p className="rounded-2xl border border-border/70 bg-card/50 px-4 py-3 text-xs leading-relaxed text-muted">
                {internationalPricingNote}
              </p>
            </ScrollReveal>
          ) : null}

          <div className="mt-14 space-y-16">
            {pricingGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <ScrollReveal>
                  <div className="max-w-2xl">
                    <h2 className="text-xl font-semibold text-fg sm:text-2xl">{group.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {group.description}
                    </p>
                  </div>
                </ScrollReveal>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {group.tiers.map((tier, i) => (
                    <ScrollReveal key={tier.name} delay={i * 0.06} className="h-full">
                      <TierCard tier={tier} currency={currency} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {pricingNotes.map((note, i) => (
              <ScrollReveal key={note.title} delay={i * 0.06} className="h-full">
                <LandingCard className="h-full">
                  <div className="text-xs font-semibold uppercase tracking-widest brand-gradient-text">
                    {note.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{note.text}</p>
                </LandingCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16">
            <LandingCard className="relative overflow-hidden border-primary/25 p-8 text-center sm:p-12">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
                aria-hidden="true"
              />
              <h2 className="text-2xl font-semibold text-fg sm:text-3xl">
                Not sure which package fits?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                Tell us what you&apos;re building. We&apos;ll map the scope, confirm the timeline,
                and send a fixed quote—usually within 24 hours.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="cta" size="lg" className="min-w-[160px]">
                  Book a call →
                </ButtonLink>
                <ButtonLink href="/case-studies" variant="secondary" size="lg">
                  See our work
                </ButtonLink>
              </div>
            </LandingCard>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
