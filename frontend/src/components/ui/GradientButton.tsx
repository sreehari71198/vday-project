import { ButtonHTMLAttributes } from "react";

type GradientButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export default function GradientButton({ label, ...props }: GradientButtonProps) {
  return (
    <button
      {...props}
      className={`romantic-glow rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] ${props.className ?? ""}`}
    >
      {label}
    </button>
  );
}