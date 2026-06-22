import type { AppProps } from "next/app";
import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { MarketingLayout } from "@/components/Layout";
import type { NextPageWithLayout } from "@/types/next-page";
import "@/styles/globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const getLayout =
    (Component as NextPageWithLayout).getLayout ??
    ((page) => <MarketingLayout>{page}</MarketingLayout>);

  return (
    <div className={fontSans.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div key={router.asPath} className="page-enter">
        {getLayout(<Component {...pageProps} />)}
      </div>
    </div>
  );
}
