'use client';

import { motion } from 'framer-motion';
import { GitBranch, FileText, BarChart2, AlertTriangle, Users, Shield } from 'lucide-react';

const challenges = [
  { icon: GitBranch, text: "Данные разрознены по ведомствам и системам" },
  { icon: FileText, text: "Отчётность ведётся вручную и требует значительных ресурсов" },
  { icon: BarChart2, text: "Стратегическое планирование лишено интегрированной аналитики" },
  { icon: AlertTriangle, text: "Инфраструктурные решения принимаются на основе неполных данных" },
  { icon: Users, text: "Межведомственная координация ограничена" },
  { icon: Shield, text: "Системы управления данными непоследовательны" },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-slate-950 pt-24 pb-10 scroll-mt-16 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            Проблематика
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Государственные данные существуют.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Интегрированной аналитики — нет.
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Государственные институты работают в рамках министерств, ведомств и агентств —
            каждое из которых генерирует ценные данные. Однако:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {challenges.map((challenge, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-5 border border-white/8 hover:border-red-400/25 hover:bg-red-500/[0.04] transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-red-500/10 border border-red-500/15 group-hover:border-red-400/30 flex-shrink-0 transition-colors">
                <challenge.icon className="h-5 w-5 text-red-400/80" />
              </div>
              <p className="text-white/55 font-medium leading-snug">{challenge.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-l-2 border-cyan-400/40 pl-6 py-2">
            <p className="text-white/40 text-lg leading-relaxed italic">
              По мере роста сложности раздробленные системы снижают прозрачность,
              эффективность и результативность государственной политики.
            </p>
          </div>
        </motion.div>

        {/* Transition bridge → Solution */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-white/20 text-xs font-mono tracking-[0.4em] uppercase">Tengrilake.AI решает это</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-cyan-400/30 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            style={{ originY: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

      </div>
    </section>
  );
}
