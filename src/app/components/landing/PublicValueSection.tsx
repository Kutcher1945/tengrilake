'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const values = [
  "Задачи, файлы и аналитика в одной системе — без Excel по почте",
  "Менеджер видит статус каждой задачи и загрузку команды в реальном времени",
  "Отчёт, который раньше делали день — теперь запрос в ClickHouse",
  "История каждого файла: кто загрузил, когда, к какой задаче",
  "Геоданные и оперативная работа связаны: задача на карте Алматы",
  "Data lineage: откуда взялись данные в дашборде — всегда известно",
];

const DOT = 'radial-gradient(rgba(55,114,255,0.12) 1px,transparent 1px)';

export default function PublicValueSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#0d1528' }}>
      <div className="absolute inset-0" style={{ backgroundImage: DOT, backgroundSize: '28px 28px', pointerEvents: 'none' }}/>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(55,114,255,0.25),transparent)' }}/>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#3772ff' }}>
              Что меняется
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              До и после{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right,#3772ff,#93c5fd)' }}>
                TengriLake
              </span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(193,211,255,0.6)' }}>
              Конкретные изменения в работе сотрудников и менеджеров городского управления.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="group flex items-start gap-4 p-5 transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg,#131d35,#1b2645)',
                  border: '1.5px solid rgba(55,114,255,0.15)',
                  borderRadius: 14,
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, borderColor: 'rgba(55,114,255,0.4)' }}
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#3772ff' }} />
                <span className="font-medium text-sm leading-snug" style={{ color: 'rgba(232,238,255,0.85)' }}>{value}</span>
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
            <div className="pl-6 py-2 text-left max-w-2xl mx-auto" style={{ borderLeft: '2px solid rgba(55,114,255,0.4)' }}>
              <p className="text-lg leading-relaxed italic" style={{ color: 'rgba(193,211,255,0.45)' }}>
                Когда данные под контролем —{' '}
                <span className="font-semibold not-italic" style={{ color: 'rgba(232,238,255,0.9)' }}>
                  решения принимаются быстрее и точнее.
                </span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
