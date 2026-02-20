import { motion } from 'framer-motion';

export function HeroTitle() {
  return (
    <div className="mb-8">
      <motion.h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
        <motion.span
          className="text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Национальная
        </motion.span>
        <br />
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          цифровая инфраструктура данных
        </motion.span>
        <br />
        <motion.span
          className="text-white/90"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          для государственного управления
        </motion.span>
      </motion.h1>
    </div>
  );
}
