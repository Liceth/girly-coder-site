"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  "aria-label"?: string;
}

const AnimatedButton = ({
  children,
  className = "",
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
}: AnimatedButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#c8869a] text-white hover:bg-[#b3738a] focus:ring-[#c8869a] shadow-kawaii hover:shadow-kawaii-hover",
    secondary: "bg-[#c4b5a2] text-white hover:bg-[#b3a08e] focus:ring-[#c4b5a2] shadow-kawaii hover:shadow-kawaii-hover",
    outline: "border border-[#c8869a] text-[#8f5a6e] hover:bg-[#f7eff2] hover:border-[#b3738a] focus:ring-[#c8869a]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs tracking-wide",
    md: "px-5 py-2.5 text-sm tracking-wide",
    lg: "px-7 py-3 text-sm tracking-[0.06em]",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton; 