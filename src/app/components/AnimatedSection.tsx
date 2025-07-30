"use client";

import { motion } from "framer-motion";
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
  duration = 0.6,
  direction = "up",
  once = true,
}: AnimatedSectionProps) => {
  const directions = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  };

  const initial = directions[direction];
  const animate = { y: 0, x: 0, opacity: 1 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      viewport={{ once, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 