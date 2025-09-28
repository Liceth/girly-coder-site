import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import KawaiiCard from "../KawaiiCard";
import { staggerContainer, fadeInUp } from "../../utils/animations";

export const projects = [
    {
      title: "Comparador de marcas",
      description: "Plataforma SaaS para análisis de tendencias y benchmarking en la industria publicitaria.",
      icon: "📊",
      tech: ["React", "TypeScript", "Node.js"]
    },
    {
      title: "Visualizador de datos ", 
      description: "Sistema modular con WebSocket y Dagster para monitorear procesos en tiempo real.",
      icon: "📈",
      tech: ["Next.js", "WebSocket", "Dagster"]
    },
  ];
export default function Projects() {
   
    return (
        <>
        <AnimatedText 
        type="fade" 
        delay={0.2}
        className="text-4xl font-playfair font-semibold text-center mb-4"
      >
        <span className="gradient-text">Featured Projects</span> 💼
      </AnimatedText>
      
      <AnimatedText 
        type="slide" 
        delay={0.4}
        className="text-lg font-poppins text-rose-700 text-center mb-12 max-w-2xl mx-auto"
      >
          Experiencias digitales que combinan tecnología y creatividad para crear soluciones únicas
      </AnimatedText>
      
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid sm:grid-cols-2 gap-8 mb-20"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={fadeInUp}
          >
            <KawaiiCard 
              variant="glass"
              icon={project.icon}
              className="h-full"
            >
              <h3 className="text-xl font-playfair font-bold mb-3 text-pink-700">
                {project.title}
              </h3>
              <p className="text-rose-900 font-poppins mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-xs font-poppins font-medium rounded-full border border-pink-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </KawaiiCard>
          </motion.div>
        ))}
      </motion.div>
      </>
    );
}