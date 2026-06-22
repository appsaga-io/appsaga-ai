import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const adminLinks = [
  { label: "Dashboard", href: "/appsaga-admin" },
  { label: "Courses", href: "/appsaga-admin/courses" },
];

export function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const logout = () => {
    document.cookie = "admin_auth=; Max-Age=0; path=/";
    router.push("/appsaga-admin/login");
  };

  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border/70 bg-card shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <span className="text-lg font-semibold text-fg">AppSaga Admin</span>
            <nav className="flex flex-wrap items-center gap-3 sm:gap-4" aria-label="Admin">
              {adminLinks.map((link) => {
                const active =
                  link.href === "/appsaga-admin"
                    ? router.pathname === "/appsaga-admin"
                    : router.pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium text-muted transition hover:text-fg",
                      active && "text-fg"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <Button onClick={logout} variant="secondary" size="sm" className="w-full sm:w-auto">
            Logout
          </Button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
