## AppSaga Solutions Website (Next.js + Tailwind + TypeScript)

This repository contains a full, responsive marketing website implementation with:

- **Pages**: Home, About, Contact/Book a Call, Blog, Privacy, Terms
- **UI sections**: Hero, features grid, how-it-works, testimonials carousel, trusted-by logos, CTA
- **SEO**: per-page meta tags (title/description/OG), canonical URLs
- **Accessibility**: keyboard focus styles, skip-to-content, labeled form controls, alt text on images
- **API routes**: contact form submission, newsletter subscribe

### Tech Stack

- **Next.js** (Pages Router)
- **TypeScript**
- **TailwindCSS**

### Folder Structure

- `components/` – reusable UI components (navbar, footer, sections)
- `pages/` – routes (Home/About/Contact/etc.)
- `pages/api/` – API endpoints (`/api/contact`, `/api/subscribe`)
- `styles/` – global styles
- `lib/` – helpers + site content config
- `public/` – local SVG assets (logo, favicon, OG image, brand logos)

### Setup

1) Install dependencies:

```bash
npm install
```

2) Create an env file:

- Copy `env.example` → `.env.local` and fill in what you need.

3) Run dev server:

```bash
npm run dev
```

### Environment Variables

#### Site / SEO

- `NEXT_PUBLIC_SITE_URL` – used for canonical/OG URLs (e.g. `https://appsaga.io`)

#### Calendly Embed

- `NEXT_PUBLIC_CALENDLY_URL` – embed URL used on `/contact`

#### Contact Form Delivery (choose one)

**Option A: SendGrid**

- `SENDGRID_API_KEY`
- `SENDGRID_FROM_EMAIL`
- `SENDGRID_TO_EMAIL`

**Option B: Webhook**

- `CONTACT_WEBHOOK_URL` – a Zapier/Make/Slack webhook to receive the JSON payload

#### Newsletter Subscribe (webhook)

- `NEWSLETTER_WEBHOOK_URL` – connect to Mailchimp/ConvertKit/etc. via a webhook

#### Stripe

Stripe checkout is not included (Pricing page removed).

### Deploy

#### Vercel

- `vercel.json` is included. Import the repo into Vercel and set env vars in project settings.

#### Netlify

- `netlify.toml` is included (requires Netlify Next.js plugin). Set env vars in Netlify settings.

### Optional DB Schema

If you want to store contact/newsletter submissions in a database, see `schema.sql` for a starter schema.


