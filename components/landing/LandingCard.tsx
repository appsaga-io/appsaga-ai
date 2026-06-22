import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function LandingCard({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
        interactive && "hover-lift hover-glow hover-border-brand",
        !interactive && "transition-colors duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
