import { cn } from "@/lib/utils";

export function CalendlyEmbed({
  className,
  iframeClassName,
}: {
  className?: string;
  iframeClassName?: string;
}) {
  const url =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/office-appsaga/30min?hide_gdpr_banner=1";

  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border/70 bg-card/60", className)}>
      <iframe
        title="Book a call"
        src={url}
        className={cn("w-full", iframeClassName ?? "h-[720px]")}
        loading="lazy"
      />
    </div>
  );
}


