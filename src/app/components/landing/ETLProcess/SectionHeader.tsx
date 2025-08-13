import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface SectionHeaderProps {
  isInView: boolean;
}

export function SectionHeader({ isInView }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="inline-flex items-center justify-center mb-6"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-2xl shadow-xl border border-white/20">
          <Zap className="h-8 w-8 text-white" />
        </div>
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
          Intelligent ETL Pipeline
        </span>
      </h2>
      <p className="text-xl text-white/70 max-w-3xl mx-auto">
        Automated data processing from file upload to microservice distribution
      </p>
    </motion.div>
  );
}

export default SectionHeader;