"use client";

import { useCartStore, CartItem } from "@/store/cartStore";
import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";

type Props = {
  item: Omit<CartItem, "quantity">;
  label: string;
  outOfStockLabel: string;
  disabled?: boolean;
};

export default function AddToCartButton({ item, label, outOfStockLabel, disabled }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  if (disabled) {
    return (
      <button disabled className="w-full py-4 bg-gray-200 text-gray-400 font-ui text-xs tracking-widest uppercase cursor-not-allowed">
        {outOfStockLabel}
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      className={`w-full py-4 font-ui text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors ${
        added
          ? "bg-green-700 text-white"
          : "bg-void text-parchment hover:bg-tan"
      }`}
    >
      {added ? <Check size={14} /> : <ShoppingBag size={14} />}
      {added ? "Added!" : label}
    </button>
  );
}
