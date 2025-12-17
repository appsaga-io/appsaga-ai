import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal>
      <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
        {eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-widest brand-gradient-text">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-fg sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}


