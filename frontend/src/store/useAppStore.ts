import { create } from "zustand";

type AppState = {
  gatePassed: boolean;
  setGatePassed: (value: boolean) => void;
  musicOn: boolean;
  toggleMusic: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  gatePassed: false,
  setGatePassed: (value) => set({ gatePassed: value }),
  musicOn: false,
  toggleMusic: () => set((state) => ({ musicOn: !state.musicOn })),
}));