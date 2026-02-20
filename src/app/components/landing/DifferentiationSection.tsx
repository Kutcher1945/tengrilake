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
    <section id="advantages" className="bg-white py-24 relative scroll-mt-16">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Наши преимущества
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Создано для{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              государственных институтов
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-6 p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <div className="p-3 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <item.icon className="h-7 w-7 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
