"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface SakuraLeaf {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  delay: number;
  duration: number;
  color: string;
}

// Move colors outside component to prevent recreation
const SAKURA_COLORS = [
  "rgba(255, 182, 193, 0.8)", // Light pink
  "rgba(255, 192, 203, 0.8)", // Pink
  "rgba(255, 20, 147, 0.6)",  // Deep pink
  "rgba(255, 105, 180, 0.7)", // Hot pink
];

export default function SakuraLeaves() {
  const [leaves, setLeaves] = useState<SakuraLeaf[]>([]);
  const { scrollY } = useScroll();
  
  // Mouse position for cursor parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth mouse values
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });

  // Global transforms
  const scrollYProgress = useTransform(scrollY, [0, 1000], [0, -30]);
  const cursorX = useTransform(smoothMouseX, [-1, 1], [-20, 20]);

  useEffect(() => {
    const generateLeaves = () => {
      const newLeaves: SakuraLeaf[] = [];
      for (let i = 0; i < 8; i++) {
        newLeaves.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 15 + 10,
          rotation: Math.random() * 360,
          delay: Math.random() * 3,
          duration: Math.random() * 4 + 3,
          color: SAKURA_COLORS[Math.floor(Math.random() * SAKURA_COLORS.length)],
        });
      }
      setLeaves(newLeaves);
    };

    generateLeaves();
  }, []); // Empty dependency array - only run once

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
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [leaf.rotation, leaf.rotation + 15, leaf.rotation],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ 
            scale: 1.3,
            rotate: leaf.rotation + 90,
            transition: { duration: 0.5 }
          }}
        >
          <motion.div
            className="w-full h-full"
            style={{
              y: scrollYProgress,
              x: cursorX,
            }}
          >
            {/* Forma de pétalo de sakura */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
            >
              <motion.path
                d="M50 10 C60 20, 80 30, 80 50 C80 70, 60 80, 50 90 C40 80, 20 70, 20 50 C20 30, 40 20, 50 10 Z"
                fill={leaf.color}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
} 
