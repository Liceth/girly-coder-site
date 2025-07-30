"use client";

import AnimatedText from "../AnimatedText";
import AnimatedButton from "../AnimatedButton";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <AnimatedText 
        type="fade" 
        delay={0.2}
        className="text-4xl font-playfair font-semibold text-pink-700 mb-6"
      >
        Let&apos;s chat 💌
      </AnimatedText>
      
      <AnimatedText 
        type="slide" 
        delay={0.4}
        className="text-lg font-poppins text-rose-900 mb-8"
      >
        If you want to talk about projects, technology or husky dogs, write me!
      </AnimatedText>
      
      <div className="flex justify-center gap-4 flex-wrap">
        <AnimatedButton 
          variant="primary" 
          size="md"
          onClick={() => window.open('mailto:licethovallesrodriguez@gmail.com', '_blank')}
        >
          📧 Email
        </AnimatedButton>
        
        <AnimatedButton 
          variant="secondary" 
          size="md"
          onClick={() => window.open('https://www.linkedin.com/in/liceth-ovalles-44897591/', '_blank')}
        >
          💼 LinkedIn
        </AnimatedButton>
        
        <AnimatedButton 
          variant="outline" 
          size="md"
          onClick={() => window.open('https://github.com/liceth', '_blank')}
        >
          🐙 GitHub
        </AnimatedButton>
      </div>
    </section>
  );
}