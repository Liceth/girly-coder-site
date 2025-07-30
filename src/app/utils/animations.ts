// Configuraciones de animación reutilizables para Framer Motion

export const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

export const fadeInDown = {
  initial: { y: -60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

export const fadeInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

export const fadeInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 17,
};

export const smoothTransition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const bounceTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

// Animaciones para hover
export const hoverScale = {
  scale: 1.05,
  transition: springTransition,
};

export const hoverLift = {
  y: -5,
  transition: springTransition,
};

// Animaciones para tap
export const tapScale = {
  scale: 0.95,
  transition: springTransition,
}; 