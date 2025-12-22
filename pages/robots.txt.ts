import type { GetServerSideProps } from "next";

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
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
  res.write(body);
  res.end();

  return { props: {} };
};

export default function Robots() {
  return null;
}




