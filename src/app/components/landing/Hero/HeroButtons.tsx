import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.05, rotateX: 5 }}
        whileTap={{ scale: 0.98 }}
        className="group relative"
      >
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500"
          animate={{
            background: [
              "linear-gradient(45deg, rgb(37 99 235), rgb(8 145 178))",
              "linear-gradient(135deg, rgb(8 145 178), rgb(37 99 235))",
              "linear-gradient(225deg, rgb(37 99 235), rgb(8 145 178))",
              "linear-gradient(315deg, rgb(8 145 178), rgb(37 99 235))",
              "linear-gradient(45deg, rgb(37 99 235), rgb(8 145 178))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <Link
          href="/login"
          className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-bold flex items-center justify-center shadow-2xl backdrop-blur-sm border border-blue-400/30 group-hover:shadow-blue-500/30 transition-all duration-300"
        >
          Запросить брифинг
          <motion.div
            className="ml-3"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0.0, 0.6, 1] as [number, number, number, number] }}
          >
            <ArrowRight className="h-5 w-5" />
          </motion.div>
        </Link>
      </motion.div>

      <motion.button
        className="group relative bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-xl text-lg font-semibold border border-white/30 hover:bg-white/20 hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 flex items-center gap-3"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <FileText className="h-5 w-5 text-blue-300" />
        <span className="relative z-10">Обзор архитектуры</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </motion.button>
    </div>
  );
}
