"use client";
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
import ScrollToTop from "./components/ScrollToTop";
import { HamburgerMenu } from "./components/HamburgerMenu";
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
      
      {/* Mobile hamburger menu */}
      <HamburgerMenu />
      
      {/* Scroll to top button - visible on all screen sizes */}
      <ScrollToTop />
      
      {/* Floating leaves with parallax */}
      <FloatingLeaves />
      
      {/* Realistic sakura petals */}
      <SakuraLeaves />
      
      <AnimatedSection delay={0.1}>
        <div id="hero">
          <Hero />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div id="about">
          <About />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div id="blogs">
          <Blogs />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div id="work">
          <Work />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div id="skills">
          <Skills />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <div id="contact">
          <Contact />
        </div>
      </AnimatedSection>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-[url('/sakura-petals.svg.png')] bg-repeat-x opacity-20 animate-float-reverse" />
    </main>
  );
}
