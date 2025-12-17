import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import "@/styles/globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className={fontSans.className}>
      <Layout>
        <div key={router.asPath} className="page-enter">
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
}


