import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Database, Zap, Brain, Network } from 'lucide-react';

interface AnimatedIconProps {
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  mousePosition: { x: number; y: number };
}

const glowVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.8, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
    }
  }
};

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
    }
  }
};

const magneticVariants: Variants = {
  hover: {
    scale: 1.1,
    rotateY: 15,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
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
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 rounded-3xl blur-2xl"
        variants={glowVariants}
        animate="animate"
      />
      
      {/* Main icon container */}
      <motion.div
        className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 p-6 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20"
        variants={pulseVariants}
        animate="animate"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
        }}
      >
        <motion.div
          animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number] }}
        >
          <Database className="h-16 w-16 text-white drop-shadow-lg" />
        </motion.div>
        
        {/* Orbiting elements */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[Zap, Brain, Network].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute text-white/80"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: 1,
                    rotate: 360,
                    x: Math.cos((index * 120) * Math.PI / 180) * 60,
                    y: Math.sin((index * 120) * Math.PI / 180) * 60,
                  }}
                  exit={{ scale: 0, rotate: 0, x: 0, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "backOut"
                  }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}