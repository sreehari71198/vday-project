"use client";

import { ReactNode, useEffect, useRef } from "react";

type ChatContainerProps = {
  children: ReactNode;
};

export default function ChatContainer({ children }: ChatContainerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [children]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="rounded-3xl border border-white/10 bg-[#0b0b10]/80 shadow-2xl">
        <div
          ref={containerRef}
          className="h-[70vh] overflow-y-auto px-6 py-8 space-y-6"
        >
          {children}
        </div>
      </div>
    </div>
  );
}