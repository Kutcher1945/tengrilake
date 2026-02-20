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
    bg: "from-rose-950/40 to-pink-950/30",
  },
  {
    icon: Building2,
    title: "Городское планирование и умные города",
    description: "Интеграция данных о транспорте, коммунальных услугах, землепользовании и населении для поддержки устойчивого городского развития.",
    outcome: "Координированное планирование и улучшение общественных услуг.",
    gradient: "from-blue-500 to-cyan-600",
    bg: "from-blue-950/40 to-cyan-950/30",
  },
  {
    icon: PiggyBank,
    title: "Бюджетный и финансовый контроль",
    description: "Централизация фискальных данных и автоматизация отчётности для повышения прозрачности и подотчётности государственного управления.",
    outcome: "Совершенствование управления государственными финансами.",
    gradient: "from-emerald-500 to-teal-600",
    bg: "from-emerald-950/40 to-teal-950/30",
  },
  {
    icon: Users,
    title: "Мониторинг социальных программ",
    description: "Отслеживание эффективности программ и выявление пробелов в социальном обслуживании через интегрированную аналитику.",
    outcome: "Оптимизация социальной политики на основе данных.",
    gradient: "from-violet-500 to-indigo-600",
    bg: "from-violet-950/40 to-indigo-950/30",
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="bg-slate-950 py-24 relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
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
              className={`group relative rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${item.bg} hover:border-white/20 transition-all duration-300 overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-5 shadow-lg`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{item.description}</p>

              {/* Outcome */}
              <div className="flex items-center gap-2 text-sm">
                <ArrowRight className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-blue-300 font-medium">
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
