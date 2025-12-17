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
    <Reveal>
      <div
        className={cn(
          "rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(14,165,233,0.10)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03)] dark:hover:shadow-[0_22px_70px_rgba(34,193,241,0.10)]",
          className
        )}
      >
        {children}
      </div>
    </Reveal>
  );
}


