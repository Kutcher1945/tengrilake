'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const DOT = 'radial-gradient(rgba(55,114,255,0.1) 1px,transparent 1px)';

export default function LandingFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden" style={{ background: '#060b16' }}>
      <div className="absolute inset-0" style={{ backgroundImage: DOT, backgroundSize: '28px 28px', pointerEvents: 'none' }}/>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(55,114,255,0.3),transparent)' }}/>
      {/* fade to black at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to bottom,transparent,#030609)' }}/>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-10 pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <Image src="/logo/logo.png" alt="TengriLake AI" width={200} height={46} className="object-contain" />
            </div>

            <p className="text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(193,211,255,0.55)' }}>
              Национальная цифровая инфраструктура данных для доказательного государственного управления.
              Безопасно. Масштабируемо. Суверенно.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { href: 'mailto:r.barmashyov@almatydc.kz', Icon: Mail, label: 'r.barmashyov@almatydc.kz' },
                { href: 'tel:+77012270055', Icon: Phone, label: '+7 701 227 0055' },
                { href: '#', Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href}
                  className="group flex items-center gap-3 transition-colors duration-200"
                  style={{ color: 'rgba(193,211,255,0.55)' }}
                >
                  <div className="p-2 transition-colors" style={{
                    background: 'rgba(55,114,255,0.08)',
                    border: '1px solid rgba(55,114,255,0.2)',
                    borderRadius: 8,
                  }}>
                    <Icon className="h-4 w-4" style={{ color: '#3772ff' }} />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Platform links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Платформа</h4>
            <div className="space-y-3">
              {[
                { label: 'Обзор платформы', href: '#' },
                { label: 'Документация архитектуры', href: '#' },
                { label: 'Безопасность и соответствие', href: '#' },
                { label: 'Сценарии применения', href: '#' },
              ].map((link) => (
                <a key={link.label} href={link.href}
                  className="group flex items-center text-sm transition-colors duration-300"
                  style={{ color: 'rgba(193,211,255,0.5)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Контакты</h4>
            <div className="space-y-3">
              {[
                { label: 'Запросить консультацию', href: '/login' },
                { label: 'Технический брифинг', href: '#' },
                { label: 'Политика конфиденциальности', href: '#' },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="group flex items-center text-sm transition-colors duration-300"
                  style={{ color: 'rgba(193,211,255,0.5)' }}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8"
          style={{ borderTop: '1px solid rgba(55,114,255,0.15)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left" style={{ color: 'rgba(193,211,255,0.35)' }}>
              © 2025 Tengrilake.AI. Все права защищены.
            </p>

            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 transition-all duration-200"
              style={{
                background: 'rgba(55,114,255,0.08)',
                border: '1px solid rgba(55,114,255,0.2)',
                color: 'rgba(193,211,255,0.5)',
                borderRadius: 9,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Наверх</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
