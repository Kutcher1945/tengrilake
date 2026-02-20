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
    <section className="bg-gradient-to-b from-blue-950 to-slate-950 py-24 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99,179,237,0.5) 1px, transparent 0)`,
          backgroundSize: '56px 56px'
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Общественная ценность
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Укрепление{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
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
                className={`flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
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
            <p className="text-white/50 text-lg italic">
              Цифровая инфраструктура становится{' '}
              <span className="text-white font-semibold not-italic">инфраструктурой государственной политики.</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
