'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#060b16,#0d1528 50%,#07101d)' }}>
      {/* Video background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.18 }}
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dot pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(rgba(55,114,255,0.13) 1px,transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }}/>

      {/* Blue radial glow center */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(55,114,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      {/* Animated blue scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right,transparent,rgba(55,114,255,0.3),transparent)' }}
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Corner accents */}
      {(['tl','tr','bl','br'] as const).map(pos => (
        <motion.div
          key={pos}
          className={`absolute w-8 h-8 ${
            pos === 'tl' ? 'top-6 left-6 border-t-2 border-l-2' :
            pos === 'tr' ? 'top-6 right-6 border-t-2 border-r-2' :
            pos === 'bl' ? 'bottom-6 left-6 border-b-2 border-l-2' :
                           'bottom-6 right-6 border-b-2 border-r-2'
          }`}
          style={{ borderColor: 'rgba(55,114,255,0.4)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
      ))}

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
            <AnimatedIcon isHovered={isHovered} setIsHovered={setIsHovered} mousePosition={mousePosition} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <HeroTitle />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ color: 'rgba(193,211,255,0.6)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            TengriLake.AI — платформа управления данными для городского управления Алматы.
            Задачи сотрудников, прикреплённые файлы и геоданные автоматически проходят
            через ETL-пайплайн и превращаются в аналитику, которой можно доверять.
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
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom,rgba(55,114,255,0.5),transparent)', originY: 0 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
