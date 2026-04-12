"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface CustomTypewriterProps {
  texts: Array<{
    text: string;
    image?: string;
    imageAlt?: string;
  }>;
  className?: string;
  speed?: number;
  delay?: number;
  pauseTime?: number;
  cursorColor?: string;
  loop?: boolean;
}

export default function CustomTypewriter({ 
  texts, 
  className = "", 
  speed = 100, 
  delay = 0,
  pauseTime = 2000,
  cursorColor = "#ec4899",
  loop = false
}: CustomTypewriterProps) {
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

    const currentText = texts[currentTextIndex].text;
    
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

  const currentItem = texts[currentTextIndex];

  const isFullyTyped = currentCharIndex === currentItem.text.length;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* Visible animated text */}
      <span className="gradient-text text-shadow-kawaii" aria-hidden="true">
        {displayText}
      </span>

      {/* Screen reader: announce full phrase once typing completes */}
      <span
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {isFullyTyped ? currentItem.text : ""}
      </span>

      {currentItem.image && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isFullyTyped ? 1 : 0,
            opacity: isFullyTyped ? 1 : 0,
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="inline-block"
          aria-hidden="true"
        >
          <Image
            src={currentItem.image}
            alt=""
            width={40}
            height={40}
            className="inline-block w-10 h-10 object-contain"
          />
        </motion.div>
      )}

      {/* Blinking cursor — decorative, hidden from AT */}
      {isTyping && (
        <motion.span
          className="inline-block w-0.5 h-[1em] ml-0.5"
          style={{ backgroundColor: cursorColor }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          aria-hidden="true"
        />
      )}
    </div>
  );
} 