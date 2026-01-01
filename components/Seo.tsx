import Head from "next/head";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  ogImagePath?: string;
  keywords?: string[];
  robots?: string;
  jsonLd?: Record<string, any>;
  googleSiteVerification?: string;
};

export function Seo({ title, description, path, ogImagePath, keywords, robots, jsonLd, googleSiteVerification }: SeoProps) {
  const desc = description || siteConfig.description;
  const url = absoluteUrl(path || "/");
  const ogImage = absoluteUrl(ogImagePath || "/og.svg");

  return (
    <Head>
      <title>{`${title} • ${siteConfig.name}`}</title>
      <meta name="description" content={desc} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      {robots && <meta name="robots" content={robots} />}
      <meta property="og:title" content={`${title} • ${siteConfig.name}`} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} • ${siteConfig.name}`} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
      {(googleSiteVerification || siteConfig.googleSiteVerification) && (
        <meta
          name="google-site-verification"
          content={googleSiteVerification || siteConfig.googleSiteVerification}
        />
      )}
      <link rel="icon" href="/favicon.svg" />
      <link rel="canonical" href={url} />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}


