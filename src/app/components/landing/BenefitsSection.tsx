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
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Grid overlay — no Math.random, SSR-safe */}
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex mb-6 border border-cyan-400/30 bg-cyan-400/5 p-4">
            <FileText className="h-8 w-8 text-cyan-400" />
          </div>

          <span className="block text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            ETL Pipeline
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-blue-300">
              How Our ETL Pipeline
            </span>
            {' '}
            <span className="text-white">Works</span>
          </h2>

          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            A complete walkthrough of how your data flows from CRM task creation
            through our intelligent processing pipeline to microservice distribution.
          </p>
        </motion.div>

        {/* Process Explanation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {processDetails.map((process, index) => {
            const Icon = process.icon;

            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-white/[0.02] border border-white/8 p-8 group-hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden">
                  {/* Corner pulse dot */}
                  <motion.div
                    className="absolute top-4 right-4 w-1.5 h-1.5 bg-cyan-400"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`bg-gradient-to-r ${process.gradient} p-3 flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-cyan-400/60 tracking-widest">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px bg-gradient-to-r from-cyan-400/40 to-transparent flex-1" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                        {process.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed text-sm">
                        {process.description}
                      </p>
                    </div>
                  </div>

                  {/* Process Details */}
                  <div className="space-y-2.5 mb-6">
                    {process.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                        <span className="text-white/60 text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badge */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 border border-cyan-400/20 px-3 py-1.5">
                      <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
                      <span className="text-cyan-400/70 text-xs font-mono">{process.tech}</span>
                    </div>

                    {index < processDetails.length - 1 && (
                      <motion.div
                        className="hidden lg:block"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4 text-cyan-400/40" />
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
          className="border border-white/8 hover:border-cyan-400/20 p-8 transition-colors duration-300 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-4 right-4 w-1.5 h-1.5 bg-cyan-400"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Why This Architecture?
              </h3>

              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Lightning-fast processing with parallel workflows" },
                  { icon: Server, text: "Scalable infrastructure that grows with your data" },
                  { icon: Clock, text: "Real-time monitoring and intelligent error handling" },
                  { icon: Database, text: "Optimized for both analytics and transactional workloads" }
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <benefit.icon className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-white/65 text-sm">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-block border border-cyan-400/25 p-6 mb-6">
                <Database className="h-10 w-10 text-cyan-400 mx-auto" style={{ filter: 'drop-shadow(0 0 6px rgba(6,182,212,0.5))' }} />
              </div>

              <h4 className="text-xl font-bold text-white mb-3">
                Ready to See It in Action?
              </h4>

              <p className="text-white/50 text-sm mb-6">
                Experience the power of intelligent ETL processing
              </p>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors duration-200"
                >
                  Start Processing Data
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}