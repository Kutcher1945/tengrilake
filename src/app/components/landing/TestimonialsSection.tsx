'use client';

import { motion } from 'framer-motion';
import { Star, Zap, Shield, BarChart3, Cpu, Database, GitBranch, Users, TrendingUp, Award } from 'lucide-react';
import { useMemo } from 'react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'AI-Powered Pipeline Orchestration',
    description: 'Our intelligent orchestration engine automatically optimizes data workflows, reducing processing time and eliminating bottlenecks through predictive analytics.',
    stat: '10x',
    statLabel: 'Faster Processing'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics & Monitoring',
    description: 'Advanced monitoring with machine learning-driven insights that predict issues before they occur, ensuring 99.9% uptime reliability.',
    stat: '99.9%',
    statLabel: 'Uptime Guarantee'
  },
  {
    icon: Shield,
    title: 'Intelligent Automation Engine',
    description: 'Smart automation that learns from your data patterns and team workflows, reducing manual intervention while maintaining data quality.',
    stat: '80%',
    statLabel: 'Less Manual Work'
  },
  {
    icon: Database,
    title: 'Unified Data Lake Architecture',
    description: 'Seamlessly integrate MinIO, ClickHouse, and PostgreSQL with our intelligent data routing and optimization layer.',
    stat: '500+',
    statLabel: 'Data Sources'
  },
  {
    icon: Cpu,
    title: 'Machine Learning Integration',
    description: 'Built-in ML capabilities with Apache Airflow orchestration, enabling automated feature engineering and model deployment.',
    stat: '24/7',
    statLabel: 'ML Operations'
  },
  {
    icon: GitBranch,
    title: 'Complete Data Lineage',
    description: 'Full traceability from CRM input through Kafka streaming to final storage, ensuring compliance and data governance.',
    stat: '100%',
    statLabel: 'Data Traceability'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    y: 60, 
    opacity: 0,
    scale: 0.9
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    }
  }
};

export default function AboutTengriLakeSection() {
  // Generate consistent floating particles
  const floatingParticles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const seed = i * 137.508;
      return {
        left: ((seed % 360) / 360) * 100,
        top: ((seed * 1.618 % 360) / 360) * 100,
        duration: 6 + (i % 3),
        delay: (i % 4) * 0.5
      };
    });
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30" />
        
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating particles */}
        {floatingParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: [0.4, 0.0, 0.6, 1]
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-6 py-3 mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Cpu className="h-5 w-5 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-blue-700">Enterprise Data Intelligence Platform</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Transform Your Data Pipeline with{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From CRM task creation to real-time analytics, TengriLake AI orchestrates your entire data ecosystem. 
            Powered by Apache Airflow, ClickHouse, and Kafka, we deliver enterprise-grade data processing 
            with AI-driven optimization and complete pipeline visibility.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative bg-white border border-gray-200 p-8 rounded-3xl hover:shadow-2xl hover:border-blue-300 transition-all duration-500 overflow-hidden">
                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                  
                  {/* Icon with gradient background */}
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 w-fit mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <IconComponent className="h-7 w-7 text-white" />
                  </motion.div>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {feature.stat}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      {feature.statLabel}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-3xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
          
          <div className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-200 shadow-xl text-center">
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">500+ Teams</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">Enterprise Ready</span>
              </div>
            </div>
            
            {/* Star rating */}
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 text-center">
              Ready to Transform Your Data Operations?
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-center">
              Join leading data teams who trust TengriLake AI to power their most critical ETL pipelines. 
              Experience intelligent automation, real-time monitoring, and seamless scalability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Demo
              </motion.button>
            </div>
            
            <p className="text-gray-500 text-sm mt-6 text-center">
              Demo Access: admin@tengrilake.ai / password123
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}