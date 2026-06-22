import { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { WatermarkBackground } from "@/components/motion/WatermarkBackground";
import { Navbar } from "@/components/Navbar";

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <WatermarkBackground />
      <div className="relative z-10">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primaryFg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

/** @deprecated Use MarketingLayout */
export const Layout = MarketingLayout;


