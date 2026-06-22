import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ParallaxLayer({
  children,
  className,
  offset = 40,
  disabledOnMobile = true,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
  disabledOnMobile?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div
        style={{ y }}
        className={cn(disabledOnMobile && "max-md:!transform-none")}
      >
        {children}
      </motion.div>
    </div>
  );
}
