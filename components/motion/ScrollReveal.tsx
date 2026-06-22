import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { defaultTransition, fadeUp, motionProps, usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className, delay = 0, ...props }: ScrollRevealProps) {
  const reduced = usePrefersReducedMotion();
  const base = motionProps(reduced, fadeUp);

  return (
    <motion.div
      className={cn(className)}
      {...base}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
