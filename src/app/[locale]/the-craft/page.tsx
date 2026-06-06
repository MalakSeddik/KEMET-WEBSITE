import { useTranslations } from "next-intl";

export default function TheCraftPage() {
  const t = useTranslations("craft");

  return (
    <div>
      {/* Hero banner placeholder */}
      <div className="w-full h-64 bg-gray-100" />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">{t("title")}</h1>

        {/* Content sections placeholder */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="mb-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-100 rounded" />
              <div className="h-4 bg-gray-100 rounded" />
              <div className="h-4 bg-gray-100 rounded w-4/5" />
            </div>
            <div className="aspect-video bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
