import { motion, useInView, useReducedMotion, type Transition } from "framer-motion";
import { useRef, ReactNode, useMemo } from "react";

interface LazyScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  /** If true, animation runs immediately without waiting for scroll */
  immediate?: boolean;
}

const directions = {
  up: { y: 20, x: 0 },
  down: { y: -20, x: 0 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
};

/**
 * Performance-optimized scroll reveal component
 * - Uses GPU-accelerated transforms only
 * - Respects reduced motion preferences
 * - Defers non-critical animations
 */
export function LazyScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  immediate = false,
}: LazyScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  // Memoize animation config for performance
  const animationConfig = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2 } as Transition,
      };
    }

    return {
      initial: {
        opacity: 0,
        ...directions[direction],
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
      },
      transition: {
        duration: 0.4,
        delay: immediate ? 0 : delay,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      } as Transition,
    };
  }, [prefersReducedMotion, direction, delay, immediate]);

  const shouldAnimate = immediate || isInView;

  return (
    <motion.div
      ref={ref}
      initial={animationConfig.initial}
      animate={shouldAnimate ? animationConfig.animate : animationConfig.initial}
      transition={animationConfig.transition}
      className={className}
      style={{ willChange: shouldAnimate ? "auto" : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}