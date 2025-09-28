"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";

export default function SmoothNav() {
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

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About me", id: "about" },
    { label: "Work", id: "work" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navegación flotante */}
      <motion.nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="glass-kawaii rounded-full px-6 py-3 shadow-kawaii">
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-poppins text-pink-700 hover:text-pink-800 transition-colors duration-300 px-3 py-1 rounded-full hover:bg-pink-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Botón de volver arriba */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
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
          className="rounded-full w-12 h-12 p-0 flex items-center justify-center"
        >
          {/* TODO: add arrow up icon component */}
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
    </>
  );
} 