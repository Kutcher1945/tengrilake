import { motion, Variants, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import React from 'react';
import { CheckCircle, Clock, AlertCircle, Zap } from 'lucide-react';

interface ProcessStepProps {
  step: {
    id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tech: string;
  gradient: string;
  };
  index: number;
  isActive: boolean;
  isInView: boolean;
}

const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

const progressVariants: Variants = {
  initial: { scaleX: 0, opacity: 0.3 },
  active: { 
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  completed: {
    scaleX: 1,
    opacity: 0.8
  }
};

export function ProcessStep({ step, index, isActive, isInView }: ProcessStepProps) {
  const Icon = step.icon;
  
  // Create a more dynamic pipeline that progresses over time
  const [currentActiveStep, setCurrentActiveStep] = React.useState(0);
  
  React.useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentActiveStep((prev) => (prev + 1) % 4);
      }, 4000); // Change every 4 seconds
      return () => clearInterval(interval);
    }
  }, [isInView]);
  
  // More realistic status progression based on current active step
  const getStatus = () => {
    if (index < currentActiveStep) {
      // Previous steps are completed
      return { label: 'Completed', icon: CheckCircle, color: 'emerald' };
    }
    if (index === currentActiveStep) {
      // Current step is processing
      if (index === 0) return { label: 'Creating task/Uploading files', icon: Zap, color: 'blue' };
      if (index === 1) return { label: 'Processing ETL', icon: Zap, color: 'blue' };
      if (index === 2) return { label: 'Storing Data', icon: Zap, color: 'blue' };
      if (index === 3) return { label: 'Streaming Data', icon: Zap, color: 'blue' };
    }
    // Future steps are pending
    return { label: 'Pending', icon: Clock, color: 'slate' };
  };
  
  const status = getStatus();
  const StatusIcon = status.icon;
  
  // Determine visual states
  const isCompleted = index < currentActiveStep;
  const isProcessing = index === currentActiveStep;
  const isPending = index > currentActiveStep;
  
  return (
    <motion.div
      className="relative group"
      variants={containerVariants}
      whileHover="hover"
    >
      {/* Connection line to next step */}
      {index < 3 && (
        <div className="hidden xl:block absolute top-20 left-full w-8 h-px bg-slate-200 z-0">
          <motion.div
            className={`h-full origin-left ${
              index < currentActiveStep ? 'bg-emerald-400' : 
              index === currentActiveStep ? 'bg-gradient-to-r from-blue-500 to-blue-300' : 
              'bg-slate-300'
            }`}
            variants={progressVariants}
            initial="initial"
            animate={
              index < currentActiveStep ? "completed" : 
              index === currentActiveStep ? "active" : 
              "initial"
            }
          />
        </div>
      )}

      {/* Main card */}
      <motion.div
        className={`
          relative bg-white rounded-2xl border-2 shadow-lg transition-all duration-500
          ${isCompleted 
            ? 'border-emerald-200 shadow-emerald-100/50 bg-emerald-50/30' 
            : isProcessing 
            ? 'border-blue-300 shadow-blue-200/50 bg-blue-50/30' 
            : 'border-slate-200 shadow-slate-100/50 hover:border-blue-200'
          }
        `}
        layout
      >
        
        {/* Header section */}
        <div className="p-4 pb-3">
          {/* Step number and status */}
          <div className="flex items-center justify-between mb-3">
            <motion.div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md
                ${isCompleted 
                  ? 'bg-emerald-500 text-white' 
                  : isProcessing 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-slate-200 text-slate-600'
                }
              `}
              animate={isProcessing ? {
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 2px 8px rgba(59, 130, 246, 0.3)",
                  "0 4px 16px rgba(59, 130, 246, 0.4)",
                  "0 2px 8px rgba(59, 130, 246, 0.3)"
                ]
              } : isCompleted ? {
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 2px 8px rgba(16, 185, 129, 0.3)",
                  "0 4px 12px rgba(16, 185, 129, 0.4)",
                  "0 2px 8px rgba(16, 185, 129, 0.3)"
                ]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
              }}
            >
              {index + 1}
            </motion.div>
            
            <motion.div
              className={`
                flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border
                ${isCompleted 
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                  : isProcessing 
                  ? 'bg-blue-100 text-blue-800 border-blue-200' 
                  : 'bg-slate-100 text-slate-600 border-slate-200'
                }
              `}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <StatusIcon className="w-3 h-3" />
              {status.label}
            </motion.div>
          </div>

          {/* Icon and title section */}
          <div className="flex items-start gap-3 mb-3">
            <motion.div
              className={`
                p-3 rounded-lg shadow-sm transition-all duration-300 flex-shrink-0
                ${isCompleted 
                  ? 'bg-emerald-500 shadow-emerald-200' 
                  : isProcessing 
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200' 
                  : 'bg-slate-100 shadow-slate-200 group-hover:bg-slate-200'
                }
              `}
              animate={isProcessing ? {
                rotate: [0, 3, -3, 0],
                scale: [1, 1.03, 1]
              } : isCompleted ? {
                scale: [1, 1.01, 1]
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
              }}
            >
              <Icon className={`h-5 w-5 ${
                isCompleted || isProcessing ? 'text-white' : 'text-slate-600'
              }`} />
            </motion.div>
            
            <div className="flex-1 min-w-0">
              <motion.h3
                className={`text-lg font-bold mb-1.5 transition-colors duration-300 leading-tight ${
                  isCompleted ? 'text-emerald-900' : 
                  isProcessing ? 'text-blue-900' : 
                  'text-slate-900'
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {step.title}
              </motion.h3>
              
              <motion.p
                className="text-slate-600 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {step.description}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="px-4 pb-4">
          {/* Technology stack with embedded progress */}
          <motion.div
            className={`
              relative overflow-hidden rounded-lg text-xs font-medium border transition-all duration-300
              ${isCompleted 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                : isProcessing 
                ? 'bg-blue-50 text-blue-700 border-blue-200' 
                : 'bg-slate-50 text-slate-700 border-slate-200 group-hover:bg-slate-100'
              }
            `}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {/* Progress bar inside tech card */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/5 rounded-b-lg overflow-hidden">
              <motion.div
                className={`h-full ${
                  isCompleted ? 'bg-emerald-500' : 
                  isProcessing ? 'bg-gradient-to-r from-blue-500 to-blue-400' : 
                  'bg-slate-300'
                }`}
                initial={{ width: "0%" }}
                animate={{ 
                  width: isCompleted ? "100%" : 
                        isProcessing ? "75%" : 
                        "0%"
                }}
                transition={{ 
                  duration: isProcessing ? 3 : 0.8, 
                  ease: "easeOut",
                  delay: isProcessing ? 0.5 : 0
                }}
              />
            </div>
            
            {/* Tech card content */}
            <div className="flex items-center gap-2 px-3 py-2">
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  isCompleted ? 'bg-emerald-500' : 
                  isProcessing ? 'bg-blue-500' : 
                  'bg-slate-400'
                }`}
                animate={isProcessing ? {
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7]
                } : isCompleted ? {
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                } : {}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
                }}
              />
              <span className="font-medium truncate">{step.tech}</span>
            </div>
          </motion.div>

          {/* Status indicators below tech card */}
          <div className="mt-3 flex justify-center">
            {/* Processing indicator */}
            {isProcessing && (
              <motion.div
                className="flex items-center gap-1.5 text-blue-600 text-xs font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span>{status.label}...</span>
              </motion.div>
            )}

            {/* Completion indicator */}
            {isCompleted && (
              <motion.div
                className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="w-3 h-3" />
                <span>Complete</span>
              </motion.div>
            )}

            {/* Pending indicator */}
            {isPending && (
              <motion.div
                className="flex items-center gap-1.5 text-slate-500 text-xs font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="w-3 h-3" />
                <span>Pending</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Remove the main card progress bar since it's now in tech cards */}
        {/* Subtle glow for active states */}
        {(isProcessing || isCompleted) && (
          <motion.div
            className={`absolute inset-0 rounded-2xl pointer-events-none ${
              isProcessing ? 'bg-blue-400/10' : 'bg-emerald-400/10'
            }`}
            animate={{
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
            }}
          />
        )}
      </motion.div>

      {/* Mobile connection indicator */}
      {index < 3 && (
        <div className="xl:hidden flex justify-center py-3">
          <motion.div
            className={`w-1 h-6 rounded-full transition-colors duration-500 ${
              isCompleted ? 'bg-emerald-400' : 
              isProcessing ? 'bg-blue-500' : 
              'bg-slate-300'
            }`}
            animate={(isProcessing || isCompleted) ? {
              scaleY: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number]
            }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default ProcessStep;