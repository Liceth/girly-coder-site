"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedBlogContentProps {
  children: ReactNode;
}

export function AnimatedBlogContent({ children }: AnimatedBlogContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {children}
    </motion.div>
  );
}