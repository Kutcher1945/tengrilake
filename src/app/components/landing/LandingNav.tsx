'use client';

import Link from 'next/link';
import { Brain, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LandingNav() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.nav 
      className="bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-2xl relative overflow-hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-black to-blue-900/20" />
      
      {/* Floating stars */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.1, rotateY: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl blur-lg opacity-50"
                animate={isHovered ? { scale: 1.3, opacity: 0.8 } : { scale: 1, opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 p-2.5 rounded-xl shadow-lg border border-white/20">
                <motion.div
                  animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Database className="h-6 w-6 text-white drop-shadow-sm" />
                </motion.div>
              </div>
            </motion.div>
            
            <div className="ml-3 flex flex-col">
              <motion.span 
                className="text-xl font-black text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                TengriLake.AI
              </motion.span>
              <motion.span 
                className="text-xs text-blue-300 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Data Engineering Tracker
              </motion.span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/login"
                className="text-white/80 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/10"
              >
                Sign In
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {/* Animated border */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <Link
                href="/login"
                className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20 group-hover:shadow-blue-500/30 transition-all duration-300 flex items-center"
              >
                <span>Get Started</span>
                <motion.div
                  className="ml-2 w-1 h-1 bg-white rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}