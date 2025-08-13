'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
   FolderUp,
   Workflow,
   Database,
   GitBranch,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Server,
  FileText
} from 'lucide-react';

interface ProcessDetail {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
  tech: string;
  color: string;
  gradient: string;
}

const processDetails: ProcessDetail[] = [
  {
    icon: FolderUp,
    title: 'CRM Task Creation OR File Upload',
    description: 'Your data journey begins when users create tasks in the CRM system or upload files that need processing.',
    details: [
      'Files are uploaded through the CRM interface',
      'Automatic storage in MinIO S3 for scalability',
      'Metadata extraction and task assignment',
      'File validation and format checking'
    ],
    tech: 'MinIO S3 Object Storage',
    color: 'from-blue-50 to-blue-100',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Workflow,
    title: 'Apache Airflow ETL Orchestration',
    description: 'Airflow automatically detects new files and initiates the ETL pipeline with intelligent workflow management.',
    details: [
      'Automatic file detection from MinIO S3',
      'Dynamic DAG generation based on file type',
      'Parallel processing for optimal performance',
      'Error handling and retry mechanisms'
    ],
    tech: 'Apache Airflow',
    color: 'from-emerald-50 to-emerald-100',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Database,
    title: 'ClickHouse Raw Data Storage',
    description: 'Processed data is stored in ClickHouse, a high-performance columnar database optimized for analytics.',
    details: [
      'Lightning-fast columnar data storage',
      'Real-time compression and indexing',
      'OLAP queries for complex analytics',
      'Horizontal scaling capabilities'
    ],
    tech: 'ClickHouse Analytics DB',
    color: 'from-purple-50 to-purple-100',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: GitBranch,
    title: 'Kafka Data Streaming',
    description: 'Data flows through Kafka to microservices, enabling real-time distribution to PostgreSQL and PostGIS databases.',
    details: [
      'Real-time event streaming with Kafka',
      'Microservice-based data distribution',
      'PostgreSQL for transactional data',
      'PostGIS for geospatial processing'
    ],
    tech: 'Kafka + PostgreSQL/PostGIS',
    color: 'from-amber-50 to-amber-100',
    gradient: 'from-amber-500 to-amber-600'
  }
];

export default function PipelineExplanationSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-slate-950 to-blue-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-900/30" />
             
      {/* Floating particles */}
      <motion.div>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
            }}
          />
        ))}
      </motion.div>
       
      {/* Main grid overlay */}
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
              <FileText className="h-8 w-8 text-white" />
            </div>
          </motion.div>
           
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
              How Our ETL Pipeline
            </span>
            <br />
            <span className="text-white">Works</span>
          </h2>
                     
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A complete walkthrough of how your data flows from CRM task creation 
            through our intelligent processing pipeline to microservice distribution.
          </p>
        </motion.div>
         
        {/* Process Explanation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {processDetails.map((process, index) => {
            const Icon = process.icon;
                         
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl group-hover:border-blue-400/50 transition-all duration-500 relative">
                  {/* Subtle glow effect on hover */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-blue-300/20 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-700"
                  />
                   
                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
                    }}
                  />
                   
                  {/* Interactive bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-b-3xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating particles on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(6)].map((_, particleIndex) => (
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
                          y: [-10, -30, -50]
                        }}
                        transition={{
                          duration: 2,
                          delay: particleIndex * 0.1,
                          repeat: Infinity,
                          ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <motion.div
                      className={`bg-gradient-to-r ${process.gradient} p-4 rounded-2xl shadow-lg border border-white/20 flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                                         
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-black text-white">{index + 1}</span>
                        <div className="h-px bg-gradient-to-r from-blue-400 to-transparent flex-1" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {process.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-4">
                        {process.description}
                      </p>
                    </div>
                  </div>
                   
                  {/* Process Details */}
                  <div className="space-y-3 mb-6 relative z-10">
                    {process.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + detailIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm leading-relaxed">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                   
                  {/* Technology Badge */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-blue-300 text-sm font-medium">{process.tech}</span>
                    </div>
                                         
                    {index < processDetails.length - 1 && (
                      <motion.div
                        className="hidden lg:block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="h-5 w-5 text-blue-400/60" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
         
        {/* Benefits Summary */}
        <motion.div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Subtle glow effect */}
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-blue-300/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
           
          {/* Additional floating particles for the summary */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.1, 0.4, 0.1],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
              }}
            />
          ))}
           
          {/* Corner accent for summary */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
            }}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Why This Architecture?
              </h3>
                             
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Lightning-fast processing with parallel workflows" },
                  { icon: Server, text: "Scalable infrastructure that grows with your data" },
                  { icon: Clock, text: "Real-time monitoring and intelligent error handling" },
                  { icon: Database, text: "Optimized for both analytics and transactional workloads" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <benefit.icon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white/80">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
             
            <div className="text-center lg:text-right">
              <motion.div
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-2xl shadow-xl mb-6"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Database className="h-12 w-12 text-white mx-auto" />
              </motion.div>
                             
              <h4 className="text-2xl font-bold text-white mb-4">
                Ready to See It in Action?
              </h4>
                             
              <p className="text-white/70 mb-6">
                Experience the power of intelligent ETL processing
              </p>
                             
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Start Processing Data
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
                             
              <p className="text-white/50 text-sm mt-4">
                Demo: admin@tengrilake.ai / password123
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}