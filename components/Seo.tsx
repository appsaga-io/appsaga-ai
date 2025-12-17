import Head from "next/head";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  ogImagePath?: string;
};

export function Seo({ title, description, path, ogImagePath }: SeoProps) {
  const desc = description || siteConfig.description;
  const url = absoluteUrl(path || "/");
  const ogImage = absoluteUrl(ogImagePath || "/og.svg");

  return (
    <Head>
      <title>{`${title} • ${siteConfig.name}`}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={`${title} • ${siteConfig.name}`} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} • ${siteConfig.name}`} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="icon" href="/favicon.svg" />
      <link rel="canonical" href={url} />
    </Head>
  );
}


