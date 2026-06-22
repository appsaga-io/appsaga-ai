export type ProductFeatureGroup = {
  title: string;
  bullets: string[];
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  previewAccent: string;
  iconPath: string;
  logo?: string;
  logoAlt?: string;
  status?: "live" | "coming_soon";
  url?: string;
  docsUrl?: string;
  highlights: string[];
  featureGroups: ProductFeatureGroup[];
};

export const products: Product[] = [
  {
    slug: "leadsaga",
    name: "LeadSaga",
    tagline: "Find, enrich, and manage local business leads",
    category: "Sales & CRM",
    previewAccent: "from-sky-500/20 to-blue-700/20",
    iconPath: "M3 7h18M3 12h12M3 17h8",
    status: "coming_soon",
    url: "https://lead.appsaga.io/",
    docsUrl: "https://lead.appsaga.io/docs",
    description:
      "LeadSaga helps sales and marketing teams discover local prospects, extract contact details from the web, organise leads in a CRM pipeline, and generate AI-powered outreach copy.",
    highlights: [
      "Google Local lead scraping by niche and city",
      "Automatic email and social profile enrichment",
      "Kanban CRM pipeline with custom stages",
      "AI prompt generator for personalised outreach",
    ],
    featureGroups: [
      {
        title: "Lead discovery & scraping",
        bullets: [
          "Target businesses by niche keyword and suburb-level location",
          "Background jobs scrape names, phones, ratings, and websites",
          "Configurable limits and duplicate filtering per run",
          "Real-time job progress and cancellation",
        ],
      },
      {
        title: "Enrichment & lead tables",
        bullets: [
          "Crawl business websites for hidden email addresses",
          "Discover Facebook, Instagram, and LinkedIn profiles",
          "Sortable results with email and rating filters",
          "Deep-dive lead profiles with maps and review data",
        ],
      },
      {
        title: "CRM & AI outreach",
        bullets: [
          "Drag-and-drop Kanban board (New, Contacted, Proposal, Won)",
          "Customisable pipeline stages in CRM settings",
          "AI-generated cold emails based on ratings and website gaps",
          "Export enriched leads to CSV or Excel",
        ],
      },
    ],
  },
  {
    slug: "clinic-saga",
    name: "Clinic Saga",
    tagline: "Live queue system for busy clinics",
    category: "Healthcare",
    previewAccent: "from-emerald-500/20 to-teal-700/20",
    iconPath: "M12 6v12M8 10h8M6 14h12",
    status: "coming_soon",
    url: "https://healthcare.appsaga.io/",
    docsUrl: "https://healthcare.appsaga.io/docs",
    description:
      "Clinic Saga helps clinics book appointments, manage doctor waiting queues, and keep patients informed — with real-time token updates for doctors, receptionists, and patients.",
    highlights: [
      "Per-doctor token queues with live status",
      "Walk-in booking and appointment management",
      "Role-based dashboards for doctors, reception, and patients",
      "Automatic screen refresh — no manual reload",
    ],
    featureGroups: [
      {
        title: "Clinic setup & roles",
        bullets: [
          "Clinic profile with hours, logo, and contact details",
          "Doctor profiles with specialization, fees, and schedule",
          "Assign Doctor or Receptionist roles to staff",
          "Multi-clinic data isolation — each clinic sees only its data",
        ],
      },
      {
        title: "Appointments & tokens",
        bullets: [
          "Daily token numbering per doctor (1, 2, 3…)",
          "Walk-in registration with name, phone, and doctor selection",
          "Duplicate booking prevention within 24 hours",
          "Pending and completed appointment tracking",
        ],
      },
      {
        title: "Live waiting queue",
        bullets: [
          "Queue states: Waiting, Serving, On hold, Completed, Transferred",
          "Doctors call next patient or pause the queue",
          "Reception monitors all doctors from one screen",
          "Patients see their token and live queue position",
        ],
      },
    ],
  },
  {
    slug: "snapflow-ai",
    name: "SnapFlow AI",
    tagline: "Share event photos in seconds",
    category: "Events & Photography",
    previewAccent: "from-violet-500/20 to-fuchsia-700/20",
    iconPath: "M4 7h4l2-2h4l2 2h4v12H4V7zM12 11a3 3 0 100 6 3 3 0 000-6z",
    status: "coming_soon",
    url: "https://snapai.appsaga.io/",
    description:
      "SnapFlow AI is built for wedding and event photographers — drag-and-drop, Canon FTP, and desktop sync into one live gallery your clients open with a QR code.",
    highlights: [
      "Live guest galleries updated during the event",
      "QR code sharing — no app install for guests",
      "Canon FTP / SFTP camera-to-cloud uploads",
      "Client favourites, comments, and ZIP export",
    ],
    featureGroups: [
      {
        title: "Upload & processing",
        bullets: [
          "Drag-and-drop, bulk upload, and desktop sync",
          "Canon FTP and SFTP for camera-to-cloud workflows",
          "Direct-to-cloud presigned transfers",
          "Background thumbnail generation with progress tracking",
        ],
      },
      {
        title: "Live galleries & sharing",
        bullets: [
          "Real-time gallery updates via WebSockets",
          "QR codes for venue display — guests browse on mobile",
          "Multi-tenant studios — each event isolated",
          "No client account required to view galleries",
        ],
      },
      {
        title: "Client workflow",
        bullets: [
          "Favourite, reject, and comment on photos",
          "Export client selections as ZIP",
          "Plans and storage options on the product site",
        ],
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
