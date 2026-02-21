'use client';

import { motion } from 'framer-motion';
import { HeartPulse, Building2, PiggyBank, Users, ArrowRight } from 'lucide-react';

const cases = [
  {
    icon: HeartPulse,
    title: "Планирование системы здравоохранения",
    description: "Моделирование спроса на медицинские учреждения, оптимизация сети и распределение ресурсов на основе демографических и эпидемиологических данных.",
    outcome: "Инвестиции в инфраструктуру на основе доказательных данных.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Building2,
    title: "Городское планирование и умные города",
    description: "Интеграция данных о транспорте, коммунальных услугах, землепользовании и населении для поддержки устойчивого городского развития.",
    outcome: "Координированное планирование и улучшение общественных услуг.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: PiggyBank,
    title: "Бюджетный и финансовый контроль",
    description: "Централизация фискальных данных и автоматизация отчётности для повышения прозрачности и подотчётности государственного управления.",
    outcome: "Совершенствование управления государственными финансами.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Users,
    title: "Мониторинг социальных программ",
    description: "Отслеживание эффективности программ и выявление пробелов в социальном обслуживании через интегрированную аналитику.",
    outcome: "Оптимизация социальной политики на основе данных.",
    gradient: "from-violet-500 to-indigo-600",
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="bg-slate-950 py-24 relative overflow-hidden scroll-mt-16">
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
            Применение
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Сценарии применения
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            Реальные задачи государственного управления, решаемые платформой.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              className="group relative p-8 border border-white/8 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Corner pulse dot */}
              <motion.div
                className="absolute top-4 right-4 w-1.5 h-1.5 bg-cyan-400"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className={`inline-flex p-3 bg-gradient-to-br ${item.gradient} mb-5`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-200">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{item.description}</p>

              {/* Outcome */}
              <div className="flex items-center gap-2 text-sm border-t border-white/8 pt-4">
                <ArrowRight className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-cyan-400/80 font-medium">
                  Результат: {item.outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
