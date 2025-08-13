import { motion } from 'framer-motion';

interface FlowArrowsProps {
  isInView: boolean;
}

export function FlowArrows({ isInView }: FlowArrowsProps) {
  return (
    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 bg-gradient-to-r from-blue-500 to-blue-300 h-0.5"
          style={{
            left: `${(i + 1) * 25 - 3}%`,
            width: '6%',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { 
            scaleX: 1, 
            opacity: [0, 1, 0.5],
          } : { scaleX: 0, opacity: 0 }}
          transition={{
            duration: 1.5,
            delay: i * 0.3 + 1,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
      ))}
    </div>
  );
}

export default FlowArrows;