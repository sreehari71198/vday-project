"use client";

import { motion } from "framer-motion";

type MovingImageProps = {
  src: string;
  alt: string;
  label: string;
  onClick?: () => void;
  onHover?: () => void;
  position: "left" | "right";
  faded?: boolean;
};

export default function MovingImage({
  src,
  alt,
  label,
  onClick,
  onHover,
  position,
  faded,
}: MovingImageProps) {
  return (
    <motion.button
      type="button"
      layout
      onClick={onClick}
      onMouseEnter={onHover}
      className="group flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-rose-400/60"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
        <motion.img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          animate={{ opacity: faded ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
          {position}
        </span>
      </div>
      <p className="text-sm text-white/70 group-hover:text-white">{label}</p>
    </motion.button>
  );
}