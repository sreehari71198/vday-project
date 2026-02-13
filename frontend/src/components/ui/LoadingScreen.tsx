"use client";

import { motion } from "framer-motion";

type LoadingScreenProps = {
  title: string;
  subtitle: string;
};

export default function LoadingScreen({ title, subtitle }: LoadingScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="glass-card romantic-glow rounded-3xl px-10 py-8 text-center"
      >
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-white/70 mt-2">{subtitle}</p>
      </motion.div>
    </div>
  );
}