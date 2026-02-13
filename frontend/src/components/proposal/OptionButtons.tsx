"use client";

import { ProposalOption } from "@/config/proposalFlow";
import MovingNoButton from "@/components/proposal/MovingNoButton";

type OptionButtonsProps = {
  options: ProposalOption[];
  onSelect: (option: ProposalOption) => void;
  disableMoving?: boolean;
};

export default function OptionButtons({
  options,
  onSelect,
  disableMoving,
}: OptionButtonsProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {options.map((option) => {
        const isMoving = option.isMoving && !disableMoving && !option.disableOnTouch;

        if (option.isMoving && !isMoving) {
          return (
            <button
              key={option.label}
              type="button"
              disabled
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white/40"
            >
              {option.label}
            </button>
          );
        }

        return option.isMoving ? (
          <div
            key={option.label}
            className="relative h-20 w-full max-w-[240px]"
          >
            <MovingNoButton
              label={option.label}
              disabled={!isMoving}
            />
          </div>
        ) : (
          <button
            key={option.label}
            type="button"
            onClick={() => onSelect(option)}
            className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:border-pink-200/60 hover:bg-pink-500/20 hover:shadow-pink-500/30"
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}