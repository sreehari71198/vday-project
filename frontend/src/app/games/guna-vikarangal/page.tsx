"use client";

import GateGuard from "@/components/layout/GateGuard";
import RootLayoutShell from "@/components/layout/RootLayoutShell";
import GunaVikarangalGame from "@/components/games/GunaVikarangalGame";

export default function GunaVikarangalPage() {
  return (
    <GateGuard>
      <RootLayoutShell
        title="Ente guna vikarangal parayuva"
        subtitle="Pick every sweet vibe. Let the chaos fly away."
      >
        <GunaVikarangalGame />
      </RootLayoutShell>
    </GateGuard>
  );
}