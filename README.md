## AppSaga Solutions Website (Next.js + Tailwind + TypeScript)

A full-stack application combining a marketing website with employee management and course administration.

### Features

#### Marketing Site
- **Pages**: Home, About, Contact/Book a Call, Products, Training, Case Studies, Blog, Privacy, Terms
- **UI sections**: Hero, features grid, how-it-works, testimonials carousel, trusted-by logos, CTA
- **SEO**: per-page meta tags (title/description/OG), canonical URLs, sitemap.xml, robots.txt
- **Accessibility**: keyboard focus styles, skip-to-content, labeled form controls, alt text on images
- **API routes**: contact form submission, newsletter subscribe

#### Admin Panel (`/appsaga-admin`)
- Course management (create, edit, list courses)
- Employee management
- Leave request management
- Task assignment and tracking

#### Employee Portal (`/dashboard`)
- View and manage personal tasks
- Request and track leave requests
- View assigned courses

### Tech Stack

- **Next.js** 16 (Pages Router)
- **TypeScript** 5.7
- **React** 19
- **TailwindCSS** 3
- **PostgreSQL** (via Neon or local)
- **JWT** authentication
- **bcrypt** password hashing

### Folder Structure

- `components/` – reusable UI components (navbar, footer, sections, admin/dashboard layouts)
- `pages/` – routes (Home/About/Contact/etc.)
- `pages/appsaga-admin/` – admin panel pages
- `pages/dashboard/` – employee portal pages
- `pages/api/` – API endpoints (auth, admin, employee, contact, etc.)
- `styles/` – global styles
- `lib/` – helpers, auth utilities, DB connection, site content config
- `public/` – local SVG assets (logo, favicon, OG image, brand logos)

### Setup

1) Install dependencies:

```bash
npm install
```

2) Create an env file:

- Copy `env.example` → `.env.local` and fill in required values.
- **ADMIN_PASSWORD** is required – the app will not start without it.

3) Run dev server:

```bash
npm run dev
```

### Environment Variables

#### Required

- `ADMIN_PASSWORD` – admin panel login password (app fails safe if not set)

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

#### Database

- `DATABASE_URL` – PostgreSQL connection string (optional, app runs without DB for static pages)

### Deploy

#### Vercel

- `vercel.json` is included. Import the repo into Vercel and set env vars in project settings.

#### Netlify

- `netlify.toml` is included (requires Netlify Next.js plugin). Set env vars in Netlify settings.

### Local Development

For local development with the admin panel, set `ADMIN_PASSWORD` in your `.env.local` file. The app will run at `http://localhost:3000` by default.

For custom domains (e.g., `appsaga.test`), add the domain to your hosts file and configure Next.js accordingly.

