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
  icon 
}: KawaiiCardProps) {
  const baseClasses = "rounded-2xl p-6 transition-all duration-300";
  
  const variants = {
    default: "bg-white shadow-kawaii hover:shadow-kawaii-hover border-kawaii-soft",
    glass: "glass-kawaii shadow-kawaii hover:shadow-kawaii-hover",
    gradient: "gradient-primary shadow-kawaii hover:shadow-kawaii-hover border-kawaii-soft",
  };

  const cardClasses = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      whileHover={{ 
        scale: 1.02,
        y: -5,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {icon && (
        <div className="text-3xl mb-4 animate-float">
          {icon}
        </div>
      )}
      {children}
    </motion.div>
  );
} 