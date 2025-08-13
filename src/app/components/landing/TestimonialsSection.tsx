'use client';

import { motion } from 'framer-motion';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Network, 
  Database,
  Zap,
  Shield,
  CheckCircle,
  AlertCircle,
  Gauge,
  Cloud
} from 'lucide-react';
import { useMemo } from 'react';

interface Requirement {
  icon: React.ComponentType<any>;
  component: string;
  minimum: string;
  recommended: string;
  enterprise: string;
  description: string;
}

const requirements: Requirement[] = [
  {
    icon: Cpu,
    component: 'CPU Cores',
    minimum: '8 vCPU',
    recommended: '16 vCPU',
    enterprise: '32+ vCPU',
    description: 'Apache Airflow DAG execution and ClickHouse query processing'
  },
  {
    icon: MemoryStick,
    component: 'RAM Memory',
    minimum: '32 GB',
    recommended: '64 GB',
    enterprise: '128+ GB',
    description: 'ClickHouse in-memory operations and Kafka buffering'
  },
  {
    icon: HardDrive,
    component: 'Storage (SSD)',
    minimum: '500 GB',
    recommended: '2 TB',
    enterprise: '10+ TB',
    description: 'MinIO object storage, ClickHouse data, PostgreSQL databases'
  },
  {
    icon: Network,
    component: 'Network Bandwidth',
    minimum: '1 Gbps',
    recommended: '10 Gbps',
    enterprise: '25+ Gbps',
    description: 'Real-time data streaming and inter-service communication'
  },
  {
    icon: Database,
    component: 'IOPS Performance',
    minimum: '3,000 IOPS',
    recommended: '10,000 IOPS',
    enterprise: '50,000+ IOPS',
    description: 'High-throughput database operations and file processing'
  },
  {
    icon: Server,
    component: 'Container Runtime',
    minimum: 'Docker 20.10+',
    recommended: 'Kubernetes 1.24+',
    enterprise: 'K8s + Istio',
    description: 'Microservices orchestration and service mesh'
  }
];

const softwareStack = [
  { name: 'Apache Airflow', version: '2.8+', purpose: 'Workflow Orchestration' },
  { name: 'ClickHouse', version: '23.0+', purpose: 'Analytics Database' },
  { name: 'Apache Kafka', version: '3.5+', purpose: 'Event Streaming' },
  { name: 'MinIO', version: '2023+', purpose: 'Object Storage' },
  { name: 'PostgreSQL', version: '15+', purpose: 'Transactional Data' },
  { name: 'PostGIS', version: '3.3+', purpose: 'Geospatial Extension' },
  { name: 'Redis', version: '7.0+', purpose: 'Caching & Sessions' },
  { name: 'Nginx', version: '1.24+', purpose: 'Load Balancing' }
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

export default function SystemRequirementsSection() {
  // Generate consistent floating particles
  const floatingParticles = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const seed = i * 137.508;
      return {
        left: ((seed % 360) / 360) * 100,
        top: ((seed * 1.618 % 360) / 360) * 100,
        duration: 8 + (i % 3),
        delay: (i % 4) * 0.7
      };
    });
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30" />
        
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(71 85 105) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating particles */}
        {floatingParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-slate-400/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-25, 25, -25],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1.2, 0.5]
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
            className="inline-flex items-center bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-300 rounded-full px-6 py-3 mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Server className="h-5 w-5 text-slate-600 mr-3" />
            <span className="text-sm font-semibold text-slate-700">Infrastructure Requirements</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            System Requirements for{' '}
            <span className="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              TengriLake AI
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Scale from development to enterprise production with our flexible deployment architecture. 
            From minimal setups to high-performance bare metal clusters supporting millions of data points.
          </motion.p>
        </motion.div>

        {/* Requirements Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {requirements.map((req, index) => {
            const IconComponent = req.icon;
            return (
              <motion.div 
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-slate-500/20 to-slate-700/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative bg-white border border-gray-200 p-8 rounded-3xl hover:shadow-2xl hover:border-slate-300 transition-all duration-500">
                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-slate-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  
                  {/* Icon with gradient background */}
                  <motion.div 
                    className="bg-gradient-to-r from-slate-600 to-slate-800 rounded-2xl p-4 w-fit mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <IconComponent className="h-7 w-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-slate-700 transition-colors">
                    {req.component}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {req.description}
                  </p>
                  
                  {/* Requirements breakdown */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-medium text-red-700">Minimum</span>
                      </div>
                      <span className="text-sm font-bold text-red-800">{req.minimum}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <div className="flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium text-amber-700">Recommended</span>
                      </div>
                      <span className="text-sm font-bold text-amber-800">{req.recommended}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-green-700">Enterprise</span>
                      </div>
                      <span className="text-sm font-bold text-green-800">{req.enterprise}</span>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 to-slate-700 rounded-b-3xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Software Stack Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                Required Software Stack
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Complete technology stack with minimum supported versions for optimal performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {softwareStack.map((software, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-1">{software.name}</h4>
                    <p className="text-sm text-blue-600 font-medium mb-2">{software.version}</p>
                    <p className="text-xs text-gray-500">{software.purpose}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Deployment Options CTA */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-500/20 to-slate-700/20 rounded-3xl blur-xl" />
          
          <div className="relative bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <Cloud className="h-8 w-8 text-blue-600" />
                <Server className="h-8 w-8 text-slate-600" />
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Choose Your Deployment Model
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              From cloud-managed instances to on-premises bare metal clusters. 
              Our architecture scales with your data volume and security requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="bg-gradient-to-r from-slate-600 to-slate-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Architecture Guide
              </motion.button>
              <motion.button 
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
            
            <p className="text-gray-500 text-sm mt-6">
              Free infrastructure assessment included with enterprise deployment
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}