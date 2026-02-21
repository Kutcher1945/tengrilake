'use client';

import { motion } from 'framer-motion';
import { Link2, TrendingUp, Activity, Target, Building2 } from 'lucide-react';

const solutions = [
  {
    icon: Link2,
    title: "Межминистерская интеграция данных",
    description: "Безопасная консолидация наборов данных между ведомствами и департаментами в единое управляемое пространство.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Стратегическое планирование и моделирование",
    description: "Инструменты прогнозирования и сценарного моделирования для инфраструктуры, здравоохранения, финансов и городского развития.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Activity,
    title: "Оперативный мониторинг",
    description: "Панели мониторинга в реальном времени для отслеживания производительности и качества предоставления государственных услуг.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Target,
    title: "Оценка воздействия политики",
    description: "Аналитическая оценка эффективности государственных программ и инициатив на основе объективных данных.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: Building2,
    title: "Долгосрочный институциональный потенциал",
    description: "Устойчивая архитектура, обеспечивающая непрерывную цифровую модернизацию государственного управления.",
    gradient: "from-violet-500 to-blue-600",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="bg-slate-950 pt-10 pb-24 relative overflow-hidden scroll-mt-16">
      {/* Shared grid — same pattern as ProblemSection, no seam */}
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
      {/* No top separator — bleeds into ProblemSection above */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            Решение
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Единая основа данных{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              для государственного управления
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Tengrilake.AI обеспечивает централизованную цифровую инфраструктуру государственного уровня,
            поддерживающую:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              className={`group relative p-6 border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-400/30 transition-all duration-300 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className={`inline-flex p-3 bg-gradient-to-br ${item.gradient} mb-4`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block border-t border-b border-white/20 py-4 px-8">
            <p className="text-white/70 text-lg">
              Это не просто аналитика.{' '}
              <span className="text-white font-bold">Это институциональная цифровая инфраструктура.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
