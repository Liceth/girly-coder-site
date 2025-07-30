"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import AnimatedText from "../AnimatedText";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Animación & UX",
      skills: ["Framer Motion", "CSS Animations", "Responsive Design"]
    },
    {
      category: "Testing & Tools",
      skills: ["Jest", "Storybook", "Git", "Node.js"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <AnimatedText 
        type="fade" 
        delay={0.2}
        className="text-4xl font-playfair font-semibold text-center mb-4"
      >
        <span className="gradient-text">Technologies I love</span> 💻
      </AnimatedText>
      
      <AnimatedText 
        type="slide" 
        delay={0.4}
        className="text-lg font-poppins text-rose-700 text-center mb-12 max-w-2xl mx-auto"
      >
        Tools and technologies I use to create magical digital experiences
      </AnimatedText>
      
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.category}
            variants={fadeInUp}
            className="text-center"
          >
            <h3 className="text-xl font-playfair font-semibold text-pink-700 mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  variants={fadeInUp}
                  className="px-4 py-2 rounded-full text-sm font-poppins font-medium shadow-kawaii hover:shadow-kawaii-hover transition-all duration-300 cursor-pointer group"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${skillIndex % 3 === 0 ? '#fce7f3' : skillIndex % 3 === 1 ? '#fdf2f8' : '#fef7ff'}, 
                      ${skillIndex % 3 === 0 ? '#fdf2f8' : skillIndex % 3 === 1 ? '#fef7ff' : '#fce7f3'})`,
                    border: '1px solid rgba(236, 72, 153, 0.2)'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-pink-700 group-hover:text-pink-800 transition-colors duration-300">
                    {skill}
                  </span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
