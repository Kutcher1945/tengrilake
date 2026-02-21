'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarCheck, FileSearch, Mail, Phone } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section id="contact" className="bg-slate-950 pt-28 pb-14 relative overflow-hidden scroll-mt-16">
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

      {/* Animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-400/5 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-6">
            Следующий шаг
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Модернизируйте государственную{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              инфраструктуру данных
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Создайте основу для прозрачного, доказательного государственного управления.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Primary CTA */}
          <motion.div
            className="group relative"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute -inset-0.5 bg-cyan-500 opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-300" />
            <Link
              href="/login"
              className="relative flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-200"
            >
              <CalendarCheck className="h-5 w-5" />
              Запланировать консультацию
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.button
            className="flex items-center gap-3 border border-white/20 hover:border-cyan-400/50 text-white/65 hover:text-white px-10 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <FileSearch className="h-5 w-5 text-cyan-400/70" />
            Запросить технический брифинг
          </motion.button>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:r.barmashyov@almatydc.kz"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200"
          >
            <Mail className="h-4 w-4 text-cyan-400" />
            <span className="text-sm">r.barmashyov@almatydc.kz</span>
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <a
            href="tel:+77012270055"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200"
          >
            <Phone className="h-4 w-4 text-cyan-400" />
            <span className="text-sm">+7 701 227 0055</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
