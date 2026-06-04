'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Проблема',     href: '#problem' },
  { label: 'Как работает', href: '#solution' },
  { label: 'Стек',         href: '#stack' },
  { label: 'Архитектура',  href: '#architecture' },
  { label: 'Применение',   href: '#use-cases' },
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
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'linear-gradient(135deg,#0d1528,#131d35)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(55,114,255,0.18)',
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* blue glow line on bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right,transparent,rgba(55,114,255,0.4),transparent)',
      }}/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Image
              src="/logo/logo-white-letters.png"
              alt="TengriLake AI"
              width={150} height={34}
              className="object-contain"
            />
          </motion.button>

          {/* Desktop nav */}
          <motion.div
            className="hidden lg:flex items-center gap-1"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-1.5 text-xs font-medium transition-colors duration-200"
                style={{ color: 'rgba(193,211,255,0.55)', borderRadius: 8 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e8eeff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(193,211,255,0.55)')}
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
              href="https://exp.smartalmaty.kz/login"
              className="text-xs font-medium px-4 py-2 transition-colors duration-200"
              style={{ color: 'rgba(193,211,255,0.55)' }}
            >
              Войти
            </Link>

            <Link
              href="https://exp.smartalmaty.kz/login"
              className="relative text-xs font-bold px-5 py-2 transition-all duration-200"
              style={{
                background: '#3772ff',
                color: '#fff',
                borderRadius: 10,
                boxShadow: '0 0 20px rgba(55,114,255,0.35)',
              }}
            >
              Запросить брифинг
            </Link>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            className="lg:hidden p-2 transition-colors"
            style={{ color: 'rgba(193,211,255,0.6)' }}
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
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: '#0d1528',
              borderBottom: '1px solid rgba(55,114,255,0.18)',
              zIndex: 50,
            }}
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
                  className="w-full text-left px-4 py-3 text-xs font-medium transition-all duration-200"
                  style={{ color: 'rgba(193,211,255,0.55)', borderRadius: 8 }}
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-3 flex flex-col gap-2" style={{ borderTop: '1px solid rgba(55,114,255,0.18)' }}>
                <Link
                  href="https://exp.smartalmaty.kz/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-4 py-3 text-xs font-medium transition-all duration-200"
                  style={{ color: 'rgba(193,211,255,0.55)' }}
                >
                  Войти
                </Link>
                <Link
                  href="https://exp.smartalmaty.kz/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-4 py-3 text-xs font-bold"
                  style={{ background: '#3772ff', color: '#fff', borderRadius: 10 }}
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
