import Link from "next/link";
import RootLayoutShell from "@/components/layout/RootLayoutShell";
import GradientButton from "@/components/ui/GradientButton";
import { appCopy } from "@/config/copy";

export default function NotFound() {
  return (
    <RootLayoutShell title={appCopy.notFound.title} subtitle={appCopy.notFound.subtitle}>
      <Link href="/" className="inline-block">
        <GradientButton label={appCopy.notFound.button} />
      </Link>
    </RootLayoutShell>
  );
}