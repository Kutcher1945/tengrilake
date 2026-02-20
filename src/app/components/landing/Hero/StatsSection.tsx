import { motion } from 'framer-motion';

const stats = [
  { number: "50+", label: "Интеграций систем" },
  { number: "99.9%", label: "Надёжность платформы" },
  { number: "3", label: "Уровня развёртывания" }
];

export function StatsSection() {
  return (
    <motion.div
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center group cursor-pointer"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 group-hover:border-blue-400/60 group-hover:bg-blue-500/20 transition-all duration-300 shadow-lg">
            <motion.div
              className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, type: "spring", stiffness: 200 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-white/70 text-sm font-medium">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
