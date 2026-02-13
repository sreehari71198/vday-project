"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";

type PopupFeedbackProps = {
  isOpen: boolean;
  isCorrect: boolean;
  message: string;
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const correctCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: {
    opacity: 1,
    scale: [0.9, 1.05, 1],
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.92, y: -10, transition: { duration: 0.4 } },
};

const wrongCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    x: [0, -8, 8, -6, 6, 0],
    transition: { duration: 0.6 },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

export default function PopupFeedback({
  isOpen,
  isCorrect,
  message,
}: PopupFeedbackProps) {
  const imageSrc = isCorrect
    ? "/images/sherii_utharam.avif"
    : "/images/thett_utharam.avif";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-4"
        >
          <motion.div
            variants={isCorrect ? correctCardVariants : wrongCardVariants}
            className="glass-card romantic-glow w-full max-w-sm rounded-3xl p-6 text-center"
          >
            <img
              src={imageSrc}
              alt={isCorrect ? "Correct" : "Wrong"}
              className="mx-auto h-40 w-40 rounded-2xl object-cover"
            />
            <p className="mt-4 text-lg font-semibold text-white">{message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}