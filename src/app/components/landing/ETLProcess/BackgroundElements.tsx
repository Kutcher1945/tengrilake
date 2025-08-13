import { motion } from 'framer-motion';

export function BackgroundElements() {
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

      {/* Floating particles - Added variety */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            i % 3 === 0 
              ? 'w-1 h-1 bg-blue-300 opacity-50' 
              : i % 3 === 1 
              ? 'w-0.5 h-0.5 bg-white opacity-60' 
              : 'w-1.5 h-1.5 bg-blue-400 opacity-40'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
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