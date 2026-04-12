"use client";

import { motion } from "framer-motion";

export default function SmoothNav() {
  const navItems = [
    { label: "Home",     id: "hero" },
    { label: "About",    id: "about" },
    { label: "Blog",     id: "blogs" },
    { label: "Work",     id: "work" },
    { label: "Skills",   id: "skills" },
    { label: "Contact",  id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      aria-label="Main navigation"
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="glass-kawaii rounded-full px-2 py-1.5 shadow-kawaii">
        <ul className="flex items-center gap-0.5" role="list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-poppins font-medium text-[#5c4a42] hover:text-[#8f5a6e] px-4 py-2 rounded-full hover:bg-[#f7eff2] focus:outline-none focus:ring-2 focus:ring-[#c8869a] tracking-[0.06em] uppercase"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
