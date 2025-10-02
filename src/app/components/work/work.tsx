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
      location: "Bogotá / Remote",
      period: "Jul 2024 - Present",
      icon: "🚀",
      achievements: [
        "Architecting and deploying AI-powered trend detection SaaS platform with React, Next.js, and TypeScript",
        "Implemented server-side rendering (SSR) and dynamic API integrations, reducing report generation time ",
        "Built proof-of-concept data visualization dashboards with AG Grid and statistical computation pipelines",
        "Improved unit and integration test coverage by 80% with Jest and Cypress, ensuring release confidence",
        "Collaborated with cross-functional teams (designers, backend, and data engineers) to deliver scalable product features"
      ],
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Cypress",
        "Jest",
        "AG Grid",
        "SSR",
        "WebSockets",
        "Dagster"
      ]
    },
    {
      company: "Huge Inc (Google Projects)",
      position: "UI Engineer",
      location: "Bogotá / Remote",
      period: "Apr 2021 - Jul 2024",
      icon: "🌟",
      achievements: [
        "Developed and maintained scalable CMS and analytics platforms for Google marketing teams",
        "Created reusable web components and integrated third-party APIs to accelerate feature delivery",
        "Delivered WCAG-compliant, internationalized interfaces across multiple markets and languages",
        "Monitored performance with GA4 and optimized UX for large-scale user traffic",
        "Reviewed code and mentored junior engineers, fostering best practices in accessibility and testing"
      ],
      tech: [
        "React",
        "TypeScript",
        "CMS",
        "APIs",
        "WCAG",
        "GA4",
        "Localization",
        "Jest"
      ]
    },
    {
      company: "Globant",
      position: "Web UI Developer",
      location: "Bogotá",
      period: "Apr 2019 - Mar 2021",
      icon: "💼",
      achievements: [
        "Implemented modern user interfaces with React and JavaScript for enterprise clients",
        "Collaborated with backend teams to consume RESTful APIs and ensure seamless integrations",
        "Optimized app performance, accessibility, and cross-browser compatibility"
      ],
      tech: ["React", "JavaScript", "HTML", "CSS", "REST APIs"]
    },
    {
      company: "Stefanini",
      position: "Frontend Developer",
      location: "Barranquilla",
      period: "Oct 2018 - Dec 2018",
      icon: "⚡",
      achievements: [
        "Developed a responsive admin dashboard using React and Redux",
        "Integrated APIs and implemented dynamic state management to enhance UX"
      ],
      tech: ["React", "Redux", "Admin Dashboard", "APIs"]
    },
    {
      company: "CrowdSwap",
      position: "Frontend Developer",
      location: "Bogotá",
      period: "Jul 2018 - Oct 2018",
      icon: "📱",
      achievements: [
        "Built MVP mobile app using React Native and GraphQL for real-time trading features",
        "Implemented Swift native modules for hybrid mobile functionality"
      ],
      tech: ["React Native", "GraphQL", "Swift", "Mobile Apps"]
    },
    {
      company: "Nativapps",
      position: "Frontend Developer",
      location: "Barranquilla",
      period: "May 2017 - Jul 2018",
      icon: "🛠️",
      achievements: [
        "Maintained and enhanced a full-stack CRM application with PHP, JavaScript, and AWS",
        "Improved workflows, fixed bugs, and contributed to cloud deployments"
      ],
      tech: ["PHP", "JavaScript", "AWS", "CRM", "Full-stack"]
    }
  ];
  
  return (
    <section id="work" className="py-5 px-6 max-w-7xl mx-auto">
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
        {/* Define experience data*/}
        {experience.map((job, index) => (
          <motion.div
            key={`${job.company}-${job.period}`}
            variants={fadeInUp}
            className="relative"
          >
            {/* Timeline */}
            {index < experience.length - 1 && (
              <div className="absolute left-8 top-16 w-0.5 h-20 bg-gradient-to-b from-pink-300 to-purple-300 z-0" />
            )}
            
            <KawaiiCard 
              variant="default"
              className="relative z-10"
            >
              <div className="flex items-start gap-6 sm:flex-row flex-col">
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