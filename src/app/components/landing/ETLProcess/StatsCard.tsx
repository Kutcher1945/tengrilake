import { motion, Variants } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';

interface StatsCardProps {
  stat: {
    value: string;
    label: string;
    numericValue?: number;
  };
  index: number;
  isInView: boolean;
}

const stepVariants: Variants = {
  hidden: { 
    y: 50, 
    opacity: 0,
    scale: 0.9
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.6
    }
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }
};

export function StatsCard({ stat, index, isInView }: StatsCardProps) {
  return (
    <motion.div
      className="text-center group cursor-pointer"
      variants={stepVariants}
      whileHover="hover"
    >
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300">
        <motion.div
          className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white mb-2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20, 
            delay: index * 0.1 + 1.5 
          }}
        >
          {stat.numericValue && stat.value.includes('M') ? (
            <>
              <AnimatedCounter end={10} duration={2} />M+
            </>
          ) : stat.numericValue && stat.value.includes('%') ? (
            <AnimatedCounter end={stat.numericValue} suffix="%" />
          ) : stat.numericValue && stat.value.includes('TB') ? (
            <AnimatedCounter end={stat.numericValue} suffix="TB" />
          ) : stat.value.includes('<') ? (
            <AnimatedCounter end={2} prefix="<" suffix="s" />
          ) : (
            stat.value
          )}
        </motion.div>
        <div className="text-white/70 text-sm font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

export default StatsCard;