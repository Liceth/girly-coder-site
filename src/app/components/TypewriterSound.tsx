"use client";

import { useEffect } from "react";

interface TypewriterSoundProps {
  isTyping: boolean;
  soundEnabled?: boolean;
}

export default function TypewriterSound({ isTyping, soundEnabled = false }: TypewriterSoundProps) {

  useEffect(() => {
    if (!soundEnabled) return;

    // Crear audio context para generar sonido de typewriter
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const audioContext = new AudioContextClass();
    
    const playTypewriterSound = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    };

    if (isTyping) {
      playTypewriterSound();
    }
  }, [isTyping, soundEnabled]);

  return null; // Este componente no renderiza nada visual
} 