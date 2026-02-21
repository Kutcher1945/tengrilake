import { motion } from 'framer-motion';

const stats = [
  { number: '50+', label: 'Интеграций систем' },
  { number: '99.9%', label: 'Надёжность платформы' },
  { number: '3', label: 'Уровня развёртывания' },
];

export function StatsSection() {
  return (
    <motion.div
      className="mt-20 flex flex-col md:flex-row justify-center items-stretch max-w-2xl mx-auto border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex-1 text-center px-8 py-5 hover:bg-white/[0.03] transition-colors duration-200 group"
        >
          <div className="text-2xl font-mono font-bold text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors duration-200">
            {stat.number}
          </div>
          <div className="text-white/35 text-xs font-mono tracking-[0.2em] uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
