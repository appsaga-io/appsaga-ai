import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="light min-h-screen bg-bg text-fg">
      <div className="flex min-h-screen flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link
            href="/"
            className="mx-auto mb-8 flex w-fit items-center"
            aria-label={`${siteConfig.shortName} home`}
          >
            <Image
              src="/logo-wordmark.png"
              alt={`${siteConfig.name} logo`}
              width={160}
              height={40}
              priority
            />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
