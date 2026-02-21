import { motion } from 'framer-motion';

export function HeroTitle() {
  return (
    <div className="mb-10">
      {/* Tech badge */}
      <motion.div
        className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-cyan-400/35 bg-cyan-400/5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
        <span className="text-cyan-400/80 font-mono text-xs tracking-[0.3em] uppercase">
          AI · GOV · PLATFORM
        </span>
      </motion.div>

      <motion.h1 className="text-5xl md:text-7xl font-black mb-5 leading-tight">
        <motion.span
          className="block text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Национальная
        </motion.span>
        <motion.span
          className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          цифровая инфраструктура
        </motion.span>
        <motion.span
          className="block text-white/75"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          данных
        </motion.span>
      </motion.h1>

      {/* Monospace tech separator */}
      <motion.div
        className="text-xs font-mono text-cyan-400/40 tracking-[0.35em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        ── Tengrilake.AI · Государственное управление ──
      </motion.div>
    </div>
  );
}
