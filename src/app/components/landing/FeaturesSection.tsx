'use client';

import { Database, Brain, GitBranch, BarChart3 } from 'lucide-react';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Database,
    title: 'Data Pipeline Management',
    description: 'Track and manage complex data pipelines from ingestion to processing and deployment.',
    color: 'bg-blue-500'
  },
  {
    icon: Brain,
    title: 'AI/ML Project Tracking',
    description: 'Monitor machine learning experiments, model training, and deployment workflows.',
    color: 'bg-purple-500'
  },
  {
    icon: GitBranch,
    title: 'Workflow Orchestration',
    description: 'Visualize and manage dependencies between data engineering tasks and processes.',
    color: 'bg-green-500'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Get insights into pipeline performance, resource usage, and team productivity.',
    color: 'bg-orange-500'
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1] // easeOut cubic-bezier
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants: Variants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.6, 1] // easeInOut cubic-bezier
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Built for Data Engineering Excellence
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to manage complex data workflows, ML experiments, and AI project lifecycles.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer group"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className={`${feature.color} p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow`}
                  variants={iconVariants}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}