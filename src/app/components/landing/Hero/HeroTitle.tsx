import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { Brain, Network, Cpu, Target } from 'lucide-react';

interface HeroTitleProps {
  activeFeature: number;
}

const features = [
  { icon: Brain, text: "AI-Powered Insights" },
  { icon: Network, text: "Smart Pipeline Management" },
  { icon: Cpu, text: "Real-time Processing" },
  { icon: Target, text: "Precision Tracking" }
];

export function HeroTitle({ activeFeature }: HeroTitleProps) {
  return (
    <div className="mb-8">
      <motion.h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
        <motion.span
          className="text-gray-900"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI-Powered
        </motion.span>
        <br />
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-purple-800"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Data Engineering
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-800"
        >
          Revolution
        </motion.span>
      </motion.h1>
       
      {/* Cycling feature highlights */}
      <motion.div
        className="h-12 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            className="flex items-center text-gray-700 text-xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {React.createElement(features[activeFeature].icon, { className: "h-6 w-6 mr-3 text-blue-600" })}
            {features[activeFeature].text}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}