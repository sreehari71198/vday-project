"use client";

import GateGuard from "@/components/layout/GateGuard";
import RootLayoutShell from "@/components/layout/RootLayoutShell";
import AaranLookGame from "@/components/games/AaranLookGame";

export default function AaranLookPage() {
  return (
    <GateGuard>
      <RootLayoutShell title="Aaran Look?" subtitle="Five rounds. One verdict.">
        <AaranLookGame />
      </RootLayoutShell>
    </GateGuard>
  );
}