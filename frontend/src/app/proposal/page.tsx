"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import RootLayoutShell from "@/components/layout/RootLayoutShell";
import GateGuard from "@/components/layout/GateGuard";
import ChatContainer from "@/components/proposal/ChatContainer";
import ChatBubble from "@/components/proposal/ChatBubble";
import OptionButtons from "@/components/proposal/OptionButtons";
import VideoMessage from "@/components/proposal/VideoMessage";
import {
  ProposalMessage,
  ProposalOption,
  ProposalStepId,
  proposalFlow,
} from "@/config/proposalFlow";

type ConversationItem = {
  id: string;
  step: ProposalStepId;
  message: ProposalMessage;
};

const initialStep: ProposalStepId = "step1";

export default function ProposalPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<ProposalStepId>(initialStep);
  const [conversation, setConversation] = useState<ConversationItem[]>(() => {
    const step = proposalFlow.steps[initialStep];
    return step.messages.map((message) => ({
      id: `${step.id}-${message.id}`,
      step: step.id,
      message,
    }));
  });
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [touchDevice, setTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const step = proposalFlow.steps[currentStep];
    if (!step) return;

    setConversation((prev) => {
      const alreadyAdded = prev.some((item) => item.step === currentStep);
      if (alreadyAdded) return prev;
      return [
        ...prev,
        ...step.messages.map((message) => ({
          id: `${step.id}-${message.id}`,
          step: step.id,
          message,
        })),
      ];
    });
  }, [currentStep]);

  useEffect(() => {
    const step = proposalFlow.steps[currentStep];
    const hasVideo = step.messages.some((message) => message.type === "video");
    setVideoPlaying(hasVideo);
  }, [currentStep]);

  const options = useMemo(() => proposalFlow.steps[currentStep].options, [currentStep]);

  const handleSelect = (option: ProposalOption) => {
    if (option.action === "finish") {
      router.push("/home");
      return;
    }
    if (option.nextStep) {
      setCurrentStep(option.nextStep);
    }
  };

  return (
    <GateGuard>
      <RootLayoutShell
        title="Oru Cinematic Proposal"
        subtitle="A dramatic little chat from my heart"
      >
        <ChatContainer>
          <div className="space-y-6">
            {conversation.map((item) => (
              <div key={item.id}>
                {item.message.type === "video" ? (
                  <VideoMessage src={item.message.content} />
                ) : (
                  <ChatBubble
                    content={item.message.content}
                    type={item.message.type}
                    profileImage={proposalFlow.profileImage}
                    alt={item.message.alt}
                    emphasis={item.message.emphasis}
                  />
                )}
              </div>
            ))}
            <div className="relative min-h-[64px]">
              <OptionButtons
                options={options}
                onSelect={handleSelect}
                disableMoving={touchDevice}
              />
              {videoPlaying && (
                <p className="mt-3 text-xs text-white/60">
                  Video playing... catch the vibe ✨
                </p>
              )}
            </div>
          </div>
        </ChatContainer>
      </RootLayoutShell>
    </GateGuard>
  );
}