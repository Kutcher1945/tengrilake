'use client';

import { motion } from 'framer-motion';
import { HardHat, Building2, BarChart3, Map, ArrowRight } from 'lucide-react';

const cases = [
  {
    icon: HardHat, color: '#f59e0b',
    title: "Управление городской инфраструктурой",
    description: "Задачи по ремонту дорог, ЖКХ и благоустройству создаются в трекере с вложенными актами и фото. Данные автоматически попадают в аналитику по районам и подрядчикам.",
    outcome: "Полная история задач, исполнителей и файлов — в одной системе.",
  },
  {
    icon: Building2, color: '#3772ff',
    title: "Градостроительный контроль",
    description: "Согласования и инспекции оформляются как задачи. GeoJSON-границы объектов загружаются в S3 и отображаются на карте через PostGIS. История проверок хранится бессрочно.",
    outcome: "Пространственная аналитика строек прямо на карте Алматы.",
  },
  {
    icon: BarChart3, color: '#10b981',
    title: "Финансовый и исполнительский контроль",
    description: "Excel-отчёты загружаются через задачи, Airflow парсит их в Dirty DB, dbt очищает, ClickHouse агрегирует. Дашборды показывают расходы и исполнение бюджета в реальном времени.",
    outcome: "Автоматические отчёты вместо ручного сведения таблиц.",
  },
  {
    icon: Map, color: '#a78bfa',
    title: "Геопространственный анализ районов",
    description: "PostGIS хранит данные в SRID 4326. Leaflet, QGIS и MapLibre подключаются к GeoJSON REST API. Аналитика по районам, кварталам и объектам прямо на карте города.",
    outcome: "Принятие решений с опорой на пространственные данные.",
  },
];

const DOT = 'radial-gradient(rgba(55,114,255,0.12) 1px,transparent 1px)';

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 relative overflow-hidden scroll-mt-16" style={{ background: '#0d1528' }}>
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
            Сценарии применения
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Реальные задачи Алматы
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(193,211,255,0.55)' }}>
            TengriLake.AI не абстрактная платформа — это инструмент для конкретных задач городского управления.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              className="group relative p-8 transition-all duration-300 overflow-hidden"
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
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 rounded-full"
                style={{ background: item.color }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
              <div className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right,transparent,${item.color},transparent)` }}/>

              <div className="inline-flex p-3 mb-5" style={{
                background: `${item.color}18`,
                border: `1.5px solid ${item.color}30`,
                borderRadius: 12,
              }}>
                <item.icon className="h-6 w-6" style={{ color: item.color }} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(193,211,255,0.6)' }}>{item.description}</p>

              <div className="flex items-center gap-2 text-sm pt-4" style={{ borderTop: '1px solid rgba(55,114,255,0.15)' }}>
                <ArrowRight className="h-4 w-4 flex-shrink-0" style={{ color: item.color }} />
                <span className="font-medium" style={{ color: `${item.color}cc` }}>
                  {item.outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
