'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import { 
  Database, 
  Cloud, 
  Workflow, 
  GitBranch, 
  Server, 
  Cpu,
  Layers,
  Zap
} from 'lucide-react';

interface Technology {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  gradient: string;
  features: string[];
}

const technologies: Technology[] = [
  {
    name: 'MinIO S3',
    category: 'Object Storage',
    icon: Database,
    description: 'High-performance object storage for file uploads and data archiving',
    gradient: 'from-blue-500 to-blue-600',
    features: ['Scalable Storage', 'S3 Compatible', 'High Throughput']
  },
  {
    name: 'Apache Airflow',
    category: 'Workflow Orchestration',
    icon: Workflow,
    description: 'Intelligent ETL pipeline orchestration with dynamic DAG generation',
    gradient: 'from-emerald-500 to-emerald-600',
    features: ['DAG Management', 'Parallel Processing', 'Error Handling']
  },
  {
    name: 'ClickHouse',
    category: 'Analytics Database',
    icon: Server,
    description: 'Lightning-fast columnar database optimized for OLAP queries',
    gradient: 'from-purple-500 to-purple-600',
    features: ['Columnar Storage', 'Real-time Analytics', 'Compression']
  },
  {
    name: 'Apache Kafka',
    category: 'Event Streaming',
    icon: GitBranch,
    description: 'Real-time data streaming platform for microservice communication',
    gradient: 'from-amber-500 to-amber-600',
    features: ['Event Streaming', 'Low Latency', 'Fault Tolerant']
  },
  {
    name: 'PostgreSQL',
    category: 'Relational Database',
    icon: Layers,
    description: 'Advanced relational database for transactional data processing',
    gradient: 'from-blue-600 to-blue-700',
    features: ['ACID Compliant', 'JSON Support', 'Extensions']
  },
  {
    name: 'PostGIS',
    category: 'Geospatial Database',
    icon: Cloud,
    description: 'Spatial database extension for geographic object support',
    gradient: 'from-teal-500 to-teal-600',
    features: ['Spatial Queries', 'GIS Functions', 'Geometry Types']
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
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

export default function TechnologyShowcase() {
  const ref = useRef(null);

  return (
    <section className="py-32 bg-gradient-to-b from-black via-slate-950 to-blue-950 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-900/30" />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
          }}
        />
      ))}

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 rounded-2xl shadow-xl border border-white/20">
              <Cpu className="h-8 w-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
              Powered by
            </span>
            <br />
            <span className="text-white">Modern Technology</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our platform leverages industry-leading technologies to deliver 
            unparalleled performance, scalability, and reliability.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            
            return (
              <motion.div
                key={index}
                className="relative group"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-blue-300/20 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-700"
                />

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl group-hover:border-blue-400/50 transition-all duration-500 overflow-hidden">
                  {/* Floating particles on hover */}
                  {[...Array(4)].map((_, particleIndex) => (
                    <motion.div
                      key={particleIndex}
                      className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                        y: [-10, -25, -40]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: particleIndex * 0.2,
                        repeat: Infinity,
                        ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
                      }}
                    />
                  ))}

                  {/* Header */}
                  <div className="text-center mb-6">
                    <motion.div
                      className={`bg-gradient-to-r ${tech.gradient} p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg border border-white/20`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    
                    <div className="text-blue-300 text-sm font-medium bg-blue-500/20 rounded-full px-3 py-1 inline-block">
                      {tech.category}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-center leading-relaxed mb-6">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.1 + featureIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive bottom accent - only show on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-b-3xl"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-8 py-4 text-white/80 text-lg shadow-xl"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="h-5 w-5 text-blue-400" />
            </motion.div>
            <span>Enterprise-grade infrastructure meets intelligent automation</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}