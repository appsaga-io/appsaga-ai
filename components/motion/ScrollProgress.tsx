import { motion, useScroll } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = usePrefersReducedMotion();

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-[rgb(var(--brand-from))] via-[rgb(var(--brand-via))] to-[rgb(var(--brand-to))]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
