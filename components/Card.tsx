import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className="h-full">
      <div
        className={cn(
          "flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur hover-lift hover-glow hover-border-brand dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
          className
        )}
      >
        {children}
      </div>
    </Reveal>
  );
}
