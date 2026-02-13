"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const rounds = Array.from({ length: 5 }, (_, index) => index + 1);

export default function WhoIsCute() {
  const [round, setRound] = useState(0);

  const handlePick = () => {
    setRound((prev) => Math.min(prev + 1, rounds.length));
  };

  return (
    <section id="who-is-cute" className="glass-card rounded-3xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Who is cute?</h3>
          <p className="text-sm text-white/70">Pick the right one for 5 rounds.</p>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-white/50">
          Round {Math.min(round + 1, rounds.length)} / {rounds.length}
        </span>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <motion.button
          type="button"
          onClick={handlePick}
          className="rounded-3xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-pink-400"
        >
          <div className="h-48 rounded-2xl bg-white/10 flex items-center justify-center">
            <span className="text-xs text-white/70">Your Image</span>
          </div>
          <p className="mt-4 text-sm">Me (always cute!)</p>
        </motion.button>
        <motion.div
          whileHover={{ x: -10 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-4"
        >
          <div className="h-48 rounded-2xl bg-white/10 flex items-center justify-center">
            <span className="text-xs text-white/70">Celebrity Image</span>
          </div>
          <p className="mt-4 text-sm">Celebrity (nope)</p>
        </motion.div>
      </div>

      {round >= rounds.length && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-2xl border border-pink-400/30 bg-pink-500/10 p-4 text-sm"
        >
          Victory! You picked the cutest every time 🎉
        </motion.div>
      )}
    </section>
  );
}