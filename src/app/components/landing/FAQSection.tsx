'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Что такое TengriLake.AI?",
    answer: "TengriLake.AI — платформа управления городскими данными, разработанная для Алматы. Объединяет трекер задач, S3-хранилище файлов, автоматизированный ETL-пайплайн и аналитические витрины в единый инструмент. Сотрудники создают задачи с файлами, платформа автоматически обрабатывает данные и предоставляет аналитику.",
  },
  {
    question: "Как устроен процесс обработки данных?",
    answer: "Task Tracker → S3/MinIO (хранение файлов) → Airflow/n8n (ETL, парсинг) → Dirty DB (сырые данные) → dbt (валидация и трансформация) → Clean DB (чистые данные) → ClickHouse и PostGIS (аналитические витрины и карта). Весь пайплайн автоматизирован — участие сотрудника заканчивается после загрузки файла.",
  },
  {
    question: "Какие форматы файлов поддерживаются?",
    answer: "Excel (.xlsx, .xls), PDF, CSV, GeoJSON и другие форматы загружаются через Task Tracker и хранятся в S3/MinIO. Airflow парсит их через pandas и geopandas. Геофайлы (GeoJSON, Shapefile) автоматически попадают в PostGIS для работы с картой.",
  },
  {
    question: "Где физически хранятся данные?",
    answer: "Полностью on-premise. Все компоненты — MinIO, PostgreSQL, ClickHouse, Airflow — разворачиваются в инфраструктуре Алматы. Данные не покидают периметр города и не передаются в облачные сервисы. При необходимости поддерживается гибридная архитектура.",
  },
  {
    question: "Можно ли интегрировать с существующими системами?",
    answer: "Да. n8n обеспечивает интеграцию через webhooks и REST API с любыми внешними системами города. Airflow может читать данные из любых источников — баз данных, API, файловых систем. Новые интеграции добавляются без изменения основного пайплайна.",
  },
  {
    question: "Сколько времени занимает внедрение?",
    answer: "Базовое развёртывание всех компонентов пайплайна занимает 8–12 недель: Task Tracker, S3, Airflow/n8n, PostgreSQL (Dirty/Clean), dbt, ClickHouse, PostGIS, OpenMetadata, Grafana. Затем — настройка ролей, онбординг сотрудников и первые рабочие DAG-и для обработки данных.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="transition-all duration-200 overflow-hidden"
      style={{
        border: `1.5px solid ${open ? 'rgba(55,114,255,0.4)' : 'rgba(55,114,255,0.15)'}`,
        borderRadius: 14,
        background: open ? 'linear-gradient(145deg,#131d35,#1b2645)' : 'rgba(19,29,53,0.4)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-base leading-snug" style={{ color: open ? '#fff' : 'rgba(232,238,255,0.85)' }}>
          {question}
        </span>
        <span className="flex-shrink-0 p-1 transition-all duration-200" style={{
          border: `1px solid ${open ? 'rgba(55,114,255,0.5)' : 'rgba(55,114,255,0.2)'}`,
          color: open ? '#3772ff' : 'rgba(193,211,255,0.4)',
          borderRadius: 7,
        }}>
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-7 pb-6 pt-1" style={{ borderTop: '1px solid rgba(55,114,255,0.15)' }}>
              <p className="leading-relaxed text-sm" style={{ color: 'rgba(193,211,255,0.6)' }}>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const DOT = 'radial-gradient(rgba(55,114,255,0.12) 1px,transparent 1px)';

export default function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#060b16' }}>
      <div className="absolute inset-0" style={{ backgroundImage: DOT, backgroundSize: '28px 28px', pointerEvents: 'none' }}/>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(55,114,255,0.25),transparent)' }}/>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#3772ff' }}>
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Частые{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right,#3772ff,#93c5fd)' }}>
              вопросы
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(193,211,255,0.55)' }}>
            Всё, что нужно знать о платформе перед началом работы.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>

        {/* Logo showcase */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: 'rgba(55,114,255,0.15)' }}/>
            <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: 'rgba(55,114,255,0.5)' }}>
              Все варианты логотипа
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(55,114,255,0.15)' }}/>
          </div>

          {/* Dark background logos */}
          <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'rgba(193,211,255,0.35)' }}>
            На тёмном фоне
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
            {[
              { src: '/logo/logo-white-letters.png',   label: 'Горизонтальный', w: 200, h: 44 },
              { src: '/logo/logo-white-letters2.png',  label: 'Вариант 2',      w: 200, h: 44 },
              { src: '/logo/logo-white-letters23.png', label: 'Вариант 3',      w: 200, h: 44 },
            ].map(({ src, label, w, h }) => (
              <div key={src} className="flex flex-col items-center gap-2 p-5" style={{
                background: 'linear-gradient(145deg,#131d35,#1b2645)',
                border: '1.5px solid rgba(55,114,255,0.2)',
                borderRadius: 14,
              }}>
                <Image src={src} alt={label} width={w} height={h} className="object-contain max-h-10" />
                <span className="text-xs" style={{ color: 'rgba(193,211,255,0.3)' }}>{label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { src: '/logo/logo-white-letters3.png', label: 'Компактный',  w: 130, h: 36 },
              { src: '/logo/logo-white.png',          label: 'Знак белый',  w: 44,  h: 58 },
              { src: '/logo/logo.svg',                label: 'SVG вектор',  w: 44,  h: 58 },
            ].map(({ src, label, w, h }) => (
              <div key={src} className="flex flex-col items-center gap-2 p-5" style={{
                background: 'linear-gradient(145deg,#131d35,#1b2645)',
                border: '1.5px solid rgba(55,114,255,0.2)',
                borderRadius: 14,
              }}>
                <Image src={src} alt={label} width={w} height={h} className="object-contain max-h-12" />
                <span className="text-xs" style={{ color: 'rgba(193,211,255,0.3)' }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Light background logos */}
          <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'rgba(193,211,255,0.35)' }}>
            На светлом фоне
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
            {[
              { src: '/logo/logo-black-letters.png',   label: 'Горизонтальный', w: 200, h: 44 },
              { src: '/logo/logo-black-letters2.png',  label: 'Вариант 2',      w: 200, h: 44 },
              { src: '/logo/logo-black-letters23.png', label: 'Вариант 3',      w: 200, h: 44 },
            ].map(({ src, label, w, h }) => (
              <div key={src} className="flex flex-col items-center gap-2 p-5" style={{
                background: '#f0f4ff',
                border: '1.5px solid rgba(55,114,255,0.15)',
                borderRadius: 14,
              }}>
                <Image src={src} alt={label} width={w} height={h} className="object-contain max-h-10" />
                <span className="text-xs" style={{ color: 'rgba(30,58,138,0.45)' }}>{label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: '/logo/logo.png',   label: 'Знак цветной', w: 48, h: 64 },
              { src: '/logo/logo3.png',  label: 'Компактный',   w: 130, h: 36 },
            ].map(({ src, label, w, h }) => (
              <div key={src} className="flex flex-col items-center gap-2 p-5" style={{
                background: '#f0f4ff',
                border: '1.5px solid rgba(55,114,255,0.15)',
                borderRadius: 14,
              }}>
                <Image src={src} alt={label} width={w} height={h} className="object-contain max-h-12" />
                <span className="text-xs" style={{ color: 'rgba(30,58,138,0.45)' }}>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
