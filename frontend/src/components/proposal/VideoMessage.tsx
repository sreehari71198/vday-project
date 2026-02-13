"use client";

import { motion } from "framer-motion";

type VideoMessageProps = {
  src: string;
};

export default function VideoMessage({ src }: VideoMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/15 bg-black/40 p-3 shadow-xl"
    >
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        src={src}
        autoPlay
        controls
        className="w-full rounded-xl"
      />
    </motion.div>
  );
}