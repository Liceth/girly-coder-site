"use client";

import AnimatedSection from "../AnimatedSection";
import AnimatedText from "../AnimatedText";
import AnimatedButton from "../AnimatedButton";
import CustomTypewriter from "../CustomTypewriter";

export function Hero() {
  const typewriterTexts = [
    {
      text: "Hi! I'm Liceth 🌸 ",
    },
    {
      text: "Frontend Developer",
      image: "/pckiwi.png",
      imageAlt: "Pckiwi Developer"
    },
    {
      text: "UI Engineer ✨",
    },
  ];

  return (
    <section id="hero" className="flex flex-col justify-center items-center text-center px-6 py-5 min-h-screen relative overflow-hidden">
      {/* Gradient background and particles */}
      <div className="absolute inset-0 gradient-primary particles opacity-80" />
      
      <div className="relative z-10">
        <div className="text-5xl sm:text-6xl font-playfair font-bold mb-4 min-h-[4rem] flex items-center justify-center">
          <CustomTypewriter 
            texts={typewriterTexts}
            speed={120}
            delay={500}
            pauseTime={2500}
            cursorColor="#ec4899"
            loop={true}
          />
        </div>
        
        <AnimatedText 
          type="slide" 
          delay={0.4}
          className="text-xl font-poppins text-rose-800 max-w-xl mb-8 leading-relaxed"
        >
          Frontend developer passionate about creating beautiful, accessible, and magical experiences ✨ with React, TypeScript, and love for details.
        </AnimatedText>
        
        <AnimatedSection delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AnimatedButton 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let&apos;s chat! 💕
            </AnimatedButton>
            
            <AnimatedButton 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See my work 🎨
            </AnimatedButton>
          </div>
        </AnimatedSection>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-2xl animate-float opacity-60">
          🌸
        </div>
        <div className="absolute top-20 right-20 text-3xl animate-float-reverse opacity-60">
          ✨
        </div>
        <div className="absolute bottom-20 left-20 text-2xl animate-sparkle opacity-60">
          💖
        </div>
        <div className="absolute bottom-10 right-10 text-3xl animate-float opacity-60">
          🎀
        </div>
      </div>
    </section>
  );
}