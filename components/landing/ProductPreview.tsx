import Image from "next/image";
import { Badge } from "@/components/Badge";
import { cn } from "@/lib/utils";

function statusLabel(status?: "live" | "coming_soon") {
  switch (status) {
    case "live":
      return "Live";
    case "coming_soon":
      return "Coming soon";
    default:
      return "Product";
  }
}

export function ProductPreview({
  name,
  accent,
  iconPath,
  status,
  logo,
  logoAlt,
}: {
  name: string;
  accent: string;
  iconPath: string;
  status?: "live" | "coming_soon";
  logo?: string;
  logoAlt?: string;
}) {
  return (
    <div
      className={cn(
        "relative mb-4 flex h-36 flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br p-4",
        accent
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]" />

      <div className="relative flex flex-1 items-center justify-center">
        {logo ? (
          <div className="rounded-xl bg-white/90 px-4 py-3 shadow-sm dark:bg-white/95">
            <Image
              src={logo}
              alt={logoAlt ?? name}
              width={220}
              height={49}
              className="h-8 w-auto max-w-[200px] object-contain sm:h-10"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-muted">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d={iconPath}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-fg">{name}</span>
          </div>
        )}
      </div>

      <div className="relative flex justify-end">
        <Badge className="border-primary/30 bg-primary/10 text-primary">{statusLabel(status)}</Badge>
      </div>
    </div>
  );
}
