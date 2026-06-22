import { useEffect, useState } from "react";
import type { Transition, Variants } from "framer-motion";

export const easeOut = [0.2, 0.9, 0.2, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.55,
  ease: easeOut,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 24,
};

export const viewportOnce = { once: true, margin: "-80px" as const };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function useCountUp(target: number, trigger: boolean, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        clearInterval(timer);
        setCount(target);
        return;
      }
      setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [target, trigger, duration]);

  return count;
}

export function motionProps(reduced: boolean, variants: Variants = fadeUp) {
  if (reduced) {
    return {
      initial: false as const,
      animate: { opacity: 1, y: 0, x: 0, scale: 1 },
    };
  }
  return {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: viewportOnce,
    variants,
    transition: defaultTransition,
  };
}
