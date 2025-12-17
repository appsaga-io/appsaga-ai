import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-semibold text-muted shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:border-primary/40",
        className
      )}
    >
      {children}
    </span>
  );
}


