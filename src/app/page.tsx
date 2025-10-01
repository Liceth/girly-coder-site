"use client";
import { motion } from "framer-motion";
import React from "react";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Hero } from "./components/hero/hero";
import { Skills } from "./components/skills/skills";
import { Work } from "./components/work/work";
import AnimatedSection from "./components/AnimatedSection";
import FloatingLeaves from "./components/FloatingLeaves";
import SakuraLeaves from "./components/SakuraLeaves";
import SmoothNav from "./components/SmoothNav";
import { Blogs } from "./components/work/blogs";

export default function Home() {
  return (
    <main
      className="bg-gradient-to-b from-pink-100 via-rose-100 to-white text-rose-900 font-sans selection:bg-rose-200 relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/sakura-petals.svg.png'), linear-gradient(to bottom, #ffe4e6, #fff1f2, #fff)",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top",
        backgroundSize: "auto",
        zIndex: 0,
      }}
    >
      {/* Smooth navigation */}
      <SmoothNav />
      
      {/* Floating leaves with parallax */}
      <FloatingLeaves />
      
      {/* Realistic sakura petals */}
      <SakuraLeaves />
      
      <AnimatedSection delay={0.1}>
        <Hero />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <About />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Blogs />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <Work />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <Skills />
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <Contact />
      </AnimatedSection>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-[url('/sakura-petals.svg.png')] bg-repeat-x opacity-20 animate-float-reverse" />

      <motion.img
        src="/chibi-coder-kawaii.png"
        alt="Kawaii Coder Girl"
        className="absolute bottom-4 left-4 w-[50px] h-auto drop-shadow-lg rounded-full border-2 border-rose-300 z-20"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 1.0,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      />
    </main>
  );
}
