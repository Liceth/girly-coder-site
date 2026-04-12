"use client";

import AnimatedSection from "../AnimatedSection";
import AnimatedText from "../AnimatedText";
import AnimatedButton from "../AnimatedButton";
import CustomTypewriter from "../CustomTypewriter";

export function Hero() {
  const typewriterTexts = [
    { text: "Hi, I'm Liceth" },
    { text: "Frontend Engineer" },
    { text: "UI Engineer " },
  ];

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="flex flex-col justify-center items-center text-center px-6 py-5 min-h-screen relative overflow-hidden"
    >
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 gradient-primary particles opacity-70" aria-hidden="true" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Eyebrow */}
        <p
          className="font-poppins text-xs tracking-[0.2em] uppercase text-[#c8869a] mb-6 opacity-0 animate-[fadeIn_0.6s_0.3s_forwards]"
          style={{ animationFillMode: "forwards" }}
          aria-hidden="true"
        >
          Portfolio
        </p>

        {/* Typewriter headline */}
        <div className="text-5xl sm:text-6xl font-playfair font-bold mb-6 min-h-[4.5rem] flex items-center justify-center">
          <CustomTypewriter
            texts={typewriterTexts}
            speed={110}
            delay={400}
            pauseTime={2800}
            cursorColor="#c8869a"
            loop={true}
          />
        </div>

        {/* Subhead */}
        <AnimatedText
          type="slide"
          delay={0.45}
          className="text-lg font-poppins font-light text-[#5c4a42] max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Frontend developer crafting beautiful, accessible experiences with React,
          TypeScript, and a deep love for the details.
        </AnimatedText>

        {/* CTA row */}
        <AnimatedSection delay={0.65}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <AnimatedButton
              variant="primary"
              size="lg"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let&apos;s chat
            </AnimatedButton>

            <AnimatedButton
              variant="outline"
              size="lg"
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See my work
            </AnimatedButton>
          </div>
        </AnimatedSection>
      </div>

      {/* Decorative sakura — two petals, quiet */}
      <div className="absolute top-16 left-12 text-xl animate-float opacity-40" aria-hidden="true">🌸</div>
      <div className="absolute bottom-16 right-14 text-xl animate-float-reverse opacity-40" aria-hidden="true">🌸</div>
    </section>
  );
}
