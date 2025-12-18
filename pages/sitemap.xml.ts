import type { GetServerSideProps } from "next";
import { courses } from "@/lib/training";
import { products } from "@/lib/products";

const PATHS = ["/", "/about", "/products", "/training", "/contact", "/blog", "/privacy", "/terms"];

function getBaseUrl(req: Parameters<GetServerSideProps>[0]["req"]) {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (env) return env.replace(/\/$/, "");

  const host = req.headers.host;
  const proto = (req.headers["x-forwarded-proto"] as string | undefined)?.split(",")[0]?.trim();
  const scheme = proto || (host?.includes("localhost") ? "http" : "https");
  return `${scheme}://${host}`;
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const baseUrl = getBaseUrl(req);
  const coursePaths = courses.map((c) => `/training/${c.slug}`);
  const productPaths = products.map((p) => `/products/${p.slug}`);
  const urls = [...PATHS, ...coursePaths]
    .concat(productPaths)
    .map((p) => `  <url><loc>${baseUrl}${p}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}


