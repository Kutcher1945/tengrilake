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
  blue:   { card: "border-blue-400/20 hover:border-blue-400/40",   icon: "text-blue-400",   check: "text-blue-400" },
  indigo: { card: "border-indigo-400/20 hover:border-indigo-400/40", icon: "text-indigo-400", check: "text-indigo-400" },
  cyan:   { card: "border-cyan-400/20 hover:border-cyan-400/40",   icon: "text-cyan-400",   check: "text-cyan-400" },
};

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-black py-24 relative scroll-mt-16 overflow-hidden">
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
            Архитектура
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Безопасно.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Масштабируемо.
            </span>{' '}
            Суверенно.
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Tengrilake.AI разработан с учётом требований государственного сектора.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => {
            const colors = colorMap[pillar.color];
            return (
              <motion.div
                key={i}
                className={`border p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 ${colors.card}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-2.5 border border-white/10 mb-5`}>
                  <pillar.icon className={`h-6 w-6 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-5">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${colors.check}`} />
                      <span className="text-white/55 text-sm leading-snug">{item}</span>
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
          <div className="inline-block border border-cyan-400/30 text-white/70 px-8 py-4 text-base">
            Платформа разработана для масштабирования от муниципальных проектов
            до национальных экосистем данных.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
