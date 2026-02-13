"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import RootLayoutShell from "@/components/layout/RootLayoutShell";
import GradientButton from "@/components/ui/GradientButton";
import { appCopy } from "@/config/copy";
import { questions } from "@/data/questions";
import { useAppStore } from "@/store/useAppStore";
import { useRouter } from "next/navigation";

type AnswersState = Record<string, string>;

export default function GateQuestionsPage() {
  const router = useRouter();
  const { setGatePassed } = useAppStore();
  const [answers, setAnswers] = useState<AnswersState>({});
  const [hasError, setHasError] = useState(false);

  const allAnswered = useMemo(
    () => questions.every((question) => answers[question.id]),
    [answers]
  );

  const handleSubmit = () => {
    const isCorrect = questions.every(
      (question) => answers[question.id] === question.answer
    );
    if (isCorrect) {
      setGatePassed(true);
      router.push("/home");
    } else {
      setHasError(true);
    }
  };

  return (
    <RootLayoutShell title={appCopy.gate.title} subtitle={appCopy.gate.subtitle}>
      <div className="grid gap-6 max-w-3xl">
        {questions.map((question) => (
          <div key={question.id} className="glass-card rounded-3xl p-6">
            <p className="text-lg font-semibold">{question.prompt}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {question.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, [question.id]: option }));
                    setHasError(false);
                  }}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    answers[question.id] === option
                      ? "border-pink-400 bg-white/10"
                      : "border-white/10 hover:border-white/40"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl border border-pink-400/40 p-4 text-sm text-pink-100"
          >
            {appCopy.gate.error}
          </motion.div>
        )}
        <div>
          <GradientButton
            label={appCopy.gate.button}
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={!allAnswered ? "opacity-50 cursor-not-allowed" : ""}
          />
        </div>
      </div>
    </RootLayoutShell>
  );
}