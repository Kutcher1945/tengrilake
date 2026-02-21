import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      {/* Primary — solid cyan, sharp edges, glow on hover */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="relative group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
        <Link
          href="/login"
          className="relative flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black px-9 py-3.5 text-sm font-bold tracking-[0.15em] uppercase transition-colors duration-200"
        >
          Запросить брифинг
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>

      {/* Secondary — outline only, no fill */}
      <motion.button
        className="flex items-center gap-3 border border-white/20 hover:border-cyan-400/60 text-white/60 hover:text-white/90 px-9 py-3.5 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-200 backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FileText className="h-4 w-4 text-cyan-400/70" />
        Обзор архитектуры
      </motion.button>
    </div>
  );
}
