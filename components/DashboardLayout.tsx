import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Button } from "@/components/Button";

type DashboardHeaderContextValue = {
  setWelcomeName: (name: string | null) => void;
};

const DashboardHeaderContext = createContext<DashboardHeaderContextValue | null>(null);

export function useDashboardHeader() {
  const ctx = useContext(DashboardHeaderContext);
  if (!ctx) {
    throw new Error("useDashboardHeader must be used within DashboardLayout");
  }
  return ctx;
}

export function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [welcomeName, setWelcomeName] = useState<string | null>(null);

  const value = useMemo(() => ({ setWelcomeName }), []);

  const logout = () => {
    document.cookie = "employee_token=; Max-Age=0; path=/";
    router.push("/login");
  };

  return (
    <DashboardHeaderContext.Provider value={value}>
      <div className="min-h-screen bg-bg">
        <header className="border-b border-border/70 bg-card shadow-sm">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6 lg:px-8">
            <h1 className="text-2xl font-bold text-fg sm:text-3xl">Dashboard</h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {welcomeName ? (
                <span className="text-sm text-muted">Welcome, {welcomeName}</span>
              ) : null}
              <Button onClick={logout} variant="secondary" size="sm" className="w-full sm:w-auto">
                Logout
              </Button>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </DashboardHeaderContext.Provider>
  );
}
