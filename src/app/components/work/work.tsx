"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import AnimatedText from "../AnimatedText";
import KawaiiCard from "../KawaiiCard";

export function Work() {
  const experience = [
    {
      company: "Kinesso",
      position: "UI Engineer",
      location: "Bogotá",
      period: "Jul 2024 – Present",
      icon: "🚀",
      achievements: [
        "Designing and deploying AI-driven trend detection tools for enterprise users using React, TypeScript, Next.js, Tailwind, and Cypress",
        "Led frontend feature releases with server-side rendering (SSR) and API integration, reducing report generation time by 40%",
        "Collaborated in agile ceremonies and improved unit test coverage by 30%"
      ],
      tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Cypress", "SSR"]
    },
    {
      company: "Huge Inc (Google Projects)",
      position: "UI Engineer",
      location: "Bogotá",
      period: "Apr 2021 – Jul 2024",
      icon: "🌟",
      achievements: [
        "Built and maintained scalable CMS and analytics tools for Google",
        "Integrated third-party APIs, developed reusable web components, and worked with localization tools",
        "Delivered WCAG-compliant interfaces and tracked performance metrics with GA4",
        "Conducted peer reviews and mentored junior team members"
      ],
      tech: ["React", "CMS", "APIs", "WCAG", "GA4", "Localization"]
    },
    {
      company: "Globant",
      position: "Web UI Developer",
      location: "Bogotá",
      period: "Apr 2019 – Mar 2021",
      icon: "💼",
      achievements: [
        "Developed and optimized user interfaces with React, JavaScript, HTML, and CSS",
        "Collaborated with backend teams to implement RESTful endpoints",
        "Improved app performance and cross-browser compatibility"
      ],
      tech: ["React", "JavaScript", "HTML", "CSS", "REST APIs"]
    },
    {
      company: "Stefanini",
      position: "Frontend Developer",
      location: "Barranquilla",
      period: "Oct 2018 – Dec 2018",
      icon: "⚡",
      achievements: [
        "Created a responsive admin dashboard with React and Redux",
        "Integrated APIs and enhanced UX through dynamic state management"
      ],
      tech: ["React", "Redux", "Admin Dashboard", "APIs"]
    },
    {
      company: "CrowdSwap",
      position: "Frontend Developer",
      location: "Bogotá",
      period: "Jul 2018 – Oct 2018",
      icon: "📱",
      achievements: [
        "Developed MVP mobile app using React Native and GraphQL",
        "Implemented native modules in Swift for hybrid app functionality"
      ],
      tech: ["React Native", "GraphQL", "Swift", "Mobile App"]
    },
    {
      company: "Nativapps",
      position: "Frontend Developer",
      location: "Barranquilla",
      period: "May 2017 – Jul 2018",
      icon: "🛠️",
      achievements: [
        "Maintained and enhanced a full-stack CRM application using PHP, JS, and AWS",
        "Fixed bugs, enhanced workflows, and contributed to cloud deployments"
      ],
      tech: ["PHP", "JavaScript", "AWS", "CRM", "Full-stack"]
    }
  ];
  return (
    <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
    {/* todo: add projects/blog section */}
     
      {/* Work Experience */}
      <AnimatedText 
        type="fade" 
        delay={0.6}
        className="text-4xl font-playfair font-semibold text-center mb-4"
      >
        <span className="gradient-text">Work Experience</span> 🌟
      </AnimatedText>
      
      <AnimatedText 
        type="slide" 
        delay={0.8}
        className="text-lg font-poppins text-rose-700 text-center mb-12 max-w-2xl mx-auto"
      >
        My journey in frontend development and creating magical digital experiences
      </AnimatedText>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        {/* Define experience data locally since it was missing */}
        {experience.map((job, index) => (
          <motion.div
            key={`${job.company}-${job.period}`}
            variants={fadeInUp}
            className="relative"
          >
            {/* Línea de tiempo */}
            {index < experience.length - 1 && (
              <div className="absolute left-8 top-16 w-0.5 h-20 bg-gradient-to-b from-pink-300 to-purple-300 z-0" />
            )}
            
            <KawaiiCard 
              variant="default"
              className="relative z-10"
            >
              <div className="flex items-start gap-6">
                {/* Icono de la empresa */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center text-2xl shadow-kawaii">
                  {job.icon}
                </div>
                
                {/* Contenido */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-pink-700 mb-1">
                        {job.position}
                      </h3>
                      <p className="text-lg font-poppins font-semibold text-rose-800">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <p className="text-sm font-poppins text-rose-600">
                        {job.location}
                      </p>
                      <p className="text-sm font-poppins text-rose-500">
                        {job.period}
                      </p>
                    </div>
                  </div>
                  
                  {/* Logros */}
                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((achievement: string) => (
                      <li 
                        key={achievement}
                        className="text-rose-900 font-poppins text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-pink-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600 text-xs font-poppins font-medium rounded-full border border-pink-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </KawaiiCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}