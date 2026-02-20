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
    <section id="problem" className="bg-white py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Проблематика
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Государственные данные существуют.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Интегрированной аналитики — нет.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Государственные институты работают в рамках министерств, ведомств и агентств —
            каждое из которых генерирует ценные данные. Однако:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {challenges.map((challenge, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:bg-red-50/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="p-2.5 rounded-xl bg-red-100 group-hover:bg-red-200 transition-colors flex-shrink-0">
                <challenge.icon className="h-5 w-5 text-red-500" />
              </div>
              <p className="text-gray-700 font-medium leading-snug">{challenge.text}</p>
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
          <div className="border-l-4 border-blue-600 pl-6 py-2">
            <p className="text-lg text-gray-600 italic leading-relaxed">
              По мере роста сложности раздробленные системы снижают прозрачность,
              эффективность и результативность государственной политики.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
