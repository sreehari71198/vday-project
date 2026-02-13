import React from 'react';
import { motion } from 'framer-motion';

interface FloatingDateProps {
  date: string;
}

const FloatingDate: React.FC<FloatingDateProps> = ({ date }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="absolute -top-8 left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mb-2 z-10"
    >
      <span className="px-4 py-1 rounded-full bg-black/40 backdrop-blur-md border border-pink-500/30 text-pink-200 text-sm font-serif tracking-wider shadow-[0_0_10px_rgba(236,72,153,0.3)]">
        {date}
      </span>
    </motion.div>
  );
};

export default FloatingDate;
