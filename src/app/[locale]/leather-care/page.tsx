import { useTranslations } from "next-intl";

export default function LeatherCarePage() {
  const t = useTranslations("leatherCare");

  const tips = [
    { icon: "💧", title: "Moisture", body: "Placeholder tip about keeping leather moisturized." },
    { icon: "☀️", title: "Sunlight", body: "Placeholder tip about avoiding direct sunlight." },
    { icon: "🧴", title: "Conditioning", body: "Placeholder tip about leather conditioner." },
    { icon: "🧹", title: "Cleaning", body: "Placeholder tip about proper cleaning methods." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="text-gray-500 mb-12">
        Everything you need to keep your Kemet leather looking its best for generations.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {tips.map((tip) => (
          <div key={tip.title} className="p-6 border border-gray-200 rounded">
            <span className="text-3xl">{tip.icon}</span>
            <h2 className="text-lg font-semibold mt-3 mb-2">{tip.title}</h2>
            <p className="text-gray-500 text-sm">{tip.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
