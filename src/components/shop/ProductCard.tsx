"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { ShoppingBag, Check, Sparkles } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useCurrencyStore } from "@/store/currencyStore";

export type ProductCardData = {
  id:            string;
  slug:          string;
  nameEn:        string;
  nameAr:        string;
  price:         number;
  images:        string[];
  leatherGrade:  string | null;
  personalizable:boolean;
  category:      { nameEn: string; nameAr: string };
};

export default function ProductCard({
  product,
  locale,
}: {
  product: ProductCardData;
  locale:  string;
}) {
  const [hovered,  setHovered]  = useState(false);
  const [added,    setAdded]    = useState(false);
  const [mounted,  setMounted]  = useState(false);
  const addItem  = useCartStore((s) => s.addItem);
  const { format, currency, toggle } = useCurrencyStore();

  useEffect(() => setMounted(true), []);

  const name     = locale === "ar" ? product.nameAr : product.nameEn;
  const catName  = locale === "ar" ? product.category.nameAr : product.category.nameEn;
  const texture  = product.images[1] ?? null;

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id:     product.id,
      slug:   product.slug,
      nameEn: product.nameEn,
      nameAr: product.nameAr,
      price:  product.price,
      image:  product.images[0] ?? "",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleCurrencyToggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  }

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image ── */}
      <div className="relative aspect-square bg-parchment overflow-hidden mb-4">

        {/* Primary image */}
        {product.images[0] && (
          <img
            src={product.images[0]}
            alt={name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered && texture ? "opacity-0 scale-100" : "opacity-100"
            } ${!texture && hovered ? "scale-105" : "scale-100"}`}
          />
        )}

        {/* Texture / second image on hover */}
        {texture && (
          <img
            src={texture}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        )}

        {/* Subtle dark overlay when no texture */}
        {!texture && (
          <div
            className={`absolute inset-0 bg-void/10 transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* ── Badges (top-left) ── */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.leatherGrade && (
            <span className="font-ui text-[9px] tracking-[0.18em] uppercase bg-void/80 text-gold px-2.5 py-1 backdrop-blur-sm leading-none">
              {product.leatherGrade}
            </span>
          )}
          {product.personalizable && (
            <span className="font-ui text-[9px] tracking-[0.15em] uppercase bg-tan text-void px-2.5 py-1 leading-none flex items-center gap-1">
              <Sparkles size={8} />
              Personalizable
            </span>
          )}
        </div>

        {/* ── Quick-add (slides up on hover) ── */}
        <button
          onClick={handleQuickAdd}
          aria-label="Quick add to cart"
          className={`absolute bottom-0 left-0 right-0 py-3.5 font-ui text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            added
              ? "bg-green-700 text-white translate-y-0 opacity-100"
              : hovered
              ? "bg-void text-parchment translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          {added ? <Check size={12} /> : <ShoppingBag size={12} />}
          {added ? "Added to Cart" : "Quick Add"}
        </button>
      </div>

      {/* ── Info ── */}
      <div className="space-y-1">
        {/* Category */}
        <p className="font-ui text-[9px] tracking-[0.2em] uppercase text-tan">
          {catName}
        </p>

        {/* Name — Cormorant SC via font-display */}
        <h3 className="font-display text-lg leading-snug text-ink group-hover:text-tan transition-colors">
          {name}
        </h3>

        {/* Price + currency toggle */}
        <div className="flex items-center gap-2 pt-0.5">
          <span className="font-ui text-sm text-ink">
            {mounted ? format(product.price) : `EGP ${product.price.toLocaleString()}`}
          </span>
          <button
            onClick={handleCurrencyToggle}
            className="font-ui text-[9px] tracking-widest uppercase text-tan/60 hover:text-gold transition-colors border border-tan/25 px-1.5 py-0.5 leading-none"
          >
            {!mounted || currency === "EGP" ? "→ USD" : "→ EGP"}
          </button>
        </div>
      </div>
    </Link>
  );
}
