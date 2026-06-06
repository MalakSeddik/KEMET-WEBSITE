"use client";

import { useCartStore } from "@/store/cartStore";
import { ShoppingBag } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function CartBadge() {
  const total = useCartStore((s) => s.totalItems());
  const t = useTranslations("nav");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <Link href="/cart" aria-label={t("cart")} className="relative hover:text-gold transition-colors">
      <ShoppingBag size={18} />
      {mounted && total > 0 && (
        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-void text-[9px] font-ui font-medium rounded-full flex items-center justify-center">
          {total > 9 ? "9+" : total}
        </span>
      )}
    </Link>
  );
}
