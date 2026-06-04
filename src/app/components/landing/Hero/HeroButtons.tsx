import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
        <Link
          href="https://exp.smartalmaty.kz/login"
          className="flex items-center gap-3 text-sm font-bold px-9 py-3.5 transition-all duration-200"
          style={{
            background: '#3772ff',
            color: '#fff',
            borderRadius: 12,
            boxShadow: '0 4px 30px rgba(55,114,255,0.45)',
          }}
        >
          Запросить брифинг
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>

      <motion.button
        className="flex items-center gap-3 text-sm font-medium px-9 py-3.5 transition-all duration-200"
        style={{
          border: '1.5px solid rgba(55,114,255,0.3)',
          color: 'rgba(193,211,255,0.7)',
          borderRadius: 12,
          background: 'rgba(55,114,255,0.05)',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FileText className="h-4 w-4" style={{ color: 'rgba(55,114,255,0.8)' }} />
        Обзор архитектуры
      </motion.button>
    </div>
  );
}
