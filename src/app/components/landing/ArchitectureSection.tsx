'use client';

import { motion } from 'framer-motion';
import { Server, Lock, Eye, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Server, color: '#3772ff',
    title: "Полный контроль данных",
    items: [
      "On-premise развёртывание в инфраструктуре Алматы",
      "Данные не покидают периметр города",
      "Гибридная архитектура при необходимости",
      "Независимость от облачных провайдеров",
    ],
  },
  {
    icon: Lock, color: '#a78bfa',
    title: "Безопасность",
    items: [
      "RBAC: роли для сотрудников и менеджеров",
      "Audit log: кто что сделал и когда",
      "Data lineage через OpenMetadata",
      "Шифрование данных в transit и at rest",
    ],
  },
  {
    icon: Eye, color: '#10b981',
    title: "Наблюдаемость",
    items: [
      "Grafana: мониторинг всех компонентов пайплайна",
      "OpenMetadata: каталог данных и lineage",
      "WikiJS: документация и SOP",
      "Алерты при сбоях и нарушениях качества",
    ],
  },
];

const DOT = 'radial-gradient(rgba(55,114,255,0.12) 1px,transparent 1px)';

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 relative scroll-mt-16 overflow-hidden" style={{ background: '#060b16' }}>
      <div className="absolute inset-0" style={{ backgroundImage: DOT, backgroundSize: '28px 28px', pointerEvents: 'none' }}/>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(55,114,255,0.25),transparent)' }}/>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#3772ff' }}>
            Архитектура
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Ваши данные.{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right,#3772ff,#93c5fd)' }}>
              Ваша инфраструктура.
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(193,211,255,0.55)' }}>
            TengriLake.AI разворачивается полностью на инфраструктуре Алматы. Никаких сторонних облаков — только ваши серверы.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              className="p-8 transition-all duration-300 group"
              style={{
                background: 'linear-gradient(145deg,#131d35,#1b2645)',
                border: '1.5px solid rgba(55,114,255,0.18)',
                borderRadius: 18,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: `${pillar.color}44` }}
            >
              <div className="inline-flex p-3 mb-5" style={{
                background: `${pillar.color}18`,
                border: `1.5px solid ${pillar.color}30`,
                borderRadius: 12,
              }}>
                <pillar.icon className="h-6 w-6" style={{ color: pillar.color }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-5">{pillar.title}</h3>
              <ul className="space-y-3">
                {pillar.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: pillar.color }} />
                    <span className="text-sm leading-snug" style={{ color: 'rgba(193,211,255,0.6)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-8 py-4" style={{
            border: '1.5px solid rgba(55,114,255,0.25)',
            borderRadius: 14,
            background: 'rgba(55,114,255,0.05)',
          }}>
            <span style={{ color: 'rgba(193,211,255,0.7)' }}>
              Масштабируется от одного департамента до всей городской экосистемы данных.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
