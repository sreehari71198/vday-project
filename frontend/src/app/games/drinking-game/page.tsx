"use client";

import GateGuard from "@/components/layout/GateGuard";
import RootLayoutShell from "@/components/layout/RootLayoutShell";
import DrinkingGame from "@/components/games/DrinkingGame";

export default function DrinkingGamePage() {
  return (
    <GateGuard>
      <RootLayoutShell title="Drinking Game – 🥃" subtitle="Spin the wheel. Destiny decides.">
        <DrinkingGame />
      </RootLayoutShell>
    </GateGuard>
  );
}
