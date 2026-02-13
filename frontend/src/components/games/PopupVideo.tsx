"use client";

import { motion } from "framer-motion";

type PopupVideoProps = {
  title: string;
  videoSrc: string;
  onClose: () => void;
};

export default function PopupVideo({ title, videoSrc, onClose }: PopupVideoProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="relative z-10 w-[min(90vw,720px)] rounded-3xl border border-white/20 bg-[#130815]/90 p-6 shadow-[0_0_40px_rgba(255,111,180,0.4)]"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-white/60"
          >
            Close
          </button>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <video
            src={videoSrc}
            autoPlay
            controls
            className="h-full w-full"
          />
        </div>
      </motion.div>
    </div>
  );
}