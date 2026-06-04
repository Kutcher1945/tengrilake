'use client';

import { motion } from 'framer-motion';
import { FolderOpen, ClipboardX, BarChart2, FileX, Compass, History } from 'lucide-react';

const challenges = [
  { icon: ClipboardX,  text: "Задачи создаются в одной системе, файлы хранятся в другой, аналитика — в третьей" },
  { icon: FileX,       text: "Файлы теряются при передаче: Excel по почте, PDF в мессенджерах, CSV на рабочем столе" },
  { icon: BarChart2,   text: "Отчёты составляются вручную — часы работы вместо минутного запроса к базе" },
  { icon: FolderOpen,  text: "Менеджеры не видят реальную загрузку команды и статусы задач в реальном времени" },
  { icon: Compass,     text: "Геоданные и оперативные данные не связаны: карта живёт отдельно от работы" },
  { icon: History,     text: "Нет прослеживаемости: кто что изменил, когда загрузил файл и почему статус поменялся" },
];

const DOT = 'radial-gradient(rgba(55,114,255,0.12) 1px,transparent 1px)';

export default function ProblemSection() {
  return (
    <section id="problem" className="pt-24 pb-10 scroll-mt-16 relative overflow-hidden" style={{ background: '#0d1528' }}>
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
            Проблематика
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Данные в городе есть.{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right,#3772ff,#93c5fd)' }}>
              Порядка в них — нет.
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(193,211,255,0.55)' }}>
            Каждый департамент работает в своей системе, генерирует ценные данные — но они нигде не собираются в единую картину. Знакомо?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {challenges.map((challenge, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-5 group transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg,#131d35,#1b2645)',
                border: '1.5px solid rgba(55,114,255,0.15)',
                borderRadius: 16,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, borderColor: 'rgba(239,68,68,0.3)' }}
            >
              <div className="p-2 flex-shrink-0" style={{
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.2)',
                borderRadius: 8,
              }}>
                <challenge.icon className="h-5 w-5" style={{ color: 'rgba(248,113,113,0.85)' }} />
              </div>
              <p className="font-medium leading-snug" style={{ color: 'rgba(193,211,255,0.75)' }}>{challenge.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="pl-6 py-2" style={{ borderLeft: '2px solid rgba(55,114,255,0.35)' }}>
            <p className="text-lg leading-relaxed italic" style={{ color: 'rgba(193,211,255,0.45)' }}>
              Пока данные разрознены — решения принимаются интуитивно. TengriLake меняет это.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2 mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-mono tracking-[0.4em] uppercase" style={{ color: 'rgba(55,114,255,0.4)' }}>
            вот как TengriLake.AI решает это
          </span>
          <motion.div
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom,rgba(55,114,255,0.4),transparent)' }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
