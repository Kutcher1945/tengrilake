'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarCheck, FileSearch, Mail, Phone } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section id="contact" className="bg-slate-950 py-28 relative overflow-hidden scroll-mt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-slate-950 to-indigo-950/40" />

      {/* Animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-widest mb-6">
            Следующий шаг
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Модернизируйте государственную{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
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
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-300" />
            <Link
              href="/login"
              className="relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-2xl border border-blue-400/30"
            >
              <CalendarCheck className="h-5 w-5" />
              Запланировать консультацию
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.button
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-xl text-lg font-semibold border border-white/25 hover:bg-white/20 hover:border-blue-400/60 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <FileSearch className="h-5 w-5 text-blue-300" />
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
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
          >
            <Mail className="h-4 w-4 text-blue-400" />
            <span className="text-sm">r.barmashyov@almatydc.kz</span>
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <a
            href="tel:+77012270055"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
          >
            <Phone className="h-4 w-4 text-blue-400" />
            <span className="text-sm">+7 701 227 0055</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
