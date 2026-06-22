import { cn } from "@/lib/utils";

export function SectionEyebrow({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("text-xs font-medium tracking-wide text-muted", className)}>
      <span aria-hidden="true">— </span>
      {label}
    </div>
  );
}
