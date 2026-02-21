'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const values = [
  "Более быстрое и обоснованное принятие решений",
  "Повышение прозрачности государственного управления",
  "Улучшение распределения государственных ресурсов",
  "Усиление межведомственного сотрудничества",
  "Укрепление доверия к государственным институтам",
];

export default function PublicValueSection() {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
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
        <div className="max-w-5xl mx-auto">

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
              Общественная ценность
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Укрепление{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                прозрачности
              </span>{' '}
              и подотчётности
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Обеспечивая интегрированные экосистемы данных, Tengrilake.AI поддерживает:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className={`group flex items-center gap-4 p-5 border border-white/8 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-300 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white/80 font-medium text-sm leading-snug">{value}</span>
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
            <div className="border-l-2 border-cyan-400/40 pl-6 py-2 text-left max-w-2xl mx-auto">
              <p className="text-white/40 text-lg leading-relaxed italic">
                Цифровая инфраструктура становится{' '}
                <span className="text-white font-semibold not-italic">инфраструктурой государственной политики.</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
