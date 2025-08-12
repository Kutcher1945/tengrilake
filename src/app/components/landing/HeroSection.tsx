'use client';

import React from 'react';
import Link from 'next/link';
import { Database, ArrowRight, Sparkles, Zap, Brain, Network, Cpu, Target } from 'lucide-react';
import { motion, Variants, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

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

  const features = [
    { icon: Brain, text: "AI-Powered Insights" },
    { icon: Network, text: "Smart Pipeline Management" },
    { icon: Cpu, text: "Real-time Processing" },
    { icon: Target, text: "Precision Tracking" }
  ];

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

  const glowVariants: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const magneticVariants: Variants = {
    hover: {
      scale: 1.1,
      rotateY: 15,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-400/20 to-blue-800/40" />
      
      {/* Dynamic grid overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          x: mousePosition.x,
          y: mousePosition.y
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full blur-xl opacity-40"
        variants={floatingVariants}
        animate="animate"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-white to-blue-200 rounded-lg blur-xl opacity-30 rotate-45"
        variants={floatingVariants}
        animate="animate"
        style={{ y: y2, animationDelay: '1s' }}
      />
      <motion.div
        className="absolute bottom-40 left-40 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-lg opacity-50"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />

      {/* Interactive sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/30"
          style={{
            left: `${20 + i * 15}%`,
            top: `${15 + i * 12}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="h-4 w-4" />
        </motion.div>
      ))}

      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 min-h-screen flex items-center"
        style={{ opacity }}
      >
        <motion.div
          className="w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Central icon with advanced effects */}
          <motion.div className="flex justify-center mb-12" variants={heroVariants}>
            <motion.div
              className="relative"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover="hover"
              variants={magneticVariants}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 rounded-3xl blur-2xl"
                variants={glowVariants}
                animate="animate"
              />
              
              {/* Main icon container */}
              <motion.div
                className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 p-6 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20"
                variants={pulseVariants}
                animate="animate"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
                }}
              >
                <motion.div
                  animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Database className="h-16 w-16 text-white drop-shadow-lg" />
                </motion.div>
                
                {/* Orbiting elements */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      {[Zap, Brain, Network].map((Icon, index) => (
                        <motion.div
                          key={index}
                          className="absolute text-white/80"
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{
                            scale: 1,
                            rotate: 360,
                            x: Math.cos((index * 120) * Math.PI / 180) * 60,
                            y: Math.sin((index * 120) * Math.PI / 180) * 60,
                          }}
                          exit={{ scale: 0, rotate: 0, x: 0, y: 0 }}
                          transition={{ 
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: "backOut"
                          }}
                        >
                          <Icon className="h-6 w-6" />
                        </motion.div>
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main title with typewriter effect */}
          <motion.div variants={heroVariants} className="mb-8">
            <motion.h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                AI-Powered
              </motion.span>
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200"
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
                className="text-white/90"
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
                  className="flex items-center text-white/80 text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {React.createElement(features[activeFeature].icon, { className: "h-6 w-6 mr-3 text-blue-300" })}
                  {features[activeFeature].text}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Enhanced description */}
          <motion.p
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={heroVariants}
          >
            Transform your data pipelines with intelligent automation, real-time monitoring, 
            and AI-driven insights that revolutionize how data engineering teams work.
          </motion.p>

          {/* Advanced button group */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={heroVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <Link
                href="/login"
                className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-4 rounded-xl text-lg font-bold flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20 group-hover:shadow-blue-500/50 transition-all duration-300"
              >
                Launch Experience
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.button
              className="group relative bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-xl text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Interactive Demo</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          </motion.div>

          {/* Floating credentials with glassmorphism */}
          <motion.div
            className="mt-12 inline-block bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-3 text-white/60 text-sm shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.2 }
            }}
          >
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ✨ Demo Access: admin@tengrilake.ai / password123
            </motion.span>
          </motion.div>

          {/* Stats or metrics bar */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { number: "99.9%", label: "Uptime Reliability" },
              { number: "10x", label: "Faster Deployments" },
              { number: "500+", label: "AI Models Supported" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300">
                  <motion.div
                    className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}