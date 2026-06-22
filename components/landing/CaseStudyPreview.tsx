import Image from "next/image";
import { Badge } from "@/components/Badge";
import { cn } from "@/lib/utils";

function timelineBadgeText(timeline: string) {
  if (/ongoing|partnership/i.test(timeline)) return timeline;
  return `Launched in ${timeline}`;
}

export function CaseStudyPreview({
  label,
  accent,
  timeline,
  logo,
  logoAlt,
}: {
  label: string;
  accent: string;
  timeline: string;
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
              alt={logoAlt ?? label}
              width={220}
              height={49}
              className="h-8 w-auto max-w-[200px] object-contain sm:h-10"
            />
          </div>
        ) : (
          <span className="text-sm font-semibold text-fg">{label}</span>
        )}
      </div>

      <div className="relative flex justify-end">
        <Badge className="border-primary/30 bg-primary/10 text-primary">
          {timelineBadgeText(timeline)}
        </Badge>
      </div>
    </div>
  );
}
