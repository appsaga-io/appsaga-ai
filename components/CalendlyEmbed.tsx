import { cn } from "@/lib/utils";

function buildCalendlyUrl(base: string) {
  const url = new URL(base);
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("background_color", "070a12");
  url.searchParams.set("text_color", "e4e4e7");
  url.searchParams.set("primary_color", "0ea5e9");
  return url.toString();
}

export function CalendlyEmbed({
  className,
  iframeClassName,
}: {
  className?: string;
  iframeClassName?: string;
}) {
  const base =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/office-appsaga/30min";
  const url = buildCalendlyUrl(base);

  return (
    <div
      className={cn(
        "h-[min(70vh,720px)] min-h-[420px] overflow-hidden rounded-2xl border border-border/70 bg-card/60 sm:min-h-[500px]",
        className
      )}
    >
      <iframe
        title="Book a call"
        src={url}
        className={cn("h-full w-full", iframeClassName)}
        loading="lazy"
      />
    </div>
  );
}
