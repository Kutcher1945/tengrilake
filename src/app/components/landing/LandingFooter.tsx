'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function LandingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-blue-900/10" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16">

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
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-block"
              >
                <Image
                  src="/logo/logo-white-letters.png"
                  alt="TengriLake AI"
                  width={220}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
            </div>

            <motion.p
              className="text-white/60 text-base leading-relaxed mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Национальная цифровая инфраструктура данных для доказательного государственного управления.
              Безопасно. Масштабируемо. Суверенно.
            </motion.p>

            {/* Contact details */}
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:r.barmashyov@almatydc.kz"
                className="group flex items-center gap-3 text-white/60 hover:text-blue-400 transition-colors duration-200"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-400/40 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">r.barmashyov@almatydc.kz</span>
              </a>
              <a
                href="tel:+77012270055"
                className="group flex items-center gap-3 text-white/60 hover:text-blue-400 transition-colors duration-200"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-400/40 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">+7 701 227 0055</span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 text-white/60 hover:text-blue-400 transition-colors duration-200"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-400/40 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
            </motion.div>
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
                { label: "Обзор платформы", href: "#" },
                { label: "Документация архитектуры", href: "#" },
                { label: "Безопасность и соответствие", href: "#" },
                { label: "Сценарии применения", href: "#" },
              ].map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center text-white/60 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </motion.div>
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
                { label: "Запросить консультацию", href: "/login" },
                { label: "Технический брифинг", href: "#" },
                { label: "Политика конфиденциальности", href: "#" },
              ].map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center text-white/60 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2025 Tengrilake.AI. Все права защищены.
            </p>

            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 rounded-xl px-4 py-2 text-white/60 hover:text-blue-400 transition-all duration-300"
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
