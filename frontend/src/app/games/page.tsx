"use client";

import RootLayoutShell from "@/components/layout/RootLayoutShell";
import GateGuard from "@/components/layout/GateGuard";
import MemoryWall from "@/components/home/MemoryWall";
import { appCopy } from "@/config/copy";
import { gameTiles } from "@/data/games";
import GameTile from "@/components/games/GameTile";

export default function GamesPage() {
  return (
    <GateGuard>
      <RootLayoutShell title={appCopy.games.title} subtitle={appCopy.games.subtitle}>
        <div className="grid gap-6 md:grid-cols-2">
          {gameTiles.map((tile) => (
            <GameTile key={tile.title} {...tile} />
          ))}
        </div>
        <MemoryWall />
      </RootLayoutShell>
    </GateGuard>
  );
}
