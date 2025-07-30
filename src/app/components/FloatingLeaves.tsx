"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface Leaf {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  delay: number;
  duration: number;
  parallaxIntensity: number;
}

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const { scrollY } = useScroll();
  
  // Mouse position for cursor parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth mouse values
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });

  // Global transforms
  const scrollYProgress = useTransform(scrollY, [0, 1000], [0, -50]);
  const cursorX = useTransform(smoothMouseX, [-1, 1], [-30, 30]);

  useEffect(() => {
    const generateLeaves = () => {
      const newLeaves: Leaf[] = [];
      for (let i = 0; i < 12; i++) {
        newLeaves.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 15,
          rotation: Math.random() * 360,
          delay: Math.random() * 2,
          duration: Math.random() * 3 + 2,
          parallaxIntensity: Math.random() * 0.5 + 0.1,
        });
      }
      setLeaves(newLeaves);
    };

    generateLeaves();
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      mouseX.set((clientX - centerX) / centerX);
      mouseY.set((clientY - centerY) / centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [leaf.rotation, leaf.rotation + 10, leaf.rotation],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ 
            scale: 1.2,
            rotate: leaf.rotation + 45,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            className="w-full h-full"
            style={{
              y: scrollYProgress,
              x: cursorX,
            }}
          >
            {/* Diferentes tipos de hojas */}
            {leaf.id % 4 === 0 && (
              <motion.div
                className="w-full h-full rounded-full opacity-60"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.3), rgba(244, 114, 182, 0.2))",
                }}
              />
            )}
            {leaf.id % 4 === 1 && (
              <motion.div
                className="w-full h-full rounded-full opacity-60"
                style={{
                  background: "radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2))",
                }}
              />
            )}
            {leaf.id % 4 === 2 && (
              <motion.div
                className="w-full h-full rounded-full opacity-60"
                style={{
                  background: "radial-gradient(circle at 30% 70%, rgba(251, 191, 36, 0.3), rgba(249, 115, 22, 0.2))",
                }}
              />
            )}
            {leaf.id % 4 === 3 && (
              <motion.div
                className="w-full h-full rounded-full opacity-60"
                style={{
                  background: "radial-gradient(circle at 70% 70%, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.2))",
                }}
              />
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
} 