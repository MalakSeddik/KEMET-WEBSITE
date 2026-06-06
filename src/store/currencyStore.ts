import { create } from "zustand";
import { persist } from "zustand/middleware";

type Currency = "EGP" | "USD";

const RATE = parseFloat(process.env.NEXT_PUBLIC_USD_RATE ?? "49.5");

type CurrencyStore = {
  currency: Currency;
  toggle:   () => void;
  format:   (egp: number) => string;
};

export const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set, get) => ({
      currency: "EGP",

      toggle() {
        set((s) => ({ currency: s.currency === "EGP" ? "USD" : "EGP" }));
      },

      format(egp: number) {
        if (get().currency === "USD") {
          return `$${(egp / RATE).toFixed(2)}`;
        }
        return `EGP ${egp.toLocaleString("en-EG")}`;
      },
    }),
    { name: "kemet-currency" }
  )
);
