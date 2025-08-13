import { motion, Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface BackgroundEffectsProps {
  mousePosition: { x: number; y: number };
  y1: any;
  y2: any;
}

const floatingVariants: Variants = {
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    rotate: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
    }
  }
};

export function BackgroundEffects({ mousePosition, y1, y2 }: BackgroundEffectsProps) {
  return (
    <>
      {/* White background base */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/60" />
             
      {/* Dynamic grid overlay - adjusted for white background */}
      <motion.div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1
        }}
      />
       
      {/* Floating geometric shapes - adjusted colors for white background */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-200/60 to-blue-300/40 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-100/80 to-blue-100/60 rounded-lg blur-xl rotate-45"
        variants={floatingVariants}
        animate="animate"
        style={{ y: y2, animationDelay: '1s' }}
      />
      <motion.div
        className="absolute bottom-40 left-40 w-20 h-20 bg-gradient-to-r from-blue-300/50 to-purple-200/40 rounded-full blur-lg"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Additional floating shapes for more visual interest */}
      <motion.div
        className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-indigo-200/40 to-blue-200/30 rounded-full blur-lg"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-r from-purple-100/50 to-indigo-100/40 rounded-lg blur-xl rotate-12"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />
       
      {/* Interactive sparkles - adjusted for white background visibility */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400/60"
          style={{
            left: `${20 + i * 15}%`,
            top: `${15 + i * 12}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
          }}
        >
          <Sparkles className="h-4 w-4" />
        </motion.div>
      ))}
      
      {/* Subtle animated lines for additional movement */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 51, 234, 0.1) 100%)',
            'linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </>
  );
}