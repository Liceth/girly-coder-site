"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AdvancedTypewriterProps {
  texts: string[];
  className?: string;
  speed?: number;
  delay?: number;
  pauseTime?: number;
  cursorColor?: string;
  loop?: boolean;
}

export default function AdvancedTypewriter({ 
  texts, 
  className = "", 
  speed = 100, 
  delay = 0,
  pauseTime = 2000,
  cursorColor = "#ec4899",
  loop = false
}: AdvancedTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing
      if (currentCharIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, pause then start deleting
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(timer);
      }
    } else {
      // Deleting
      if (currentCharIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(prev => prev - 1);
        }, speed / 2); // Delete faster than typing
        return () => clearTimeout(timer);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        if (currentTextIndex < texts.length - 1) {
          setCurrentTextIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        } else if (loop) {
          // Loop back to first text
          setCurrentTextIndex(0);
          setCurrentCharIndex(0);
        }
      }
    }
  }, [currentCharIndex, currentTextIndex, isTyping, isDeleting, texts, speed, pauseTime, loop]);

  return (
    <div className={`inline-block ${className}`}>
      <span className="gradient-text text-shadow-kawaii">
        {displayText}
      </span>
      {isTyping && (
        <motion.span
          className="inline-block w-0.5 h-full ml-1"
          style={{ backgroundColor: cursorColor }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </div>
  );
} 