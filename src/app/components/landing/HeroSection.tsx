'use client';

import React from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BackgroundEffects } from '@/app/components/landing/Hero/BackgroundEffects';
import { AnimatedIcon } from '@/app/components/landing/Hero/AnimatedIcon';
import { HeroTitle } from '@/app/components/landing/Hero/HeroTitle';
import { HeroButtons } from '@/app/components/landing/Hero/HeroButtons';
import { StatsSection } from '@/app/components/landing/Hero/StatsSection';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cycling features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <BackgroundEffects 
        mousePosition={mousePosition}
        y1={y1}
        y2={y2}
      />

      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 min-h-screen flex items-center"
      >
        <motion.div
          className="w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Central icon with advanced effects */}
          <motion.div className="flex justify-center mb-12" variants={heroVariants}>
            <AnimatedIcon 
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              mousePosition={mousePosition}
            />
          </motion.div>

          {/* Main title with typewriter effect */}
          <motion.div variants={heroVariants}>
            <HeroTitle activeFeature={activeFeature} />
          </motion.div>

          {/* Enhanced description - updated for white background */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            variants={heroVariants}
          >
            Transform your data pipelines with intelligent automation, real-time monitoring, 
            and AI-driven insights that revolutionize how data engineering teams work.
          </motion.p>

          {/* Advanced button group */}
          <motion.div variants={heroVariants}>
            <HeroButtons />
          </motion.div>

          {/* Floating credentials with updated styling for white background */}
          <motion.div
            className="mt-12 inline-block bg-gray-50 backdrop-blur-lg border border-gray-200 rounded-2xl px-6 py-3 text-gray-600 text-sm shadow-xl hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgb(249 250 251)",
              borderColor: "rgb(59 130 246 / 0.3)",
              transition: { duration: 0.2 }
            }}
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2"
            >
              <span className="text-blue-500">✨</span>
              Demo Access: admin@tengrilake.ai / password123
            </motion.span>
          </motion.div>

          {/* Stats section */}
          <StatsSection />
        </motion.div>
      </motion.div>
    </section>
  );
}