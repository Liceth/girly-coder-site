"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import AnimatedText from "../AnimatedText";
import KawaiiCard from "../KawaiiCard";

export function About() {
  return (
    <section id="about" className="py-5 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <AnimatedText 
          type="fade" 
          delay={0.2}
          className="text-4xl font-playfair font-bold text-center mb-12"
        >
          <span className="gradient-text">About me</span> 💖
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* CONTENIDO DE TEXTO */}
          <div className="space-y-8">
            
            {/* Mi viaje */}
            <AnimatedSection delay={0.3}>
              <KawaiiCard variant="glass" className="text-left">
                <h3 className="text-2xl font-playfair font-semibold mb-3 text-pink-700">
                  🎓 My journey
                </h3>
                <p className="text-lg font-poppins text-rose-900 leading-relaxed">
                  I&apos;m Liceth, a Frontend Developer with a Computer Science degree and 6+ years of experience. 
                  I specialize in React, TypeScript, and building scalable, accessible platforms that empower users.
                </p>
              </KawaiiCard>
            </AnimatedSection>

            {/* Lo que amo */}
            <AnimatedSection delay={0.4}>
            <KawaiiCard variant="glass" className="text-left">
              <h3 className="text-2xl font-playfair font-semibold mb-3 text-pink-700">
                🌸 What I love
              </h3>
              <p className="text-lg font-poppins text-rose-900 leading-relaxed">
                I&apos;m passionate about design systems, pixel-perfect interfaces, and creating magical 
                digital experiences. My focus is on detail, inclusivity, and building products that truly 
                connect with people.
              </p>
            </KawaiiCard>
          </AnimatedSection>

            {/* Fuera del código */}
            <AnimatedSection delay={0.5}>
              <KawaiiCard variant="glass" className="text-left">
                <h3 className="text-2xl font-playfair font-semibold mb-3 text-pink-700">
                  🎀 Outside of code
                </h3>
                <p className="text-lg font-poppins text-rose-900 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me enjoying kawaii aesthetics, anime, and walks 
                  with my husky 🐾. I also love journaling, exploring new languages, and collaborating with 
                  creative minds 💡— always curious and learning.
                </p>
              </KawaiiCard>
            </AnimatedSection>

          </div>

          {/* ILUSTRACIÓN */}
          <AnimatedSection delay={0.7}>
            <div className="flex justify-center">
              <motion.div
                className="relative"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/KawaiiCoder.png" alt="Kawaii Coder Illustration" className="w-[280px] md:w-[340px] drop-shadow-xl" />  
            
                {/* Elementos decorativos alrededor de la imagen */}
                <div className="absolute -top-4 -left-4 text-2xl animate-float opacity-60">
                  🌸
                </div>
                <div className="absolute -top-2 -right-2 text-3xl animate-float-reverse opacity-60">
                  ✨
                </div>
                <div className="absolute -bottom-4 -left-2 text-2xl animate-sparkle opacity-60">
                  💖
                </div>
                <div className="absolute -bottom-2 -right-4 text-3xl animate-float opacity-60">
                  🎀
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}