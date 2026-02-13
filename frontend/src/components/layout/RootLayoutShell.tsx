"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useAppStore } from "@/store/useAppStore";
import { appCopy } from "@/config/copy";
import { AnimatePresence, motion } from "framer-motion";

type RootLayoutShellProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export default function RootLayoutShell({
  title,
  subtitle,
  children,
}: RootLayoutShellProps) {
  const { musicOn, toggleMusic, gatePassed } = useAppStore();
  const homeHref = gatePassed ? "/home" : "/";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="section-padding flex flex-col gap-4 border-b border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link href={homeHref} className="text-xl font-semibold tracking-tight">
              {appCopy.appName}
            </Link>
            {subtitle && (
              <p className="text-sm text-white/60 mt-1 max-w-xl">{subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={homeHref}
              className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/60 transition"
            >
              Home
            </Link>
            <button
              type="button"
              onClick={toggleMusic}
              className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition"
            >
              {musicOn ? "Music On" : "Music Off"}
            </button>
          </div>
        </div>
        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-semibold"
          >
            {title}
          </motion.h1>
        )}
      </header>
      <AnimatePresence mode="wait">
        <motion.main
          key={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="section-padding"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}