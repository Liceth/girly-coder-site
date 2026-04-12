"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface KawaiiCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient";
  icon?: string;
}

export default function KawaiiCard({
  children,
  className = "",
  variant = "default",
  icon,
}: KawaiiCardProps) {
  const baseClasses = "rounded-xl p-6 transition-shadow duration-300";

  const variants = {
    default: "bg-[#fdfbf8] border border-[#e8e0d6] shadow-kawaii hover:shadow-kawaii-hover",
    glass:   "bg-[#fdfbf8]/85 backdrop-blur-sm border border-[#e8e0d6] shadow-kawaii hover:shadow-kawaii-hover",
    gradient:"bg-gradient-to-br from-[#f7ede8] to-[#faf5f2] border border-[#e8e0d6] shadow-kawaii hover:shadow-kawaii-hover",
  };

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      {icon && (
        <div className="text-2xl mb-4 opacity-80" aria-hidden="true">
          {icon}
        </div>
      )}
      {children}
    </motion.div>
  );
}
