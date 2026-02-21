import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Zap, Brain, Network } from 'lucide-react';
import Image from 'next/image';

interface AnimatedIconProps {
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  mousePosition: { x: number; y: number };
}

const glowVariants: Variants = {
  animate: {
    scale: [1, 1.25, 1],
    opacity: [0.2, 0.5, 0.2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number],
    },
  },
};

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.04, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number],
    },
  },
};

const magneticVariants: Variants = {
  hover: {
    scale: 1.08,
    rotateY: 12,
    rotateX: 4,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

export function AnimatedIcon({ isHovered, setIsHovered, mousePosition }: AnimatedIconProps) {
  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover="hover"
      variants={magneticVariants}
    >
      {/* Outer glow — cyan */}
      <motion.div
        className="absolute inset-0 bg-cyan-400/30 blur-2xl"
        variants={glowVariants}
        animate="animate"
      />

      {/* Corner accent lines */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/70" />
      <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/70" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/70" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/70" />

      {/* Main icon container — sharp, dark with cyan accent */}
      <motion.div
        className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 px-10 py-8 shadow-2xl border border-cyan-400/25"
        variants={pulseVariants}
        animate="animate"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.4}deg) rotateY(${mousePosition.x * 0.4}deg)`,
        }}
      >
        <motion.div
          animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
          transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number] }}
        >
          <Image
            src="/logo/logo-white-letters.png"
            alt="TengriLake AI"
            width={1280}
            height={720}
            className="object-contain"
            style={{ filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.5))' }}
          />
        </motion.div>

        {/* Orbiting elements on hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[Zap, Brain, Network].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute text-cyan-300/80"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: 1,
                    rotate: 360,
                    x: Math.cos((index * 120) * Math.PI / 180) * 60,
                    y: Math.sin((index * 120) * Math.PI / 180) * 60,
                  }}
                  exit={{ scale: 0, rotate: 0, x: 0, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: 'backOut' }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
