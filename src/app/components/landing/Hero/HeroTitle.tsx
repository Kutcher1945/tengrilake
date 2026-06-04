import { motion } from 'framer-motion';

export function HeroTitle() {
  return (
    <div className="mb-10">
      <motion.div
        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5"
        style={{
          border: '1px solid rgba(55,114,255,0.4)',
          background: 'rgba(55,114,255,0.08)',
          borderRadius: 20,
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#3772ff' }} />
        <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(55,114,255,0.9)' }}>
          City Data · Platform · Almaty
        </span>
      </motion.div>

      <motion.h1 className="text-5xl md:text-7xl font-black mb-5 leading-tight">
        <motion.span
          className="block text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Городские данные —
        </motion.span>
        <motion.span
          className="block text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(to right,#3772ff,#60a5fa,#3772ff)' }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          под контролем
        </motion.span>
        <motion.span
          className="block"
          style={{ color: 'rgba(232,238,255,0.75)' }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          с первого дня
        </motion.span>
      </motion.h1>

      <motion.div
        className="font-mono text-xs tracking-[0.3em] uppercase"
        style={{ color: 'rgba(55,114,255,0.45)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        ── TengriLake.AI · Управление данными Алматы ──
      </motion.div>
    </div>
  );
}
