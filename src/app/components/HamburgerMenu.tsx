"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface HamburgerMenuProps {
  className?: string;
}

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function HamburgerMenu({ className = "" }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#blogs", label: "Blog" },
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const close = useCallback(() => {
    setIsOpen(false);
    // Return focus to trigger
    requestAnimationFrame(() => buttonRef.current?.focus());
  }, []);

  const handleNavClick = (href: string) => {
    close();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Focus first item when panel opens
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const first = panelRef.current.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();
  }, [isOpen]);

  // Trap focus inside panel + close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => !el.hasAttribute("disabled"));

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  return (
    <div className={`md:hidden ${className}`}>
      {/* Trigger */}
      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-kawaii border border-rose-200 hover:shadow-kawaii-hover"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center relative" aria-hidden="true">
          <motion.span
            className="block w-5 h-0.5 bg-rose-600 rounded-full absolute"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -4 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-rose-600 rounded-full absolute"
            animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-rose-600 rounded-full absolute"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 4 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-[#fdfbf8] shadow-2xl z-50 border-l border-rose-100"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
          >
            {/* Header */}
            <div className="p-6 border-b border-rose-100 bg-gradient-to-r from-[#faf0ed] to-[#fdf8f6]">
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-3"
              >
                <Image
                  src="/chibi-coder-kawaii.png"
                  alt="Liceth Ovalles avatar"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-rose-200 shadow-sm"
                />
                <div>
                  <p className="font-playfair font-bold text-[#2d2420] text-base leading-tight">
                    Liceth Ovalles
                  </p>
                  <p className="text-rose-500 text-xs font-poppins tracking-wide mt-0.5">
                    Frontend Developer
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Nav items */}
            <nav aria-label="Mobile navigation">
              <ul className="p-5 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.04 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="w-full text-left px-4 py-3 rounded-xl text-[#2d2420] font-poppins font-medium text-sm tracking-wide hover:bg-rose-50 hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
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
