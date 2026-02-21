'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AnimatedIcon } from '@/app/components/landing/Hero/AnimatedIcon';
import { HeroTitle } from '@/app/components/landing/Hero/HeroTitle';
import { HeroButtons } from '@/app/components/landing/Hero/HeroButtons';
import { StatsSection } from '@/app/components/landing/Hero/StatsSection';

function HUDCorner({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const styles = {
    tl: 'top-6 left-6 border-t-2 border-l-2',
    tr: 'top-6 right-6 border-t-2 border-r-2',
    bl: 'bottom-6 left-6 border-b-2 border-l-2',
    br: 'bottom-6 right-6 border-b-2 border-r-2',
  };
  return (
    <motion.div
      className={`absolute w-8 h-8 border-cyan-400/50 ${styles[position]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    />
  );
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none z-10"
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* HUD corners */}
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />
      <HUDCorner position="bl" />
      <HUDCorner position="br" />

      {/* System status indicator */}
      <motion.div
        className="absolute top-7 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-black/70 border border-cyan-400/25 backdrop-blur-sm z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <span className="text-cyan-400/70 text-xs font-mono tracking-[0.25em]">
          СИСТЕМА АКТИВНА
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full text-center">
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <AnimatedIcon
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              mousePosition={mousePosition}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <HeroTitle />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/55 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Tengrilake.AI позволяет государственным институтам объединить разрозненные системы данных
            в единую защищённую масштабируемую платформу, обеспечивающую стратегическое планирование,
            оптимизацию государственных услуг и принятие решений на основе данных.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <HeroButtons />
          </motion.div>

          <StatsSection />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        {/* <span className="text-white/25 text-xs font-mono tracking-[0.3em]">ПРОКРУТИТЬ</span> */}
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-cyan-400/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          style={{ originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
