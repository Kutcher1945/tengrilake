import { motion } from 'framer-motion';

const stats = [
  { number: "99.9%", label: "Uptime Reliability" },
  { number: "10x", label: "Faster Deployments" },
  { number: "500+", label: "AI Models Supported" }
];

export function StatsSection() {
  return (
    <motion.div
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center group cursor-pointer"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="bg-gray-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 group-hover:border-blue-400/60 group-hover:bg-blue-50/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
            <motion.div
              className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.7 + index * 0.1, type: "spring", stiffness: 200 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-gray-600 text-sm font-medium">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}