'use client';

import { motion } from 'framer-motion';
import { ClipboardList, HardDrive, Workflow, ShieldCheck, Map } from 'lucide-react';

const solutions = [
  {
    icon: ClipboardList, color: '#3772ff',
    title: "Трекер задач как точка входа данных",
    description: "Создайте задачу, назначьте исполнителя, прикрепите файл. TengriLake автоматически сохраняет метаданные в PostgreSQL и отправляет файл в S3-хранилище.",
  },
  {
    icon: HardDrive, color: '#C72E49',
    title: "S3/MinIO: все файлы в одном месте",
    description: "Excel, PDF, CSV, GeoJSON — любые вложения к задачам хранятся в иммутабельном объектном хранилище с presigned URL доступом и полной историей загрузок.",
  },
  {
    icon: Workflow, color: '#017CEE',
    title: "Airflow и n8n: данные движутся сами",
    description: "ETL-оркестратор забирает файлы из S3, парсит их через pandas/geopandas и загружает в Dirty DB. n8n обрабатывает webhooks и интеграции с внешними сервисами.",
  },
  {
    icon: ShieldCheck, color: '#FF694A',
    title: "dbt: Dirty → Clean без потерь",
    description: "SQL-модели трансформируют и дедуплицируют данные. Great Expectations проверяет качество. Только проверенные данные попадают в Clean DB и аналитические витрины.",
  },
  {
    icon: Map, color: '#10b981',
    title: "ClickHouse и PostGIS: аналитика и карта",
    description: "Мгновенные OLAP-агрегации в ClickHouse для BI-дашбордов. Пространственные витрины в PostGIS для работы с картой Алматы: QGIS, Leaflet, GeoJSON API.",
  },
];

const DOT = 'radial-gradient(rgba(55,114,255,0.12) 1px,transparent 1px)';

export default function SolutionSection() {
  return (
    <section id="solution" className="pt-10 pb-24 relative overflow-hidden scroll-mt-16" style={{ background: '#060b16' }}>
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
            Как это работает
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            От задачи —{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right,#3772ff,#93c5fd)' }}>
              до аналитики
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(193,211,255,0.6)' }}>
            Единый пайплайн: сотрудник создаёт задачу с файлом — через 7 этапов данные оказываются в витрине аналитики.
          </p>
        </motion.div>

        {/* pipeline visual */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {['Задача','S3','ETL','Dirty DB','dbt','Clean DB','Аналитика'].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2">
              <div className="px-3 py-1 text-xs font-bold" style={{
                background: i === 0 || i === arr.length - 1 ? 'rgba(55,114,255,0.2)' : 'rgba(55,114,255,0.08)',
                border: `1px solid ${i === 0 || i === arr.length - 1 ? 'rgba(55,114,255,0.5)' : 'rgba(55,114,255,0.2)'}`,
                borderRadius: 8,
                color: i === 0 || i === arr.length - 1 ? '#93c5fd' : 'rgba(193,211,255,0.6)',
              }}>{step}</div>
              {i < arr.length - 1 && <span style={{ color: 'rgba(55,114,255,0.35)', fontSize: 12 }}>→</span>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              className={`group relative p-6 transition-all duration-300 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{
                background: 'linear-gradient(145deg,#131d35,#1b2645)',
                border: '1.5px solid rgba(55,114,255,0.18)',
                borderRadius: 18,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: `${item.color}55` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-3" style={{
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}30`,
                  borderRadius: 12,
                }}>
                  <item.icon className="h-6 w-6" style={{ color: item.color }} />
                </div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black" style={{
                  background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30`,
                }}>{i + 1}</div>
              </div>
              <h3 className="text-base font-bold text-white mb-3 leading-snug">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(193,211,255,0.6)' }}>{item.description}</p>
              <div className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right,transparent,${item.color},transparent)` }}/>
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
          <div className="inline-block px-8 py-4" style={{
            border: '1.5px solid rgba(55,114,255,0.25)',
            borderRadius: 14,
            background: 'rgba(55,114,255,0.05)',
          }}>
            <p className="text-lg" style={{ color: 'rgba(193,211,255,0.75)' }}>
              Это не просто хранилище файлов.{' '}
              <span className="text-white font-bold">Это живой пайплайн городских данных.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
