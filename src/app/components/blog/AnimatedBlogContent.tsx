"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedBlogContentProps {
  children: ReactNode;
}

export function AnimatedBlogContent({ children }: Readonly<AnimatedBlogContentProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="prose prose-lg max-w-none"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-kawaii border border-pink-100">
        {children}
      </div>
    </motion.div>
  );
}
