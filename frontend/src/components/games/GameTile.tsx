"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type GameTileProps = {
  title: string;
  description: string;
  href: string;
};

export default function GameTile({ title, description, href }: GameTileProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="h-full"
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <Link
        href={href as ComponentProps<typeof Link>["href"]}
        className="glass-card romantic-glow flex h-full flex-col gap-4 rounded-3xl p-6 transition hover:border-white/50 hover:shadow-[0_0_35px_rgba(255,111,180,0.5)]"
      >
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-white/70">{description}</p>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-white/60">
          Enter game
        </span>
      </Link>
    </motion.div>
  );
}