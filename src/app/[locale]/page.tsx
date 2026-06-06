import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/shop/ProductCard";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("home");

  const featured = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });

  return (
    <div>
      <Hero
        headline={t("hero.headline")}
        tagline={t("hero.sub")}
        cta="Shop Now"
        // bgImage="your-cloudinary-url-here"
        // bgVideo="your-video-url-here"
      />

      {/* Featured */}
      {featured.length > 0 && (
        <section className="bg-bg max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="flex items-center gap-8 mb-12">
            <h2 className="font-display text-3xl text-ink whitespace-nowrap">Featured Pieces</h2>
            <div className="flex-1 h-px bg-tan/30" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((p) => (
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

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/shop`}
              className="font-ui text-xs tracking-widest uppercase border border-tan text-tan px-8 py-3 hover:border-ink hover:text-ink transition-colors"
            >
              View All Products
            </Link>
          </div>
        </section>
      )}

      {/* Brand strip */}
      <section className="bg-parchment py-20 text-center px-6 md:px-12">
        <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-tan mb-6">The Kemet Promise</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink mb-6">Every stitch tells a story.</h2>
        <p className="font-serif italic text-tan text-lg max-w-[576px] mx-auto">
          We source the finest full-grain leather and finish each piece by hand — no shortcuts, no compromises.
        </p>
      </section>
    </div>
  );
}
