"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import AnimatedText from "../AnimatedText";
import KawaiiCard from "../KawaiiCard";

const facts = [
  { icon: "🇨🇴", label: "Based in Colombia", detail: "Remote-friendly" },
  { icon: "⏱️", label: "6+ Years", detail: "Frontend Experience" },
  { icon: "⚛️", label: "React Expert", detail: "TypeScript & Modern Tools" },
  { icon: "🎨", label: "Design Systems", detail: "Pixel-perfect UI" },
  { icon: "♿", label: "Accessibility", detail: "Inclusive Design" },
  { icon: "🚀", label: "Performance", detail: "Scalable Solutions" }
];

const hobbies = [
  { emoji: "🌸", name: "Kawaii Aesthetics", color: "text-pink-500" },
  { emoji: "📺", name: "K-Dramas", color: "text-purple-500" },
  { emoji: "📝", name: "Journaling", color: "text-blue-500" },
  { emoji: "🐕", name: "Husky Walks", color: "text-gray-600" },
  { emoji: "🌍", name: "Languages", color: "text-green-500" },
  { emoji: "🎨", name: "Creative Projects", color: "text-orange-500" }
];

export function About() {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl animate-float">🌸</div>
        <div className="absolute top-40 right-20 text-4xl animate-float-reverse">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-sparkle">💖</div>
        <div className="absolute bottom-40 right-10 text-4xl animate-float">🎀</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedText 
          type="fade" 
          delay={0.2}
          className="text-5xl md:text-6xl font-playfair font-bold text-center mb-4"
        >
          <span className="gradient-text">About me</span>
        </AnimatedText>
      

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          
          {/* Left Column - Story */}
          <div className="space-y-8">
            <AnimatedSection delay={0.4}>
              <KawaiiCard variant="glass" className="text-left hover:shadow-kawaii-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎓</span>
                  <h3 className="text-2xl font-playfair font-semibold text-pink-700">
                    My Journey
                  </h3>
                </div>
                <p className="text-lg font-poppins text-rose-900 leading-relaxed mb-4">
                  Hello! I&apos;m <span className="font-semibold text-pink-700">Liceth</span>, a frontend engineer based in Colombia. 
                  Over the past <span className="font-semibold text-pink-700">6+ years</span>, I&apos;ve built scalable, 
                  user-centric web applications with React, TypeScript, and modern toolchains.
                </p>
                <p className="text-lg font-poppins text-rose-900 leading-relaxed">
                  I specialize in <span className="font-semibold text-pink-700">design systems</span>, 
                  <span className="font-semibold text-pink-700"> accessible UI</span>, and data-rich SaaS interfaces — 
                  always aiming for pixel-perfect detail, performance, and inclusivity.
                </p>
              </KawaiiCard>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <KawaiiCard variant="glass" className="text-left hover:shadow-kawaii-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎀</span>
                  <h3 className="text-2xl font-playfair font-semibold text-pink-700">
                    Beyond Code
                  </h3>
                </div>
                <p className="text-lg font-poppins text-rose-900 leading-relaxed mb-6">
                  When I step away from the screen, I&apos;m exploring kawaii aesthetics, binging k-dramas, 
                  journaling my thoughts, going for walks with my husky, and picking up new languages.
                </p>
                
                {/* Interactive Hobbies */}
                <div className="grid grid-cols-3 gap-3">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.name}
                      className={`p-3 rounded-xl bg-white/50 border border-pink-200 cursor-pointer transition-all duration-300 ${
                        activeHobby === index ? 'bg-pink-100 border-pink-300 shadow-md' : 'hover:bg-white/70'
                      }`}
                      onHoverStart={() => setActiveHobby(index)}
                      onHoverEnd={() => setActiveHobby(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-1">{hobby.emoji}</div>
                        <div className={`text-xs font-poppins font-medium ${hobby.color}`}>
                          {hobby.name}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </KawaiiCard>
            </AnimatedSection>
          </div>

          {/* Right Column - Image & Stats */}
          <div className="space-y-8">
            <AnimatedSection delay={0.6}>
              <div className="flex justify-center">
                <motion.div
                  className="relative"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 shadow-kawaii">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/KawaiiCoder.png" 
                      alt="Kawaii Coder Illustration" 
                      className="w-[280px] md:w-[320px] drop-shadow-xl relative z-10" 
                    />
                    
                    {/* Floating elements */}
                    <motion.div 
                      className="absolute -top-2 -left-2 text-2xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      🌸
                    </motion.div>
                    <motion.div 
                      className="absolute -top-2 -right-2 text-3xl"
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ✨
                    </motion.div>
                    <motion.div 
                      className="absolute -bottom-2 -left-2 text-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      💖
                    </motion.div>
                    <motion.div 
                      className="absolute -bottom-2 -right-2 text-3xl"
                      animate={{ rotate: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      🎀
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Quick Facts */}
            <AnimatedSection delay={0.7}>
              <KawaiiCard variant="glass" className="text-center">
                <h3 className="text-xl font-playfair font-semibold text-pink-700 mb-6">
                  ✨ Quick Facts
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {facts.map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      className="p-4 bg-white/50 rounded-xl border border-pink-200 hover:bg-white/70 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="text-2xl mb-2">{fact.icon}</div>
                      <div className="font-poppins font-semibold text-pink-700 text-sm">
                        {fact.label}
                      </div>
                      <div className="font-poppins text-rose-600 text-xs">
                        {fact.detail}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </KawaiiCard>
            </AnimatedSection>
          </div>
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={0.9}>
          <div className="text-center">
            <motion.div
              className="inline-block p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl border border-pink-200 shadow-kawaii"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-lg font-poppins text-rose-700 mb-2">
                💫 Ready to create something magical together?
              </p>
              <p className="text-sm font-poppins text-rose-600">
                Let&apos;s build beautiful, accessible, and performant web experiences! ✨
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}