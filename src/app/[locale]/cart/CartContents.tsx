"use client";

import { useCartStore } from "@/store/cartStore";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartContents() {
  const t = useTranslations("cart");
  const { items, removeItem, updateQty, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="font-serif italic text-tan text-lg mb-8">{t("empty")}</p>
        <Link href="/shop" className="font-ui text-xs tracking-widest uppercase border border-tan text-tan px-8 py-3 hover:border-ink hover:text-ink transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-12">
      {/* Items */}
      <div className="md:col-span-2 divide-y divide-parchment">
        {items.map((item) => (
          <div key={item.id} className="flex gap-6 py-6">
            <div className="w-28 h-28 bg-parchment shrink-0 overflow-hidden">
              {item.image && <img src={item.image} alt={item.nameEn} className="w-full h-full object-cover" />}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-display text-xl text-ink leading-tight">{item.nameEn}</p>
              <p className="font-ui text-xs text-tan mt-1">EGP {item.price.toLocaleString()} each</p>

              <div className="flex items-center gap-3 mt-4">
                <button onClick={() => updateQty(item.id, item.quantity - 1)} className="w-8 h-8 border border-tan text-tan hover:border-ink hover:text-ink transition-colors flex items-center justify-center">
                  <Minus size={12} />
                </button>
                <span className="font-ui text-sm w-6 text-center">{item.quantity}</span>
                <button onClick={() => updateQty(item.id, item.quantity + 1)} className="w-8 h-8 border border-tan text-tan hover:border-ink hover:text-ink transition-colors flex items-center justify-center">
                  <Plus size={12} />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between shrink-0">
              <p className="font-ui text-sm text-ink font-medium">EGP {(item.price * item.quantity).toLocaleString()}</p>
              <button onClick={() => removeItem(item.id)} className="text-tan hover:text-red-500 transition-colors" aria-label="Remove">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-parchment p-8 h-fit">
        <h2 className="font-ui text-[10px] tracking-widest uppercase text-tan mb-6">Order Summary</h2>

        <div className="flex justify-between font-ui text-sm mb-3">
          <span className="text-tan">{t("subtotal")}</span>
          <span className="text-ink">EGP {totalPrice().toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-ui text-sm mb-6">
          <span className="text-tan">Shipping</span>
          <span className="text-tan text-xs">Calculated at checkout</span>
        </div>

        <div className="border-t border-tan/30 pt-6 flex justify-between font-ui text-sm font-medium mb-6">
          <span className="text-ink">Total</span>
          <span className="text-ink">EGP {totalPrice().toLocaleString()}</span>
        </div>

        <Link href="/checkout" className="block w-full py-4 bg-void text-parchment font-ui text-xs tracking-widest uppercase text-center hover:bg-tan transition-colors">
          {t("checkout")}
        </Link>
        <Link href="/shop" className="mt-3 block w-full py-4 border border-tan text-tan font-ui text-xs tracking-widest uppercase text-center hover:border-ink hover:text-ink transition-colors">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
