'use client';

import { motion } from 'framer-motion';
import { Server, Lock, GitMerge, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Server,
    title: "Суверенитет данных",
    color: "blue",
    items: [
      "Развёртывание на собственной инфраструктуре",
      "Государственное облако",
      "Гибридная архитектура",
    ],
  },
  {
    icon: Lock,
    title: "Система безопасности",
    color: "indigo",
    items: [
      "Управление доступом на основе ролей (RBAC)",
      "Сквозное шифрование данных",
      "Прослеживаемость и линия данных",
      "Полное журналирование аудита",
    ],
  },
  {
    icon: GitMerge,
    title: "Совместимость",
    color: "cyan",
    items: [
      "Интеграция с унаследованными системами",
      "API-обмен данными",
      "Соответствие национальным стандартам",
    ],
  },
];

const colorMap: Record<string, { card: string; icon: string; check: string }> = {
  blue:   { card: "border-blue-200 bg-blue-50/50",   icon: "bg-blue-600",   check: "text-blue-600" },
  indigo: { card: "border-indigo-200 bg-indigo-50/50", icon: "bg-indigo-600", check: "text-indigo-600" },
  cyan:   { card: "border-cyan-200 bg-cyan-50/50",   icon: "bg-cyan-600",   check: "text-cyan-600" },
};

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-slate-50 py-24 relative scroll-mt-16">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Архитектура
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Безопасно.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Масштабируемо.
            </span>{' '}
            Суверенно.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Tengrilake.AI разработан с учётом требований государственного сектора.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, i) => {
            const colors = colorMap[pillar.color];
            return (
              <motion.div
                key={i}
                className={`rounded-2xl border p-8 ${colors.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-3 rounded-xl ${colors.icon} mb-5`}>
                  <pillar.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-5">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${colors.check}`} />
                      <span className="text-gray-700 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-blue-600 text-white rounded-2xl px-8 py-4 text-base font-medium shadow-lg">
            Платформа разработана для масштабирования от муниципальных проектов
            до национальных экосистем данных.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
