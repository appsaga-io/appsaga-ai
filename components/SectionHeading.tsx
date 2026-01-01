import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Component = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
  return (
    <Reveal>
      <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
        {eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-widest brand-gradient-text">
            {eyebrow}
          </div>
        ) : null}
        <Component className="mt-3 text-2xl font-semibold leading-tight text-fg sm:text-3xl">
          {title}
        </Component>

        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}


