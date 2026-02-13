"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import MovingImage from "@/components/games/MovingImage";
import PopupVideo from "@/components/games/PopupVideo";

const celebrities = [
  "/images/celeb1.avif",
  "/images/celeb2.webp",
  "/images/celeb3.webp",
  "/images/celeb4.jpg",
  "/images/celeb5.avif",
];

const totalRounds = celebrities.length;

export default function AaranLookGame() {
  const router = useRouter();
  const [round, setRound] = useState(0);
  const [celebIndex, setCelebIndex] = useState(0);
  const [swap, setSwap] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [fadeCeleb, setFadeCeleb] = useState(false);

  const currentCeleb = celebrities[celebIndex];
  const nextRound = round + 1;

  const imageOrder = useMemo(() => {
    const me = {
      key: "me",
      src: "/images/me.png",
      label: "Me (always the cutest)",
      alt: "Me",
      isMine: true,
      faded: false,
    };
    const celeb = {
      key: "celeb",
      src: currentCeleb,
      label: "Celebrity look",
      alt: "Celebrity",
      isMine: false,
      faded: fadeCeleb,
    };

    return swap ? [celeb, me] : [me, celeb];
  }, [swap, currentCeleb, fadeCeleb]);

  const handlePickMe = () => {
    if (round >= totalRounds) {
      return;
    }

    setFadeCeleb(true);
    window.setTimeout(() => {
      if (nextRound >= totalRounds) {
        setRound(totalRounds);
        setShowPopup(true);
        setFadeCeleb(false);
        return;
      }

      setRound((prev) => prev + 1);
      setCelebIndex((prev) => Math.min(prev + 1, celebrities.length - 1));
      setFadeCeleb(false);
    }, 260);
  };

  const handleHoverCeleb = () => {
    if (round >= totalRounds) {
      return;
    }
    setSwap((prev) => !prev);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    router.push("/games");
  };

  return (
    <section className="glass-card rounded-3xl p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Aaran Look?</h2>
          <p className="mt-2 text-sm text-white/70">
            Click the photo who looks good.
          </p>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-white/60">
          Round {Math.min(nextRound, totalRounds)} / {totalRounds}
        </span>
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-6 md:grid-cols-2"
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        <AnimatePresence mode="popLayout">
          {imageOrder.map((item, index) => (
            <motion.div
              layout
              key={item.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
            >
              <MovingImage
                src={item.src}
                alt={item.alt}
                label={item.label}
                position={index === 0 ? "left" : "right"}
                onClick={item.isMine ? handlePickMe : undefined}
                onHover={item.isMine ? undefined : handleHoverCeleb}
                faded={item.faded}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4 text-sm text-white/80"
      >
        {round >= totalRounds
          ? "Victory! You proved the look every single time."
          : "Tip: Hover the celeb to confuse the layout. Click me to win."}
      </motion.div>

      {showPopup && (
        <PopupVideo
          title="Soundaryam Shapam"
          videoSrc="/videos/soundaryam_shapam.mp4"
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
}