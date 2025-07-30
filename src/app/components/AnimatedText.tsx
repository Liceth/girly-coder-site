"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: "fade" | "slide" | "scale" | "typing";
}

const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  type = "fade",
}: AnimatedTextProps) => {
  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slide: {
      initial: { x: -50, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
    },
    typing: {
      initial: { width: 0, opacity: 0 },
      animate: { width: "100%", opacity: 1 },
    },
  };

  const animation = animations[type];

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
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

export default AnimatedText; 