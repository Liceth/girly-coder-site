"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  once = true,
}: AnimatedSectionProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const directions = {
    up: { y: 32, opacity: 0 },
    down: { y: -32, opacity: 0 },
    left: { x: 32, opacity: 0 },
    right: { x: -32, opacity: 0 },
  };

  const initial = directions[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
