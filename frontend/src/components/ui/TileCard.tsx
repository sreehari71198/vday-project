"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type TileCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function TileCard({ title, description, href }: TileCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} className="h-full">
      <Link
        href={href as ComponentProps<typeof Link>["href"]}
        className="glass-card romantic-glow flex h-full flex-col gap-4 rounded-3xl p-6 transition hover:border-white/50"
      >
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-white/70">{description}</p>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">
          Open
        </span>
      </Link>
    </motion.div>
  );
}