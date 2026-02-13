"use client";

import { motion } from "framer-motion";

type QuestionCardProps = {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
};

export default function QuestionCard({
  question,
  options,
  onSelect,
}: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-3xl p-6 md:p-8"
    >
      <p className="text-xl md:text-2xl font-semibold text-white">
        {question}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <motion.button
            key={option}
            type="button"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onSelect(option)}
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-pink-300/70 hover:bg-white/10"
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}