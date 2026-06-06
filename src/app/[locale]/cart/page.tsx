import { getTranslations } from "next-intl/server";
import CartContents from "./CartContents";

export default async function CartPage() {
  const t = await getTranslations("cart");
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-5xl text-ink mb-12">{t("title")}</h1>
      <CartContents />
    </div>
  );
}
