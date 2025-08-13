'use client';

import { motion, Variants, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  FolderUp, 
  Database, 
  Workflow, 
  GitBranch,
  Server
} from 'lucide-react';
import { BackgroundElements } from '@/app/components/landing/ETLProcess/BackgroundElements';
import { SectionHeader } from '@/app/components/landing/ETLProcess/SectionHeader';
import { ProcessStep } from '@/app/components/landing/ETLProcess/ProcessStep';
// import { FlowArrows } from '@/app/components/landing/ETLProcess/FlowArrows';
import { StatsCard } from '@/app/components/landing/ETLProcess/StatsCard';

interface ProcessStepData {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tech: string;
  gradient: string;
}

interface Stat {
  value: string;
  label: string;
  numericValue?: number;
}

const processSteps: ProcessStepData[] = [
  {
    id: 'crm',
    icon: FolderUp,
    title: 'Task Creation Or Upload',
    description: 'Files submitted through CRM task creation system',
    tech: 'MinIO S3 Storage/Task Creation',
    gradient: 'from-blue-500 to-blue-400'
  },
  {
    id: 'airflow',
    icon: Workflow,
    title: 'ETL Orchestration and Documentation',
    description: 'Data Engineer informed and starting to build ETL pipeline. After building, the pipeline is documented in the WIKI system.',
    tech: 'Apache Airflow - Data Engineer',
    gradient: 'from-blue-400 to-blue-300'
  },
  {
    id: 'clickhouse',
    icon: Database,
    title: 'Raw Data Storage',
    description: 'Processed data stored in high-performance analytics DB',
    tech: 'ETL to ClickHouse',
    gradient: 'from-blue-300 to-white'
  },
  {
    id: 'kafka',
    icon: GitBranch,
    title: 'Data Streaming',
    description: 'Real-time data distribution to microservices',
    tech: 'Kafka + PostgreSQL/PostGIS',
    gradient: 'from-white to-blue-200'
  }
];

const stats: Stat[] = [
  { value: '10M+', label: 'Files Processed', numericValue: 10000000 },
  { value: '99.9%', label: 'Pipeline Uptime', numericValue: 99.9 },
  { value: '500TB', label: 'Data Processed', numericValue: 500 },
  { value: '<2s', label: 'Avg Processing Time', numericValue: 2 }
];

export default function ETLProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);

  // Auto-progress through steps
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-slate-950 to-blue-950 relative overflow-hidden" ref={ref}>
      <BackgroundElements />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader isInView={isInView} />

        {/* Process Flow */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* <FlowArrows isInView={isInView} /> */}

            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>

        {/* Performance Stats */}
        {/* <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div> */}

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-8 py-4 text-white/80 text-lg shadow-xl">
            <Server className="h-5 w-5 text-blue-400" />
            <span>Scalable • Reliable • Intelligent</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}