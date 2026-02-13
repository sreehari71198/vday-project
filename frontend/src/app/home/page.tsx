import RootLayoutShell from "@/components/layout/RootLayoutShell";
import GateGuard from "@/components/layout/GateGuard";
import TileCard from "@/components/ui/TileCard";
import MemoryWall from "@/components/home/MemoryWall";
import { appCopy } from "@/config/copy";
import { homeTiles } from "@/data/homeTiles";

export default function HomePage() {
  return (
    <GateGuard>
      <RootLayoutShell title={appCopy.home.title} subtitle={appCopy.home.subtitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {homeTiles.map((tile) => (
            <TileCard key={tile.title} {...tile} />
          ))}
        </div>
        <MemoryWall />
      </RootLayoutShell>
    </GateGuard>
  );
}
