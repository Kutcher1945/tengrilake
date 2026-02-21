'use client';

import { motion, Variants } from 'framer-motion';
import { useRef, useMemo } from 'react';
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

  // Generate consistent floating particle positions
  const floatingParticles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      const seed = i * 137.508; // Golden angle for good distribution
      return {
        left: ((seed % 360) / 360) * 100,
        top: ((seed * 1.618 % 360) / 360) * 100,
        duration: 4 + (i % 3),
        delay: (i % 5) * 0.4,
        scale: 0.5 + (i % 3) * 0.23
      };
    });
  }, []);

  // Generate consistent card particle positions for each technology
  const cardParticles = useMemo(() => {
    return technologies.map((_, techIndex) => 
      Array.from({ length: 4 }, (_, particleIndex) => {
        const seed = techIndex * 47 + particleIndex * 23;
        return {
          left: ((seed % 100)),
          top: ((seed * 1.3 % 100)),
          delay: particleIndex * 0.2
        };
      })
    );
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden" ref={ref}>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      {/* Floating particles - using consistent positions */}
      {floatingParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.8, 0.2],
            scale: [particle.scale, particle.scale + 0.7, particle.scale]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
          }}
        />
      ))}


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
            <div className="border border-cyan-400/30 bg-cyan-400/5 p-4">
              <Cpu className="h-8 w-8 text-cyan-400" />
            </div>
          </motion.div>

          <span className="inline-block text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            Технологии
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-blue-300">
              Powered by
            </span>
            {' '}
            <span className="text-white">Modern Technology</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
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
            const particlePositions = cardParticles[index];
            
            return (
              <motion.div
                key={index}
                className="relative group"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-cyan-400/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative bg-white/[0.02] border border-white/8 p-8 group-hover:border-cyan-400/30 transition-all duration-300 overflow-hidden">
                  {/* Floating particles on hover - using consistent positions */}
                  {particlePositions.map((particle, particleIndex) => (
                    <motion.div
                      key={particleIndex}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                        y: [-10, -25, -40]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
                      }}
                    />
                  ))}

                  {/* Header */}
                  <div className="text-center mb-6">
                    <motion.div
                      className={`bg-gradient-to-r ${tech.gradient} p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {tech.name}
                    </h3>

                    <div className="text-cyan-400/80 text-xs font-mono uppercase tracking-widest border border-cyan-400/20 px-3 py-1 inline-block">
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
                        <div className="w-1.5 h-1.5 bg-cyan-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive bottom accent - only show on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-blue-300"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-1.5 h-1.5 bg-cyan-400"
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
            className="inline-flex items-center gap-3 border border-white/10 hover:border-cyan-400/30 px-8 py-4 text-white/60 hover:text-white/80 text-base transition-colors duration-200"
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
              <Zap className="h-5 w-5 text-cyan-400" />
            </motion.div>
            <span>Enterprise-grade infrastructure meets intelligent automation</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}