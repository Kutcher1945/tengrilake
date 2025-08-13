import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function BackgroundElements() {
  // Generate consistent particle positions using deterministic values
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const seed = i * 137.508; // Golden angle for good distribution
      return {
        left: ((seed % 360) / 360) * 100,
        top: ((seed * 1.618 % 360) / 360) * 100,
        duration: 4 + (i % 3),
        delay: (i % 4) * 0.75,
        type: i % 3 // 0, 1, or 2 for different particle types
      };
    });
  }, []);

  return (
    <>
      {/* Animated background - Changed to lighter gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800" />
      
      {/* Secondary overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-800/30" />
      
      {/* Grid overlay - Made more visible */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating particles - Added variety with consistent positions */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            particle.type === 0
              ? 'w-1 h-1 bg-blue-300 opacity-50' 
              : particle.type === 1
              ? 'w-0.5 h-0.5 bg-white opacity-60' 
              : 'w-1.5 h-1.5 bg-blue-400 opacity-40'
          }`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
          }}
        />
      ))}

      {/* Additional ambient light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-400/10 rounded-full blur-3xl" />
    </>
  );
}

export default BackgroundElements;