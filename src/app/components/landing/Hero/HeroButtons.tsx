import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.05, rotateX: 5 }}
        whileTap={{ scale: 0.98 }}
        className="group relative"
      >
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500"
          animate={{ 
            background: [
              "linear-gradient(45deg, rgb(37 99 235), rgb(147 51 234))",
              "linear-gradient(135deg, rgb(147 51 234), rgb(37 99 235))",
              "linear-gradient(225deg, rgb(37 99 235), rgb(147 51 234))",
              "linear-gradient(315deg, rgb(147 51 234), rgb(37 99 235))",
              "linear-gradient(45deg, rgb(37 99 235), rgb(147 51 234))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <Link
          href="/login"
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold flex items-center justify-center shadow-2xl backdrop-blur-sm border border-blue-200/30 group-hover:shadow-blue-500/30 transition-all duration-300"
        >
          Launch Experience
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
        className="group relative bg-gray-100 backdrop-blur-md text-gray-800 px-10 py-4 rounded-xl text-lg font-semibold border border-gray-300 hover:bg-gray-200 hover:border-blue-300 transition-all duration-300 shadow-xl hover:shadow-blue-100"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Interactive Demo</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-blue-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </motion.button>
    </div>
  );
}