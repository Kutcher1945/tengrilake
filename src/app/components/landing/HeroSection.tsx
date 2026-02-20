'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AnimatedIcon } from '@/app/components/landing/Hero/AnimatedIcon';
import { HeroTitle } from '@/app/components/landing/Hero/HeroTitle';
import { HeroButtons } from '@/app/components/landing/Hero/HeroButtons';
import { StatsSection } from '@/app/components/landing/Hero/StatsSection';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 }
    }
  };

  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 min-h-screen flex items-center"
      >
        <motion.div
          className="w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex justify-center mb-12" variants={heroVariants}>
            <AnimatedIcon
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              mousePosition={mousePosition}
            />
          </motion.div>

          <motion.div variants={heroVariants}>
            <HeroTitle />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/75 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            variants={heroVariants}
          >
            Tengrilake.AI позволяет государственным институтам объединить разрозненные системы данных
            в единую защищённую масштабируемую платформу, обеспечивающую стратегическое планирование,
            оптимизацию государственных услуг и принятие решений на основе данных.
          </motion.p>

          <motion.div variants={heroVariants}>
            <HeroButtons />
          </motion.div>

          <StatsSection />
        </motion.div>
      </motion.div>
    </section>
  );
}
