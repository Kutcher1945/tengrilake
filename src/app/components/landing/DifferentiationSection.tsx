'use client';

import { motion } from 'framer-motion';
import { Wrench, Lock, Puzzle, TrendingUp } from 'lucide-react';

const items = [
  {
    icon: Wrench, color: '#3772ff',
    title: "Сделан под Алматы, не адаптирован",
    description: "TengriLake — не готовое западное решение, натянутое на городские процессы. Пайплайн, роли, интеграции и дашборды спроектированы именно под задачи городского управления Алматы.",
  },
  {
    icon: Lock, color: '#10b981',
    title: "Никакого vendor lock-in",
    description: "MinIO, Airflow, PostgreSQL, ClickHouse, dbt — всё open-source. Данные хранятся в открытых форматах. Вы не зависите ни от одного вендора и можете заменить любой компонент.",
  },
  {
    icon: Puzzle, color: '#a78bfa',
    title: "Интеграция с любыми источниками",
    description: "n8n подключается к любым городским системам через webhooks и REST API. Airflow читает файлы из любых форматов. Новые источники данных добавляются без переработки пайплайна.",
  },
  {
    icon: TrendingUp, color: '#f59e0b',
    title: "Растёт вместе с городом",
    description: "Начните с одного департамента — масштабируйте на весь город. Архитектура Dirty/Clean/Mart и OpenMetadata позволяют добавлять новые источники данных без деградации качества.",
  },
];

const DOT = 'radial-gradient(rgba(55,114,255,0.12) 1px,transparent 1px)';

export default function DifferentiationSection() {
  return (
    <section id="advantages" className="py-24 relative overflow-hidden scroll-mt-16" style={{ background: '#060b16' }}>
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
            Почему TengriLake
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Не ещё одна{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right,#3772ff,#93c5fd)' }}>
              BI-платформа
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(193,211,255,0.55)' }}>
            TengriLake — это полный пайплайн от создания задачи до аналитической витрины, а не просто дашборды поверх чужих данных.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="group flex gap-6 p-8 transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg,#131d35,#1b2645)',
                border: '1.5px solid rgba(55,114,255,0.18)',
                borderRadius: 18,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: `${item.color}44` }}
            >
              <div className="flex-shrink-0">
                <div className="p-3 transition-colors" style={{
                  background: `${item.color}18`,
                  border: `1.5px solid ${item.color}30`,
                  borderRadius: 12,
                }}>
                  <item.icon className="h-7 w-7" style={{ color: item.color }} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="leading-relaxed text-sm" style={{ color: 'rgba(193,211,255,0.6)' }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
