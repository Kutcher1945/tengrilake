import { motion } from 'framer-motion';

const stats = [
  { number: '7',    label: 'Этапов пайплайна' },
  { number: 'S3+PG+CH', label: 'Хранилищ данных' },
  { number: '100%', label: 'On-premise' },
];

export function StatsSection() {
  return (
    <motion.div
      className="mt-20 flex flex-col md:flex-row justify-center items-stretch max-w-2xl mx-auto"
      style={{
        border: '1.5px solid rgba(55,114,255,0.2)',
        borderRadius: 18,
        background: 'linear-gradient(135deg,rgba(19,29,53,0.8),rgba(27,38,69,0.6))',
        backdropFilter: 'blur(8px)',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex-1 text-center px-8 py-5"
          style={{
            borderRight: index < stats.length - 1 ? '1px solid rgba(55,114,255,0.15)' : undefined,
          }}
        >
          <div className="text-xl font-black mb-1" style={{ color: '#3772ff', letterSpacing: '-0.02em' }}>
            {stat.number}
          </div>
          <div className="text-xs font-medium uppercase tracking-widest" style={{ color: 'rgba(193,211,255,0.45)' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
