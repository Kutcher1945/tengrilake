'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarCheck, ArrowRight, Mail, Phone } from 'lucide-react';

const DOT = 'radial-gradient(rgba(55,114,255,0.12) 1px,transparent 1px)';

export default function FinalCTASection() {
  return (
    <section id="contact" className="pt-28 pb-14 relative overflow-hidden scroll-mt-16" style={{ background: '#0d1528' }}>
      <div className="absolute inset-0" style={{ backgroundImage: DOT, backgroundSize: '28px 28px', pointerEvents: 'none' }}/>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(55,114,255,0.25),transparent)' }}/>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: 600, height: 300, background: 'rgba(55,114,255,0.06)', filter: 'blur(60px)', pointerEvents: 'none' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] mb-6" style={{ color: '#3772ff' }}>
            Начать работу
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Готовы навести порядок{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right,#3772ff,#93c5fd)' }}>
              в городских данных?
            </span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(193,211,255,0.6)' }}>
            Запросите демо — покажем как работает пайплайн на реальных данных: от задачи до аналитической витрины.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="https://exp.smartalmaty.kz/login"
              className="flex items-center gap-3 text-sm font-bold px-10 py-4 transition-all duration-200"
              style={{
                background: '#3772ff',
                color: '#fff',
                borderRadius: 12,
                boxShadow: '0 4px 30px rgba(55,114,255,0.45)',
              }}
            >
              <CalendarCheck className="h-5 w-5" />
              Запросить демо
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="https://exp.smartalmaty.kz/login"
              className="flex items-center gap-3 text-sm font-bold px-9 py-4 transition-all duration-200"
              style={{
                border: '1.5px solid rgba(55,114,255,0.35)',
                color: 'rgba(193,211,255,0.85)',
                borderRadius: 12,
                background: 'rgba(55,114,255,0.06)',
              }}
            >
              Войти в платформу
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="mailto:r.barmashyov@almatydc.kz"
            className="flex items-center gap-2"
            style={{ color: 'rgba(193,211,255,0.5)' }}
          >
            <Mail className="h-4 w-4" style={{ color: '#3772ff' }} />
            <span className="text-sm">r.barmashyov@almatydc.kz</span>
          </a>
          <span className="hidden sm:block w-px h-4" style={{ background: 'rgba(55,114,255,0.2)' }} />
          <a href="tel:+77012270055"
            className="flex items-center gap-2"
            style={{ color: 'rgba(193,211,255,0.5)' }}
          >
            <Phone className="h-4 w-4" style={{ color: '#3772ff' }} />
            <span className="text-sm">+7 701 227 0055</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
