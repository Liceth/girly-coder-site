"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

// ── data ──────────────────────────────────────────────────────────────────────
const facts = [
  { label: "Based in",   value: "Colombia",          note: "Remote-friendly"          },
  { label: "Experience", value: "6+ years",           note: "Frontend"                  },
  { label: "Specialty",  value: "React · TypeScript", note: "Next.js & Modern Tooling"  },
  { label: "Focus",      value: "Design Systems",     note: "Pixel-perfect UI"          },
  { label: "Advocate",   value: "Accessibility",      note: "Inclusive Design"          },
  { label: "Mindset",    value: "Performance",        note: "Scalable Solutions"         },
];

const hobbies = [
  "Kawaii Aesthetics",
  "K-Dramas",
  "Journaling",
  "Husky Walks",
  "Languages",
  "Creative Projects",
];

// ── component ─────────────────────────────────────────────────────────────────
export function About() {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);

  return (
    <section
      id="about"
      aria-label="About me"
      className="py-28 px-6 bg-[#f7ede8]/40 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <AnimatedSection delay={0.1}>
          <p className="text-xs tracking-[0.22em] uppercase text-[#c8869a] text-center mb-3 font-poppins">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-center text-[#2d2420] mb-3">
            Liceth Ovalles
          </h2>
          <p className="text-center font-poppins text-[#5c4a42] text-base mb-12 max-w-md mx-auto leading-relaxed">
            Senior Frontend Engineer · Colombia
          </p>
          <hr className="border-[#e8e0d6] mb-16" />
        </AnimatedSection>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — story + hobbies */}
          <div className="space-y-10">
            <AnimatedSection delay={0.2}>
              <h3 className="font-playfair text-xl text-[#2d2420] mb-4">
                My Journey
              </h3>
              <p className="font-poppins font-light text-[#5c4a42] leading-relaxed text-base mb-4">
                I&apos;m a frontend engineer with{" "}
                <span className="text-[#8f5a6e] font-medium">6+ years</span> of experience
                building scalable, user-centric web applications with React,
                TypeScript, and modern toolchains.
              </p>
              <p className="font-poppins font-light text-[#5c4a42] leading-relaxed text-base">
                I specialise in{" "}
                <span className="text-[#8f5a6e] font-medium">design systems</span>,{" "}
                <span className="text-[#8f5a6e] font-medium">accessible UI</span>, and
                data-rich SaaS interfaces — always aiming for pixel-perfect detail,
                performance, and inclusivity.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3 className="font-playfair text-xl text-[#2d2420] mb-4">
                Beyond Code
              </h3>
              <p className="font-poppins font-light text-[#5c4a42] leading-relaxed text-base mb-6">
                When I step away from the screen, I explore kawaii aesthetics,
                binge k-dramas, journal my thoughts, walk my husky, and pick up
                new languages.
              </p>

              {/* Hobby tags */}
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, i) => (
                  <motion.button
                    key={hobby}
                    onHoverStart={() => setActiveHobby(i)}
                    onHoverEnd={() => setActiveHobby(null)}
                    className={`px-3 py-1.5 rounded-full text-xs font-poppins font-medium tracking-wide border transition-colors duration-200 ${
                      activeHobby === i
                        ? "bg-[#f7eff2] border-[#c8869a] text-[#8f5a6e]"
                        : "bg-[#fdfbf8] border-[#e8e0d6] text-[#5c4a42]"
                    }`}
                  >
                    {hobby}
                  </motion.button>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA strip */}
            <AnimatedSection delay={0.4}>
              <div className="border border-[#e8e0d6] rounded-xl px-6 py-5 bg-[#fdfbf8]">
                <p className="font-poppins font-light text-[#5c4a42] text-sm leading-relaxed">
                  Ready to build beautiful, accessible, and performant
                  experiences together?{" "}
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-[#8f5a6e] underline underline-offset-2 hover:text-[#c8869a] focus:outline-none focus:ring-1 focus:ring-[#c8869a] rounded"
                  >
                    Let&apos;s talk.
                  </button>
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — illustration + facts */}
          <div className="space-y-10">

            {/* Illustration */}
            <AnimatedSection delay={0.25}>
              <div className="flex justify-center">
                <div className="relative bg-[#f7ede8] rounded-2xl p-8 border border-[#e8d0c8]">
                  <Image
                    src="/KawaiiCoder.png"
                    alt="Liceth Ovalles — illustrated avatar"
                    width={280}
                    height={280}
                    className="w-[240px] md:w-[280px] drop-shadow-md object-contain"
                    priority
                  />
                  {/* single small petal — stays girly, stays minimal */}
                  <span
                    className="absolute -top-3 -right-3 text-lg animate-float opacity-70"
                    aria-hidden="true"
                  >
                    🌸
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Facts table */}
            <AnimatedSection delay={0.35}>
              <div className="rounded-xl border border-[#e8e0d6] overflow-hidden bg-[#fdfbf8]">
                <div className="px-5 py-3 border-b border-[#e8e0d6] bg-[#f7ede8]/50">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-poppins text-[#c8869a]">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#e8e0d6]">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between px-5 py-3.5 hover:bg-[#faf5f2] transition-colors duration-150"
                    >
                      <dt className="text-xs font-poppins text-[#c4b5a2] uppercase tracking-wide w-28 shrink-0">
                        {fact.label}
                      </dt>
                      <dd className="text-right">
                        <span className="block text-sm font-poppins font-medium text-[#2d2420]">
                          {fact.value}
                        </span>
                        <span className="block text-xs font-poppins text-[#5c4a42]">
                          {fact.note}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
}
