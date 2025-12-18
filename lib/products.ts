export type ProductFeatureGroup = {
  title: string;
  bullets: string[];
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status?: "live" | "coming_soon";
  highlights: string[];
  featureGroups: ProductFeatureGroup[];
  techStack: {
    backend: string;
    frontend: string;
    database: string;
    aiIntegration: string;
    auth: string;
  };
};

export const products: Product[] = [
  {
    slug: "testcreator",
    name: "TestCreator",
    tagline: "AppSaga Intern Practical Test Application",
    status: "coming_soon",
    description:
      "A comprehensive web application built with Laravel 12 for managing technical practical tests for interns. Includes a secure admin panel, timed tests for interns, and an AI-powered scoring system.",
    highlights: [
      "Secure admin panel with full test/question management",
      "Timed intern tests with auto-block on expiry",
      "File uploads for .txt submissions",
      "AI-powered scoring + feedback (Gemini 2.5 Flash)",
    ],
    featureGroups: [
      {
        title: "Authentication & Authorization",
        bullets: [
          "Admin role: create/edit/delete tests and questions; view and score submissions",
          "Intern role: view assigned tests, take timed tests, and submit work",
          "Role-based access control with middleware protection",
        ],
      },
      {
        title: "Admin Panel",
        bullets: [
          "Dashboard: overview of active tests, pending submissions, and recent activity",
          "Test management: full CRUD for practical tests",
          "Question management: create and manage questions per test",
          "Submission review: view submitted files and trigger AI scoring",
        ],
      },
      {
        title: "Intern Interface",
        bullets: [
          "Test list: view available tests with details",
          "Real-time countdown timer during test",
          "Clear question display",
          "File upload for .txt submissions",
          "Automatic submission blocking when time expires",
        ],
      },
      {
        title: "AI Scoring System",
        bullets: [
          "Gemini 2.5 Flash integration for automated code evaluation",
          "Intelligent scoring comparing submitted code with expected answers",
          "Detailed feedback with correctness assessment",
          "Structured JSON response parsing with numerical score + explanations",
        ],
      },
    ],
    techStack: {
      backend: "Laravel 12",
      frontend: "Laravel Blade + Tailwind CSS",
      database: "SQLite (configurable for MySQL/PostgreSQL)",
      aiIntegration: "Google Gemini 2.5 Flash API",
      auth: "Laravel built-in authentication",
    },
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}


