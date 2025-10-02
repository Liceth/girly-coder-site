"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="fixed bottom-6 left-6 md:bottom-6 md:right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
    >
      <AnimatedButton
        variant="primary"
        size="sm"
        onClick={scrollToTop}
        className="rounded-full w-12 h-12 p-0 flex items-center justify-center shadow-kawaii hover:shadow-kawaii-hover"
      >
        <span aria-label="Scroll to top" role="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 4l-7 8h4v8h6v-8h4l-7-8z"
              fill="currentColor"
            />
          </svg>
        </span>
      </AnimatedButton>
    </motion.div>
  );
}
