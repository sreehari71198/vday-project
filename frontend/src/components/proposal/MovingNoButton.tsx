"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type MovingNoButtonProps = {
  label: string;
  disabled?: boolean;
};

type Position = {
  x: number;
  y: number;
};

export default function MovingNoButton({
  label,
  disabled,
}: MovingNoButtonProps) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const reposition = (target: HTMLButtonElement) => {
    if (disabled) return;

    const parent = target.offsetParent as HTMLElement | null;
    if (!parent) return;

    const parentRect = parent.getBoundingClientRect();
    const buttonRect = target.getBoundingClientRect();
    const maxX = Math.max(0, parentRect.width - buttonRect.width - 8);
    const maxY = Math.max(0, parentRect.height - buttonRect.height - 8);
    const nextX = Math.random() * maxX;
    const nextY = Math.random() * maxY;

    setPosition({ x: nextX, y: nextY });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    reposition(event.currentTarget);
  };

  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    reposition(event.currentTarget);
  };

  return (
    <motion.button
      type="button"
      onMouseEnter={handleMouseMove}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 520, damping: 18 }}
      className={`absolute rounded-full border border-pink-300/40 bg-white/10 px-6 py-2 text-sm font-semibold text-pink-100 shadow-lg shadow-pink-500/20 ${
        disabled ? "pointer-events-none opacity-60" : "cursor-pointer"
      }`}
      aria-disabled={disabled}
    >
      {label}
    </motion.button>
  );
}