"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import AnimatedText from "../AnimatedText";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend / UI Development",
      icon: "💻",
      skills: [
        { name: "React.js", level: "expert" },
        { name: "Next.js", level: "expert" },
        { name: "TypeScript", level: "expert" },
        { name: "JavaScript (ES6+)", level: "expert" },
        { name: "HTML5 & CSS3", level: "expert" },
        { name: "Tailwind CSS", level: "expert" },
        { name: "UI Components & Design Systems", level: "advanced" },
        { name: "Data Visualization", level: "intermediate" },
        { name: "Accessibility (A11y)", level: "advanced" }
      ]
    },
    {
      category: "Engineering Practices",
      icon: "🔧",
      skills: [
        { name: "Jest & React Testing Library", level: "advanced" },
        { name: "Git & GitHub/GitLab", level: "expert" },
        { name: "Nx Monorepos", level: "intermediate" },
        { name: "Linting & Pre-commit hooks", level: "advanced" },
        { name: "Docker & GitHub Actions", level: "intermediate" },
        { name: "Terraform", level: "beginner" }
      ]
    },
    {
      category: "Architecture & Systems",
      icon: "🏗️",
      skills: [
        { name: "Micro frontends", level: "intermediate" },
        { name: "Performance Optimization", level: "advanced" },
        { name: "API Integration (REST/GraphQL)", level: "advanced" },
        { name: "WebSockets", level: "intermediate" },
        { name: "SaaS Platforms", level: "advanced" },
        { name: "Bundle Optimization", level: "advanced" }
      ]
    },
    {
      category: "Animation & UX",
      icon: "🎨",
      skills: [
        { name: "Framer Motion", level: "expert" },
        { name: "CSS Animations", level: "expert" },
        { name: "Responsive Design", level: "expert" },
        { name: "User Experience Design", level: "advanced" },
        { name: "Design Systems", level: "advanced" }
      ]
    },
    {
      category: "Soft Skills & Leadership",
      icon: "🤝 ",
      skills: [
        { name: "Mentorship & Team Collaboration", level: "advanced" },
        { name: "Cross-functional Collaboration", level: "expert" },
        { name: "Agile / Scrum", level: "expert" },
        { name: "Problem Solving", level: "expert" },
        { name: "English & Spanish Communication", level: "expert" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert": return "from-emerald-100 to-green-100 border-emerald-200 text-emerald-700";
      case "advanced": return "from-blue-100 to-cyan-100 border-blue-200 text-blue-700";
      case "intermediate": return "from-yellow-100 to-amber-100 border-yellow-200 text-yellow-700";
      case "beginner": return "from-gray-100 to-slate-100 border-gray-200 text-gray-700";
      default: return "from-pink-100 to-purple-100 border-pink-200 text-pink-700";
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "expert": return "🔥";
      case "advanced": return "⭐";
      case "intermediate": return "💫";
      case "beginner": return "🌱";
      default: return "💖";
    }
  };

  return (
    <section id="skills" className="py-5 px-6 max-w-7xl mx-auto">
      <AnimatedText 
        type="fade" 
        delay={0.2}
        className="text-4xl font-playfair font-semibold text-center mb-4"
      >
        <span className="gradient-text">Skills & Expertise</span> 🚀
      </AnimatedText>
      
      <AnimatedText 
        type="slide" 
        delay={0.4}
        className="text-lg font-poppins text-rose-700 text-center mb-12 max-w-3xl mx-auto"
      >
        A comprehensive overview of my technical skills, engineering practices, and professional capabilities
      </AnimatedText>

       {/* Skill Level Legend */}
       <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.8 }}
        className="my-12 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100"
      >
        <h4 className="text-lg font-playfair font-semibold text-pink-700 mb-4 text-center">
          Skill Level Legend
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">🔥</span>
            <span className="text-sm font-poppins text-emerald-700">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">⭐</span>
            <span className="text-sm font-poppins text-blue-700">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">💫</span>
            <span className="text-sm font-poppins text-yellow-700">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🌱</span>
            <span className="text-sm font-poppins text-gray-700">Learning</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.category}
            variants={fadeInUp}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-kawaii hover:shadow-kawaii-hover transition-all duration-300 border border-pink-100"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-xl font-playfair font-semibold text-pink-700">
                {category.category}
              </h3>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  className={`px-3 py-2 rounded-lg text-xs font-poppins font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group bg-gradient-to-r ${getLevelColor(skill.level)}`}
                  whileHover={{ 
                    scale: 1.02,
                    y: -1,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="group-hover:font-semibold transition-all duration-300">
                      {skill.name}
                    </span>
                    <span className="text-xs opacity-70">
                      {getLevelIcon(skill.level)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

     
    </section>
  );
}
