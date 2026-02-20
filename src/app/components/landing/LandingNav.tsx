'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Проблематика', href: '#problem' },
  { label: 'Решение',      href: '#solution' },
  { label: 'Архитектура',  href: '#architecture' },
  { label: 'Применение',   href: '#use-cases' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Контакты',     href: '#contact' },
];

function scrollTo(href: string) {
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function LandingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-2xl relative overflow-hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-black to-blue-900/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Image
                src="/logo/logo-white-letters.png"
                alt="TengriLake AI"
                width={160}
                height={36}
                className="object-contain"
              />
            </button>
          </motion.div>

          {/* Desktop nav links — center */}
          <motion.div
            className="hidden lg:flex items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-1.5 text-sm font-medium text-white/65 hover:text-white rounded-lg hover:bg-white/8 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </motion.div>

          {/* Desktop CTA buttons */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/login"
              className="text-white/75 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/8 border border-transparent hover:border-white/10"
            >
              Войти
            </Link>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl blur opacity-50 group-hover:opacity-80 transition duration-300" />
              <Link
                href="/login"
                className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg border border-white/20 flex items-center gap-2 transition-all duration-200"
              >
                Запросить брифинг
              </Link>
            </div>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            aria-label="Меню"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-lg border-b border-white/10 z-50"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => { scrollTo(link.href); setMobileOpen(false); }}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/8 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}

              <div className="border-t border-white/10 mt-2 pt-3 flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/8 rounded-xl transition-all duration-200"
                >
                  Войти
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-xl text-sm font-bold"
                >
                  Запросить брифинг
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
