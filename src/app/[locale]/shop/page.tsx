import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/shop/ProductCard";

export default async function ShopPage({
  params,
  searchParams,
}: {
  params:       Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale }              = await params;
  const { category: categorySlug } = await searchParams;
  const t                       = await getTranslations("shop");

  const [categories, products] = await Promise.all([
    prisma.category.findMany({ orderBy: { nameEn: "asc" } }),
    prisma.product.findMany({
      where:   categorySlug ? { category: { slug: categorySlug } } : undefined,
      include: { category: true },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h1 className="font-display text-5xl text-ink mb-10">{t("title")}</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        <Link
          href="/shop"
          className={`px-5 py-2 text-xs font-ui tracking-widest uppercase border transition-colors ${
            !categorySlug
              ? "bg-void text-parchment border-void"
              : "border-tan text-tan hover:border-ink hover:text-ink"
          }`}
        >
          {t("filterAll")}
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/shop?category=${cat.slug}`}
            className={`px-5 py-2 text-xs font-ui tracking-widest uppercase border transition-colors ${
              categorySlug === cat.slug
                ? "bg-void text-parchment border-void"
                : "border-tan text-tan hover:border-ink hover:text-ink"
            }`}
          >
            {locale === "ar" ? cat.nameAr : cat.nameEn}
          </Link>
        ))}
      </div>

      {/* Grid */}
      {products.length === 0 ? (
        <div className="text-center py-24 text-tan font-ui text-sm">No products found.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              locale={locale}
              product={{
                id:             p.id,
                slug:           p.slug,
                nameEn:         p.nameEn,
                nameAr:         p.nameAr,
                price:          Number(p.price),
                images:         p.images,
                leatherGrade:   p.leatherGrade,
                personalizable: p.personalizable,
                category:       { nameEn: p.category.nameEn, nameAr: p.category.nameAr },
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
