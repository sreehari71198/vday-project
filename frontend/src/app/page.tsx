import RootLayoutShell from "@/components/layout/RootLayoutShell";
import QuestionGate from "@/components/QuestionGate";

export default function GatePage() {
  return (
    <RootLayoutShell
      title="2 Factor authentication. he he he!!!"
      subtitle="Ing pore ath Lockaa lockaa"
    >
      <div className="mx-auto max-w-3xl">
        <QuestionGate />
      </div>
    </RootLayoutShell>
  );
}
