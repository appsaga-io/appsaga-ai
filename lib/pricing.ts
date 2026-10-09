export type Currency = "INR" | "USD";

export type BillingType = "one_time" | "monthly";

/** `max: null` means the tier is open-ended (quoted upward from `min`). */
export type PriceRange = {
  min: number;
  max: number | null;
};

export type PricingTier = {
  name: string;
  summary: string;
  billingType: BillingType;
  /** Delivery window for one-time packages. */
  duration?: string;
  /** Support hours bundled each month for retainers. */
  includedHours?: number;
  inr: PriceRange;
  /** Absent when the tier is quoted on request outside India. */
  usd?: PriceRange;
  featured?: boolean;
};

export type PricingGroup = {
  id: string;
  label: string;
  title: string;
  description: string;
  tiers: PricingTier[];
};

export const pricingMeta = {
  currency: "INR" as Currency,
  market: "India",
  pricingType: "Proposed starting prices",
};

export const pricingGroups: PricingGroup[] = [
  {
    id: "laravel-web-development",
    label: "Web development",
    title: "Laravel web development",
    description:
      "Fixed-scope product builds—from a first launchable MVP to a custom platform sized around your workflows.",
    tiers: [
      {
        name: "MVP Launch",
        summary: "A scoped, launchable first version delivered in 2–3 weeks.",
        billingType: "one_time",
        duration: "2–3 weeks",
        inr: { min: 75000, max: 100000 },
        usd: { min: 1000, max: 2000 },
      },
      {
        name: "Business Growth",
        summary: "A deeper build for teams past validation—more flows, more integrations.",
        billingType: "one_time",
        duration: "4–6 weeks",
        inr: { min: 150000, max: 250000 },
        usd: { min: 2000, max: 5000 },
        featured: true,
      },
      {
        name: "Custom Platform",
        summary: "Multi-module platform work scoped and quoted against your requirements.",
        billingType: "one_time",
        duration: "6–12+ weeks",
        inr: { min: 300000, max: null },
      },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & automation",
    title: "AI automation",
    description:
      "AI features and workflow automation—start with one high-value workflow, then scale into an operations platform.",
    tiers: [
      {
        name: "AI Quick Start",
        summary: "One automation or AI feature shipped end to end in 1–2 weeks.",
        billingType: "one_time",
        duration: "1–2 weeks",
        inr: { min: 25000, max: 40000 },
      },
      {
        name: "AI Business Automation",
        summary: "Several connected workflows automated across your existing tools.",
        billingType: "one_time",
        duration: "2–4 weeks",
        inr: { min: 60000, max: 100000 },
        usd: { min: 500, max: 2000 },
        featured: true,
      },
      {
        name: "AI Operations Platform",
        summary: "Agents, dashboards, and automation built into day-to-day operations.",
        billingType: "one_time",
        duration: "4–8+ weeks",
        inr: { min: 150000, max: 300000 },
      },
    ],
  },
  {
    id: "monthly-retainer",
    label: "Monthly care",
    title: "Monthly retainer",
    description:
      "Ongoing support after launch—bundled hours each month for fixes, changes, and continued feature work.",
    tiers: [
      {
        name: "Essential Care",
        summary: "Maintenance, monitoring, and small changes for a live product.",
        billingType: "monthly",
        includedHours: 5,
        inr: { min: 15000, max: 15000 },
        usd: { min: 200, max: 300 },
      },
      {
        name: "Growth Care",
        summary: "Steady iteration on an active product with a wider hour bundle.",
        billingType: "monthly",
        includedHours: 10,
        inr: { min: 25000, max: 25000 },
        usd: { min: 350, max: 600 },
        featured: true,
      },
      {
        name: "Automation Care",
        summary: "Support plus continued automation and AI workflow development.",
        billingType: "monthly",
        includedHours: 15,
        inr: { min: 40000, max: 40000 },
        usd: { min: 600, max: 1000 },
      },
    ],
  },
];

export const pricingNotes = [
  {
    title: "Taxes",
    text: "GST and applicable taxes are excluded from the figures above.",
  },
  {
    title: "Third-party costs",
    text: "Cloud hosting, AI API usage, and external subscriptions are charged separately unless specified.",
  },
  {
    title: "Final quote",
    text: "We confirm scope, delivery cost, timeline, and acceptance criteria in writing before quoting.",
  },
];

export const internationalPricingNote =
  "USD figures are indicative ranges for international enquiries—not verified market averages. Tiers without a USD range are quoted on request.";

const formatters: Record<Currency, Intl.NumberFormat> = {
  INR: new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }),
  USD: new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }),
};

export function formatAmount(amount: number, currency: Currency) {
  return formatters[currency].format(amount);
}

export function getRange(tier: PricingTier, currency: Currency): PriceRange | undefined {
  return currency === "INR" ? tier.inr : tier.usd;
}

/** Renders a range as a single display string: "₹15,000", "₹75,000 – ₹1,00,000", or "₹3,00,000+". */
export function formatRange(range: PriceRange, currency: Currency) {
  const min = formatAmount(range.min, currency);
  if (range.max === null) return `${min}+`;
  if (range.max === range.min) return min;
  return `${min} – ${formatAmount(range.max, currency)}`;
}

export function billingLabel(tier: PricingTier) {
  return tier.billingType === "monthly" ? "per month" : "one-time project fee";
}
