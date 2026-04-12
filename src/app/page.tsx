import React, { Suspense } from "react";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Hero } from "./components/hero/hero";
import { Skills } from "./components/skills/skills";
import { Work } from "./components/work/work";
import AnimatedSection from "./components/AnimatedSection";
import SmoothNav from "./components/SmoothNav";
import ScrollToTop from "./components/ScrollToTop";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Blogs } from "./components/work/blogs";
// Client wrapper handles ssr:false dynamic imports for decorative components
import DecorativeBackground from "./components/DecorativeBackground";

export default function Home() {
  return (
    <main
      id="main-content"
      className="bg-[#faf8f5] text-[#2d2420] font-sans selection:bg-rose-100 relative min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('/sakura-petals.svg.png'), linear-gradient(to bottom, #f7ede8, #faf5f2, #faf8f5)",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top",
        backgroundSize: "auto",
        backgroundAttachment: "local",
      }}
    >
      {/* Navigation */}
      <SmoothNav />
      <HamburgerMenu />
      <ScrollToTop />

      {/* Decorative — deferred client bundle, aria-hidden inside each component */}
      <Suspense fallback={null}>
        <DecorativeBackground />
      </Suspense>

      <AnimatedSection delay={0.1}>
        <div id="hero">
          <Hero />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div id="about">
          <About />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div id="blogs">
          <Blogs />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div id="work">
          <Work />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div id="skills">
          <Skills />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div id="contact">
          <Contact />
        </div>
      </AnimatedSection>
    </main>
  );
}
