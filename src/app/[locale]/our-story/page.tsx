import { useTranslations } from "next-intl";

export default function OurStoryPage() {
  const t = useTranslations("story");

  return (
    <div>
      {/* Full-width image placeholder */}
      <div className="w-full h-96 bg-gray-100" />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">{t("title")}</h1>

        {/* Story body placeholder */}
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-100 rounded" />
          ))}
        </div>

        {/* Team / founder placeholder */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-3" />
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
