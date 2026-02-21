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
      className="sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-white/8 relative overflow-hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Subtle cyan scan line on bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Image
                src="/logo/logo-white-letters.png"
                alt="TengriLake AI"
                width={150}
                height={34}
                className="object-contain"
              />
            </button>
          </motion.div>

          {/* Desktop nav links */}
          <motion.div
            className="hidden lg:flex items-center gap-0"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-1.5 text-xs font-medium text-white/50 hover:text-white uppercase tracking-widest transition-colors duration-200 hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </motion.div>

          {/* Desktop CTAs */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/login"
              className="text-white/50 hover:text-white px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors duration-200"
            >
              Войти
            </Link>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-cyan-500 opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-300" />
              <Link
                href="/login"
                className="relative bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors duration-200"
              >
                Запросить брифинг
              </Link>
            </div>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            aria-label="Меню"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black/98 border-b border-white/10 z-50"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => { scrollTo(link.href); setMobileOpen(false); }}
                  className="w-full text-left px-4 py-3 text-xs font-medium text-white/50 hover:text-white hover:bg-white/5 uppercase tracking-widest transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}

              <div className="border-t border-white/10 mt-2 pt-3 flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-4 py-3 text-xs font-medium text-white/50 hover:text-white hover:bg-white/5 uppercase tracking-widest transition-all duration-200"
                >
                  Войти
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center bg-cyan-500 text-black px-4 py-3 text-xs font-bold uppercase tracking-widest"
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
