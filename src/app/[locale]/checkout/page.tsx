import { getTranslations } from "next-intl/server";
import CheckoutForm from "./CheckoutForm";

export default async function CheckoutPage() {
  const t = await getTranslations("checkout");
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-5xl text-ink mb-12">{t("title")}</h1>
      <CheckoutForm />
    </div>
  );
}
