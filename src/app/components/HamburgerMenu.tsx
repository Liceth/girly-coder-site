"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface HamburgerMenuProps {
  className?: string;
}

export function HamburgerMenu({ className = "" }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#hero", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "💫" },
    { href: "#blogs", label: "Blog", icon: "📝" },
    { href: "#work", label: "Work", icon: "💼" },
    { href: "#skills", label: "Skills", icon: "⚡" },
    { href: "#contact", label: "Contact", icon: "💌" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`md:hidden ${className}`}>
      {/* Hamburger Button */}
      <motion.button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-kawaii border border-pink-200 hover:shadow-kawaii-hover transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center relative">
          <motion.span
            className="block w-5 h-0.5 bg-pink-600 rounded-full absolute"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 0 : -4,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-pink-600 rounded-full absolute"
            animate={{
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-pink-600 rounded-full absolute"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? 0 : 4,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-pink-50 via-rose-50 to-white shadow-2xl z-45 border-l border-pink-200"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          >
            {/* Menu Header */}
            <div className="p-6 border-b border-pink-200 bg-gradient-to-r from-pink-100 to-rose-100">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <motion.img
                  src="/chibi-coder-kawaii.png"
                  alt="Kawaii Coder"
                  className="w-12 h-12 rounded-full border-2 border-pink-300 shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                />
                <div>
                  <h3 className="font-playfair font-bold text-pink-700 text-lg">
                    Liceth Ovalles
                  </h3>
                  <p className="text-rose-600 text-sm font-poppins">
                    Developer Portfolio
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Menu Items */}
            <nav className="p-6">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 border border-pink-100 hover:border-pink-300 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="font-poppins font-medium text-rose-700 group-hover:text-pink-700 transition-colors duration-300">
                        {item.label}
                      </span>
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
