"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PopupVideo from "@/components/games/PopupVideo";
import FlyingOption from "@/components/games/FlyingOption";

type Quality = {
  id: string;
  label: string;
  type: "good" | "bad";
};

const qualities: Quality[] = [
  { id: "caring", label: "Caring", type: "good" },
  { id: "romantic", label: "Romantic", type: "good" },
  { id: "loyal", label: "Loyal", type: "good" },
  { id: "funny", label: "Funny", type: "good" },
  { id: "hardworking", label: "Hardworking", type: "good" },
  { id: "only-you", label: "Ninne mathram nokkunna", type: "good" },
  { id: "jada", label: "Jada", type: "bad" },
  { id: "possessive", label: "Over possessive", type: "bad" },
  { id: "vaayadi", label: "Vaayadi", type: "bad" },
  { id: "late-reply", label: "Late reply", type: "bad" },
  { id: "drama", label: "Drama king", type: "bad" },
];

export default function GunaVikarangalGame() {
  const router = useRouter();
  const positiveQualities = useMemo(
    () => qualities.filter((item) => item.type === "good"),
    []
  );
  const [selected, setSelected] = useState<string[]>([]);
  const [flying, setFlying] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelect = (id: string) => {
    if (selected.includes(id)) {
      return;
    }

    const nextSelected = [...selected, id];
    setSelected(nextSelected);

    if (nextSelected.length === positiveQualities.length) {
      setShowPopup(true);
    }
  };

  const handleFlyAway = (id: string) => {
    if (flying.includes(id)) {
      return;
    }
    setFlying((prev) => [...prev, id]);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    router.push("/games");
  };

  return (
    <section className="glass-card rounded-3xl p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ente guna vikarangal parayuva
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Tap the sweet qualities. Hover the not-so-sweet ones to send them away.
          </p>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-white/60">
          {selected.length} / {positiveQualities.length} picked
        </span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {qualities.map((quality) => {
          const isSelected = selected.includes(quality.id);
          const isFlying = flying.includes(quality.id);

          return (
            <AnimatePresence key={quality.id} mode="popLayout">
              {!isFlying && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 180, y: -120, rotate: 25 }}
                  transition={{ duration: 0.35 }}
                >
                  <FlyingOption
                    label={quality.label}
                    variant={quality.type}
                    selected={isSelected}
                    disabled={quality.type === "good" && isSelected}
                    onClick={
                      quality.type === "good"
                        ? () => handleSelect(quality.id)
                        : undefined
                    }
                    onHover={
                      quality.type === "bad"
                        ? () => handleFlyAway(quality.id)
                        : undefined
                    }
                  />
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-white/80">
        {selected.length === positiveQualities.length
          ? "Perfect! You picked every sweet quality."
          : "Collect all the good ones while the drama flies away."}
      </div>

      {showPopup && (
        <PopupVideo
          title="Jayaram is proud"
          videoSrc="/videos/jayaram_proud.mp4"
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
}