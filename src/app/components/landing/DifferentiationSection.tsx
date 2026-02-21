'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, BrainCircuit, Layers } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: "Государственное управление данными",
    description: "Структурированное управление, контроль доступа и нормативно-правовые механизмы соответствия.",
  },
  {
    icon: Clock,
    title: "Институциональная преемственность",
    description: "Создано для долгосрочного использования в государственном управлении — не для краткосрочных проектов.",
  },
  {
    icon: BrainCircuit,
    title: "Стратегический консультативный потенциал",
    description: "За рамками технологий — поддержка методологии, моделирования и аналитических подходов.",
  },
  {
    icon: Layers,
    title: "Масштабируемость на всех уровнях власти",
    description: "Возможность развёртывания на муниципальном, региональном и национальном уровнях.",
  },
];

export default function DifferentiationSection() {
  return (
    <section id="advantages" className="bg-black py-24 relative overflow-hidden scroll-mt-16">
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
            Наши преимущества
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Создано для{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              государственных институтов
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="group flex gap-6 p-8 border border-white/8 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                  <item.icon className="h-7 w-7 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
