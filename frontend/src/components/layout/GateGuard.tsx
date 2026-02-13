"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/useAppStore";

type GateGuardProps = {
  children: ReactNode;
};

export default function GateGuard({ children }: GateGuardProps) {
  const router = useRouter();
  const { gatePassed } = useAppStore();

  useEffect(() => {
    if (!gatePassed) {
      router.push("/");
    }
  }, [gatePassed, router]);

  if (!gatePassed) {
    return null;
  }

  return <>{children}</>;
}