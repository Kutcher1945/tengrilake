'use client';

import { motion, Variants, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  numericValue?: number;
}

const stats: Stat[] = [
  { value: '500+', label: 'Data Pipelines', numericValue: 500 },
  { value: '99.9%', label: 'Uptime', numericValue: 99.9 },
  { value: '2.5M+', label: 'Records/Day', numericValue: 2500000 },
  { value: '50+', label: 'ML Models', numericValue: 50 }
];

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const statVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden" ref={ref}>
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: '200% 200%' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Powering Data Teams Worldwide
          </h2>
          <p className="text-blue-100">Trusted by leading AI and data engineering teams</p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center cursor-pointer"
              variants={statVariants}
              whileHover="hover"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 20, 
                  delay: index * 0.1 + 0.5 
                }}
              >
                {stat.numericValue ? (
                  stat.value.includes('%') ? (
                    <AnimatedCounter end={stat.numericValue} suffix="%" />
                  ) : stat.value.includes('M') ? (
                    <>
                      <AnimatedCounter end={2.5} duration={2} />M+
                    </>
                  ) : (
                    <AnimatedCounter end={stat.numericValue} suffix="+" />
                  )
                ) : (
                  stat.value
                )}
              </motion.div>
              <motion.div
                className="text-blue-100"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}