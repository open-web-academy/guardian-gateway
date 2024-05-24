import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useStore = create(
    subscribeWithSelector((set) => ({
      account: undefined,
      setAccount: (value) => set(() => ({ account: value })),
    }))
  );
  