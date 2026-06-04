'use client';

import { motion } from 'framer-motion';
import {
  SiApacheairflow, SiN8N, SiPostgresql, SiMinio, SiClickhouse, SiDbt,
} from 'react-icons/si';

const technologies = [
  {
    Icon: SiMinio,
    name: 'S3 / MinIO',
    category: 'Raw Storage',
    color: '#C72E49',
    description: 'Все файлы задач — Excel, PDF, CSV, GeoJSON — хранятся в иммутабельном объектном хранилище. Полная история загрузок, presigned URL для безопасного доступа.',
    features: ['S3 Compatible API', 'Presigned URL доступ', 'tasktracker-cdn bucket'],
  },
  {
    Icon: SiApacheairflow,
    name: 'Apache Airflow',
    category: 'ETL Orchestration',
    color: '#017CEE',
    description: 'Читает файлы из S3, парсит через pandas/geopandas и загружает в Dirty DB. DAG-ориентированная оркестрация с retry-логикой и мониторингом.',
    features: ['DAG-оркестрация', 'Pandas/GeoPandas парсинг', 'Scheduling и retry'],
  },
  {
    Icon: SiClickhouse,
    name: 'ClickHouse',
    category: 'Analytics Mart',
    color: '#FFCC01',
    description: 'Аналитические витрины для BI-дашбордов: агрегации за миллисекунды, поддержка Superset и Metabase. Данные поступают из Clean DB после проверки dbt.',
    features: ['OLAP колоночная БД', 'Агрегации за мс', 'BI · Superset · Metabase'],
  },
  {
    Icon: SiN8N,
    name: 'n8n',
    category: 'Low-code Automation',
    color: '#EA4B71',
    description: 'Визуальные воркфлоу для event-driven интеграций. Webhooks от Task Tracker, уведомления в Telegram, синхронизация с внешними API города.',
    features: ['Webhooks из Task Tracker', 'Telegram уведомления', 'Event-driven триггеры'],
  },
  {
    Icon: SiPostgresql,
    name: 'PostgreSQL / PostGIS',
    category: 'Dirty · Clean · GIS',
    color: '#336791',
    description: 'Три роли: Dirty DB (сырые данные), Clean DB (после dbt-валидации), PostGIS Mart (пространственные витрины для карты Алматы в QGIS, Leaflet, MapLibre).',
    features: ['Dirty → Clean слои', 'PostGIS пространственный анализ', 'SRID 4326 геоданные'],
  },
  {
    Icon: SiDbt,
    name: 'dbt / Validation',
    category: 'Data Quality',
    color: '#FF694A',
    description: 'SQL-модели трансформируют данные из Dirty в Clean DB. Great Expectations проверяет качество и дедуплицирует. Алерты при нарушении правил.',
    features: ['Dirty → Clean трансформация', 'Great Expectations checks', 'Data lineage tracking'],
  },
];

const DOT = 'radial-gradient(rgba(55,114,255,0.12) 1px,transparent 1px)';

export default function FeaturesSection() {
  return (
    <section id="stack" className="py-24 relative overflow-hidden scroll-mt-16" style={{ background: '#0d1528' }}>
      <div className="absolute inset-0" style={{ backgroundImage: DOT, backgroundSize: '28px 28px', pointerEvents: 'none' }}/>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(55,114,255,0.25),transparent)' }}/>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%,rgba(55,114,255,0.05),transparent)',
        pointerEvents: 'none',
      }}/>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#3772ff' }}>
            Технологический стек
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Открытые инструменты.{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right,#3772ff,#93c5fd)' }}>
              Проверенные в бою.
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(193,211,255,0.55)' }}>
            TengriLake.AI построен на open-source инструментах, которые используют ведущие data-платформы мира. Никакого vendor lock-in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              className="group relative p-6 transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg,#131d35,#1b2645)',
                border: '1.5px solid rgba(55,114,255,0.18)',
                borderRadius: 18,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: `${tech.color}55`, boxShadow: `0 16px 40px ${tech.color}20` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{
                  background: `${tech.color}18`,
                  border: `1.5px solid ${tech.color}35`,
                  borderRadius: 12,
                }}>
                  <tech.Icon size={22} style={{ color: tech.color }} />
                </div>
                <div>
                  <h3 className="text-base font-black text-white leading-tight">{tech.name}</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 mt-1 inline-block" style={{
                    background: `${tech.color}15`, color: tech.color,
                    border: `1px solid ${tech.color}28`, borderRadius: 6,
                  }}>{tech.category}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(193,211,255,0.6)' }}>
                {tech.description}
              </p>

              <div className="flex flex-col gap-2">
                {tech.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: tech.color }} />
                    <span className="text-xs font-medium" style={{ color: 'rgba(193,211,255,0.7)' }}>{f}</span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right,transparent,${tech.color},transparent)` }}/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
