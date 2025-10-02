"use client";

import { motion } from "framer-motion";

export default function SmoothNav() {

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About me", id: "about" },
    { label: "Blog", id: "blogs" },
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
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
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

    </>
  );
} 