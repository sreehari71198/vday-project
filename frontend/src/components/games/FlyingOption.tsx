"use client";

import { motion } from "framer-motion";

type FlyingOptionProps = {
  label: string;
  onHover?: () => void;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  variant: "good" | "bad";
};

export default function FlyingOption({
  label,
  onHover,
  onClick,
  disabled,
  selected,
  variant,
}: FlyingOptionProps) {
  const baseClasses =
    "relative flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition";
  const colorClasses =
    variant === "good"
      ? "border border-emerald-300/30 bg-emerald-500/10 text-emerald-100"
      : "border border-rose-300/30 bg-rose-500/10 text-rose-100";

  return (
    <motion.button
      type="button"
      whileHover={variant === "good" ? { scale: 1.05 } : undefined}
      onMouseEnter={variant === "bad" ? onHover : undefined}
      onClick={variant === "good" ? onClick : undefined}
      disabled={disabled}
      className={`${baseClasses} ${colorClasses} ${
        selected ? "shadow-[0_0_20px_rgba(16,185,129,0.6)]" : ""
      } ${disabled ? "opacity-60" : ""}`}
    >
      {label}
      {selected && (
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-6 text-[10px] uppercase tracking-[0.3em] text-emerald-200"
        >
          Selected
        </motion.span>
      )}
    </motion.button>
  );
}