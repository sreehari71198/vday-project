"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuestionCard from "@/components/QuestionCard";
import PopupFeedback from "@/components/PopupFeedback";
import { questions } from "@/config/questions";
import { useAppStore } from "@/store/useAppStore";

export default function QuestionGate() {
  const router = useRouter();
  const { setGatePassed } = useAppStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isLocked, setIsLocked] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectOption = (option: string) => {
    if (isLocked) return;
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setPopupMessage(
      correct ? currentQuestion.correctMessage : currentQuestion.wrongMessage
    );
    setShowPopup(true);
    setIsLocked(true);
  };

  useEffect(() => {
    if (!showPopup) return;

    const timer = setTimeout(() => {
      setShowPopup(false);
      if (isCorrect) {
        if (currentQuestionIndex === questions.length - 1) {
          setGatePassed(true);
          router.push("/home");
        } else {
          setCurrentQuestionIndex((prev) => prev + 1);
        }
      }
      setIsLocked(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [showPopup, isCorrect, currentQuestionIndex, router, setGatePassed]);

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="relative">
      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        onSelect={handleSelectOption}
      />
      <PopupFeedback
        isOpen={showPopup}
        isCorrect={isCorrect}
        message={popupMessage}
      />
    </div>
  );
}